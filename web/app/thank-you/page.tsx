import type { Metadata } from "next"

import { ThankYouPage } from "@/src/02_pages/thank-you"
import { TEXT } from "@/src/06_shared/constants"

type TSearchParams = {
  order_id: string
}

type TProps = {
  searchParams: Promise<TSearchParams>
}

export const metadata: Metadata = {
  title: TEXT.META.THANK_YOU.TITLE,
  description: TEXT.META.THANK_YOU.DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
}

export default async function ThankYou({ searchParams }: TProps) {
  const { order_id } = await searchParams

  return <ThankYouPage orderId={order_id} />
}
