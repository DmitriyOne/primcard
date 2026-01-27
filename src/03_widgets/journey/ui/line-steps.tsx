import { cn } from "@/src/06_shared/lib"
import { Icon } from "@/src/06_shared/ui"

export const JourneyLineStepsDesktop = () => {
  return (
    <Icon
      id='journeyStepsCurvedSolid'
      background={{
        className: cn(
          "hidden lg:flex",
          "w-full",
          "h-[485px]",
          "absolute",
          "bottom-0",
          "left-1/2",
          "-translate-x-1/2",
        ),
      }}
    />
  )
}

export const JourneyLineStepsMobile = () => {
  return (
    <Icon
      id='journeyStepsStraightSolid'
      className="w-full h-full"
      background={{
        className: cn(
          "flex lg:hidden",
          "items-start",
          "w-3",
          "h-[550px]",
          "absolute",
          "top-[10px]",
          "left-0",
        ),
      }}
    />
  )
}
