import { cn } from "@/src/06_shared/lib"
import { Icon } from "@/src/06_shared/ui"
import type { TIconWithPositionProps } from "../icons/icon"

export type TIconTitleProps = {
  title: string
  icon: TIconWithPositionProps
  titleClassName?: string
}

export const IconTitle = ({
  title,
  titleClassName,
  icon,
}: TIconTitleProps) => {
  const { position, className: iconClassName, ...iconProps } = icon

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 md:gap-2",
        position === "right" && "flex-row-reverse",
        position === "top" && "flex-col",
        position === "bottom" && "flex-col-reverse",
      )}
    >
      <Icon
        className={cn(
          "w-4 h-4",
          iconClassName,
        )}
        {...iconProps}
      />
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
