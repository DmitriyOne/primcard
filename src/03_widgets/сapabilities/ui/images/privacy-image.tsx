import { Icon } from "@/src/06_shared/ui"
import { cn } from "@/src/06_shared/lib"

export const PrivacyImage = () => {
  return (
    <>
      <div className="w-full h-px md:h-4 pb-68 md:pb-32" />
      <Icon
        id="capabilityPrivacy"
        background={{
          className: cn(
            "w-[250px] h-[185px]",
            "absolute -bottom-[20px] -right-[15px]",
          ),
        }}
      />
    </>
  )
}
