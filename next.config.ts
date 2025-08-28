import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  outputFileTracingRoot: __dirname,
  assetPrefix: '',
  basePath: '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
