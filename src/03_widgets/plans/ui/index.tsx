import { TEXT } from "@/src/06_shared/constants"
import { Paragraph, Section } from "@/src/06_shared/ui"
import { Container } from "@/src/06_shared/ui"
import { Title } from "@/src/06_shared/ui"
import { Cards } from "./cards"

export const Plans = () => {
  return (
    <Section className="py-16 lg:py-24">
      <Container className="text-center">
        <Title
          as='h3'
          className="mb-10 md:mb-20"
        >
          {TEXT.HOME.PLANS.TITLE}
        </Title>

        <Cards />

        <Paragraph className="text-gray-light">
          {TEXT.HOME.PLANS.NOTE}
        </Paragraph>
      </Container>
    </Section>
  )
}
