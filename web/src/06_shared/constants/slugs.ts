export const ORDER_PLAN_SLUGS = ["pre", "standard"] as const

export type TOrderPlanSlug = (typeof ORDER_PLAN_SLUGS)[number]
