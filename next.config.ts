import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        "*.tsx": {
          loaders: ["@next/mdx-loader"],
        },
      },
    },
  },
  // Configurações para melhorar o HMR
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // Configurações para desenvolvimento
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

export default nextConfig;
