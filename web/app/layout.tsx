import type { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import { Layout } from "@/src/01_app/layout"
import { FullScreen } from "@/src/06_shared/ui"
import { TEXT } from "@/src/06_shared/constants/text"
import { env_client } from "@/src/06_shared/libs/env/client"

import "./globals.css"
import { isProduction } from "@/src/06_shared/utils"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

type TProps = Readonly<PropsWithChildren>

export const metadata: Metadata = {
  metadataBase: new URL(env_client.NEXT_PUBLIC_APP_URL),
  title: {
    template: "%s | Primcard",
    default: TEXT.META.GLOBAL.TITLE,
  },
  description: TEXT.META.GLOBAL.DESCRIPTION,
  keywords: [...TEXT.META.GLOBAL.KEYWORDS],
  robots: {
    index: isProduction ? true : false,
    follow: isProduction ? true : false,
    ...(isProduction ? {
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    } : {}),
  },
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
