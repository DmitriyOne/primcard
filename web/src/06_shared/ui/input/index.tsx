import type { InputHTMLAttributes } from "react"

import { cn } from "../../libs"
import { isValidArray } from "../../utils"

import type { TPosition } from "../../types"

type TProps =
  Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "name"> & {
    label?: string
    position?: TPosition
    className?: string
    containerClassName?: string
    labelClassName?: string
    errors: string[] | null
    inputClassName?: string
  }

export const Input = ({
  id,
  disabled,
  label,
  errors,
  position = "top",
  className,
  containerClassName,
  labelClassName,
  inputClassName,
  required,
  ...props
}: TProps) => {

  const hasErrors = isValidArray(errors)

  return (
    <div
      className={cn(
        "w-full",
        "flex flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "group",
          "flex",
          position === "left" && "flex-row items-center justify-start",
          position === "right" && "flex-row-reverse items-center justify-end",
          position === "top" && "flex-col items-start justify-center",
          position === "bottom" && "flex-col-reverse items-end justify-center",
          containerClassName,
        )}
      >

        {label && (
          <label
            htmlFor={id}
            className={cn(
              "block",
              "text-sm md:text-base text-white",
              "cursor-pointer",
              position === "top" && "mb-2",
              position === "bottom" && "mt-2",
              position === "left" && "mr-2",
              position === "right" && "ml-2",
              disabled && "opacity-40 cursor-not-allowed",
              labelClassName,
            )}
          >
            {label}
            {required && <span className="text-red ml-0.5">*</span>}
          </label>
        )}

        <input
          id={id}
          name={id}
          className={cn(
            "w-full outline-none",
            "px-4 py-3",
            "shrink-0",
            "text-base text-white",
            "whitespace-nowrap text-ellipsis",
            "tracking-tight leading-[140%]",
            "placeholder:text-gray-light/50",
            "bg-gray-medium",
            "rounded-full",
            "border border-solid border-transparent",
            "autofill:border-transparent",
            "autofill:shadow-[inset_0_0_0px_1000px_#191919]",
            "autofill:[-webkit-text-fill-color:white]",
            disabled && "opacity-40 cursor-not-allowed",
            hasErrors && "border-red",
            inputClassName,
          )}
          disabled={disabled}
          {...props}
        />
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
