import { TButtonType, TIconId } from "@/src/06_shared/types"
import { TButtonVariant } from "@/src/06_shared/ui/button/variants"

type TCtaButtonBase = {
  type: TButtonType
  href: string
  label: string
}

type TCtaButtonButton = TCtaButtonBase & {
  type: "button"
  variant: TButtonVariant
}

type TCtaButtonButtonIcon = TCtaButtonBase & {
  type: "button-icon"
  icon: TIconId
  variant: TButtonVariant
}

export type TCtaButtonItem = TCtaButtonButton | TCtaButtonButtonIcon
