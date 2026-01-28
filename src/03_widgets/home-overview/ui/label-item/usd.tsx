import { Icon } from "@/src/06_shared/ui"
import { cn } from "@/src/06_shared/lib"
import { TOverviewLabel } from "../../types"
import { OVERVIEW_LABEL_TYPES } from "../../constants"

type TUSDType = (typeof OVERVIEW_LABEL_TYPES.USD)

type TProps = {
  item: TOverviewLabel & { type: TUSDType }
}

export const LabelUSD = ({ item }: TProps) => {

  return (
    <Icon
      id={item.iconId}
      className="text-[#C0C0C0] w-[16px] h-[26px]"
      background={{
        className: cn(
          "w-14 h-14",
          "bg-gray-medium",
          "absolute",
          "-bottom-[180px]",
          "right-[6%] md:right-[20%]",
        ),
        rounded: "full",
      }}
    />
  )
}
