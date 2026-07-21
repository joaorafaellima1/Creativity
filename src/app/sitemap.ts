import type { MetadataRoute } from "next";
import { company } from "@/config/company";
import { articles } from "@/data/articles";
import { portfolioSolutions } from "@/data/portfolio";
import { segments } from "@/data/segments";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/solucoes", "/segmentos", "/metodologia", "/cases", "/diagnostico", "/calculadora", "/conteudos", "/sobre", "/contato", "/politica-de-privacidade", "/politica-de-cookies", "/termos-de-uso"];
  const dynamicRoutes = [
    ...portfolioSolutions.map((solution) => `/solucoes/${solution.slug}`),
    ...segments.map((segment) => `/segmentos/${segment.slug}`),
    ...articles.map((article) => `/conteudos/${article.slug}`),
  ];
  return [...staticRoutes, ...dynamicRoutes].map((path) => ({ url: `${company.siteUrl}${path}`, lastModified: new Date(), changeFrequency: path.startsWith("/conteudos/") ? "monthly" : "weekly", priority: path === "" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.9 : 0.75 }));
}

