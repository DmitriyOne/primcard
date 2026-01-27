import { Icon } from "@/src/06_shared/ui"
import { cn } from "@/src/06_shared/lib"

export const CryptoToFiatImage = () => {
  return (
    <>
      <div className="w-full h-1 pb-68 2lg:pb-72" />
      <Icon
        id="capabilityUsdtCoin"
        background={{
          className: cn(
            "w-40 h-40",
            "absolute bottom-[68px] -left-[26px]",
          ),
        }}
      />
      <Icon
        id="capabilityArrowThroughCoins"
        background={{
          className: cn(
            "w-[345px] h-68",
            "absolute -bottom-[30px] -left-[30px]",
          ),
        }}
      />
      <Icon
        id="capabilityEuroCoin"
        background={{
          className: cn(
            "w-40 h-40",
            "absolute -bottom-[10px] left-[150px]",
          ),
        }}
      />
    </>
  )
}
