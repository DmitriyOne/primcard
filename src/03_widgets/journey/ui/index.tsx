import { TEXT } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"
import { Container, Section, Title } from "@/src/06_shared/ui"

import { JourneyCoins } from "./coins"
import { JourneyImage } from "./image"
import { JourneyLineStepsDesktop } from "./line-steps"
import { JourneyTextSteps } from "./text-steps"

export const Journey = () => {
  return (
    <Section className="px-6 py-16 lg:py-24">
      <Container
        className={cn(
          "max-w-4xl xl:max-w-7xl",
          "text-center",
          "pb-0 lg:pb-18 xl:pb-36",
          "relative",
        )}>
        <Title
          as='h3'
          className="px-8 mb-8 lg:mb-18"
        >
          {TEXT.HOME.JOURNEY.TITLE}
        </Title>
        <div
          className={cn(
            "w-full",
            "flex lg:block flex-col-reverse",
          )}
        >
          <Container
            className={cn(
              "relative",
              "max-w-68 md:max-w-[450px] xl:max-w-[610px]",
              "pb-0 lg:pb-18 xl:pb-14",
              "flex justify-center items-center",
            )}
          >
            <JourneyImage />
            <JourneyCoins />
            <JourneyLineStepsDesktop />
          </Container>
          <JourneyTextSteps />
        </div>
      </Container>
    </Section>
  )
}
