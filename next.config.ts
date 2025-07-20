import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Para Turbopack com MDX (Next.js 15+)
  experimental: {
    turbo: {
      rules: {
        "*.mdx": {
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

  // Extensões de página se usar MDX
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default nextConfig;
