import { Label } from "@/src/05_entities/label/ui"
import { cn } from "@/src/06_shared/lib"
import { TOverviewLabel } from "../../types"
import { OVERVIEW_LABEL_TYPES } from "../../constants"

type TPaymentType = (typeof OVERVIEW_LABEL_TYPES.PAYMENT)

type TProps = {
  item: TOverviewLabel & { type: TPaymentType }
}

export const LabelPayment = ({ item }: TProps) => {

  return (
    <Label
      text={item.title}
      variant="ghost"
      className={cn(
        "absolute",
        "top-[22%] md:top-[32%]",
        "left-[6%] md:left-[14%]",
      )}
    />
  )
}
