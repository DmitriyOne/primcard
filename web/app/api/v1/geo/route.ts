import { API_GEO_ROUTES } from "@/src/06_shared/api/routes"
import { HEADERS } from "@/src/06_shared/constants/headers"
import { HTTP_METHODS } from "next/dist/server/web/http"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = await fetch(API_GEO_ROUTES.GET_GEO_THIRD_PARTY, {
      method: HTTP_METHODS[0],
      headers: {
        ...HEADERS.APPLICATION_JSON,
      },
    })

    if (!res.ok) throw new Error("Failed to fetch IP data + " + res.statusText)

    const data = await res.json()

    return NextResponse.json(data)
  } catch (err) {
    // TODO: use sentry or other error tracking service
    console.error(err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
