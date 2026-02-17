import { HeroBackgroundRoot, HeroGradientLayer, HeroStripes } from "@/src/04_features/hero-background/ui"
import { TEXT, type TOrderPlanTextKey } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { CardBorderGradient, Title } from "@/src/06_shared/ui"

type TProps = {
  textKey: TOrderPlanTextKey
}

export const OrderContentLeft = ({ textKey }: TProps) => {
  return (
    <CardBorderGradient
      className="hidden lg:block"
      bodyClassName={cn(
        "justify-end",
        "md:py-10 lg:py-14",
        "md:py-8 lg:px-9",
      )}
    >
      <HeroBackgroundRoot>
        <HeroGradientLayer />
        <HeroStripes count={10} />
      </HeroBackgroundRoot>
      <Title
        as="h1"
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl",
          "font-medium",
          "relative",
        )}
      >
        {TEXT.ORDER[textKey].TITLE}
      </Title>
    </CardBorderGradient>
  )
}
