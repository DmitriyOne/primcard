import type { MetadataRoute } from "next"

import { env_client } from "@/src/06_shared/libs/env/client"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env_client.NEXT_PUBLIC_APP_URL
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
