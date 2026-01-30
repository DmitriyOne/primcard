import { TEXT } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Container, Paragraph, Section, Title } from "@/src/06_shared/ui"
import { WorldMap } from "./world-map"
import { Labels } from "./labels"

export const HomeOverview = () => {
  return (
    <Section className="px-0 pt-48 lg:pt-56 pb-56">
      <Container className="text-center">
        <div
          className={cn(
            "w-full max-[980px]",
            "mx-auto",
            "mb-15 md:mb-20 lg:mb-28",
            "px-6",
            "text-center",
            "relative",
          )}
        >
          <Title
            as='h3'
            className={cn(
              "w-full max-w-[640px] mx-auto",
              "mb-24 md:mb-2",
              "text-3xl",
            )}
          >
            {TEXT.HOME.OVERVIEW.TITLE}
          </Title>

          <WorldMap />
          <Labels />

          <Paragraph
            className={cn(
              "w-full max-w-[520px] mx-auto",
              "text-2xl md:text-3xl",
              "text-gray-light",
            )}
          >
            {TEXT.HOME.OVERVIEW.DESCRIPTION}
          </Paragraph>
        </div>
      </Container>
    </Section>
  )
}
