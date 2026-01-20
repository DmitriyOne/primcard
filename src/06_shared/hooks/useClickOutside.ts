import { useCallback, useEffect, useRef } from "react"

import { useOpen } from "@/src/06_shared/hooks"
import { isServer } from "@/src/06_shared/utils"

export const useClickOutside = (initialIsVisible: boolean) => {
  const ref = useRef<HTMLElement | null>(null)
  
  const { 
    isOpen: isShow, 
    onOpen: onShow,
    onClose: onHide, 
    onToggle, 
    setIsOpen: setIsShow,
  } = useOpen(initialIsVisible)

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onHide()
    }
  }, [onHide])

  useEffect(() => {
    if (isServer()) return

    document.addEventListener("click", handleClickOutside, true)

    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [handleClickOutside])

  return { 
    ref, 
    isShow, 
    setIsShow, 
    onToggle,
    onShow,
    onHide,
  }
}
