import { cn } from "@/src/06_shared/libs"
import { Icon } from "@/src/06_shared/ui"
import { TOverviewLabel } from "../../types"
import { OVERVIEW_LABEL_TYPES } from "../../constants"

type TMasterCardLogoType = (typeof OVERVIEW_LABEL_TYPES.MASTERCARD_LOGO)

type TProps = {
  item: TOverviewLabel & { type: TMasterCardLogoType }
}

export const LabelMasterCardLogo = ({ item }: TProps) => {

  return (
    <Icon
      id={item.iconId}
      className="w-[46px] h-[28px] lg:w-[56px] lg:h-[34px]"
      background={{
        className: cn(
          "absolute",
          "-top-[60px] md:-top-[140px]",
          "left-[9%] lg:left-[20%]",
          "w-[66px] h-[48px] lg:w-[100px] lg:h-[70px]",
          "bg-gray-medium",
          "rounded-xl",
        ),
      }}
    />
  )
}
