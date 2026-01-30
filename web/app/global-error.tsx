"use client"

import { Plus_Jakarta_Sans } from "next/font/google"

import { FullScreen } from "@/src/06_shared/ui"
import { Layout } from "@/src/01_app/layout"
import { GlobalErrorPage } from "@/src/02_pages/global-error"

import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

type TProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: TProps) {

  return (
    <html lang='en'>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <FullScreen>
          <Layout>
            <GlobalErrorPage
              error={error}
              reset={reset}
            />
          </Layout>
        </FullScreen>
      </body>
    </html>
  )
}
