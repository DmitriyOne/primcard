import React from "react"

type TProps = {
  className?: string
}

export const IconRoundaboutSolid = ({ className }: TProps) => {
  return (
    <svg
      viewBox="0 0 29 27"
      className={className}
    >
      <path
        d="M10.086 2.381c-2.989.681-5.604 2.481-7.309 5.028s-2.37 5.651-1.86 8.674m9.168-13.703l-4-1.631m4 1.631L8.752 6.084m14.752 13.333c.823-1.657 1.251-3.483 1.248-5.333 0-5.947-4.324-10.881-10-11.835m8.752 17.168l3.915-2.667m-3.915 2.667l-2.085-4M2.774 20.75c1.096 1.642 2.58 2.988 4.32 3.918s3.684 1.417 5.658 1.415a11.96 11.96 0 0 0 8-3.056M2.774 20.75h4.645m-4.645 0v4.667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
