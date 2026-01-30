import type { HTMLAttributes, PropsWithChildren } from "react"

import { cn } from "@/src/06_shared/libs"

export type TTitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type TProps = HTMLAttributes<HTMLHeadingElement> &
  PropsWithChildren & {
    as?: TTitleTag
  }

export const Title = ({
  as: Tag = "h6",
  className,
  children,
  ...props
}: TProps) => {
  return (
    <Tag
      className={cn(
        "text-lg md:text-2xl font-medium tracking-tight whitespace-pre-line",
        Tag === "h1" && "font-bold text-[40px] md:text-6xl lg:text-7xl",
        Tag === "h2" && "text-4xl md:text-5xl lg:text-6xl",
        Tag === "h3" && "text-4xl md:text-[36px] lg:text-5xl",
        Tag === "h4" && "font-normal text-xl md:text-3xl lg:text-4xl",
        Tag === "h5" && "font-normal text-lg md:text-2xl lg:text-3xl",
        Tag === "h6" && "text-xl md:text-xl lg:text-2xl",
        "leading-[140%]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
