import type { PropsWithChildren } from "react"
import { Header } from "@/src/03_widgets/header/ui"

type TProps = PropsWithChildren

export const Layout = ({ children }: TProps) => {
  return (
    <>
      <Header />
      <main className='flex flex-col flex-1'>
        {children}
      </main>
    </>
  )
}
