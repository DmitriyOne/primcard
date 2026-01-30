import { Button as ButtonUI } from "@/src/06_shared/ui"
import { Link } from "@/src/06_shared/ui"
import type { TPlanCardItem } from "../../types"

type TProps = {
  item: TPlanCardItem["button"]
  isDisabled: boolean
}

export const PlanButton = ({ item, isDisabled }: TProps) => {

  if (isDisabled) {
    return (
      <ButtonUI
        variant="secondary"
        className="w-full text-center text-sm md:text-base font-bold"
        disabled
      >
        {item.title}
      </ButtonUI>
    )
  }

  return (
    <Link
      href={item.href}
      variant="secondary"
      className="w-full text-center text-sm md:text-base font-bold"
    >
      {item.title}
    </Link>
  )
}
