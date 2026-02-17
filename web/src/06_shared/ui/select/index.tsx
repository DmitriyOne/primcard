"use client"

import { cn } from "../../libs"
import { Z_INDEX_CLASSES } from "../../constants"
import type { TSelectOption } from "../../types"
import { useSelect } from "../../hooks"
import { SelectButton } from "./button"
import { SelectSearchInput } from "./search-input"
import { SelectOptionList } from "./option-list"
import { SelectLabel } from "./label"
import { isValidArray } from "../../utils"

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
  contentClassName?: string
  isSearchable?: boolean
  searchPlaceholder?: string
  required?: boolean
  errors?: string[] | null
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
  contentClassName,
  labelClassName,
  buttonClassName,
  buttonWrapperClassName,
  buttonIconClassName,
  listContainerClassName,
  optionClassName,
  optionIconClassName,
  isSearchable,
  searchPlaceholder,
  required,
  errors,
}: TProps) => {

  const {
    selectRef,
    isOpen,
    filteredOptions,
    selectedOption,
    handleToggleOpen,
    handleSelect,
    handleKeyDown,
    handleSearchChange,
  } = useSelect({
    options,
    value,
    onChange,
    selectedOption: selectedOptionProps,
    isSearchable,
  })

  const hasErrors = isValidArray(errors)

  return (
    <div className={cn("w-full", "flex flex-col", className)}>
      <div className={cn("w-full", containerClassName)}>

        {label && (
          <SelectLabel
            label={label}
            labelClassName={labelClassName}
            required={required}
          />
        )}

        <div
          ref={selectRef}
          className={cn("relative w-full", contentClassName)}
          onKeyDown={handleKeyDown}
        >
          <SelectButton
            handleToggleOpen={handleToggleOpen}
            isOpen={isOpen}
            label={label}
            buttonClassName={buttonClassName}
            buttonWrapperClassName={buttonWrapperClassName}
            buttonIconClassName={buttonIconClassName}
            selectedOption={selectedOption}
            placeholder={placeholder}
            isError={hasErrors}
          />
          {isOpen && (
            <div
              role="listbox"
              className={cn(
                "w-full",
                "absolute",
                "mt-2",
                "bg-gray-medium",
                "rounded-2xl",
                "text-base text-white",
                Z_INDEX_CLASSES.SELECT_OPTION_LIST,
                listContainerClassName,
              )}
            >
              {isSearchable && (
                <SelectSearchInput
                  searchPlaceholder={searchPlaceholder}
                  handleSearchChange={handleSearchChange}
                />
              )}
              <div className="w-full flex flex-col max-h-40 overflow-auto rounded-b-2xl">
                <SelectOptionList
                  options={filteredOptions}
                  value={value}
                  handleSelect={handleSelect}
                  optionClassName={optionClassName}
                  optionIconClassName={optionIconClassName}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {hasErrors && (
        <ul className='mt-1 list-disc list-inside flex flex-col-reverse gap-y-0.5 text-red'>
          {errors.map((error, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={cn(
                "text-sm md:text-base ",
                "tracking-tight leading-[140%]",
              )}
            >
              {error}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
