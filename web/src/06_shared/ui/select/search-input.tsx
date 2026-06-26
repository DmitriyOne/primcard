import { ChangeEvent } from "react"

import { cn } from "../../libs"
import { Icon } from "../icons"
import { INPUT_IDS } from "../../constants"
import { Input } from "../input"

type TProps = {
  searchPlaceholder: string | undefined
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const SelectSearchInput = ({
  searchPlaceholder,
  handleSearchChange,
}: TProps) => {

  return (
    <div
      className={cn(
        "w-full",
        "flex items-center",
        "gap-x-2",
        "px-4 py-3",
        "border-b border-gray-light/30",
      )}
    >
      <Icon
        id="searchSolid"
        className="w-full h-full text-gray-light/50"
        background={{
          className: cn(
            "w-4 h-4",
          ),
        }}
      />
      <Input
        id={INPUT_IDS.select_search_query}
        className="w-auto flex-1"
        inputClassName={cn(
          "rounded-none",
          "border-none",
          "bg-transparent",
          "px-0 py-0",
        )}
        placeholder={searchPlaceholder}
        errors={null}
        onChange={handleSearchChange}
      />
    </div>

  )
}
