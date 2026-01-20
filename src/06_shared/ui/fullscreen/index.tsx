import type { PropsWithChildren } from "react"

type TProps = PropsWithChildren

export const FullScreen = ({ children }: TProps) => {
  return (
    <div className='flex flex-col min-h-screen'>
      {children}
    </div>
  )
}
