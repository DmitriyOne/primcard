
type TProps = {
  className?: string
}

export const IconBangladeshFlag = ({ className }: TProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
    >
      <circle
        cx="8"
        cy="8"
        r="8"
        fill="#006a4e"
      />
      <path
        d="M8 12a4 4 0 1 0 0-8 4 4 0 1 0 0 8z"
        fill="#f42a40"
      />
    </svg>
  )
}
