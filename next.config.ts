import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/tecnologia", destination: "/solucoes", permanent: true },
      { source: "/como-funciona", destination: "/metodologia", permanent: true },
      { source: "/segmentos/distribuidoras", destination: "/segmentos/distribuidores", permanent: true },
      { source: "/segmentos/servicos", destination: "/segmentos/empresas-servicos", permanent: true },
      { source: "/solucoes/bi-executivo", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-comercial", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-financeiro", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-estoque", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-compras", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-logistica", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-margem-rentabilidade", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-clientes-crm", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-operacoes", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-recursos-humanos", destination: "/solucoes/business-intelligence", permanent: true },
      { source: "/solucoes/bi-agronegocio", destination: "/segmentos/agronegocio", permanent: true },
      { source: "/solucoes/automacao-relatorios", destination: "/solucoes/automacao-integracoes", permanent: true },
    ];
  },
};

export default nextConfig;
