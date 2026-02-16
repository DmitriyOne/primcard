import { COOKIE_KEYS } from "../constants"
import { TServerCookieOptions } from "../types/cookies"

export const COOKIES = {
  MAX_COOKIE_SIZE: 4096,
  MAX_COOKIE_NAME_LENGTH: 256,
  MAX_BATCH_SIZE: 50,
} as const

export const COOKIE_KEYS_CLIENT = [
  COOKIE_KEYS.COUNTRY_CODE,
  COOKIE_KEYS.THEME,
  COOKIE_KEYS.LANGUAGE,
  COOKIE_KEYS.CONSENT,
] as const

export const REMOVE_COOKIE_OPTIONS = {
  value: "",
  maxAge: 0,
  expires: new Date(0),
}

export const DEFAULT_COOKIE_OPTIONS: TServerCookieOptions = {
  maxAge: 60 * 60 * 24 * 7, // 7 days
  path: "/",
  sameSite: "lax",
  httpOnly: true,
  secure: true,
}
