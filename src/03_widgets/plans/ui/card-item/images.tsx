import Image from "next/image"

import type { TPlanCardItem } from "../../types"

import { cn } from "@/src/06_shared/lib"

import primaryImage from "../../../../../public/images/primcard.jpg"
import secondaryImage from "../../../../../public/images/primcard-dark-gray.jpg"

type TProps = {
  type: TPlanCardItem["type"]
}

export const PlanImages = ({ type }: TProps) => {

  const imageSrc = type === "pre-order" ? primaryImage : secondaryImage
  const isGradient = type === "pre-order"

  return (
    <div
      className={cn(
        "w-full max-w-[215px]",
        "h-[215px]",
        "mx-auto mb-6",
        "relative",
      )}
    >
      <div
        className={cn(
          "absolute",
          "bottom-1/2 -left-[20px]",
          "transform translate-y-5/12 -rotate-18",
          "rounded-2xl overflow-hidden",
          "w-full",
          "h-[145px]",
          "z-1",
        )}>
        <Image
          src={imageSrc}
          alt="Primcard"
          fill
          className="object-cover object-center"
        />
      </div>
      <div
        className={cn(
          "absolute",
          "bottom-1/2",
          "-right-[20px]",
          "transform translate-y-2/3 -rotate-6",
          "rounded-2xl overflow-hidden",
          "w-full",
          "h-[145px]",
          "z-2",
        )}>
        <Image
          src={imageSrc}
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

      {isGradient && (
        <div
          className={cn(
            "w-[160px] h-[80px]",
            "absolute",
            "top-1/2 left-1/2",
            "transform -translate-y-1/2 -translate-x-1/2 -rotate-[8deg]",
            "bg-[radial-gradient(55.97%_55.97%_at_50%_50%,#FFBD64_0%,#FD582A_100%)]",
            "blur-[100px]",
          )}
        />
      )}
    </div>
  )
}
