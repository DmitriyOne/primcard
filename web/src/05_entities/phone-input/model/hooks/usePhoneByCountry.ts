import { useCallback, useMemo, useState } from "react"

import { COUNTRIES_DATA } from "@/src/06_shared/mocks"

import { useCookies } from "@/src/06_shared/libs/cookies"
import { COOKIE_KEYS } from "@/src/06_shared/constants"
import { getAcceptLanguageClient } from "@/src/06_shared/libs"

import type { TSelectOption } from "@/src/06_shared/types"
import type { TPhone } from "../types"

const COUNTRY_OPTIONS = COUNTRIES_DATA.map((c) => ({
  value: c.code,
  label: `${c.flag} ${c.name} (+${c.dial})`,
}))

export const usePhoneByCountry = () => {
  const { get, set } = useCookies()

  const [selectedCountry, setSelectedCountry] = useState<TPhone | null>(() => {
    let countryCode = get(COOKIE_KEYS.COUNTRY_CODE)

    if (!countryCode) {
      const acceptLanguage = getAcceptLanguageClient()
      countryCode = acceptLanguage?.split("-")[1]?.toUpperCase()
    }

    return COUNTRIES_DATA.find((c) => c.code === countryCode) ?? null
  })

  const selectedOption = useMemo<TSelectOption | null>(() => {
    if (!selectedCountry) return null

    return {
      value: selectedCountry.code,
      label: selectedCountry.flag,
    }
  }, [selectedCountry])

  const handleSetCountry = useCallback((countryCode: string) => {
    set(COOKIE_KEYS.COUNTRY_CODE, countryCode)

    const country = COUNTRIES_DATA.find((c) => c.code === countryCode)
    if (!country) return

    setSelectedCountry(country)
  }, [set])

  return {
    selectedCountry,
    selectedOption,
    options: COUNTRY_OPTIONS,
    handleSetCountry,
  }
}
