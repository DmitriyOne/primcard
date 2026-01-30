import { TEXT } from "@/src/06_shared/constants"

export const FAQ_CONTENT = {
  TITLE: TEXT.HOME.FAQ.TITLE,
  QUESTIONS: TEXT.HOME.FAQ.QUESTIONS.map((item) => ({
    title: item.TITLE,
    content: item.CONTENT,
  })),
}
