import { paths, TEXT } from "@/src/06_shared/constants"
import type { TPlanCardItem } from "../types"

export const PLAN_CARDS: TPlanCardItem[] = [
  {
    id: "06817b33-2dab-4833-a334-1f15838da977",
    type: "pre-order",
    label: TEXT.HOME.PLANS.CARDS[0].LABEL,
    title: TEXT.HOME.PLANS.CARDS[0].TITLE,
    description: TEXT.HOME.PLANS.CARDS[0].DESCRIPTION,
    price: {
      amount: TEXT.HOME.PLANS.CARDS[0].PRICE.AMOUNT,
      currency: TEXT.HOME.PLANS.CARDS[0].PRICE.CURRENCY,
      frequency: {
        value: "one-time",
        label: TEXT.HOME.PLANS.CARDS[0].PRICE.FREQUENCY,
      },
    },
    features: TEXT.HOME.PLANS.CARDS[0].FEATURES.map((feature) => feature),
    button: {
      title: TEXT.HOME.PLANS.CARDS[0].BUTTON,
      href: paths.order("pre"),
    },
  },
  {
    id: "5113081a-148e-4f1f-ace5-19e052af1900",
    type: "standard",
    label: TEXT.HOME.PLANS.CARDS[1].LABEL,
    title: TEXT.HOME.PLANS.CARDS[1].TITLE,
    description: TEXT.HOME.PLANS.CARDS[1].DESCRIPTION,
    price: {
      amount: TEXT.HOME.PLANS.CARDS[1].PRICE.AMOUNT,
      currency: TEXT.HOME.PLANS.CARDS[1].PRICE.CURRENCY,
      frequency: {
        value: "one-time",
        label: TEXT.HOME.PLANS.CARDS[1].PRICE.FREQUENCY,
      },
    },
    features: TEXT.HOME.PLANS.CARDS[1].FEATURES.map((feature) => feature),
    button: {
      title: TEXT.HOME.PLANS.CARDS[1].BUTTON,
      href: paths.order("standard"),
      disabled: true,
    },
  },
]

export const PLAN_CARD_PRICE_FREQUENCIES = [
  "one-time",
  "monthly",
  "yearly",
] as const

export const PLAN_CARD_TYPES = [
  "pre-order",
  "standard",
] as const
