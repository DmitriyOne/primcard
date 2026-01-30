import { OVERVIEW_LABELS } from "../constants"
import { LabelItem } from "./label-item"

export const Labels = () => {
  return (
    <>
      {OVERVIEW_LABELS.map((label) => (
        <LabelItem
          key={label.id}
          item={label}
        />
      ))}
    </>
  )
}
