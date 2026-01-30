import { OVERVIEW_LABEL_TYPES } from "../../constants"
import { TOverviewLabel } from "../../types"
import { LabelExchange } from "./exchange"
import { LabelMasterCardLogo } from "./mastercard-logo"
import { LabelPayment } from "./payment"
import { LabelWithdraw } from "./withdraw"
import { LabelPhysicalCard } from "./physical-card"
import { LabelUSD } from "./usd"
import { ComponentType } from "react"

type TProps = {
  item: TOverviewLabel
}

const LABEL_ITEMS = {
  [OVERVIEW_LABEL_TYPES.MASTERCARD_LOGO]: LabelMasterCardLogo,
  [OVERVIEW_LABEL_TYPES.EXCHANGE]: LabelExchange,
  [OVERVIEW_LABEL_TYPES.PAYMENT]: LabelPayment,
  [OVERVIEW_LABEL_TYPES.WITHDRAW]: LabelWithdraw,
  [OVERVIEW_LABEL_TYPES.PHYSICAL_CARD]: LabelPhysicalCard,
  [OVERVIEW_LABEL_TYPES.USD]: LabelUSD,
}

export const LabelItem = ({ item }: TProps) => {
  const Component = LABEL_ITEMS[item.type] as ComponentType<{
    item: TOverviewLabel
  }>

  return (
    <Component item={item} />
  )
}
