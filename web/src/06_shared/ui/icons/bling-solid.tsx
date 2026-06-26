
type TProps = {
  className?: string
}

export const IconBlingSolid = ({ className }: TProps) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 33 33"
      className={className}
    >
      <path d="M16.071.75v9.18m0 12.24v9.18M.75 16.05h9.192m12.255 0h9.192" />
    </svg>
  )
}
