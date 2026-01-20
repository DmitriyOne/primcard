import { useEffect, useRef } from "react"
import { isServer } from "../utils/is-server"

export const useBodyScrollLock = (isOpen: boolean) => {
  const originalOverflowRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (isServer()) return

    if (isOpen) {
      originalOverflowRef.current = document.body.style.overflow
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = originalOverflowRef.current || ""
    }
  }, [isOpen])
}
