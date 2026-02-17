
export const sanitizeValue = (value: string): string => {
  return value
    .replace(/[<>'"]/g, "")
    .trim()
}

export const encodeCookieValue = (value: string): string => {
  return encodeURIComponent(value)
}

export const decodeCookieValue = (value: string): string => {
  try {
    return decodeURIComponent(value)
  } catch (error) {
    console.warn("Failed to decode cookie value:", error)
    return value
  }
}
