import Image from "next/image"
import { cn } from "@/src/06_shared/lib"
import primcardFlattenedImage from "../../../../../public/images/primcard-flattened.jpg"
import primcardFlattenedGrayImage from "../../../../../public/images/primcard-flattened-gray.png"

export const CashAccessImage = () => {
  return (
    <>
      <div className="w-full h-px md:h-4 pb-68 md:pb-32" />

      <div
        className={cn(
          "w-[250px]",
          "h-[85px]",
          "absolute",
          "bottom-[100px] lg:bottom-[35px] right-1/4 md:right-[140px]",
          "transform -rotate-4",
        )}
      >
        <Image
          src={primcardFlattenedGrayImage}
          alt="flattened primcard"
          fill
          className="object-cover object-center"
        />
      </div>

      <div
        className={cn(
          "w-[250px]",
          "h-[85px]",
          "absolute",
          "bottom-[30px] lg:-bottom-[30px] right-0",
          "transform translate-x-[10px] rotate-4",
          "rounded-lg overflow-hidden",
        )}
      >
        <Image
          src={primcardFlattenedImage}
          alt="flattened primcard"
          fill
          className="object-cover object-center"
        />
      </div>

      <div
        className={cn(
          "w-[200px] h-[80px] md:h-[50px]",
          "absolute",
          "bottom-[40px] right-[10px] md:right-[40px]",
          "transform -rotate-[8deg]",
          "bg-[radial-gradient(55.97%_55.97%_at_50%_50%,#FFBD64_0%,#FD582A_100%)]",
          "blur-[90px] md:blur-[100px]",
        )}
      />
    </>
  )
}
