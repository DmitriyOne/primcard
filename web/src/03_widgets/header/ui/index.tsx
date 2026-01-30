import { Navbar } from "@/src/04_features/navbar/ui"
import { Logo } from "@/src/05_entities/logo/ui"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
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
            "relative",
            "w-[130px] h-[26px]",
            "lg:mb-[6px]",
            Z_INDEX_CLASSES.HEADER_LOGO,
          )}
        />
        <Navbar />
      </Container>
    </header>
  )
}
