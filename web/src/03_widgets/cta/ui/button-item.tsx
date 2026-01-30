import { cn } from "@/src/06_shared/libs"
import { Link, LinkIcon } from "@/src/06_shared/ui"
import { TCtaButtonItem } from "../types"
import { TButtonType } from "@/src/06_shared/types"

type TProps = {
  item: TCtaButtonItem
  linkClassName?: string
  linkTitleClassName?: string
}

type TItemProps = Omit<TProps, "className"> & {
  linkClassName?: string
  linkTitleClassName?: string
}

const SimpleButton = ({ item, linkClassName }: TItemProps) => {
  if (item.type !== TButtonType.BUTTON) return null

  const buttonItem = item as Extract<TCtaButtonItem, { type: typeof TButtonType.BUTTON }>

  return (
    <Link
      href={item.href}
      variant={buttonItem.variant}
      className={cn(
        "w-full sm:w-fit",
        "text-base md:text-xl font-bold",
        linkClassName,
      )}
    >
      {buttonItem.label}
    </Link>
  )
}

const ButtonIcon = ({ item, linkClassName, linkTitleClassName }: TItemProps) => {
  if (item.type !== TButtonType.BUTTON_ICON) return null

  const buttonIconItem = item as Extract<TCtaButtonItem, { type: typeof TButtonType.BUTTON_ICON }>

  return (
    <LinkIcon
      href={item.href}
      icon={{ id: buttonIconItem.icon, position: "left" }}
      title={buttonIconItem.label}
      variant={buttonIconItem.variant}
      className={cn("w-full sm:w-fit", linkClassName)}
      wrapperClassName="justify-center"
      titleClassName={cn("text-base md:text-xl font-bold", linkTitleClassName)}
      target="_blank"
    />
  )
}

const BUTTON_ITEM = {
  [TButtonType.BUTTON_ICON]: ButtonIcon,
  [TButtonType.BUTTON]: SimpleButton,
} as const

export const CtaButtonItem = ({ item, linkClassName, linkTitleClassName }: TProps) => {
  const Comp = BUTTON_ITEM[item.type]

  return (
    <Comp
      item={item}
      linkClassName={linkClassName}
      linkTitleClassName={linkTitleClassName}
    />
  )
}
