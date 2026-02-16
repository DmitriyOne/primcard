"use client"

import { useCallback } from "react"
import Cookies from "js-cookie"

import { isProduction, isStage, isValidArray } from "@/src/06_shared/utils"
import { COOKIE_KEYS_CLIENT, COOKIES, DEFAULT_COOKIE_OPTIONS, REMOVE_COOKIE_OPTIONS } from "@/src/06_shared/config/cookies"
import { TCookieKeyClient } from "@/src/06_shared/types/cookies"

import {
  isValidBatchSize,
  isValidCookieName,
  validateClientCookie,
} from "./validation"

import { sanitizeValue } from "./sanitization"

export const useCookies = () => {

  // Getter just one key
  const get = useCallback((key: string): string | undefined => {

    if (!COOKIE_KEYS_CLIENT.includes(key as TCookieKeyClient)) {
      console.error(`[useCookies] Cookie ${key} must be read server-side`)
      return undefined
    }

    if (!isValidCookieName(key)) {
      console.warn(`[useCookies] Invalid cookie name: ${key}`)
      return undefined
    }

    try {
      return Cookies.get(key)
    } catch (error) {
      console.error(`[useCookies] Error reading cookie ${key}:`, error)
      return undefined
    }
  }, [])

  // Getter multiple keys
  const getKeys = useCallback((keys: string[]): Record<string, string | undefined> => {

    keys.forEach(key => {
      if (!COOKIE_KEYS_CLIENT.includes(key as TCookieKeyClient)) {
        console.error(`[useCookies] Cookie ${key} must be read server-side`)
        return
      }
    })

    if (!isValidArray(keys)) {
      console.warn("[useCookies] getKeys: keys must be an array")
      return {}
    }

    if (!isValidBatchSize(keys.length)) {
      throw new Error(
        `[useCookies] Too many cookies requested. Max: ${COOKIES.MAX_BATCH_SIZE}`,
      )
    }

    return keys.reduce((acc, key) => {
      if (!isValidCookieName(key)) {
        console.warn(`[useCookies] Invalid cookie name skipped: ${key}`)
        return acc
      }

      try {
        acc[key] = Cookies.get(key)
      } catch (error) {
        console.error(`[useCookies] Error reading cookie ${key}:`, error)
        acc[key] = undefined
      }

      return acc
    }, {} as Record<string, string | undefined>)
  }, [])

  // Setter just one key
  const set = useCallback(
    (key: string, value: string, options?: Cookies.CookieAttributes): boolean => {

      if (!COOKIE_KEYS_CLIENT.includes(key as TCookieKeyClient)) {
        console.error(`[useCookies] Cookie ${key} must be set server-side`)
        return false
      }

      const validation = validateClientCookie(key, value)
      if (!validation.valid) {
        console.error(`[useCookies] ${validation.error}`)
        return false
      }

      try {
        const sanitizedValue = sanitizeValue(value)

        const safeOptions: Cookies.CookieAttributes = {
          path: DEFAULT_COOKIE_OPTIONS.path,
          expires: new Date(Date.now() + (DEFAULT_COOKIE_OPTIONS.maxAge ?? 0) * 1000),
          ...options,
          secure: isProduction || isStage,
          sameSite: "lax",
        }

        const result = Cookies.set(key, sanitizedValue, safeOptions)
        return result !== undefined
      } catch (error) {
        console.error(`[useCookies] Error setting cookie ${key}:`, error)
        return false
      }
    },
    [],
  )

  // Remove just one key
  const remove = useCallback((key: string): boolean => {
    
    if (!COOKIE_KEYS_CLIENT.includes(key as TCookieKeyClient)) {
      console.error(`[useCookies] Cookie ${key} must be removed server-side`)
      return false
    }

    if (!isValidCookieName(key)) {
      console.warn(`[useCookies] Invalid cookie name for removal: ${key}`)
      return false
    }

    try {
      Cookies.remove(key, REMOVE_COOKIE_OPTIONS)
      return true
    } catch (error) {
      console.error(`[useCookies] Error removing cookie ${key}:`, error)
      return false
    }
  }, [])

  // Remove multiple keys
  const removeKeys = useCallback(
    (keys: string[]): void => {

      keys.forEach(key => {
        if (!COOKIE_KEYS_CLIENT.includes(key as TCookieKeyClient)) {
          console.error(`[useCookies] Cookie ${key} must be removed server-side`)
          return
        }
      })

      if (!isValidArray(keys)) {
        console.warn("[useCookies] removeKeys: keys must be an array")
        return
      }

      if (!isValidBatchSize(keys.length)) {
        throw new Error(
          `[useCookies] Too many cookies to remove. Max: ${COOKIES.MAX_BATCH_SIZE}`,
        )
      }

      keys.forEach(remove)
    },
    [remove],
  )

  return {
    get,
    set,
    remove,
    getKeys,
    removeKeys,
  }
}
