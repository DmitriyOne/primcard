import type { Metadata } from "next"

import { HomePage } from "@/src/02_pages/home"
import { TEXT } from "@/src/06_shared/constants/text"
import { paths } from "@/src/06_shared/constants"

export const metadata: Metadata = {
  title: TEXT.META.HOME.TITLE,
  description: TEXT.META.HOME.DESCRIPTION,
  openGraph: {
    title: TEXT.META.HOME.OPEN_GRAPH.TITLE,
    description: TEXT.META.HOME.OPEN_GRAPH.DESCRIPTION,
    siteName: TEXT.META.HOME.OPEN_GRAPH.SITE_NAME,
    type: TEXT.META.HOME.OPEN_GRAPH.TYPE,
    locale: TEXT.META.HOME.OPEN_GRAPH.LOCALE,
    images: [TEXT.META.HOME.OPEN_GRAPH.IMAGE],

  },
  twitter: {
    card: "summary_large_image",
    title: TEXT.META.HOME.TWITTER.TITLE,
    description: TEXT.META.HOME.TWITTER.DESCRIPTION,
    images: [...TEXT.META.HOME.TWITTER.IMAGES],
  },
  alternates: {
    canonical: paths.home,
  },
}

export default function Home() {
  return (
    <HomePage />
  )
}
