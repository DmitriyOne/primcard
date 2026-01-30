import { TButtonType } from "@/src/06_shared/types"
import { TCtaButtonItem } from "../types"
import { external_paths, paths, TEXT } from "@/src/06_shared/constants"

export const CTA_BUTTONS: TCtaButtonItem[] = [
  {
    type: TButtonType.BUTTON,
    href: paths.order("pre"),
    label: TEXT.HOME.CTA.BUTTONS[0].LABEL,
    variant: "secondary",
  },
  {
    type: TButtonType.BUTTON_ICON,
    href: external_paths.telegram,
    label: TEXT.HOME.CTA.BUTTONS[1].LABEL,
    icon: "telegram",
    variant: "ghost",
  },
]
