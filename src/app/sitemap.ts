import type { MetadataRoute } from "next";
import { company } from "@/config/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const staticRoutes = [
    "",
    "/solucoes",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }));
}
