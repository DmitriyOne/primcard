import { TEXT } from "@/src/06_shared/constants"
import { TId } from "@/src/06_shared/types/id"
import { cn } from "@/src/06_shared/libs"
import { Container, Section, Title } from "@/src/06_shared/ui"
import { CARDS } from "../constants"
import { CapabilityCardItem } from "./card-item"

type TProps = TId

export const Capabilities = ({ id }: TProps) => {
  return (
    <Section
      id={id}
      className="py-16 lg:py-24"
    >
      <Container className="text-center">
        <Title
          as='h3'
          className="mb-10 md:mb-14 lg:mb-20"
        >
          {TEXT.HOME.CAPABILITIES.TITLE}
        </Title>

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
            <CapabilityCardItem
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
