import { env_client } from "../libs/env/client"

export const isProduction = env_client.NEXT_PUBLIC_APP_ENV === "production"
