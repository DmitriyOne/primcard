type TProps = {
  className?: string
}

export const IconMinus = ({ className }: TProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      stroke="#ff7714"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.333 10h13.333" />
    </svg>
  )
}
