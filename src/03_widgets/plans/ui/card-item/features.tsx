import { cn } from "@/src/06_shared/libs"
import { IconTitle } from "@/src/06_shared/ui"
import type { TPlanCardItem } from "../../types"

type TProps = {
  features: TPlanCardItem["features"]
  isDisabled: boolean
}

export const PlanFeatures = ({ features, isDisabled }: TProps) => {
  return (
    <div
      className={cn(
        "w-full",
        "flex flex-col items-start",
        "gap-y-1",
        "mb-6",
      )}
    >
      {features.map((feature) => (
        <IconTitle
          key={feature}
          title={feature}
          titleClassName="text-sm md:text-base text-gray-light"
          icon={{
            id: "checked",
            position: "left",
            className: cn(
              "w-full h-full",
              "text-primary",
              isDisabled && "text-gray-light",
            ),
            background: {
              className: "w-[12px] h-[8px]",
            },
          }}
        />
      ))}
    </div>
  )
}
