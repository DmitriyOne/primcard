import type { NextConfig } from "next"

import "./src/06_shared/libs/env/server"
import "./src/06_shared/libs/env/client"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "x-robots-tag", value: "noindex" }],
      },
    ]
  },
}

export default nextConfig
