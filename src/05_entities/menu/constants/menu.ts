import { TMenuItemType, type TMenuItem } from "@/src/05_entities/menu/types"
import { anchors, external_paths } from "@/src/06_shared/constants"

export const HEADER_MENU_ITEMS: TMenuItem[] = [
  { 
    type: TMenuItemType.LINK,
    href: `#${anchors.how}`,
    label: "How it works",
  },  
  {
    type: TMenuItemType.LINK,
    href: `#${anchors.features}`,
    label: "Features",
  },
  {
    type: TMenuItemType.LINK,
    href: `#${anchors.pricing}`,
    label: "Pricing",
  },
  {
    type: TMenuItemType.LINK,
    href: `#${anchors.faq}`,
    label: "FAQ",
  },
  {
    type: TMenuItemType.BUTTON_ICON,
    href: external_paths.telegram,
    label: "Chat with us",
    icon: "telegram",
    variant: "ghost",
  },
  {
    type: TMenuItemType.BUTTON,
    href: "/test",
    label: "Pre-order Primcard",
    variant: "secondary",
  },
]
