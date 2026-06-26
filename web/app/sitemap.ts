import type { MetadataRoute } from "next"
import { isProduction } from "@/src/06_shared/utils"

import { env_client } from "@/src/06_shared/libs/env/client"
import { paths } from "@/src/06_shared/constants/paths"

export default function sitemap(): MetadataRoute.Sitemap {
  
  if(!isProduction) return []

  const baseUrl = env_client.NEXT_PUBLIC_APP_URL
  
  return [
    {
      url: baseUrl + paths.home,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
