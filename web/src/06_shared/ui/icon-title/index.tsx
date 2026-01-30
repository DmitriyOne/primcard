import { cn } from "@/src/06_shared/libs"
import { Icon } from "@/src/06_shared/ui"

import type { TIconProps, TIconWithPositionProps } from "../icons/icon"

export type TIconTitleProps = {
  title: string
  icon: TIconWithPositionProps | null
  titleClassName?: string
  className?: string
}

export const IconTitle = ({
  title,
  titleClassName,
  icon,
  className,
}: TIconTitleProps) => {
  const { position, className: iconClassName, ...iconProps } = icon || {}

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 md:gap-2",
        position === "right" && "flex-row-reverse",
        position === "top" && "flex-col",
        position === "bottom" && "flex-col-reverse",
        className,
      )}
    >
      {icon && (
        <Icon
          className={cn(
            "w-4 h-4",
            iconClassName,
          )}
          {...(iconProps as Omit<TIconProps, "className">)}
        />
      )}
      <div>
        <h5
          className={cn(
            "text-base",
            titleClassName,
          )}
        >
          {title}
        </h5>
      </div>
    </div>
  )
}
