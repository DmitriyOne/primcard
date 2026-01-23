import type { PropsWithChildren, HTMLAttributes } from "react"
import { cn } from "@/src/06_shared/lib"

type TProps = PropsWithChildren & HTMLAttributes<HTMLElement>

export const Section = ({
  className,
  children,
  ...props
}: TProps) => {
  return (
    <section
      className={cn("px-4", className)}
      {...props}
    >
      {children}
    </section>
  )
}
