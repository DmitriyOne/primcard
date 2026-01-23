import { cn } from "@/src/06_shared/lib"
import type { CSSProperties, PropsWithChildren } from "react"

type TProps = PropsWithChildren & {
  className?: string
  duration?: string
}

const DEFAULT_DURATION = "5s"

export const InfiniteScroll = ({
  children,
  className,
  duration = DEFAULT_DURATION,
}: TProps) => {

  const animationStyle: CSSProperties = {
    // @ts-expect-error - CSS custom property
    "--scroll-duration": duration,
  }

  return (
    <div
      className={cn(
        "flex flex-row",
        "w-max",
        "flex-nowrap",
        "gap-x-2 md:gap-x-4",
        "will-change-transform",
        "transform-[translateZ(0)]",
        "contain-[layout_style_paint]",
        className,
      )}
      style={animationStyle}
      data-infinite-scroll
    >
      {children}
    </div>
  )
}
