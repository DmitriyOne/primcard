import { cn } from "@/src/06_shared/lib"
import { Container, Paragraph, Section, Title } from "@/src/06_shared/ui"
import { TEXT } from "@/src/06_shared/constants"
import { BgGradient } from "./bg-gradient"
import { BgBlur } from "./bg-blur"
import { Cards } from "./cards"
import { CtaButtonItem } from "./button-item"
import { CTA_BUTTONS } from "../constants"

export const Cta = () => {
  return (
    <Section
      className={cn(
        "pb-16 lg:pb-36 pt-72 lg:pt-86",
        "relative",
        "overflow-hidden",
      )}
    >
      <BgGradient />
      <Container className="relative">
        <BgBlur />
        <Cards />
        <Container className="text-center relative z-4">
          <Title
            as="h2"
            className={cn(
              "mb-3.5 sm:mb-5 md:mb-6",
              "max-w-[320px] sm:max-w-full mx-auto",
            )}
          >
            {TEXT.HOME.CTA.TITLE}
          </Title>
          <Paragraph
            variant="primary"
            className={cn(
              "mb-11 lg:mb-18",
              "max-w-sm sm:max-w-full mx-auto",
            )}
          >
            {TEXT.HOME.CTA.DESCRIPTION}
          </Paragraph>

          <div
            className={cn(
              "w-full",
              "flex flex-col md:flex-row",
              "items-center md:items-stretch",
              "justify-center",
              "gap-y-4 lg:gap-x-6",
            )}
          >
            {CTA_BUTTONS.map((button) => (
              <CtaButtonItem
                key={button.href}
                item={button}
              />
            ))}
          </div>
        </Container>
      </Container>
    </Section>
  )
}
