import { TEXT } from "@/src/06_shared/constants"
import type { TPolicyContent } from "../types"

const DESCRIPTIONS_ITEMS: TPolicyContent["descriptions"] = TEXT.PRIVACY.DESCRIPTIONS.map((item, index) => ({
  id: `privacy-description-${index}`,
  title: item.TITLE,
  content: item.CONTENT.map((content, contentIndex) => ({
    id: `privacy-description-content-${index}-${contentIndex}`,
    text: content,
  })),
}))

export const PRIVACY_CONTENT: TPolicyContent = {
  currentDate: TEXT.PRIVACY.CURRENT_DATE,
  title: TEXT.PRIVACY.TITLE,
  descriptions: DESCRIPTIONS_ITEMS,
}
