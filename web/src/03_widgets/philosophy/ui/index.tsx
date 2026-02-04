import { cn } from "@/src/06_shared/libs"
import { Container, Section, Title } from "@/src/06_shared/ui"
import { GradientText } from "@/src/04_features/gradient-text/ui"
import { PHILOSOPHY_TITLE_PARTS, PHILOSOPHY_GRADIENT } from "../constants"
import { PhilosophyTags } from "./tags"

export const Philosophy = () => {

  return (
    <Section className="px-0 py-16 lg:py-24">
      <Container className="text-center">
        <div
          className={cn(
            "w-full max-w-[960px]",
            "mx-auto",
            "mb-15 md:mb-20 lg:mb-28",
            "px-6",
          )}
        >
          <Title
            as="h2"
            className="text-4xl md:text-[36px] lg:text-5xl font-bold"
          >
            {PHILOSOPHY_TITLE_PARTS.before}
            <GradientText gradient={PHILOSOPHY_GRADIENT}>
              {PHILOSOPHY_TITLE_PARTS.gradient}
            </GradientText>
            {PHILOSOPHY_TITLE_PARTS.after}
          </Title>
        </div>

        <div
          className={cn(
            "w-full max-w-[960px]",
            "mx-auto",
            "overflow-hidden",
            "lg:overflow-visible",
          )}
        >
          <PhilosophyTags />
        </div>
      </Container>
    </Section>
  )
}
