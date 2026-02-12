import { createEnv } from "@t3-oss/env-nextjs"
import { vercel } from "@t3-oss/env-nextjs/presets-zod"

export const env_server = createEnv({
  server: { },
  experimental__runtimeEnv: process.env,
  extends: [vercel()],
})
