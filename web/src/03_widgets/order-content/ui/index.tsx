import type { TOrderPlanTextKey } from "@/src/06_shared/constants"
import { OrderContentLeft } from "./left"
import { OrderContentRight } from "./right"
import { cn } from "@/src/06_shared/libs"

type TProps = {
  textKey: TOrderPlanTextKey
}

export const OrderContent = ({ textKey }: TProps) => {
  return (
    <div
      className={cn(
        "flex items-stretch",
        "md:gap-x-8 lg:gap-x-12",
        "md:min-h-auto lg:min-h-[685px]",
      )}
    >
      <OrderContentLeft textKey={textKey} />
      <OrderContentRight textKey={textKey} />
    </div>
  )
}
