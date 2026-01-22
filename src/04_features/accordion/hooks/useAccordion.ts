import { useClickOutside } from "@/src/06_shared/hooks"

export const useAccordion = () => {
  const { ref, isShow: isOpen, setIsShow: setIsOpen, onToggle } = useClickOutside(false)

  return {
    ref,
    isOpen,
    setIsOpen,
    onToggle,
  }
}
