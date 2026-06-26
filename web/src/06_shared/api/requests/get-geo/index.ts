import { API_GEO_ROUTES } from "@/src/06_shared/api/routes"
import { HTTP_METHODS } from "next/dist/server/web/http"
import { HEADERS } from "@/src/06_shared/constants/headers"
import { TApiGeoLocationResponse } from "@/src/06_shared/api/types"

export const getGeoLocation = async (): Promise<TApiGeoLocationResponse | null> => {
  try {
    const response = await fetch(API_GEO_ROUTES.GET_GEO_APP, {
      method: HTTP_METHODS[0],
      headers: {
        ...HEADERS.APPLICATION_JSON,
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json() as TApiGeoLocationResponse

    return data
  } catch (error) {
    // TODO: use sentry or other error tracking service
    console.error(error)
    return null
  }
}
