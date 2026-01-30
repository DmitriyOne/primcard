import { Label } from "@/src/05_entities/label/ui"
import { TOverviewLabel } from "../../types"
import { cn } from "@/src/06_shared/libs"
import { OVERVIEW_LABEL_TYPES } from "../../constants"

type TWithdrawType = (typeof OVERVIEW_LABEL_TYPES.WITHDRAW)

type TProps = {
  item: TOverviewLabel & { type: TWithdrawType }
}

export const LabelWithdraw = ({ item }: TProps) => {

  return (
    <Label
      text={item.title}
      variant="secondary"
      className={cn(
        "absolute",
        "top-[70%] md:top-[68%]",
        "left-[14%] md:left-[28%]",
      )}
    />
  )
}
