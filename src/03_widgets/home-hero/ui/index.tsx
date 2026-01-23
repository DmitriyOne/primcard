import { CardLift3d } from "@/src/04_features/card-lift-3d/ui"
import { TEXT } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"
import { Button, Container, Paragraph, Section, Title } from "@/src/06_shared/ui"

export const HomeHero = () => {
  return (
    <Section
      className={cn(
        "pt-[90px]",
        "pt-28 md:pt-48 lg:pt-60 pb-24 lg:pb-36",
        "relative",
        "overflow-hidden",
      )}
    >
      <Container className="max-w-80 md:max-w-4xl flex flex-col items-center text-center relative z-1">
        <Title
          as="h1"
          className="mb-5 md:mb-6"
        >
          {TEXT.HOME.HERO.TITLE}
        </Title>
        <Paragraph
          variant="primary"
          className="mb-12 md:mb-14">
          {TEXT.HOME.HERO.DESCRIPTION}
        </Paragraph>
        {/* TODO: change to my link and add href */}
        <Button
          variant="secondary"
          className="text-base md:text-xl font-bold"
          disabled
        >
          {TEXT.HOME.HERO.BUTTON_TEXT}
        </Button>
        <CardLift3d className="mt-6 md:mt-8" />
      </Container>
    </Section>
  )
}
