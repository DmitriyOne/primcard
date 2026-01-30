import { cn } from "@/src/06_shared/libs"
import { TJourneyTextStepItem } from "../types"
import { JOURNEY_ACTIVE_STEPS, JOURNEY_TEXT_ALIGN_CLASSES, JOURNEY_TEXT_STEP_POSITIONS } from "../constant"
import { Paragraph, Title } from "@/src/06_shared/ui"

type TProps = {
  item: TJourneyTextStepItem
}

export const JourneyTextStepsItem = ({ item }: TProps) => {

  return (
    <div
      key={item.id}
      className={cn(
        "relative lg:absolute",
        "w-full lg:max-w-[215px] xl:max-w-[285px]",
        "opacity-60",
        "pl-7 lg:pl-0",
        "pb-12 lg:pb-0",
        "text-left",
        JOURNEY_ACTIVE_STEPS.includes(item.step) && "opacity-100",
        JOURNEY_TEXT_ALIGN_CLASSES[item.align],
        JOURNEY_TEXT_STEP_POSITIONS[item.step],
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
  )
}
