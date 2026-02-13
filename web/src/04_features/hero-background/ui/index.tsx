import type { PropsWithChildren } from "react"

import { cn } from "@/src/06_shared/libs"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants/z-indexs"

export const HeroGradientLayer = () => (
  <div
    className={cn(
      "absolute top-0 left-0",
      "w-full h-full",
      "bg-[linear-gradient(116deg,#FFF_0%,#F90_8%,#E43806_14%,#050100_34%,#000_40%,#000_50%,#000_60%,#000_70%,#E43806_81.25%,#E68900_90.38%,#E8E8E8_100%)]",
    )}
  />
)

export const HeroShadeOverlay = () => (
  <div
    className={cn(
      "absolute top-0 left-0 w-full h-full",
      "bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_45%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_25%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.9)_75%,#000_100%)]",
      Z_INDEX_CLASSES.HERO_SHADE_OVERLAY,
    )}
  />
)

export const HeroBackgroundBlur = () => (
  <div
    className={cn(
      "absolute top-0 left-0",
      "w-full h-full",
      "backdrop-blur-[90px]",
      Z_INDEX_CLASSES.HERO_BACKGROUND_BLUR,
    )}
  />
)

export const HeroStripes = ({ count = 14 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, i) => `blur-layer-${i}`).map(
      (id) => (
        <div
          key={id}
          className={cn(
            "w-full h-[60px] lg:h-[90px] shrink-0",
            "bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_-20%,rgba(40,40,40,0.09)_75.76%,rgba(255,255,255,0.01)_123.64%)]",
            "backdrop-blur-[90px]",
            Z_INDEX_CLASSES.HERO_BACKGROUND_BLUR,
          )}
        />
      ),
    )}
  </>
)

type THeroBackgroundRootProps = PropsWithChildren & {
  className?: string
}

export const HeroBackgroundRoot = ({ children, className }: THeroBackgroundRootProps) => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full",
        "flex flex-col",
        "backdrop-blur-[1px]",
        className,
      )}
    >
      {children}
    </div>
  </div>
)
