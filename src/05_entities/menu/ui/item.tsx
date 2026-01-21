"use client"

import type { TMenuItem } from "@/src/05_entities/menu/types"
import { TMenuItemType } from "@/src/05_entities/menu/types"
import { cn } from "@/src/06_shared/lib"
import { ActiveLink, Button, LinkIcon } from "@/src/06_shared/ui"
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
  if (item.type !== TMenuItemType.BUTTON_ICON) return null

  const buttonIconItem = item as Extract<TMenuItem, { type: typeof TMenuItemType.BUTTON_ICON }>

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

const MenuItemButton = ({ item, linkClassName, onClick }: TItemProps) => {
  if (item.type !== TMenuItemType.BUTTON) return null

  const buttonItem = item as Extract<TMenuItem, { type: typeof TMenuItemType.BUTTON }>

  // TODO: change to my link and add href
  // TODO: add titleClassName={linkTitleClassName}
  return (
    <Button
      variant={buttonItem.variant}
      className={cn("text-base md:text-base font-bold", linkClassName)}
      onClick={onClick}
      disabled={item.href.includes("test")}
    >
      {buttonItem.label}
    </Button>
  )
}

const MenuItemLink = ({ item, linkClassName, onClick }: TItemProps) => {
  if (item.type !== TMenuItemType.LINK) return null

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
  [TMenuItemType.BUTTON_ICON]: MenuItemButtonIcon,
  [TMenuItemType.BUTTON]: MenuItemButton,
  [TMenuItemType.LINK]: MenuItemLink,
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
