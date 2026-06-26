import { Paragraph, Title } from "@/src/06_shared/ui"
import type { TPolicyContent } from "../types"
import { cn } from "@/src/06_shared/libs"

type TProps = {
  content: TPolicyContent
}

export const PolicyContent = ({ content }: TProps) => {

  if (!content || !content.title) {
    return null
  }

  return (
    <>
      {content.currentDate && (
        <Paragraph className={cn("text-base text-gray-light", "mb-4")}>
          {content.currentDate}
        </Paragraph>
      )}
      <Title
        as="h1"
        className={cn("text-4xl md:text-5xl lg:text-6xl", "mb-10 md:mb-24")}
      >
        {content.title}
      </Title>
      <div className={cn("flex flex-col gap-10", "text-left")}>
        {content.descriptions.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4"
          >
            {item.title && (
              <Title
                as="h2"
                className={cn("text-3xl lg:text-4xl", "mb-4 lg:mb-5")}
              >
                {item.title}
              </Title>
            )}
            {item.content?.map((itemContent) => (
              <Paragraph
                key={itemContent.id}
                variant="secondary"
                className="text-base text-gray-light"
              >
                {itemContent.text}
              </Paragraph>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
