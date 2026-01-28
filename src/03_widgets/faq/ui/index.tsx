import { Container, Section, Title } from "@/src/06_shared/ui"
import { cn } from "@/src/06_shared/lib"
import { Accordion } from "@/src/04_features/accordion/ui"
import { TId } from "@/src/06_shared/types/id"
import { FAQ_CONTENT } from "../constants"

type TProps = TId

export const Faq = ({ id }: TProps) => {
  return (
    <Section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
      )}
    >
      <Container className="text-center">
        <Title
          as="h3"
          className="mb-10 md:mb-14 lg:mb-20"
        >
          {FAQ_CONTENT.TITLE}
        </Title>

        <div className="flex flex-col gap-y-5">
          {FAQ_CONTENT.QUESTIONS.map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
