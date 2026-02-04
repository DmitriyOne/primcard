import { CardLift3d } from "@/src/04_features/card-lift-3d/ui"
import { paths, TEXT } from "@/src/06_shared/constants"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants/z-indexs"
import { cn } from "@/src/06_shared/libs"
import { Container, Link, Paragraph, Section, Title } from "@/src/06_shared/ui"

import { HomeHeroBg } from "@/src/03_widgets/hero-bg/ui"

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
      <Container
        className={cn(
          "max-w-80 md:max-w-4xl flex flex-col items-center text-center relative",
          Z_INDEX_CLASSES.HERO_CONTENT,
        )}
      >
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
        <Link
          href={paths.order("pre")}
          variant="secondary"
          className="text-base md:text-xl font-bold"
        >
          {TEXT.HOME.HERO.BUTTON_TEXT}
        </Link>
        <CardLift3d className="mt-6 md:mt-8" />
      </Container>
      <HomeHeroBg />
    </Section>
  )
}
