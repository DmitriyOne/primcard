import { TIconTitleProps } from "@/src/06_shared/ui"

export const TLabelVariant = {
  primary: "primary",
  secondary: "secondary",
  ghost: "ghost",
} as const

export type TLabelVariant = (typeof TLabelVariant)[keyof typeof TLabelVariant]

export type TLabelItem = {
  text: TIconTitleProps["title"]
  icon?: TIconTitleProps["icon"]
}
