import type { MetadataRoute } from "next"

import { env_client } from "@/src/06_shared/libs/env/client"
import { isProduction } from "@/src/06_shared/utils"

export default function robots(): MetadataRoute.Robots {

  if(!isProduction) return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${env_client.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
  }
}
