import { CAPABILITIES_CARD_TYPE } from "../constants"

export type TCapabilitiesCardType = (typeof CAPABILITIES_CARD_TYPE)[keyof typeof CAPABILITIES_CARD_TYPE]

export type TCapabilitiesCardItem = {
  id: string
  title: string
  description: string
  type: TCapabilitiesCardType
}
