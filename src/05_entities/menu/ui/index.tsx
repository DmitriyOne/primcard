import { cn } from "@/src/06_shared/lib"
import { TMenuItem } from "@/src/05_entities/menu/types"
import { MenuItem } from "./item"

type TProps = {
  items: TMenuItem[]
  className?: string
  itemClassName?: string
  linkClassName?: string
  onCloseMenu?: () => void
}

export const Menu = ({ items, className, itemClassName, linkClassName, onCloseMenu }: TProps) => {
  return (
    <ul
      className={cn(
        "flex justify-start items-stretch lg:items-center flex-col lg:flex-row",
        "w-full",
        className,
      )}
    >
      {items.map((item) => (
        <MenuItem
          key={item.href}
          item={item}
          className={itemClassName}
          linkClassName={linkClassName}
          onClick={onCloseMenu}
        />
      ))}
    </ul>
  )
}
