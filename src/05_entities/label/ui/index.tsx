import { IconTitle } from "@/src/06_shared/ui"
import { TLabelItem, TLabelVariant } from "../types"
import { cn } from "@/src/06_shared/lib"

type TProps = TLabelItem & {
  variant?: TLabelVariant
  className?: string
  titleClassName?: string
}

export const Label = ({
  icon,
  text,
  className,
  titleClassName,
  variant,
}: TProps) => {

  const variantClassNames = {
    [TLabelVariant.primary]: "bg-primary-light text-white",
    [TLabelVariant.secondary]: "bg-primary-light/30 text-white",
    [TLabelVariant.ghost]: "bg-transparent text-gray-light border border-gray-light",
  }

  const componentClassName = cn(
    "w-max",
    "gap-2.5 md:gap-3.5",
    "py-2.5 px-5",
    "bg-gray-medium",
    "rounded-full",
    variant && variantClassNames[variant],
    className,
  )

  const containerIconClassNames = cn(
    "p-1.5",
    icon?.background?.className,
  )

  const iconClassNames = cn(
    "w-5 h-5",
    icon?.className,
  )

  return (
    <IconTitle
      title={text}
      className={componentClassName}
      icon={icon ? ({
        id: icon.id,
        className: iconClassNames,
        position: icon.position,
        background: {
          className: containerIconClassNames,
          rounded: icon.background?.rounded,
        },
      }) : null}
      titleClassName={cn(
        "text-base md:text-lg",
        "font-medium leading-[140%]",
        titleClassName,
      )
      }
    />
  )
}
