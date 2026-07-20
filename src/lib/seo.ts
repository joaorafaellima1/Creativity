import type { Metadata } from "next";
import { company } from "@/config/company";
import { absoluteUrl } from "@/lib/format";
import type { FaqItem } from "@/types/content";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(company.siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.brandName,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${company.brandName} - tecnologia e Business Intelligence`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    legalName: company.legalName,
    url: company.siteUrl,
    telephone: company.phoneDisplay,
    description: company.description,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brandName,
    url: company.siteUrl,
    inLanguage: "pt-BR",
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: company.brandName,
      url: company.siteUrl,
    },
    areaServed: "BR",
    url: absoluteUrl(path),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
