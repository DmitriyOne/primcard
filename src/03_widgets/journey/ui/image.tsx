import { cn } from "@/src/06_shared/lib"
import Image from "next/image"

import iPhoneImage from "../../../../public/images/iPhone.png"

export const JourneyImage = () => {
  return (
    <div
      className={cn(
        "w-[265px] md:w-[310px] xl:w-[390px]",
        "h-[430px] md:h-[450px] xl:h-[600px]",
        "pt-18 md:pt-20 xl:pt-28",
        "px-3.5 md:px-8",
        "flex justify-center items-end",
        "bg-gray-medium rounded-full",
        "overflow-hidden",
        "relative",
      )}
    >
      <div
        className={cn(
          "w-full",
          "h-full",
          "relative",
        )}
      >
        <Image
          src={iPhoneImage}
          alt="iPhone"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}
