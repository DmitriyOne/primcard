import { useEffect } from "react"

import { useCookies } from "@/src/06_shared/libs/cookies"
import { isValidCountryCode, findCountryByCode } from "@/src/06_shared/libs/countries"
import { COOKIE_KEYS } from "@/src/06_shared/constants"
import { getAcceptLanguageClient } from "../libs/i18n"
import { getGeoLocation } from "@/src/06_shared/api/requests/get-geo"

export const useGeoLocation = () => {
  const { get, set } = useCookies()

  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        // 1. Check cookie
        const savedCountryCode = get(COOKIE_KEYS.COUNTRY_CODE)

        if (savedCountryCode && isValidCountryCode(savedCountryCode)) {
          const country = findCountryByCode(savedCountryCode)

          if (country) return
        }

        // 2. Fetch geo location
        const geoLocation = await getGeoLocation()

        if (geoLocation?.countryCode && isValidCountryCode(geoLocation.countryCode)) {
          const country = findCountryByCode(geoLocation.countryCode)

          if (country) {
            set(COOKIE_KEYS.COUNTRY_CODE, country.code)
            return
          }
        }

        // 3. Fallback
        const languageCode = getAcceptLanguageClient()
        const languageCountryCode = languageCode?.split("-")[1]?.toUpperCase()

        if (languageCountryCode && isValidCountryCode(languageCountryCode)) {
          const country = findCountryByCode(languageCountryCode)

          if (country) {
            set(COOKIE_KEYS.COUNTRY_CODE, country.code)
          }
        }

      } catch (error) {
        console.error("Failed to detect user location:", error)
      }
    }

    detectUserLocation()
  }, [get, set])

}
