import type { TOrderPlanSlug } from "./slugs"

export const paths = {
  home: "/",
  order: (plan: TOrderPlanSlug) => `/order/${plan}`,
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  thank_you: "/thank-you",
  thank_you_with_order_id: (orderId: string) => `/thank-you?order_id=${orderId}`,
} as const

export const external_paths = {
  telegram: "https://t.me/senkoner",
} as const
