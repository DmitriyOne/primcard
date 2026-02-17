import { COOKIES } from "@/src/06_shared/config/cookies"
import { TValidateCookieResult } from "@/src/06_shared/types/cookies"

export const isValidCookieName = (name: string): boolean => {
  if (!name || typeof name !== "string") return false
  
  if (name.length > COOKIES.MAX_COOKIE_NAME_LENGTH) return false

  const invalidChars = /[;,\s=()]/
  return !invalidChars.test(name)
}

export const isValidCookieValue = (value: string): boolean => {
  if (typeof value !== "string") return false

  if (!value) return true

  const encoded = encodeURIComponent(value)

  return encoded.length <= COOKIES.MAX_COOKIE_SIZE
}

export const isValidBatchSize = (size: number): boolean => {
  return size > 0 && size <= COOKIES.MAX_BATCH_SIZE
}

export const hasXSSPatterns = (value: string): boolean => {
  const xssPatterns = /<script|javascript:|onerror=|onload=|<iframe/i
  return xssPatterns.test(value)
}

export const validateClientCookie = (
  key: string,
  value: string,
): TValidateCookieResult => {
  if (!isValidCookieName(key)) {
    return { valid: false, error: `Invalid cookie name: ${key}` }
  }

  if (!isValidCookieValue(value)) {
    return { valid: false, error: `Cookie value too large or invalid for key: ${key}` }
  }

  if (hasXSSPatterns(value)) {
    return { valid: false, error: `Potential XSS pattern detected in value for key: ${key}` }
  }

  return { valid: true }
}

export const validateServerCookie = (
  key: string,
  value: string,
): TValidateCookieResult => {
  if (!isValidCookieName(key)) {
    return { valid: false, error: `Invalid cookie name: ${key}` }
  }

  if (!isValidCookieValue(value)) {
    return { valid: false, error: `Cookie value too large or invalid for key: ${key}` }
  }

  return { valid: true }
}
