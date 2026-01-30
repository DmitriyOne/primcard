"use client"

import { useBodyScrollLock, useOpen } from "@/src/06_shared/hooks"

export const useNavbar = () => {
  const { isOpen, onOpen, onClose, setIsOpen, onToggle } = useOpen()
  useBodyScrollLock(isOpen)

  return {
    isOpen,
    onOpen,
    onClose,
    setIsOpen,
    onToggle,
  }
}
