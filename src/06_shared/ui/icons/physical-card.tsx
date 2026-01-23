
type TProps = {
  className?: string
}

export const IconPhysicalCard = ({ className }: TProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 55 35"
    >
      <path
        d="M0 4a4 4 0 0 1 4-4h47a4 4 0 0 1 4 4v27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4z"
        fill="url(#A)"
      />
      <path
        d="M5 7a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v4.75a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z"
        fill="#ffe7ab"
      />
      <path
        d="M38.946 21.059h4.407v7.786h-4.407v-7.786z"
        fill="#ff5f00"
      />
      <path
        d="M39.226 24.952c0-1.582.755-2.985 1.917-3.893A5.06 5.06 0 0 0 38.037 20C35.253 20 33 22.215 33 24.952s2.252 4.952 5.037 4.952a5.06 5.06 0 0 0 3.106-1.059c-1.161-.894-1.917-2.311-1.917-3.893z"
        fill="#eb001b"
      />
      <path
        d="M49.299 24.952c0 2.737-2.252 4.952-5.037 4.952a5.06 5.06 0 0 1-3.106-1.059c1.175-.908 1.917-2.311 1.917-3.893s-.755-2.985-1.917-3.893A5.06 5.06 0 0 1 44.262 20c2.784 0 5.037 2.229 5.037 4.952h0z"
        fill="#f79e1b"
      />
      <defs>
        <linearGradient
          id="A"
          x1="27.5"
          y1="0"
          x2="11.536"
          y2="25.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff7714" />
          <stop
            offset="1"
            stopColor="#f33d39"
          />
        </linearGradient>
      </defs>
    </svg>
  )
}
