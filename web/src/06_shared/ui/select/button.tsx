import { useId } from "react"

import type { TSelectOption } from "../../types"
import { cn } from "../../libs"
import { Icon } from "../icons"

type TProps = {
  handleToggleOpen: () => void
  isOpen: boolean
  label: string | undefined
  buttonClassName: string | undefined
  buttonWrapperClassName: string | undefined
  buttonIconClassName: string | undefined
  selectedOption: TSelectOption | undefined | null
  placeholder: string | undefined
  isError: boolean
}

export const SelectButton = ({
  handleToggleOpen,
  isOpen,
  label,
  buttonClassName,
  buttonWrapperClassName,
  buttonIconClassName,
  selectedOption,
  placeholder,
  isError,
}: TProps) => {
  const id = useId()

  return (
    <button
      type="button"
      onClick={handleToggleOpen}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-labelledby={label ? id : undefined}
      className={cn(
        "w-full",
        "text-base text-gray-light/50 text-left tracking-tight leading-[140%]",
        selectedOption && "text-white",
        "px-[18px] py-3",
        "bg-gray-medium",
        "rounded-full",
        "focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-light focus-visible:border-gray-light",
        "transition-all duration-200",
        "cursor-pointer",
        "disabled:cursor-not-allowed disabled:opacity-40",
        "border border-solid border-transparent",
        isError && "border-red",
        buttonClassName,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          "gap-x-3",
          "whitespace-nowrap text-ellipsis",
          buttonWrapperClassName,
        )}
      >
        <span className="min-w-0 truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <Icon
          id="arrowShortSolid"
          className="w-full h-full"
          background={{
            className: cn(
              "w-3 h-3 text-gray-light/50",
              "transition-transform duration-200",
              isOpen && "rotate-180",
              buttonIconClassName,
            ),
          }}
        />
      </div>
    </button>

  )
}
