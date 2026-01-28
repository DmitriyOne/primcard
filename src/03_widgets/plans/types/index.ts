import { PLAN_CARD_PRICE_FREQUENCIES, PLAN_CARD_TYPES } from "../constants"

type TPlanCardPriceFrequencyValue = (typeof PLAN_CARD_PRICE_FREQUENCIES)[number]
type TPlanCardType = (typeof PLAN_CARD_TYPES)[number]

type TPlanCardPriceFrequency = {
  value: TPlanCardPriceFrequencyValue
  label: string
}
type TPlanFeature = string[]

type TPlanCardPrice = {
  amount: number
  currency: string
  frequency: TPlanCardPriceFrequency
}

type TPlanCardButton = {
  title: string
  href: string
}

export type TPlanCardItem = {
  id: string
  type: TPlanCardType
  label: string
  title: string
  description: string
  price: TPlanCardPrice
  features: TPlanFeature
  button: TPlanCardButton
}
