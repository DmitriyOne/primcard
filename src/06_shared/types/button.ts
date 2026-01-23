export const TButtonType = {
  LINK: "link",
  BUTTON: "button",
  BUTTON_ICON: "button-icon",
} as const

export type TButtonType = (typeof TButtonType)[keyof typeof TButtonType]
