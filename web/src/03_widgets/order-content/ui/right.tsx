import { OrderForm } from "@/src/04_features/order-form/ui"
import { TEXT, type TOrderPlanTextKey } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { CardBorderGradient, Paragraph, Title } from "@/src/06_shared/ui"

type TProps = {
  textKey: TOrderPlanTextKey
}

export const OrderContentRight = ({ textKey }: TProps) => {
  return (
    <CardBorderGradient
      bodyClassName={cn(
        "overflow-visible",
        "bg-gray-dark",
        "py-5 md:py-8 lg:py-12",
        "px-5 md:py-8 lg:px-12",
      )}
    >
      <Title
        as='h2'
        className="text-3xl md:text-4xl lg:text-4xl mb-4"
      >
        {TEXT.ORDER[textKey].FORM.TITLE}
      </Title>
      <Paragraph
        className={cn(
          "text-base md:text-base",
          "text-gray-light",
          "mb-8 md:mb-10",
        )}
      >
        {TEXT.ORDER[textKey].FORM.DESCRIPTION}
      </Paragraph>
      <OrderForm textKey={textKey} />
    </CardBorderGradient>
  )
}
