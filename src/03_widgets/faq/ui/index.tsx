import { Container, Section, Title } from "@/src/06_shared/ui"
import { cn } from "@/src/06_shared/lib"
import { TAccordionItem } from "@/src/04_features/accordion/types"
import { Accordion } from "@/src/04_features/accordion/ui"

type TProps = {
  title: string
  questions: TAccordionItem[]
}

export const Faq = ({ title, questions }: TProps) => {
  return (
    <Section
      className={cn(
        "py-16 md:py-20 lg:py-24",
      )}
    >
      <Container className="text-center">
        <Title
          as="h3"
          className="mb-10 md:mb-14 lg:mb-20"
        >
          {title}
        </Title>

        <div className="flex flex-col gap-y-5">
          {questions.map((item) => (
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
