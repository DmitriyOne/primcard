import type { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import { Layout } from "@/src/01_app/layout"
import { FullScreen } from "@/src/06_shared/ui"
import { TEXT } from "@/src/06_shared/constants/text"

import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

type TProps = Readonly<PropsWithChildren>

export const metadata: Metadata = {
  title: TEXT.META.GLOBAL.TITLE,
  description: TEXT.META.GLOBAL.DESCRIPTION,
  keywords: [...TEXT.META.GLOBAL.KEYWORDS],
  appleWebApp: {
    title: "Primcard",
  },
}

export default function RootLayout({ children }: TProps) {
  return (
    <html lang='en'>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <FullScreen>
          <Layout>
            {children}
          </Layout>
        </FullScreen>
      </body>
    </html>
  )
}
