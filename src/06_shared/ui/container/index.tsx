import type { PropsWithChildren, HTMLAttributes } from "react"
import { cn } from "@/src/06_shared/lib"

type TProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>

export const Container = ({ children, className, ...props }: TProps) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  )
}
