import { TEXT } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"
import { Container, GradientCard, Icon, Paragraph, Section, Title } from "@/src/06_shared/ui"
import { CARDS } from "../constants"

export const Usage = () => {
  return (
    <Section className="py-16 lg:py-24">
      <Container className="text-center">
        <Title
          as='h3'
          className="mb-3.5 sm:mb-5 md:mb-6"
        >
          {TEXT.HOME.USAGE.TITLE}
        </Title>
        <Paragraph
          variant="primary"
          className={cn(
            "w-full max-w-80 md:max-w-full mx-auto",
            "mb-10 lg:mb-20",
          )}
        >
          {TEXT.HOME.USAGE.DESCRIPTION}
        </Paragraph>

        <div
          className={cn(
            "w-full",
            "flex flex-col md:flex-row",
            "flex-wrap",
            "items-center md:items-stretch",
            "gap-y-4 md:gap-x-6",
          )}
        >
          {CARDS.map((card) => (
            <GradientCard
              key={card.id}
              className="md:flex-[1_1_320px]"
              bodyClassName="py-8 md:py-10"
            >
              <Icon
                id={card.iconId}
                className="w-6 h-6"
                background={{
                  className: cn(
                    "bg-white/10 backdrop-blur-md",
                    "p-3 md:p-4",
                    "mb-4 md:mb-6",
                  ),
                  rounded: "full",
                }}
              />
              <Title
                as="h4"
                className="mb-2.5 md:mb-3.5 font-medium"
              >
                {card.title}
              </Title>
              <Paragraph className="text-gray-light">
                {card.description}
              </Paragraph>
              <div
                className={cn(
                  "absolute",
                  card.id === CARDS[0].id && "bottom-0 left-0",
                  card.id === CARDS[1].id && "top-0 left-1/2 -translate-x-1/2",
                  card.id === CARDS[2].id && "bottom-0 right-0",
                  "w-[200px] h-[80px]",
                  "bg-linear-to-r from-primary to-[#F33D39]",
                  "filter blur-[100px]",
                )}
              />
            </GradientCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
