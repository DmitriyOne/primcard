import { TEXT_JOURNEY_TEXT_STEPS } from "../constant"
import { cn } from "@/src/06_shared/libs"
import { JourneyLineStepsMobile } from "./line-steps"
import { JourneyTextStepsItem } from "./text-step-item"

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
        <JourneyTextStepsItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}
