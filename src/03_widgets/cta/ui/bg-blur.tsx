import { cn } from "@/src/06_shared/lib"

export const BgBlur = () => (
  <div
    className={cn(
      "absolute",
      "bottom-full left-1/2",
      "transform -translate-x-1/2 translate-y-[50%] lg:translate-y-[40%]",
      "w-full md:w-1/2 h-[200px] md:h-full",
      "bg-primary-gradient",
      "blur-[90px] lg:blur-[110px]",
      "z-1",
    )}
  />
)
