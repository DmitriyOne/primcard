import { useMemo } from "react"
import { PHILOSOPHY_TAGS } from "../constants"
import { cn } from "@/src/06_shared/libs"
import { InfiniteScroll } from "@/src/04_features/infinite-scroll/ui"
import { IconTitle } from "@/src/06_shared/ui"

export const PhilosophyTags = () => {

  const duplicatedTags = useMemo(() => [
    ...PHILOSOPHY_TAGS.map((tag) => ({ ...tag, copyId: `${tag.id}-first` })),
    ...PHILOSOPHY_TAGS.map((tag) => ({ ...tag, copyId: `${tag.id}-second` })),
  ], [])

  return (
    <InfiniteScroll
      className={cn(
        "lg:[&>*:nth-child(n+6)]:hidden",
        "lg:w-full lg:flex-wrap lg:justify-center lg:gap-x-10 lg:gap-y-8",
      )}
      duration="20s"
    >
      {duplicatedTags.map((tag) => (
        <IconTitle
          key={tag.copyId}
          title={tag.label}
          className="px-2.5 py-2 bg-gray-medium rounded-full shrink-0"
          titleClassName="text-lg md:text-xl"
          icon={{
            id: tag.iconId,
            position: "left",
            className: "w-5 h-5",
            background: {
              className: "bg-primary-gradient rounded-full p-1",
            },
          }}
        />
      ))}
    </InfiniteScroll>
  )
}
