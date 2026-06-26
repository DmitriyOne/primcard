import { TOrderFormSchema } from "../schemas/order-form-schema"

export type TOrderFormErrors = Record<keyof TOrderFormSchema, string[] | null>

export type TOrderFormActionState = {
  success: boolean
  errors: TOrderFormErrors | null
  fields?: Record<keyof TOrderFormSchema, string | null>
}
