import Image from "next/image"
import { cn } from "@/src/06_shared/libs"

import primcardImage from "../../../../../public/images/primcard.jpg"

export const HighLimitsImage = () => {
  return (
    <>
      <div className="w-full h-1 pb-68 2lg:pb-72" />
      <div
        className={cn(
          "absolute",
          "bottom-0 left-0",
          "w-full",
          "h-1/2",
        )}>
        <div
          className={cn(
            "absolute",
            "bottom-[25px] right-[20px] md:right-[60px]",
            "transform -rotate-18",
            "rounded-2xl overflow-hidden",
            "w-[290px]",
            "h-[185px]",
            "z-1",
          )}>
          <Image
            src={primcardImage}
            alt="Primcard"
            fill
            className="object-cover object-center"
          />
        </div>
        <div
          className={cn(
            "absolute",
            "bottom-0",
            "right-0",
            "transform translate-x-[50px] md:translate-x-[10px] -rotate-6",
            "rounded-2xl overflow-hidden",
            "w-[290px]",
            "h-[185px]",
            "z-2",
          )}>
          <Image
            src={primcardImage}
            alt="Primcard"
            fill
            className="object-cover object-center"
          />

          <div
            className={cn(
              "absolute",
              "top-0 left-0",
              "w-full h-full",
              "bg-gray-light",
              "opacity-40",
            )}
          />

        </div>
      </div>

      <div
        className={cn(
          "w-[80%] h-[100px] md:h-[70px]",
          "absolute",
          "bottom-[60px] left-1/2 -translate-x-1/4 md:-translate-x-1/3",
          "transform -rotate-[8deg]",
          "bg-[radial-gradient(55.97%_55.97%_at_50%_50%,#FFBD64_0%,#FD582A_100%)]",
          "blur-[100px]",
        )}
      />

    </>
  )
}
