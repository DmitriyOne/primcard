
export type TPolicyContent = {
  currentDate: string
  title: string
  descriptions: TDescriptionItem[]
}

type TDescriptionItem = {
  id: string
  title: string | null
  content: TDescriptionContentItem[] | null
}

type TDescriptionContentItem = {
  id: string
  text: string
}
