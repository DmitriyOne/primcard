import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies"
import { COOKIE_KEYS_CLIENT } from "../config"

export type TCookieOptions = ResponseCookie

export type TServerCookieOptions = Partial<ResponseCookie>

export type TValidateCookieResult = {
  valid: boolean
  error?: string
}

export type TCookieKeyClient = typeof COOKIE_KEYS_CLIENT[number]
