import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/src/06_shared/libs"
import { Icon } from "../icons"

type TCopyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  textToCopy: string
  isCopied: boolean
  onCopy: () => void
}

export const CopyButton = ({
  textToCopy,
  isCopied,
  onCopy,
  className,
  ...props
}: TCopyButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center",
        "cursor-pointer",
        isCopied && "cursor-default",
        className,
      )}
      onClick={onCopy}
      {...props}
    >
      {textToCopy}
      <Icon
        id={isCopied ? "done" : "copy"}
        className="w-6 h-6"
      />
    </button>
  )
}
