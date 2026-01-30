import type { NextConfig } from "next"

import "./src/06_shared/libs/env/server"
import "./src/06_shared/libs/env/client"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
