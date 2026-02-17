import { ORDER_PLAN_TEXT_KEYS, type TOrderPlanSlug } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Section } from "@/src/06_shared/ui"
import { OrderContent } from "@/src/03_widgets/order-content/ui"

type TProps = {
  plan: TOrderPlanSlug
}

export const OrderPage = ({ plan }: TProps) => {
  const textKey = ORDER_PLAN_TEXT_KEYS[plan]

  return (
    <Section
      className={cn(
        "flex-1 flex",
        "pt-30 lg:pt-52",
        "pb-10 lg:pb-32",
      )}
    >
      <div
        className={cn(
          "relative",
          "w-full max-w-6xl mx-auto",
          "flex md:items-stretch",
          "md:gap-x-8 lg:gap-x-12",
        )}
      >
        <OrderContent textKey={textKey} />
      </div>
    </Section>
  )
}
