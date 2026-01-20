import { cn } from "@/src/06_shared/lib/tailwind"
import { ICONS } from "@/src/06_shared/constants"
import type { TIconId, TPosition } from "@/src/06_shared/types"

type TBgRounded = "sm" | "full"
type TBackground = {
  className?: string
  rounded?: TBgRounded
}

const roundedClassByValue: Record<TBgRounded, string> = {
  sm: "rounded-sm",
  full: "rounded-full",
}

export type TIconProps = {
  id: TIconId
  className?: string
  background?: TBackground
}

export type TIconWithPositionProps = TIconProps & {
  position: TPosition
}

export const Icon = ({ id, className, background }: TIconProps) => {

  const Comp = ICONS[id]

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        background?.rounded ? roundedClassByValue[background.rounded] : null,
        background?.className,
      )}
    >
      <Comp className={className} />
    </div>
  )
}
