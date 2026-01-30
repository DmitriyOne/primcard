import { cn } from "@/src/06_shared/libs"
import { Paragraph } from "@/src/06_shared/ui"
import type { TPlanCardItem } from "../../types"

type TProps = {
  price: TPlanCardItem["price"]
}

export const PlanPrice = ({ price }: TProps) => {
  return (
    <div
      className={cn(
        "w-full",
        "flex items-end",
        "gap-x-1.5",
        "mb-6 md:mb-7",
      )}
    >
      <Paragraph className="text-xl md:text-2xl">
        {price.amount} {price.currency}
      </Paragraph>
      <Paragraph className="text-gray-light text-base md:text-lg">
        {price.frequency.label}
      </Paragraph>
    </div>
  )
}
