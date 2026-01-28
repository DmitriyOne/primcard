"use client"

import type { TMenuItem } from "@/src/05_entities/menu/types"
import { cn } from "@/src/06_shared/lib"
import { TButtonType } from "@/src/06_shared/types"
import { ActiveLink, Link, LinkIcon } from "@/src/06_shared/ui"
import { useCallback } from "react"

type TProps = {
  item: TMenuItem
  className?: string
  linkClassName?: string
  linkTitleClassName?: string
  onClick?: () => void
}

type TItemProps = Omit<TProps, "className"> & {
  linkClassName?: string
  linkTitleClassName?: string
}

const MenuItemButtonIcon = ({ item, linkClassName, linkTitleClassName, onClick }: TItemProps) => {
  if (item.type !== TButtonType.BUTTON_ICON) return null

  const buttonIconItem = item as Extract<TMenuItem, { type: typeof TButtonType.BUTTON_ICON }>

  return (
    <LinkIcon
      href={item.href}
      icon={{ id: buttonIconItem.icon, position: "left" }}
      title={buttonIconItem.label}
      variant={buttonIconItem.variant}
      className={cn("text-base md:text-base font-bold", linkClassName)}
      titleClassName={linkTitleClassName}
      onClick={onClick}
      target="_blank"
    />
  )
}

const MenuItemButton = ({ item, linkTitleClassName, linkClassName, onClick }: TItemProps) => {
  if (item.type !== TButtonType.BUTTON) return null

  const buttonItem = item as Extract<TMenuItem, { type: typeof TButtonType.BUTTON }>

  return (
    <Link
      href={item.href}
      variant={buttonItem.variant}
      className={cn("text-base md:text-base font-bold", linkClassName, linkTitleClassName)}
      onClick={onClick}
    >
      {buttonItem.label}
    </Link>
  )
}

const MenuItemLink = ({ item, linkClassName, onClick }: TItemProps) => {
  if (item.type !== TButtonType.LINK) return null

  return (
    <ActiveLink
      href={item.href}
      onClick={onClick}
      className={linkClassName}
    >
      {item.label}
    </ActiveLink>
  )
}

const MENU_ITEM = {
  [TButtonType.BUTTON_ICON]: MenuItemButtonIcon,
  [TButtonType.BUTTON]: MenuItemButton,
  [TButtonType.LINK]: MenuItemLink,
} as const

export const MenuItem = ({
  item,
  className,
  linkClassName,
  linkTitleClassName,
  onClick,
}: TProps) => {

  const Comp = MENU_ITEM[item.type]

  const handleClick = useCallback(() => {
    onClick?.()
  }, [onClick])

  return (
    <li
      className={cn(
        "text-center",
        "mb-6 lg:mb-0",
        "lg:mr-8 2lg:mr-14",
        "last:mb-0 md:last:mr-0 lg:last:mr-0",
        className,
      )}
    >
      <Comp
        item={item}
        linkClassName={linkClassName}
        linkTitleClassName={linkTitleClassName}
        onClick={handleClick}
      />
    </li>
  )
}
