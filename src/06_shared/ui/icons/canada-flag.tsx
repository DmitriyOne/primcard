
type TProps = {
  className?: string
}

export const IconCanadaFlag = ({ className }: TProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        d="M12 14.93C10.823 15.61 9.457 16 8 16s-2.823-.39-4-1.07V1.07C5.177.39 6.543 0 8 0s2.823.39 4 1.07V14.93z"
        fill="#eee"
      />
      <path
        d="M4.5 15.195A8 8 0 0 1 0 8.003v-.006A8 8 0 0 1 4.5.805v14.391zM16 8a8 8 0 0 1-4.5 7.195V.805A8 8 0 0 1 16 8zM9.391 9.043l1.391-.696L10.087 8v-.696L8.696 8l.696-1.391h-.696L8 5.565l-.696 1.043h-.696L7.304 8l-1.391-.696V8l-.696.348 1.391.696-.348.696h1.391v1.044h.696V9.739h1.391l-.348-.696z"
        fill="#d80027"
      />
    </svg>
  )
}
