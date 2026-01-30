import type { ComponentType } from "react"

import { CardBorderGradient, Paragraph, Title } from "@/src/06_shared/ui"
import type { TCapabilitiesCardItem, TCapabilitiesCardType } from "../types"
import { CAPABILITIES_CARD_TYPE } from "../constants"

import { cn } from "@/src/06_shared/libs"

import { CryptoToFiatImage, HighLimitsImage, CashAccessImage, EasyStartImage, PrivacyImage } from "./images"

type TProps = {
  card: TCapabilitiesCardItem
}

const CARD_IMAGES: Record<TCapabilitiesCardType, ComponentType> = {
  [CAPABILITIES_CARD_TYPE.CRYPTO_TO_FIAT]: CryptoToFiatImage,
  [CAPABILITIES_CARD_TYPE.HIGH_LIMITS]: HighLimitsImage,
  [CAPABILITIES_CARD_TYPE.CASH_ACCESS]: CashAccessImage,
  [CAPABILITIES_CARD_TYPE.EASY_TO_START]: EasyStartImage,
  [CAPABILITIES_CARD_TYPE.PRIVACY]: PrivacyImage,
}

export const CapabilityCardItem = ({ card }: TProps) => {

  const CardImageComponent = CARD_IMAGES[card.type]

  return (
    <CardBorderGradient
      className="md:flex-[1_1_320px] relative"
      bodyClassName="pt-8"
    >
      <Title
        as="h6"
        className="mb-3.5 md:mb-4 font-medium"
      >
        {card.title}
      </Title>
      <Paragraph
        className={cn(
          "text-gray-light mb-4 md:mb-6",
          "w-full max-w-full md:max-w-[420px]",
        )}
      >
        {card.description}
      </Paragraph>
      <CardImageComponent />
    </CardBorderGradient>
  )
}
