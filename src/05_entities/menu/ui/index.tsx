import { cn } from "@/src/06_shared/libs"
import { TMenuItem } from "@/src/05_entities/menu/types"

import { MenuItem } from "./item"

type TProps = {
  items: TMenuItem[]
  className?: string
  itemClassName?: string
  linkClassName?: string
  linkTitleClassName?: string
  onCloseMenu?: () => void
}

export const Menu = ({
  items,
  className,
  itemClassName,
  linkClassName,
  linkTitleClassName,
  onCloseMenu,
}: TProps) => {

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
          linkTitleClassName={linkTitleClassName}
          onClick={onCloseMenu}
        />
      ))}
    </ul>
  )
}
