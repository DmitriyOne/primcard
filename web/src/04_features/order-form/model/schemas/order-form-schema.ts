import { z } from "zod"
import { parsePhoneNumberWithError } from "libphonenumber-js/mobile"

import { ORDER_FORM_VALIDATION_MESSAGES } from "./validation-messages"
import { INPUT_IDS } from "@/src/06_shared/constants"

const { email, phone, country_code, contact_method, username, agreement } = ORDER_FORM_VALIDATION_MESSAGES

export const orderFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { error: email.required })
    .pipe(z.email({ error: email.invalid }).toLowerCase()),
  contact_method: z
    .string({ error: contact_method.required })
    .trim()
    .min(1, { error: contact_method.required })
    // TODO: use enum from database
    .pipe(z.enum(["whatsapp", "facebook", "telegram", "discord", "signal", "viber", "email", "phone", "other"], { error: contact_method.invalid })),
  username: z
    .string()
    .trim()
    .pipe(z.string().min(1, { error: username.required }).min(2, { error: username.min_length }))
    .optional()
    .nullable(),
  phone: z
    .string()
    .trim()
    .min(1, { error: phone.required })
    .min(7, { error: phone.min_length })
    .max(15, { error: phone.max_length })
    .pipe(z.string().regex(/^\+?[0-9\s\-().]/, { error: phone.invalid }).transform((val) => val.replace(/\D+/g, "")))
    .optional()
    .nullable(),
  country_code: z
    .string()
    .trim()
    .min(1, { error: country_code.required })
    .pipe(z.string().regex(/^\+[0-9]+$/, { error: country_code.invalid }))
    .optional()
    .nullable(),
  agreement: z.preprocess(
    val => val === "on" || val === "true" || val === true,
    z.boolean().refine(val => val === true, { error: agreement.required }),
  ),
}).superRefine((data, ctx) => {

  if(data.phone && data.country_code) {
    try {
      const fullNumber = `${data.country_code}${data.phone}`
      const phoneNumber = parsePhoneNumberWithError(fullNumber)
      
      if (!phoneNumber.isValid()) {
        ctx.addIssue({
          path: [INPUT_IDS.phone],
          code: z.ZodIssueCode.custom,
          message: phone.invalid_format,
        })
      }

    } catch (error) {
      // TODO: add sentry
      console.log("error", error)
      ctx.addIssue({
        path: [INPUT_IDS.phone],
        code: z.ZodIssueCode.custom,
        message: phone.invalid,
      })
    }
  }
})

export type TOrderFormSchema = z.infer<typeof orderFormSchema>
