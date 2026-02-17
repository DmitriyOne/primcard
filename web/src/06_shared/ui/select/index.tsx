"use client"

import { useId } from "react"
import { cn } from "../../libs"
import { Icon } from "../icons"
import { TEXT, Z_INDEX_CLASSES } from "../../constants"
import { TSelectOption } from "../../types"
import { useSelect } from "../../hooks"

type TProps = {
  options: TSelectOption[]
  value: string | null
  onChange: (value: string) => void
  selectedOption?: TSelectOption | null
  placeholder?: string
  label?: string
  labelClassName?: string
  buttonClassName?: string
  buttonWrapperClassName?: string
  buttonIconClassName?: string
  listContainerClassName?: string
  optionClassName?: string
  optionIconClassName?: string
  className?: string
  containerClassName?: string
}

export const Select = ({
  selectedOption: selectedOptionProps,
  options = [],
  value,
  onChange,
  placeholder,
  label,
  className,
  containerClassName,
  labelClassName,
  buttonClassName,
  buttonWrapperClassName,
  buttonIconClassName,
  listContainerClassName,
  optionClassName,
  optionIconClassName,
}: TProps) => {
  const labelId = useId()

  const {
    selectRef,
    isOpen,
    selectedOption,
    handleToggleOpen,
    handleSelect,
    handleKeyDown,
  } = useSelect({ options, value, onChange, selectedOption: selectedOptionProps })

  return (
    <div className={cn("w-full", className)}>

      {label && (
        <label
          id={labelId}
          className={cn(
            "block",
            "text-sm md:text-base text-white",
            "tracking-tight leading-[140%]",
            "mb-2",
            labelClassName,
          )}
        >
          {label}
        </label>
      )}

      <div
        ref={selectRef}
        className={cn("relative w-full", containerClassName)}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          onClick={handleToggleOpen}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={label ? labelId : undefined}
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

        {isOpen && (
          <div
            role="listbox"
            className={cn(
              "w-full",
              "absolute",
              "mt-2",
              "max-h-60 overflow-auto",
              "bg-gray-medium",
              "rounded-2xl",
              "text-base text-white",
              Z_INDEX_CLASSES.SELECT_OPTION_LIST,
              listContainerClassName,
            )}
          >
            {options.length === 0 ? (
              <div className="px-4 py-3 text-center">
                {TEXT.SELECT.NO_AVAILABLE_OPTIONS}
              </div>
            ) : (
              options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "w-full",
                    "text-left",
                    "text-base",
                    "tracking-tight leading-[140%]",
                    "px-4 py-2.5",
                    "transition-colors duration-150",
                    "cursor-pointer",
                    option.value === value && "bg-white/30",
                    option.value !== value && "hover:bg-white/10",
                    optionClassName,
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-between",
                      "gap-x-3",
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-start",
                        "gap-x-2",
                      )}
                    >
                      {option.iconId && (
                        <Icon
                          id={option.iconId}
                          className="w-full h-full"
                          background={{
                            className: cn(
                              "w-3 h-3",
                              optionIconClassName,
                            ),
                          }}
                        />
                      )}
                      <span>{option.label}</span>
                    </div>
                    {option.value === value && (
                      <Icon
                        id="doneSolid"
                        className="w-full h-full"
                        background={{
                          className: "w-3 h-2 text-gray-light",
                        }}
                      />
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
