import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/tecnologia", destination: "/solucoes", permanent: true },
      { source: "/como-funciona", destination: "/solucoes#como-funciona", permanent: true },
      { source: "/calculadora", destination: "/#contato", permanent: true },
      { source: "/segmentos", destination: "/#solucoes", permanent: true },
      { source: "/segmentos/:path*", destination: "/#solucoes", permanent: true },
      { source: "/solucoes/:path*", destination: "/solucoes", permanent: true },
    ];
  },
};

export default nextConfig;
