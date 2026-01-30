import { TEXT } from "@/src/06_shared/constants"
import { TUsageCardItem } from "../types"

export const CARDS: TUsageCardItem[] = [
  {
    id: "13ec97ff-2150-4789-bffb-ac1df89b4e8d",
    iconId: "clockSolid",
    title: TEXT.HOME.USAGE.CARDS[0].TITLE,
    description: TEXT.HOME.USAGE.CARDS[0].DESCRIPTION,
  },
  {
    id: "5caf6ae0-a273-433c-95ad-5aac01f3190e",
    iconId: "bitcoinWalletSolid",
    title: TEXT.HOME.USAGE.CARDS[1].TITLE,
    description: TEXT.HOME.USAGE.CARDS[1].DESCRIPTION,
  },
  {
    id: "465338e1-7b78-4534-99a8-c9d0eaac3379",
    iconId: "roundaboutSolid",
    title: TEXT.HOME.USAGE.CARDS[2].TITLE,
    description: TEXT.HOME.USAGE.CARDS[2].DESCRIPTION,
  },
]
