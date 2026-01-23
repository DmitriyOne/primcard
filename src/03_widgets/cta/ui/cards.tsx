import Image from "next/image"

import { cn } from "@/src/06_shared/lib"

import primcardImage from "../../../../public/images/primcard.jpg"

export const Cards = () => (
  <div
    className={cn(
      "absolute",
      "bottom-[105%] md:bottom-9/12 left-0",
      "w-full",
      "h-full",
    )}>
    <div
      className={cn(
        "absolute",
        "bottom-0 left-1/2",
        "transform -translate-x-[60%] md:-translate-x-1/2 -rotate-18",
        "rounded-2xl overflow-hidden",
        "w-[250px] h-[150px] md:w-[350px] md:h-[230px] lg:w-[430px] lg:h-[290px]",
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
        "-bottom-1/7 md:-bottom-1/5 left-1/2",
        "transform -translate-x-2/6 -rotate-6",
        "rounded-2xl overflow-hidden",
        "w-[250px] h-[150px] md:w-[350px] md:h-[230px] lg:w-[430px] lg:h-[290px]",
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

      <div
        className={cn(
          "absolute",
          "top-0 left-0",
          "transform rotate-[8deg]",
          "w-[90%] h-[170px]",
          "bg-[radial-gradient(55.97%_55.97%_at_50%_50%,#FFBD64_0%,#FD582A_100%)]",
          "blur-[100px]",
        )}
      />

    </div>
  </div>
)
