import { Label } from "@/src/05_entities/label/ui"
import { TOverviewLabel } from "../../types"
import { cn } from "@/src/06_shared/lib"
import { OVERVIEW_LABEL_TYPES } from "../../constants"

type TPhysicalCardType = (typeof OVERVIEW_LABEL_TYPES.PHYSICAL_CARD)

type TProps = {
  item: TOverviewLabel & { type: TPhysicalCardType }
}

export const LabelPhysicalCard = ({ item }: TProps) => {

  return (
    <Label
      text={item.title}
      className={cn(
        "px-3 lg:px-4",
        "py-3 lg:py-4",
        "bg-gray-medium text-white",
        "rounded-xl",
        "absolute",
        "-bottom-[100px]",
        "left-[20px]",
      )}
      icon={{
        id: item.iconId,
        position: "left",
        className: "w-full h-full",
        background: {
          className: "w-[55px] h-[35px] p-0",
        },
      }}
    />
  )
}
