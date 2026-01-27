import { Paragraph, Title } from "@/src/06_shared/ui"
import { JOURNEY_ACTIVE_STEPS, JOURNEY_STEP_KEYS, TEXT_JOURNEY_TEXT_STEPS } from "../constant"
import { cn } from "@/src/06_shared/lib"
import { JourneyLineStepsMobile } from "./line-steps"

export const JourneyTextSteps = () => {
  return (
    <div
      className={cn(
        "max-lg:relative",
        "w-full",
        "max-w-[310px] lg:max-w-full",
        "mx-auto",
      )}
    >
      <JourneyLineStepsMobile />
      {TEXT_JOURNEY_TEXT_STEPS.map((item) => (
        <div
          key={item.id}
          className={cn(
            "relative lg:absolute",
            "w-full lg:max-w-[215px] xl:max-w-[285px]",
            "opacity-60",
            "pl-7 lg:pl-0",
            "pb-12 lg:pb-0",
            `text-left lg:text-${item.align}`,
            JOURNEY_ACTIVE_STEPS.includes(item.step) && "opacity-100",
            item.step === JOURNEY_STEP_KEYS[1] && [
              // 1280px: image phone height (485px) + container padding (144px) - text-height (90px) = 540px
              // 768px: image phone height (370px) + container padding (74px) - text-height (70px * 1.5) = 430px
              "lg:bottom-[430px] xl:bottom-[540px]",
              "xl:left-[40px]",
            ],
            item.step === JOURNEY_STEP_KEYS[2] && [
              // 1280px: container padding (144px) + text-height (90px) = 235px
              // 768px: container padding (74px) + text-height (110px) = 185px
              "lg:bottom-[185px] xl:bottom-[235px]",
              "xl:left-[40px]",
            ],
            item.step === JOURNEY_STEP_KEYS[3] && [
              "bottom-0",
              "lg:left-1/2",
              "lg:-translate-x-1/2",
            ],
            item.step === JOURNEY_STEP_KEYS[4] && [
              // 1280px: image phone height (485px) + container padding (144px) - text-height (120px / 1.3) = 535px
              // 768px: image phone height (370px) + container padding (74px) - text-height (90px / 3) = 415px
              "lg:bottom-[415px] xl:bottom-[535px]",
              "lg:right-0 xl:right-[40px]",
            ],
            item.step === JOURNEY_STEP_KEYS[5] && [
              // 1280px: container padding (144px) + text-height (90px / 2) = 234px
              // 768px: container padding (74px) + text-height (90px * 1.5) = 209px
              "lg:bottom-[205px] xl:bottom-[234px]",
              "lg:right-0 xl:right-[40px]",
            ],
          )}
        >
          <Title
            as='h6'
            className={cn(
              "mb-2.5 xl:mb-3",
              "lg:text-xl xl:text-2xl",
            )}
          >
            {item.title}
          </Title>
          <Paragraph
            className={cn(
              "text-gray-light",
              "md:text-sm xl:text-base",
            )}
          >
            {item.description}
          </Paragraph>
        </div>
      ))}
    </div>
  )
}
