import type { ButtonHTMLAttributes, PropsWithChildren } from "react"
import { IconTitle } from "@/src/06_shared/ui/icon-title"
import type { TIconTitleProps } from "@/src/06_shared/ui"
import type { TButtonVariant } from "./variants"
import { getButtonStyles } from "./styles"

type TButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    variant?: TButtonVariant
  }

export const Button = ({
  variant,
  children,
  className,
  ...props
}: TButtonProps) => {

  const buttonClassName = getButtonStyles(
    variant,
    className,
    "text-sm md:text-lg font-medium tracking-tight leading-none whitespace-pre-line",
  )

  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  )
}

type TButtonIconProps = Omit<TButtonProps, "children"> & TIconTitleProps

export const ButtonIcon = (props: TButtonIconProps) => {
  const { icon, title, titleClassName, ...buttonProps } = props

  const iconTitleProps: TIconTitleProps = {
    icon,
    title,
    titleClassName,
  }
  return (
    <Button {...buttonProps}>
      <IconTitle {...iconTitleProps} />
    </Button>
  )
}
