import { cn } from "../../libs"

type TProps = {
  label: string
  labelClassName: string | undefined
}

export const SelectLabel = ({ label, labelClassName }: TProps) => {

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
    </label>
  )
}
