import { TEXT } from "@/src/06_shared/constants"
import type { TPolicyContent } from "../types"

const DESCRIPTIONS_ITEMS: TPolicyContent["descriptions"] = TEXT.COOKIES.DESCRIPTIONS.map((item, index) => ({
  id: `cookies-description-${index}`,
  title: item.TITLE,
  content: item.CONTENT.map((content, contentIndex) => ({
    id: `cookies-description-content-${index}-${contentIndex}`,
    text: content,
  })),
}))

export const COOKIES_CONTENT: TPolicyContent = {
  currentDate: TEXT.COOKIES.CURRENT_DATE,
  title: TEXT.COOKIES.TITLE,
  descriptions: DESCRIPTIONS_ITEMS,
}
