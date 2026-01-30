import type { AnchorHTMLAttributes, PropsWithChildren } from "react"
import NextLink, { type LinkProps } from "next/link"
import type { TButtonVariant } from "@/src/06_shared/ui/button/variants"
import { getButtonStyles } from "@/src/06_shared/ui/button/styles"
import { IconTitle } from "@/src/06_shared/ui/icon-title"
import type { TIconTitleProps } from "@/src/06_shared/ui"

type TBaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren & {
    href: string
    variant?: TButtonVariant
    external?: boolean
  }

type TExternalLinkProps = TBaseLinkProps & {
  external: true
}

type TInternalLinkProps = TBaseLinkProps &
  Omit<LinkProps, "href" | "className"> & {
    external?: false
  }

type TLinkProps = TExternalLinkProps | TInternalLinkProps

export const Link = ({
  variant,
  external = false,
  children,
  className,
  href,
  ...props
}: TLinkProps) => {

  const linkClassName = getButtonStyles(
    variant,
    className,
    "inline-block text-sm md:text-lg font-medium tracking-tight leading-[140%] whitespace-pre-line",
  )

  if (external) {
    const anchorProps = props as Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "href" | "className"
    >
    return (
      <a
        href={href}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  const linkProps = props as Omit<LinkProps, "href" | "className">

  return (
    <NextLink
      href={href}
      className={linkClassName}
      {...linkProps}
    >
      {children}
    </NextLink>
  )
}

type TLinkIconProps = Omit<TLinkProps, "children"> & TIconTitleProps & {
  wrapperClassName?: string
}

export const LinkIcon = (props: TLinkIconProps) => {
  const { wrapperClassName, icon, title, titleClassName, ...linkProps } = props

  const iconTitleProps: TIconTitleProps = {
    icon,
    title,
    titleClassName,
    className: wrapperClassName,
  }
  return (
    <Link {...linkProps}>
      <IconTitle {...iconTitleProps} />
    </Link>
  )
}

