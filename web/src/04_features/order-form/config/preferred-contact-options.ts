import type { TSelectOption } from "@/src/06_shared/types"

// TODO: use enum from database
export const PREFERRED_CONTACT_OPTIONS: TSelectOption[] = [
  { value: "whatsapp", label: "WhatsApp", iconId: "whatsappFilled" },
  { value: "facebook", label: "Facebook", iconId: "facebookFilled" },
  { value: "telegram", label: "Telegram", iconId: "telegramFilled" },
  { value: "discord", label: "Discord", iconId: "discordFilled" },
  { value: "signal", label: "Signal", iconId: "signalFilled" },
  { value: "viber", label: "Viber", iconId: "viberFilled" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "other", label: "Other" },
]
