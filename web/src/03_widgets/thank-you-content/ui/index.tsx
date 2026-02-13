import { CopyToClipboardButton } from "@/src/04_features/copy-to-clipboard/ui"
import { TEXT, Z_INDEX_CLASSES } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Paragraph, Title } from "@/src/06_shared/ui"

type TProps = {
  orderId: string | null
}

export const ThankYouContent = ({ orderId }: TProps) => {
  return (
    <div
      className={cn(
        "relative",
        "w-full",
        "max-w-80 sm:max-w-full",
        "flex flex-col items-center justify-center",
        "text-center",
        Z_INDEX_CLASSES.THANK_YOU_CONTENT,
      )}
    >
      {orderId && (
        <div
          className={cn(
            "flex items-center",
            "gap-x-2",
            "text-lg md:text-xl",
            "font-bold",
            "text-gray-light",
            "mb-4",
          )}
        >
          <span>{TEXT.THANK_YOU.YOUR_ID_LABEL}</span>
          <CopyToClipboardButton
            textToCopy={orderId}
            className="gap-x-1 text-primary"
          />
        </div>
      )}

      <Title
        as="h1"
        className={cn("text-4xl md:text-5xl lg:text-6xl", "mb-5 md:mb-6")}
      >
        {TEXT.THANK_YOU.TITLE}
      </Title>

      <Paragraph className={cn("text-lg md:text-2xl", "mb-3")}>
        {TEXT.THANK_YOU.DESCRIPTION}
      </Paragraph>

      <Paragraph
        variant="secondary"
        className="text-gray-light/50"
      >
        {TEXT.THANK_YOU.SUB_DESCRIPTION}
      </Paragraph>
    </div>
  )
}
