import { TEXT } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Icon, Paragraph } from "@/src/06_shared/ui"
import Image from "next/image"

import worldMapImage from "../../../../public/images/world-map.png"

export const WorldMap = () => {
  return (
    <div
      className={cn(
        "w-[290px] h-[210px]",
        "p-2",
        "bg-gray-medium",
        "rounded-[12px]",
        "overflow-hidden",
        "relative",
        "ml-auto",
        "mb-28",
      )}
    >
      <Paragraph
        className={cn(
          "text-base md:text-lg text-white",
          "absolute",
          "top-4 md:top-6",
          "left-4 md:left-6",
        )}
      >
        {TEXT.HOME.OVERVIEW.MAP.TITLE}
      </Paragraph>
      <Image
        src={worldMapImage}
        alt="World Map"
        fill
        className="object-cover object-[60%]"
      />
      <Icon
        id="dashLineFromBangladeshToCanada"
        background={{
          className: cn(
            "w-[68px] md:w-[58px] h-[30px]",
            "absolute",
            "bottom-[40px] md:bottom-[46px]",
            "right-[48px] md:right-[56px]",
          ),
        }}
      />
      <Icon
        id="dashLineFromBangladeshToChina"
        background={{
          className: cn(
            "w-[22px] h-[68px]",
            "absolute",
            "bottom-[38px] md:bottom-[48px]",
            "right-[20px]",
          ),
        }}
      />
      <Icon
        id="bangladeshFlag"
        background={{
          className: cn(
            "w-6 h-6 md:w-8 md:h-8",
            "p-1 md:p-2",
            "bg-white",
            "shadow-[0_9px_20.4px_0_rgba(0,0,0,0.13)]",
            "absolute",
            "bottom-[12px]",
            "right-[22px]",
          ),
          rounded: "sm",
        }}
      />
      <Icon
        id="canadaFlag"
        background={{
          className: cn(
            "w-6 h-6 md:w-8 md:h-8",
            "p-1 md:p-2",
            "bg-white",
            "shadow-[0_9px_20.4px_0_rgba(0,0,0,0.13)]",
            "absolute",
            "bottom-[44px] md:bottom-[36px]",
            "right-[122px] md:right-[120px]",
          ),
          rounded: "sm",
        }}
      />
      <Icon
        id="chinaFlag"
        background={{
          className: cn(
            "w-6 h-6 md:w-8 md:h-8",
            "p-1 md:p-2",
            "bg-white",
            "shadow-[0_9px_20.4px_0_rgba(0,0,0,0.13)]",
            "absolute",
            "bottom-[96px] md:bottom-[102px]",
            "right-[46px] md:right-[50px]",
          ),
          rounded: "sm",
        }}
      />
    </div>
  )
}
