import type { MetadataRoute } from "next";
import { company } from "@/config/company";
import { segments } from "@/data/segments";
import { solutions } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const staticRoutes = [
    "",
    "/solucoes",
    "/tecnologia",
    "/segmentos",
    "/como-funciona",
    "/calculadora",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...solutions.map((solution) => ({
      url: `${base}/solucoes/${solution.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...segments.map((segment) => ({
      url: `${base}/segmentos/${segment.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
