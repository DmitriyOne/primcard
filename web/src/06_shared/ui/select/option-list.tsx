import { TEXT } from "../../constants"
import { cn } from "../../libs"
import type { TSelectOption } from "../../types"
import { isValidArray } from "../../utils"
import { Icon } from "../icons"

type TProps = {
  options: TSelectOption[]
  value: string | null
  handleSelect: (option: TSelectOption) => void
  optionClassName: string | undefined
  optionIconClassName: string | undefined
}

export const SelectOptionList = ({
  options,
  value,
  handleSelect,
  optionClassName,
  optionIconClassName,
}: TProps) => {

  if (!isValidArray(options)) {
    return (
      <div className="px-4 py-3 text-center">
        {TEXT.SELECT.NO_AVAILABLE_OPTIONS}
      </div>
    )
  }

  return (
    <>
      {options.map((option) => (
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
      ))}
    </>
  )
}
