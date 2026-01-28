import { CardBorderGradient, Paragraph, Title } from "@/src/06_shared/ui"
import type { TPlanCardItem } from "../../types"
import { cn } from "@/src/06_shared/lib"
import { Label } from "@/src/05_entities/label/ui"
import { PlanImages } from "./images"
import { PlanPrice } from "./price"
import { PlanFeatures } from "./features"
import { PlanButton } from "./button"

type TProps = {
  item: TPlanCardItem
}

export const CardItem = ({ item }: TProps) => {

  const isDisabled = item.type === "standard"

  const cardClassName = cn(
    "flex-1",
    isDisabled && "p-0 bg-transparent opacity-70",
  )

  return (
    <CardBorderGradient
      className={cardClassName}
      bodyClassName="py-6 text-left"
    >
      <Label
        text={item.label}
        className="bg-primary-dark px-2.5 py-1 mb-5"
        titleClassName="text-primary text-xs md:text-xs font-semibold uppercase"
      />
      <Title
        as='h4'
        className="text-3xl font-medium mb-3"
      >
        {item.title}
      </Title>
      <Paragraph
        className="text-gray-light mb-6 md:mb-7"
      >
        {item.description}
      </Paragraph>

      <PlanImages type={item.type} />

      <PlanPrice price={item.price} />

      <PlanFeatures
        features={item.features}
        isDisabled={isDisabled}
      />

      <PlanButton
        item={item.button}
        isDisabled={isDisabled}
      />

    </CardBorderGradient>
  )
}
