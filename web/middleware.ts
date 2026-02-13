import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { paths } from "@/src/06_shared/constants/paths"

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  if (pathname === paths.thank_you) {
    const orderId = searchParams.get("order_id")?.trim()

    if (!orderId) {
      return NextResponse.redirect(new URL(paths.home, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/thank-you",
}
