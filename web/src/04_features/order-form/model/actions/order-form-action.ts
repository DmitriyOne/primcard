"use server"

import z from "zod"
import { redirect } from "next/navigation"

import { INPUT_IDS, paths } from "@/src/06_shared/constants"
import { delay } from "@/src/06_shared/utils"

import { TOrderFormActionState, TOrderFormErrors } from "../types"
import { orderFormSchema } from "../schemas/order-form-schema"

export const orderAction = async (
  _prevState: TOrderFormActionState | null,
  formData: FormData,
): Promise<TOrderFormActionState> => {
  const email = formData.get(INPUT_IDS.email) as string | null
  const contact_method = formData.get(INPUT_IDS.contact_method) as string | null
  const agreement = formData.get(INPUT_IDS.agreement) as string | null

  // Optional fields
  const username = formData.get(INPUT_IDS.username) as string | null
  const phone = formData.get(INPUT_IDS.phone) as string | null
  const country_code = formData.get(INPUT_IDS.country_code) as string | null

  const validatedData = orderFormSchema.safeParse({
    email,
    contact_method,
    agreement,
    username,
    phone,
    country_code,
  })

  if (!validatedData.success) {
    return {
      success: false,
      errors: z.flattenError(validatedData.error).fieldErrors as TOrderFormErrors,
      fields: { 
        email,
        contact_method,
        username,
        phone,
        country_code,
        agreement,
      },
    }
  }

  console.log("validatedData", validatedData.data)

  await delay(3000)

  redirect(paths.thank_you_with_order_id("ABC123"))

  return {
    success: true,
    errors: null,
  }
}
