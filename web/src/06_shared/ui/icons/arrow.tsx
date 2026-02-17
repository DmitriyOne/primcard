type TProps = {
  className?: string
}

export const IconArrowFullSolid = ({ className }: TProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 17 11"
      className={className}
    >
      <path
        d="M4.718.187c.327-.267.81-.248 1.115.057s.324.788.057 1.115l-.057.063-3.162 3.162h13.164c.46 0 .833.373.833.833s-.373.833-.833.833H2.673l3.16 3.16c.325.325.325.853 0 1.178s-.853.325-1.178 0L.366 6.3.28 6.205a1.25 1.25 0 0 1 0-1.577l.085-.095L4.654.244l.063-.057z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconArrowShortSolid = ({ className }: TProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 10 6"
      className={className}
    >
      <path
        d="M8.75.75l-4 4-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  )
}
