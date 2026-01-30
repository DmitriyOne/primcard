import { TButtonType, TIconId } from "@/src/06_shared/types"
import { TButtonVariant } from "@/src/06_shared/ui/button/variants"

type TMenuItemBase = {
  type: TButtonType
  href: string
  label: string
}

type TMenuItemLink = TMenuItemBase & {
  type: "link"
}

type TMenuItemButton = TMenuItemBase & {
  type: "button"
  variant: TButtonVariant
}

type TMenuItemButtonIcon = TMenuItemBase & {
  type: "button-icon"
  icon: TIconId
  variant: TButtonVariant
}

export type TMenuItem = TMenuItemLink | TMenuItemButton | TMenuItemButtonIcon
