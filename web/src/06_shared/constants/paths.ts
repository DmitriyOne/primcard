import type { TOrderPlanSlug } from "./slugs"

export const paths = {
  home: "/",
  order: (plan: TOrderPlanSlug) => `/order/${plan}`,
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const

export const external_paths = {
  telegram: "https://t.me/senkoner",
} as const
