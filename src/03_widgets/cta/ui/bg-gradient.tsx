import { cn } from "@/src/06_shared/lib"

export const BgGradient = () => (
  <div
    className={cn(
      "absolute",
      "bottom-0 left-0",
      "w-full h-full",
      "bg-[linear-gradient(0deg,#050100_38.16%,rgba(0,0,0,0.10)_99.96%)]",
      "bg-blend-luminosity",
      "z-3",
    )}
  />
)
