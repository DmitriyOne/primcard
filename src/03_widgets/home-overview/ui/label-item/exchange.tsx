import { Label } from "@/src/05_entities/label/ui"
import { cn } from "@/src/06_shared/libs"
import { TOverviewLabel } from "../../types"
import { OVERVIEW_LABEL_TYPES } from "../../constants"

type TExchangeType = (typeof OVERVIEW_LABEL_TYPES.EXCHANGE)

type TProps = {
  item: TOverviewLabel & { type: TExchangeType }
}

export const LabelExchange = ({ item }: TProps) => {

  return (
    <Label
      text={item.title}
      variant="primary"
      className={cn(
        "absolute",
        "-top-[120px] md:-top-[70px]",
        "right-[4%] md:right-[10%]",
      )}
    />
  )
}
