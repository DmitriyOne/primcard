"use client"

import { CopyButton } from "@/src/06_shared/ui"
import { useCopyToClipboard } from "../hooks"

type TCopyToClipboardButtonProps = {
  textToCopy: string
  className?: string
  successDuration?: number
}

export const CopyToClipboardButton = ({
  textToCopy,
  className,
}: TCopyToClipboardButtonProps) => {
  const { handleCopy, isCopied } = useCopyToClipboard({ textToCopy, successDuration: 3000 })

  return (
    <CopyButton
      isCopied={isCopied}
      className={className}
      textToCopy={textToCopy}
      onCopy={handleCopy}
    />
  )
}
