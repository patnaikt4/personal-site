import type { NextConfig } from "next";

const basePath = "/personal-site";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: `${basePath}/`,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
