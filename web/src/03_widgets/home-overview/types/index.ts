import { TIconId } from "@/src/06_shared/types"
import { OVERVIEW_LABEL_TYPES } from "../constants"

type TOverviewLabelType = (typeof OVERVIEW_LABEL_TYPES)[keyof typeof OVERVIEW_LABEL_TYPES]

type TOverviewLabelBase = {
  id: string
  type: TOverviewLabelType
}

type TOverviewLabelOnlyIcon = TOverviewLabelBase & {
  type: "usd" | "mastercard_logo"
  iconId: TIconId
}

export type TOverviewLabelOnlyText = TOverviewLabelBase & {
  type: "exchange" | "payment" | "withdraw"
  title: string
}

type TOverviewLabelWithIconAndText = TOverviewLabelBase & {
  type: "physical_card"
  iconId: TIconId
  title: string
}

export type TOverviewLabel = TOverviewLabelOnlyIcon | TOverviewLabelOnlyText | TOverviewLabelWithIconAndText
