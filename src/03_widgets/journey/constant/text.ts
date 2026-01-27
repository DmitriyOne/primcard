import { TEXT } from "@/src/06_shared/constants"
import type { TJourneyStepKey, TJourneyTextStepItem } from "../types"

export const TEXT_JOURNEY_TEXT_STEPS: TJourneyTextStepItem[] = [
  {
    id: "660b3542-bc72-4fe3-91db-3db036877225",
    title: TEXT.HOME.JOURNEY.STEPS[0].TITLE,
    description: TEXT.HOME.JOURNEY.STEPS[0].DESCRIPTION,
    step: "1",
    align: "right",
  },
  {
    id: "26575215-7cdd-4318-862f-f928977e1856",
    title: TEXT.HOME.JOURNEY.STEPS[1].TITLE,
    description: TEXT.HOME.JOURNEY.STEPS[1].DESCRIPTION,
    step: "2",
    align: "right",
  },
  {
    id: "428deaa2-0697-49d4-bb54-296be75a43c0",
    title: TEXT.HOME.JOURNEY.STEPS[2].TITLE,
    description: TEXT.HOME.JOURNEY.STEPS[2].DESCRIPTION,
    step: "3",
    align: "center",
  },
  {
    id: "327838e2-78f0-438e-8792-a57db2f752b3",
    title: TEXT.HOME.JOURNEY.STEPS[3].TITLE,
    description: TEXT.HOME.JOURNEY.STEPS[3].DESCRIPTION,
    step: "4",
    align: "left",
  },
  {
    id: "60d4400d-fc8a-41f5-a9b8-3855e39298a9",
    title: TEXT.HOME.JOURNEY.STEPS[4].TITLE,
    description: TEXT.HOME.JOURNEY.STEPS[4].DESCRIPTION,
    step: "5",
    align: "left",
  },
]

export const JOURNEY_STEP_KEYS = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
} as const

export const JOURNEY_ACTIVE_STEPS: TJourneyStepKey[] = ["1", "2", "3"]
