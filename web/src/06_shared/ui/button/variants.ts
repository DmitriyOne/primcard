export type TButtonVariant = "primary" | "secondary" | "ghost"

type TVariantStyle = {
  base: string
  hover: string
}

export const variantStyles: Record<TButtonVariant, TVariantStyle> = {
  primary: {
    base: "bg-primary border-primary text-white",
    hover: "lg:hover:not-disabled:bg-transparent lg:hover:not-disabled:border-primary lg:hover:not-disabled:text-primary",
  },
  secondary: {
    base: "bg-white border-white text-dark",
    hover: "lg:hover:not-disabled:bg-transparent lg:hover:not-disabled:border-white lg:hover:not-disabled:text-white",
  },
  ghost: {
    base: "bg-transparent text-white border-white",
    hover: "lg:hover:not-disabled:bg-white lg:hover:not-disabled:border-dark lg:hover:not-disabled:text-dark",
  },
}
