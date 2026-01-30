import { cn } from "@/src/06_shared/libs"
import { PLAN_CARDS } from "../constants"
import { CardItem } from "./card-item"

export const Cards = () => {
  return (
    <div
      className={cn(
        "w-full max-w-[800px] mx-auto px-0.5",
        "flex flex-col md:flex-row",
        "md:items-stretch",
        "gap-y-4 md:gap-x-6",
        "mb-10 md:mb-12",
      )}
    >
      {PLAN_CARDS.map((card) => (
        <CardItem
          key={card.id}
          item={card}
        />
      ))}
    </div>
  )
}
