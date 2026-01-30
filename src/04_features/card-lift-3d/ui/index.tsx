"use client"

import Image from "next/image"

import { cn } from "@/src/06_shared/libs"
import { useCardLift3d } from "@/src/06_shared/hooks"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants"

import primcardImage from "../../../../public/images/primcard.jpg"

type TProps = {
  className?: string
}

export const CardLift3d = ({ className }: TProps) => {
  const { ref, rotateX, gradientOpacity } = useCardLift3d()

  return (
    <div
      ref={ref}
      className={cn(
        "relative",
        "w-[300px] h-[200px] md:h-[320px] md:w-[500px] lg:w-[650px] lg:h-[420px]",
        className,
      )}
      style={{
        transform: `perspective(400px) rotateX(${rotateX}deg)`,
        transformStyle: "preserve-3d",
        transformOrigin: "bottom center",
      }}
    >
      <div
        className={cn(
          "absolute t-0 l-0 w-full h-full bg-linear-to-b from-black to-transparent",
          Z_INDEX_CLASSES.CARD_HERO_OVERLAY,
        )}
        style={{ opacity: gradientOpacity }}
      />
      <Image
        src={primcardImage}
        alt="Hero card"
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
  )
}
