import { JOURNEY_STEP_KEYS } from "../constant"

type TJourneyTextStepAlign = "left" | "center" | "right"

export type TJourneyStepKey = (typeof JOURNEY_STEP_KEYS)[keyof typeof JOURNEY_STEP_KEYS]

export type TJourneyTextStepItem = {
  id: string
  title: string
  description: string
  step: TJourneyStepKey
  align: TJourneyTextStepAlign
}

