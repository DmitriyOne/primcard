import { cn } from "../../libs"

type TProps = {
  label: string
  labelClassName: string | undefined
  required: boolean | undefined
}

export const SelectLabel = ({ label, labelClassName, required }: TProps) => {

  return (
    <label
      className={cn(
        "block",
        "text-sm md:text-base text-white",
        "tracking-tight leading-[140%]",
        "mb-2",
        labelClassName,
      )}
    >
      {label}
      {required && <span className="text-red ml-0.5">*</span>}
    </label>
  )
}
