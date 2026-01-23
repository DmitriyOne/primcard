import type { TMenuItem } from "@/src/05_entities/menu/types"
import { anchors, external_paths, TEXT } from "@/src/06_shared/constants"
import { TButtonType } from "@/src/06_shared/types"

export const HEADER_MENU_ITEMS: TMenuItem[] = [
  { 
    type: TButtonType.LINK,
    href: `#${anchors.how}`,
    label: TEXT.HEADER.MENU[0].LABEL,
  },  
  {
    type: TButtonType.LINK,
    href: `#${anchors.features}`,
    label: TEXT.HEADER.MENU[1].LABEL,
  },
  {
    type: TButtonType.LINK,
    href: `#${anchors.pricing}`,
    label: TEXT.HEADER.MENU[2].LABEL,
  },
  {
    type: TButtonType.LINK,
    href: `#${anchors.faq}`,
    label: TEXT.HEADER.MENU[3].LABEL,
  },
  {
    type: TButtonType.BUTTON_ICON,
    href: external_paths.telegram,
    label: TEXT.HEADER.MENU[4].LABEL,
    icon: "telegram",
    variant: "ghost",
  },
  {
    type: TButtonType.BUTTON,
    href: "/test",
    label: TEXT.HEADER.MENU[5].LABEL,
    variant: "secondary",
  },
]

export const FOOTER_MENU_ITEMS: TMenuItem[] = [
  { 
    type: TButtonType.LINK,
    href: `#${anchors.how}`,
    label: TEXT.FOOTER.MENU[0].LABEL,
  },  
  {
    type: TButtonType.LINK,
    href: `#${anchors.features}`,
    label: TEXT.FOOTER.MENU[1].LABEL,
  },
  {
    type: TButtonType.LINK,
    href: `#${anchors.pricing}`,
    label: TEXT.FOOTER.MENU[2].LABEL,
  },
  {
    type: TButtonType.LINK,
    href: `#${anchors.faq}`,
    label: TEXT.FOOTER.MENU[3].LABEL,
  },
  {
    type: TButtonType.BUTTON_ICON,
    href: external_paths.telegram,
    label: TEXT.FOOTER.MENU[4].LABEL,
    icon: "telegram",
    variant: "ghost",
  },
]
