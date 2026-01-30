import type { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import { Layout } from "@/src/01_app/layout"
import { FullScreen } from "@/src/06_shared/ui"
import { TEXT } from "@/src/06_shared/constants/text"
import { env_client } from "@/src/06_shared/libs/env/client"

import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

type TProps = Readonly<PropsWithChildren>

export const metadata: Metadata = {
  metadataBase: new URL(env_client.NEXT_PUBLIC_APP_URL),
  title: TEXT.META.GLOBAL.TITLE,
  description: TEXT.META.GLOBAL.DESCRIPTION,
  keywords: [...TEXT.META.GLOBAL.KEYWORDS],
  appleWebApp: {
    title: "Primcard",
  },
  openGraph: {
    title: TEXT.META.GLOBAL.OPEN_GRAPH.TITLE,
    description: TEXT.META.GLOBAL.OPEN_GRAPH.DESCRIPTION,
    siteName: TEXT.META.GLOBAL.OPEN_GRAPH.SITE_NAME,
    type: TEXT.META.GLOBAL.OPEN_GRAPH.TYPE,
    locale: TEXT.META.GLOBAL.OPEN_GRAPH.LOCALE,
    images: [TEXT.META.GLOBAL.OPEN_GRAPH.IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TEXT.META.GLOBAL.TWITTER.TITLE,
    description: TEXT.META.GLOBAL.TWITTER.DESCRIPTION,
    images: [...TEXT.META.GLOBAL.TWITTER.IMAGES],
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
