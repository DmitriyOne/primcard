"use client"

import { INPUT_IDS, TEXT, TOrderPlanTextKey } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Input, Select } from "@/src/06_shared/ui"
import { usePhoneByCountry } from "../model"
import { isValidArray } from "@/src/06_shared/utils"

type TProps = {
  textKey: TOrderPlanTextKey
  isPending: boolean
  errors: string[] | null
  required?: boolean
  defaultValue?: string
}

export const PhoneInput = ({ textKey, errors, isPending, required, defaultValue }: TProps) => {
  const { selectedCountry, selectedOption, options, handleSetCountry } = usePhoneByCountry()

  const hasErrors = isValidArray(errors)

  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <label
          htmlFor={INPUT_IDS.phone}
          className={cn(
            "block",
            "text-sm md:text-base text-white",
            "tracking-tight leading-[140%]",
            "mb-2",
            "cursor-pointer",
          )}
        >
          {TEXT.ORDER[textKey].FORM.ITEMS[2].LABEL}
          {required && <span className="text-red ml-0.5">*</span>}
        </label>
        <div
          className={cn(
            "w-full",
            "flex items-center",
            "relative",
            "pr-4",
            "rounded-full",
            "border border-solid border-transparent",
            hasErrors && "border-red",
            "bg-gray-medium",
          )}
        >
          <Select
            isSearchable
            searchPlaceholder={TEXT.ORDER[textKey].FORM.ITEMS[2].SEARCH_PLACEHOLDER}
            className="w-fit"
            contentClassName="static"
            buttonClassName={cn(
              "min-w-[70px]",
              "text-2xl",
              "px-4 py-2",
              "bg-transparent",
              "rounded-none",
              "border-r border-solid border-r-gray-light/30",
            )}
            buttonWrapperClassName="justify-center"
            buttonIconClassName="text-white"
            labelClassName="whitespace-nowrap"
            options={options}
            selectedOption={selectedOption}
            value={selectedOption?.value || null}
            onChange={handleSetCountry}
            errors={null}
          />
          <div className="flex-1 flex items-center">
            <Input
              id={INPUT_IDS.country_code}
              className="w-fit max-w-[72px] min-w-14"
              inputClassName={cn(
                "text-center",
                "px-2 py-0",
                "bg-transparent",
                "rounded-none",
              )}
              errors={null}
              value={`+${selectedCountry?.dial}`}
              readOnly
            />
            <Input
              id={INPUT_IDS.phone}
              className="w-auto flex-1"
              inputClassName={cn(
                "px-0 py-0",
                "bg-transparent",
                "rounded-none",
              )}
              type="tel"
              errors={null}
              disabled={isPending}
              inputMode="tel"
              defaultValue={defaultValue}
            />
          </div>
        </div>
      </div>
      {hasErrors && (
        <ul className='mt-1 list-disc list-inside flex flex-col gap-y-0.5 text-red'>
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
