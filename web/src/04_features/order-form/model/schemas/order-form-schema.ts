import { z } from "zod"
import { ORDER_FORM_VALIDATION_MESSAGES } from "./validation-messages"
import { REQUIRED_PHONE_FOR_CONTACT_METHOD, REQUIRED_USERNAME_FOR_CONTACT_METHOD } from "../../config"

const { email, phone, country_code, contact_method, username, agreement } = ORDER_FORM_VALIDATION_MESSAGES

export const orderFormSchema = z.object({
  email: z
    .string()
    .trim()
    .pipe(z.email({ error: email.invalid }).toLowerCase()),
  contact_method: z
    .string({ error: contact_method.required })
    .trim()
    // TODO: use enum from database
    .pipe(z.enum(["whatsapp", "facebook", "telegram", "discord", "signal", "viber", "email", "phone", "other"], { error: contact_method.invalid })),
  username: z
    .string()
    .trim()
    .pipe(z.string().min(2, { error: username.min_length }))
    .optional()
    .nullable(),
  phone: z
    .string()
    .trim()
    .pipe(z.string().regex(/^\+?[0-9\s\-().]{7,20}$/, { error: phone.invalid }).transform((val) => val.replace(/\D+/g, "")))
    .optional()
    .nullable(),
  country_code: z
    .string()
    .trim()
    .pipe(z.string().regex(/^\+[0-9]+$/, { error: country_code.invalid }))
    .optional()
    .nullable(),
  agreement: z.preprocess(
    val => val === "on" || val === "true" || val === true,
    z.boolean().refine(val => val === true, { error: agreement.required }),
  ),
}).superRefine((data, ctx) => {

  if (REQUIRED_USERNAME_FOR_CONTACT_METHOD.includes(data.contact_method) && !data.username?.trim()) {
    ctx.addIssue({
      path: ["username"],
      code: z.ZodIssueCode.custom,
      message: username.required,
    })
  }

  if (REQUIRED_PHONE_FOR_CONTACT_METHOD.includes(data.contact_method) && !data.phone?.trim()) {
    ctx.addIssue({
      path: ["phone"],
      code: z.ZodIssueCode.custom,
      message: phone.required,
    })
  }

  if (REQUIRED_PHONE_FOR_CONTACT_METHOD.includes(data.contact_method) && !data.country_code?.trim()) {
    ctx.addIssue({
      path: ["country_code"],
      code: z.ZodIssueCode.custom,
      message: country_code.required,
    })
  }
})

export type TOrderFormSchema = z.infer<typeof orderFormSchema>
