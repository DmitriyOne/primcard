import { TEXT } from "@/src/06_shared/constants"
import { TOverviewLabel } from "../types"

export const OVERVIEW_LABELS: TOverviewLabel[] = [
  {
    id: "7ebabe15-5826-4f03-8dd6-3ea16056855a",
    type: "mastercard_logo",
    iconId: "mastercardLogo",
  },
  {
    id: "22f4bf56-21af-4518-a357-0b79eef5db20",
    type: "exchange",
    title: TEXT.HOME.OVERVIEW.LABELS[0].TITLE,
  },
  {
    id: "2ad032db-df03-4da0-a59a-82f492bb415f",
    type: "payment",
    title: TEXT.HOME.OVERVIEW.LABELS[1].TITLE,
  },
  {
    id: "8a7ec4cb-f04e-4c5e-bf24-ea26e93b3141",
    type: "withdraw",
    title: TEXT.HOME.OVERVIEW.LABELS[2].TITLE,
  },
  {
    id: "aca56d4b-2238-42c4-8f9e-659f3bd34231",
    type: "physical_card",
    iconId: "physicalCard",
    title: TEXT.HOME.OVERVIEW.LABELS[3].TITLE,
  },
  {
    id: "1bc42fed-97a2-4ca8-8796-1f89d7984b0f",
    type: "usd",
    iconId: "usd",
  },
] as const

export const OVERVIEW_LABEL_TYPES = {
  EXCHANGE: "exchange",
  PAYMENT: "payment",
  WITHDRAW: "withdraw",
  USD: "usd",
  PHYSICAL_CARD: "physical_card",
  MASTERCARD_LOGO: "mastercard_logo",
} as const
