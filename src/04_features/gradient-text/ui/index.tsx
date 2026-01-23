import { cn } from "@/src/06_shared/lib"
import type { PropsWithChildren } from "react"

type TProps = PropsWithChildren & {
  gradient: string
  className?: string
}

export const GradientText = ({ className, gradient, children }: TProps) => {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        gradient,
        className,
      )}
    >
      {children}
    </span>
  )
}
