import { useCallback, useState } from "react"

type TUseCopyToClipboardOptions = {
  textToCopy: string
  onSuccess?: () => void
  successDuration?: number
}

export const useCopyToClipboard = (options: TUseCopyToClipboardOptions) => {
  const { textToCopy, onSuccess, successDuration } = options
  
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setIsCopied(true)
      onSuccess?.()

      setTimeout(() => {
        setIsCopied(false)
      }, successDuration)
    } catch (error) {
      // TODO: add sentry 
      console.error("Failed to copy text:", error)
    }
  }, [textToCopy, onSuccess, successDuration])

  return {
    handleCopy,
    isCopied,
  }
}
