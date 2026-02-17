import { NextRequest } from "next/server"

export const getAcceptLanguageClient = (): string | null => {
  try {
    const acceptLanguage = navigator.language || Intl.DateTimeFormat().resolvedOptions().locale
    return acceptLanguage || null
  } catch {
    return null
  }
}

export const getAcceptLanguageServer = (request: NextRequest): string | null => {
  const acceptLanguage = request.headers.get("accept-language")
  return acceptLanguage || null
}
