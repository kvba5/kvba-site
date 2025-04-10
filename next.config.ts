import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    reactCompiler: true,
    optimizeCss: true,
    optimizeServerReact: true,
    webpackMemoryOptimizations: true,
    optimizePackageImports: ["three"]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "github.com",
        pathname: "/kvba5.png",
        search: "?size=300"
      }
    ]
  }
};

export default nextConfig;
