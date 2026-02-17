"use server"

import { cookies } from "next/headers"

import { TCookieOptions } from "@/src/06_shared/types/cookies"
import { COOKIES, DEFAULT_COOKIE_OPTIONS, REMOVE_COOKIE_OPTIONS } from "@/src/06_shared/config/cookies"
import { isProduction, isStage } from "@/src/06_shared/utils"

import {
  isValidBatchSize,
  isValidCookieName,
  validateServerCookie,
} from "./validation"
import {
  decodeCookieValue,
  encodeCookieValue,
} from "./sanitization"

export const serverCookies = async () => {
  const store = await cookies()

  const hasCookie = (key: string): boolean => {
    if (!isValidCookieName(key)) return false
    return store.has(key)
  }

  const getCookie = (key: string): string | undefined => {
    if (!isValidCookieName(key)) {
      console.warn(`[serverCookies] Invalid cookie name: ${key}`)
      return undefined
    }

    const value = store.get(key)?.value
    return value ? decodeCookieValue(value) : undefined
  }

  const getCookies = (keys: string[]): Record<string, string | undefined> => {

    if (!isValidBatchSize(keys.length)) {
      throw new Error(
        `[serverCookies] Too many cookies requested. Max: ${COOKIES.MAX_BATCH_SIZE}`,
      )
    }

    return keys.reduce((acc, key) => {
      if (!isValidCookieName(key)) {
        console.warn(`[serverCookies] Invalid cookie name skipped: ${key}`)
        return acc
      }

      const value = store.get(key)?.value
      acc[key] = value ? decodeCookieValue(value) : undefined
      return acc
    }, {} as Record<string, string | undefined>)
  }

  const setCookie = (
    key: string,
    value: string,
    options?: TCookieOptions,
  ): void => {

    const validation = validateServerCookie(key, value)
    if (!validation.valid) {
      throw new Error(`[serverCookies] ${validation.error}`)
    }

    const valueEncoded = encodeCookieValue(value)

    const safeOptions = {
      ...DEFAULT_COOKIE_OPTIONS,
      ...options,
      sameSite: DEFAULT_COOKIE_OPTIONS.sameSite,
      httpOnly: DEFAULT_COOKIE_OPTIONS.httpOnly,
      secure: isProduction || isStage,
    }

    store.set(key, valueEncoded, safeOptions)
  }

  const removeOne = (key: string) => {
    if (!isValidCookieName(key)) {
      console.warn(`[serverCookies] Invalid cookie name for removal: ${key}`)
      return
    }

    store.set({
      name: key,
      ...REMOVE_COOKIE_OPTIONS,
    })
  }

  const removeCookie = (key: string): void => removeOne(key)

  const removeCookies = (keys: string[]): void => {

    if (!isValidBatchSize(keys.length)) {
      throw new Error(
        `[serverCookies] Too many cookies to remove. Max: ${COOKIES.MAX_BATCH_SIZE}`,
      )
    }

    keys.forEach(removeOne)
  }

  return {
    getCookie,
    getCookies,
    setCookie,
    removeCookie,
    removeCookies,
    hasCookie,
  }
}
