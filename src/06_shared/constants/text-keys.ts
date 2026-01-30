import type { TOrderPlanSlug } from "./slugs"

export const ORDER_PLAN_TEXT_KEYS = {
  "pre": "PRE_ORDER",
  "standard": "STANDARD",
} as const satisfies Record<TOrderPlanSlug, string>

export type TOrderPlanTextKey = (typeof ORDER_PLAN_TEXT_KEYS)[TOrderPlanSlug]
