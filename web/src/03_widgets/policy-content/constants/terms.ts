import { TEXT } from "@/src/06_shared/constants"
import type { TPolicyContent } from "../types"

const DESCRIPTIONS_ITEMS: TPolicyContent["descriptions"] = TEXT.TERMS.DESCRIPTIONS.map((item, index) => ({
  id: `terms-description-${index}`,
  title: item.TITLE,
  content: item.CONTENT.map((content, contentIndex) => ({
    id: `terms-description-content-${index}-${contentIndex}`,
    text: content,
  })),
}))

export const TERMS_CONTENT: TPolicyContent = {
  currentDate: TEXT.TERMS.CURRENT_DATE,
  title: TEXT.TERMS.TITLE,
  descriptions: DESCRIPTIONS_ITEMS,
}
