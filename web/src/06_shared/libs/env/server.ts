import { createEnv } from "@t3-oss/env-nextjs"

export const env_server = createEnv({
  server: { },
  experimental__runtimeEnv: process.env,
})
