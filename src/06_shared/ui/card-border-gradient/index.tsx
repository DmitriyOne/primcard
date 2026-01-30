import type { PropsWithChildren } from "react"

import { cn } from "@/src/06_shared/libs"

type TProps = PropsWithChildren & {
  className?: string
  bodyClassName?: string
}

export const CardBorderGradient = ({
  className,
  bodyClassName,
  children,
}: TProps) => {
  return (
    <div
      className={cn(
        "w-full",
        "relative",
        "rounded-2xl",
        "p-[0.5px]",
        "bg-[linear-gradient(313.87deg,#000000_16.23%,#B0B0B0_87.74%)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          "items-start",
          "text-left",
          "relative",
          "overflow-hidden",
          "w-full h-full",
          "rounded-2xl",
          "bg-gray-medium",
          "px-4 md:px-6",
          bodyClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}

