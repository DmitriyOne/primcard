import { Z_INDEX_CLASSES } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"
import { Icon } from "@/src/06_shared/ui"

export const JourneyCoins = () => {
  return (
    <>
      <Icon
        id='usd'
        className="text-[#68FF1F]"
        background={{
          rounded: "full",
          className: cn(
            "w-12 xl:w-18",
            "h-12 xl:h-18",
            "px-4 xl:px-6",
            "py-3.5 xl:py-5",
            "bg-[#325223] drop-shadow-[0_0_20px_rgba(104,255,31,0.35)]",
            "absolute",
            "top-[20px]",
            "right-[20px] lg:right-[115px]",
            Z_INDEX_CLASSES.JOURNEY_COINS,
          ),
        }}
      />
      <Icon
        id="eth"
        className="text-white"
        background={{
          rounded: "full",
          className: cn(
            "w-12 xl:w-18",
            "h-12 xl:h-18",
            "px-4 xl:px-6",
            "py-3.5 xl:py-5",
            "bg-[#444] drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]",
            "absolute",
            "bottom-[20px] lg:bottom-[55px] xl:bottom-[50px]",
            "right-[5px] lg:right-[70px]",
            Z_INDEX_CLASSES.JOURNEY_COINS,
          ),
        }}
      />

      <Icon
        id="btc"
        className="text-yellow"
        background={{
          rounded: "full",
          className: cn(
            "w-10 md:w-12 xl:w-18",
            "h-10 md:h-12 xl:h-18",
            "px-3 md:px-4 xl:px-5",
            "py-2.5 md:py-3.5 xl:py-4",
            "bg-[#836A04] drop-shadow-[0_0_15px_rgba(255,204,0,0.50)]",
            "absolute",
            "bottom-[180px] lg:bottom-[215px]",
            "left-[10px] md:left-[25px] lg:left-[60px]",
            Z_INDEX_CLASSES.JOURNEY_COINS,
          ),
        }}
      />
    </>
  )
}
