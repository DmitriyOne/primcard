import { env_client } from "../libs/env/client"

export const isStage = env_client.NEXT_PUBLIC_APP_ENV === "stage"
