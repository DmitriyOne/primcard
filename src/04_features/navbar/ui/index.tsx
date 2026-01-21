import { Burger } from "@/src/05_entities/burger/ui"
import { HEADER_MENU_ITEMS } from "@/src/05_entities/menu/constants"
import { Menu } from "@/src/05_entities/menu/ui"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"

type TProps = {
  isOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export const Navbar = ({
  isOpen,
  onToggleMenu,
  onCloseMenu,
}: TProps) => {
  return (
    <nav className="flex flex-none lg:flex-1">
      <Burger
        isOpen={isOpen}
        onToggle={onToggleMenu}
        className={Z_INDEX_CLASSES.HEADER_BURGER}
      />
      <Menu
        items={HEADER_MENU_ITEMS}
        className={cn(
          "max-lg:items-center",
          "max-md:bg-dark",
          "max-lg:pt-24 max-lg:px-4",
          "max-lg:fixed max-lg:top-0 max-lg:-left-full",
          "max-lg:w-full max-lg:h-full",
          "max-lg:transition-all max-lg:duration-300",
          isOpen && "max-lg:left-0",
          Z_INDEX_CLASSES.HEADER_NAVBAR,
        )}
        itemClassName={cn(
          "flex items-stretch",
          "w-full lg:w-auto max-lg:max-w-xl",
          "lg:nth-5:ml-auto lg:nth-5:mr-3",
          "nth-5:mt-2 lg:nth-5:mt-0",
          "nth-5:mb-4 lg:nth-5:mb-0",
          "nth-5:min-h-[48px] nth-6:min-h-[48px]",
          "nth-5:order-6 nth-6:order-5 lg:nth-5:order-5 lg:nth-6:order-6",
        )}
        linkClassName="w-full flex justify-center items-center"
        onCloseMenu={onCloseMenu}
      />
    </nav>
  )
}
