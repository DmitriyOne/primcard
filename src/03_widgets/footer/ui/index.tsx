import { Logo } from "@/src/05_entities/logo/ui"
import { FOOTER_MENU_ITEMS } from "@/src/05_entities/menu/constants"
import { Menu } from "@/src/05_entities/menu/ui"
import { TEXT } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"
import { Container, Paragraph } from "@/src/06_shared/ui"

export const Footer = () => {
  return (
    <footer className="w-full px-4 py-14 md:py-16">
      <Container className="flex flex-col gap-y-6 md:gap-y-8">
        <Logo />
        <Menu
          className={cn(
            "relative",
            "w-full",
            "max-md:items-start",
            "flex-row flex-wrap md:items-center",
          )}
          itemClassName={cn(
            "md:mb-0 md:mr-8",
            "md:nth-5:ml-auto",
            "max-md:nth-4:mb-0",
            "flex-[1_1_50%] md:flex-[0_0_auto]",
            "text-left",
            "nth-5:flex-1 nth-5:text-center md:nth-5:flex-[0_0_auto]",
            "max-md:[&:nth-child(5)>a]:flex max-md:[&:nth-child(5)>a]:justify-center",
            "max-md:[&:nth-child(5)>a]:w-full",
          )}
          linkClassName="text-sm md:text-lg w-max"
          linkTitleClassName="text-sm md:text-base"
          items={FOOTER_MENU_ITEMS}
        />
        <Paragraph className="text-xs max-md:mt-3 max-md:text-center">
          {TEXT.FOOTER.COPYRIGHT}
        </Paragraph>
      </Container>
    </footer>
  )
}
