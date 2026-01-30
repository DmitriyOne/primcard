import type { HTMLAttributes, PropsWithChildren } from "react"

import { cn } from "@/src/06_shared/libs"

type TVariant = "primary" | "secondary"

type TProps = HTMLAttributes<HTMLParagraphElement> & PropsWithChildren & {
  variant?: TVariant
}

export const Paragraph = ({
  variant,
  className,
  children,
  ...props
}: TProps) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base font-normal tracking-tight leading-[140%] whitespace-pre-line",
        variant === "primary" && "font-medium text-base md:text-lg lg:text-xl",
        variant === "secondary" && "font-medium text-sm md:text-base lg:text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
