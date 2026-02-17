import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type KeyboardEvent,
} from "react"
import type { TSelectOption } from "../types"

type TUseSelectParams = {
  options: TSelectOption[]
  value: string | null
  onChange: (value: string) => void
  selectedOption?: TSelectOption | null
}

export const useSelect = ({
  options,
  value,
  onChange,
  selectedOption: selectedOptionProp,
}: TUseSelectParams) => {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !(selectRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const computedSelectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value],
  )

  const selectedOption = selectedOptionProp || computedSelectedOption

  const selectedIndex = useMemo(
    () => options.findIndex((opt) => opt.value === value),
    [options, value],
  )

  const handleToggleOpen = useCallback(() => {
    if (isOpen) {
      setIsOpen(false)
      setFocusedIndex(-1)
    } else {
      setIsOpen(true)
      setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0)
    }
  }, [isOpen, selectedIndex])

  const handleSelect = useCallback(
    (option: TSelectOption) => {
      onChange(option.value)
      setIsOpen(false)
      setFocusedIndex(-1)
    },
    [onChange],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen) {
        if (
          event.key === "Enter" ||
          event.key === " " ||
          event.key === "ArrowDown" ||
          event.key === "ArrowUp"
        ) {
          event.preventDefault()
          setIsOpen(true)
          setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0)
        }
        return
      }

      switch (event.key) {
        case "Escape":
          event.preventDefault()
          setIsOpen(false)
          setFocusedIndex(-1)
          break

        case "ArrowDown":
          event.preventDefault()
          setFocusedIndex((prev) =>
            prev < options.length - 1 ? prev + 1 : prev,
          )
          break

        case "ArrowUp":
          event.preventDefault()
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev))
          break

        case "Home":
          event.preventDefault()
          setFocusedIndex(0)
          break

        case "End":
          event.preventDefault()
          setFocusedIndex(options.length - 1)
          break

        case "Enter":
        case " ":
          event.preventDefault()
          if (focusedIndex >= 0 && options[focusedIndex]) {
            handleSelect(options[focusedIndex])
          }
          break

        case "Tab":
          setIsOpen(false)
          setFocusedIndex(-1)
          break
      }
    },
    [isOpen, focusedIndex, handleSelect, selectedIndex, options],
  )

  return {
    selectRef,
    isOpen,
    selectedOption,
    selectedIndex,
    handleToggleOpen,
    handleSelect,
    handleKeyDown,
  }
}
