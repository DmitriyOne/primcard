import Image from "next/image"

import { cn } from "@/src/06_shared/libs"
import { Icon } from "@/src/06_shared/ui"

import { Label } from "@/src/05_entities/label/ui"
import { TEXT, Z_INDEX_CLASSES } from "@/src/06_shared/constants"

import iphoneImage from "../../../../public/images/iPhone-2.png"

export const ThankYouBackground = () => {
  return (
    <div
      className={cn(
        "relative",
        "w-full max-w-xs md:max-w-md",
        "h-64 md:h-86",
        "mx-auto",
      )}
    >
      <div
        className={cn(
          "absolute",
          "top-[120px]",
          "left-1/2",
          "transform -translate-x-1/2",
          "w-2xl sm:w-4xl",
          "h-[500px] sm:h-[700px]",
          "bg-[linear-gradient(225deg,rgba(255,119,20,0.8)_24.89%,rgba(243,61,57,0.8)_75.64%)]",
          "filter blur-[110px]",
          "rounded-full",
        )}
      />
      <div
        className={cn(
          "absolute",
          "top-4 sm:top-10",
          "left-1/2",
          "transform -translate-x-1/2",
          "w-[245px] md:w-[345px]",
          "h-[525px] md:h-[725px]",
        )}
      >
        <Image
          src={iphoneImage}
          alt="iPhone"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Icon
        id="blingSolid"
        className="w-full h-full"
        background={{
          className: cn(
            "absolute",
            "top-[-15px] sm:top-0",
            "right-0",
            "w-6 md:w-8",
            "h-6 md:h-8",
            Z_INDEX_CLASSES.THANK_YOU_BACKGROUND_ICON,
          ),
        }}
      />

      <Icon
        id="blingSolid"
        className="w-full h-full"
        background={{
          className: cn(
            "absolute",
            "bottom-[50px] md:bottom-[70px]",
            "left-0",
            "w-4 md:w-5",
            "h-4 md:h-5",
            Z_INDEX_CLASSES.THANK_YOU_BACKGROUND_ICON,
          ),
        }}
      />

      <Icon
        id="doneBgGradient"
        className="w-full h-full"
        background={{
          rounded: "full",
          className: cn(
            "absolute",
            "top-0 sm:top-5",
            "left-[66%]",
            "w-22 md:w-36",
            "h-22 md:h-36",
          ),
        }}
      />

      <Label
        className={cn(
          "absolute",
          "bottom-1/2",
          "transform translate-y-1/2",
          "left-2",
          "py-2 px-4 md:py-2.5 md:px-5",
          "bg-primary text-white",
        )}
        text={TEXT.THANK_YOU.BG_LABEL}
        titleClassName="text-xs"
      />
    </div>
  )
}
