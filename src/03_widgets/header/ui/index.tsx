import { Navbar } from "@/src/04_features/navbar/ui"
import { Logo } from "@/src/05_entities/logo/ui"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"
import { Container } from "@/src/06_shared/ui"

export const Header = () => {

  return (
    <header
      className={cn(
        "absolute w-full top-0",
        "px-4 py-4 lg:py-5",
        Z_INDEX_CLASSES.HEADER,
      )}
    >
      <Container
        className={cn(
          "flex items-center",
          "max-lg:justify-between",
          "lg:gap-x-14",
        )}>
        <Logo
          className={cn(
            "max-md:w-8 lg:mt-[-6px] relative",
            Z_INDEX_CLASSES.HEADER_LOGO,
          )}
          isShowShortIconOnMobile
        />
        <Navbar />
      </Container>
    </header>
  )
}
