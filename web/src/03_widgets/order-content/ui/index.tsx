import type { TOrderPlanTextKey } from "@/src/06_shared/constants"
import { OrderContentLeft } from "./left"
import { OrderContentRight } from "./right"

type TProps = {
  textKey: TOrderPlanTextKey
}

export const OrderContent = ({ textKey }: TProps) => {
  return (
    <>
      <OrderContentLeft textKey={textKey} />
      <OrderContentRight textKey={textKey} />
    </>
  )
}
