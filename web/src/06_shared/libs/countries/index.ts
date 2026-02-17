import { COUNTRIES_DATA } from "@/src/06_shared/mocks"

export const isValidCountryCode = (code: unknown): code is string => {
  return typeof code === "string" && /^[A-Z]{2}$/.test(code)
}

export const findCountryByCode = (code: string) => {
  const country = COUNTRIES_DATA.find((country) => country.code === code)
  return country || null
}
