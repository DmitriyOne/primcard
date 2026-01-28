import type { Metadata } from "next"

import { TEXT } from "@/src/06_shared/constants"

import { NotFoundPage } from "@/src/02_pages/not-found"

export const metadata: Metadata = {
  title: TEXT.META.GLOBAL.TITLE + " - " + TEXT.META.NOT_FOUND.TITLE,
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return <NotFoundPage />
}
