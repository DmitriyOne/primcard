import { TEXT } from "@/src/06_shared/constants"
import { TPhilosophyTags } from "../types"

const title = TEXT.HOME.PHILOSOPHY.TITLE
const gradientText = "No virtual gimmicks. No unnecessary features."

export const PHILOSOPHY_TITLE_PARTS = {
  before: title.split(gradientText)[0],
  gradient: gradientText,
  after: title.split(gradientText)[1],
} as const

export const PHILOSOPHY_GRADIENT =
  "bg-[linear-gradient(to_right,#FF7714_0%,#FF7714_18%,#FFD900_28%,#FFD900_38%,#FF7714_48%,#DC2626_62%,#DC2626_100%)]"

export const PHILOSOPHY_TAGS: TPhilosophyTags[] = [
  {
    id: "83dc470f-c290-4ff5-a89f-4689075d6259",
    label: TEXT.HOME.PHILOSOPHY.TAGS[0].LABEL,
    iconId: "creditCardSolid",
  },
  {
    id: "64873ccc-4988-408e-a48f-bd37a11673ad",
    label: TEXT.HOME.PHILOSOPHY.TAGS[1].LABEL,
    iconId: "walletSolid",
  },
  {
    id: "be830f9d-01dc-4b11-b22a-9d65da570b12",
    label: TEXT.HOME.PHILOSOPHY.TAGS[2].LABEL,
    iconId: "creditCardArrowSolid",
  },
  {
    id: "19c9f976-601d-4897-af2d-c272b229683b",
    label: TEXT.HOME.PHILOSOPHY.TAGS[3].LABEL,
    iconId: "globeSolid",
  },
  {
    id: "27f391ac-4bf1-41ce-bf0a-0e7c1c643069",
    label: TEXT.HOME.PHILOSOPHY.TAGS[4].LABEL,
    iconId: "barLineChartSolid",
  },
]
