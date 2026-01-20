import { cn } from "@/src/06_shared/lib/tailwind"
import { ICONS } from "@/src/06_shared/constants"
import type { TIconId } from "@/src/06_shared/types"

type TBgRounded = "sm" | "full"
type TBackground = {
  className?: string
  rounded?: TBgRounded
}

const roundedClassByValue: Record<TBgRounded, string> = {
  sm: "rounded-sm",
  full: "rounded-full",
}

type TProps = {
  id: TIconId
  className?: string
  background?: TBackground
}

export const Icon = ({ id, className, background }: TProps) => {

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
