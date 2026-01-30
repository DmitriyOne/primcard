import { ORDER_PLAN_TEXT_KEYS, TEXT, type TOrderPlanSlug } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Section, Title } from "@/src/06_shared/ui"

type TProps = {
  plan: TOrderPlanSlug
}

export const OrderPage = ({ plan }: TProps) => {
  const textKey = ORDER_PLAN_TEXT_KEYS[plan]

  return (
    <Section
      className={cn(
        "flex-1 flex",
        "pt-36 lg:pt-52",
        "pb-16 lg:pb-32",
      )}
    >
      <div
        className={cn(
          "relative",
          "flex-1 flex flex-col items-center justify-center",
          "text-center",
        )}
      >
        <Title
          as="h1"
          className="text-4xl md:text-5xl lg:text-6xl"
        >
          {TEXT.ORDER[textKey].TITLE}
        </Title>
      </div>
    </Section>
  )
}
