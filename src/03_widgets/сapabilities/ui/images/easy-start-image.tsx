import Image from "next/image"
import { cn } from "@/src/06_shared/libs"

import iPhoneImage from "../../../../../public/images/iPhone.png"

export const EasyStartImage = () => {
  return (
    <>
      <div className="w-full h-1 pb-68 2lg:pb-72" />
      <div
        className={cn(
          "absolute -bottom-[450px] right-0",
          "transform translate-x-[40px]",
          "w-[320px]",
          "h-[675px]",
        )}
      >
        <Image
          src={iPhoneImage}
          alt="iPhone"
          fill
          className="object-cover object-center"
        />
      </div>
    </>
  )
}
