import { InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@/src/06_shared/libs"
import { isValidArray } from "@/src/06_shared/utils"
import { IconChecked } from "@/src/06_shared/ui/icons/checked"

type TProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type" | "checked"> & {
  label: ReactNode
  className?: string
  labelClassName?: string
  errors: string[] | null
  checkboxClassName?: string
}

export const Checkbox = ({
  id,
  disabled,
  label,
  errors,
  className,
  labelClassName,
  checkboxClassName,
  defaultChecked,
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
      <label
        htmlFor={id}
        className="flex items-start gap-x-3 cursor-pointer"
      >
        <div
          className={cn(
            "relative shrink-0",
            "flex items-center justify-center",
            "w-5 h-5 md:w-6 md:h-6",
            "rounded-sm",
            "transition-all duration-300",
            "bg-gray-medium",
            "border border-solid border-gray-light/80",
            disabled && "opacity-50 cursor-not-allowed",
            hasErrors && "border-red",
            checkboxClassName,
          )}
        >
          <input
            id={id}
            name={id}
            type="checkbox"
            defaultChecked={defaultChecked}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <IconChecked
            className={cn(
              "w-4 h-4",
              "text-white",
              "transition-all duration-200",
              "opacity-0 scale-0",
              "peer-checked:opacity-100 peer-checked:scale-100",
            )}
          />
        </div>

        <span
          className={cn(
            "flex-1",
            "text-sm md:text-base text-white",
            "select-none",
            disabled && "opacity-40",
            labelClassName,
          )}
        >
          {label}
        </span>
      </label>

      {hasErrors && (
        <ul className="mt-1 list-disc list-inside flex flex-col-reverse gap-y-0.5 text-red">
          {errors.map((error, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={cn(
                "text-sm md:text-base",
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
