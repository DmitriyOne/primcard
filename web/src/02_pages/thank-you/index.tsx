import { ThankYouContent } from "@/src/03_widgets/thank-you-content/ui"
import { ThankYouBackground } from "@/src/03_widgets/thank-you-content/ui/background"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Section } from "@/src/06_shared/ui"

type TProps = {
  orderId: string
}

export const ThankYouPage = ({ orderId }: TProps) => {
  return (
    <Section
      className={cn(
        "flex-1 flex",
        "pt-32 lg:pt-36",
        "pb-16 lg:pb-28",
      )}
    >
      <div
        className={cn(
          "absolute",
          "inset-0",
          "bg-[linear-gradient(0deg,#000_67%,rgba(0,0,0,0.10)_76%)]",
          "sm:bg-[linear-gradient(0deg,#000_66%,rgba(0,0,0,0.10)_72%)]",
          "md:bg-[linear-gradient(0deg,#000_56%,rgba(0,0,0,0.10)_68%)]",
          Z_INDEX_CLASSES.THANK_YOU_BACKGROUND,
        )}
      />
      <div
        className={cn(
          "flex-1 flex flex-col items-center justify-center",
          "w-full max-w-5xl mx-auto",
        )}
      >
        <ThankYouBackground />
        <ThankYouContent orderId={orderId} />
      </div>
    </Section>
  )
}
