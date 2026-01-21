import { cn } from "@/src/06_shared/lib"
import type { TButtonVariant } from "./variants"
import { variantStyles } from "./variants"

export const getButtonStyles = (
  variant: TButtonVariant | undefined,
  className?: string,
  additionalStyles?: string,
) => {
  const styles = variant ? variantStyles[variant] : undefined

  return cn(
    variant && [
      "rounded-full cursor-pointer",
      "border-[0.5px] border-solid",
      "text-sm md:text-base font-light",
      "px-6 py-3",
      "transition-all duration-300",
      "disabled:cursor-not-allowed disabled:opacity-40",
      styles?.base,
      styles?.hover,
    ],
    additionalStyles,
    className,
  )
}
