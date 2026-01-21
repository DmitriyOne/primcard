import { TIconId } from "@/src/06_shared/types"
import { TButtonVariant } from "@/src/06_shared/ui/button/variants"

export const TMenuItemType = {
  LINK: "link",
  BUTTON: "button",
  BUTTON_ICON: "button-icon",
} as const

export type TMenuItemType = (typeof TMenuItemType)[keyof typeof TMenuItemType]

type TMenuItemBase = {
  type: TMenuItemType
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
