import { cn } from "@/src/06_shared/libs"

type TProps = {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export const Burger = ({ isOpen, onToggle, className }: TProps) => {

  return (
    <button
      className={cn(
        "lg:hidden",
        "flex flex-col justify-center items-center",
        "w-5 h-4",
        "relative",
        className,
      )}
      onClick={onToggle}
    >
      <span
        className={cn(
          "rounded-xl",
          "absolute top-0 block",
          "w-full h-0.5",
          "bg-white",
          "transition-all duration-300",
          isOpen && "rotate-45 top-[50%]",
        )}
      />
      <span
        className={cn(
          "rounded-xl",
          "absolute top-[calc(50%-1px)] block",
          "w-full h-0.5",
          "bg-white",
          isOpen && "opacity-0",
        )} />
      <span
        className={cn(
          "rounded-xl",
          "absolute bottom-0 block",
          "w-full h-0.5",
          "bg-white",
          "transition-all duration-300",
          isOpen && "-rotate-45 top-[50%]",
        )}
      />
    </button>
  )
}
