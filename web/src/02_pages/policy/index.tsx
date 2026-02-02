import { TEXT } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Paragraph, Section, Title } from "@/src/06_shared/ui"

export const PolicyPage = () => {

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
          "w-full max-w-3xl mx-auto",
        )}
      >
        <Title
          as="h1"
          className="text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-20"
        >
          {TEXT.PRIVACY.TITLE}
        </Title>
        <Paragraph
          className="text-left"
          variant="secondary"
        >
          {TEXT.PRIVACY.DESCRIPTION}
        </Paragraph>
      </div>
    </Section>
  )
}
