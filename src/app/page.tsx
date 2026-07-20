import type { Metadata } from "next";
import { faqItems } from "@/data/faqs";
import { createMetadata, faqSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { BenefitsSection } from "@/components/marketing/BenefitsSection";
import { CTASection } from "@/components/marketing/CTASection";
import { DashboardShowcaseSection } from "@/components/marketing/DashboardShowcaseSection";
import { DecisionPressureSection } from "@/components/marketing/DecisionPressureSection";
import { DifferentiatorsSection } from "@/components/marketing/DifferentiatorsSection";
import { DiagnosticExplorer } from "@/components/marketing/DiagnosticExplorer";
import { FAQSection } from "@/components/marketing/FAQSection";
import { Hero } from "@/components/marketing/Hero";
import { IntegrationsSection } from "@/components/marketing/IntegrationsSection";
import { JourneySection } from "@/components/marketing/JourneySection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { SegmentsSection } from "@/components/marketing/SegmentsSection";
import { SolutionsSection } from "@/components/marketing/SolutionsSection";
import { TechnologyPortfolioSection } from "@/components/marketing/TechnologyPortfolioSection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = createMetadata({
  title: "Tecnologia, Microsoft e Business Intelligence",
  description:
    "Business Intelligence, licenciamento Microsoft e soluções de cloud, segurança e infraestrutura para empresas com atendimento consultivo.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TechnologyPortfolioSection />
      <DecisionPressureSection />
      <ProblemSection />
      <DiagnosticExplorer />
      <JourneySection />
      <SolutionsSection limit={6} />
      <BenefitsSection />
      <DashboardShowcaseSection />
      <SegmentsSection limit={6} />
      <ProcessSection />
      <IntegrationsSection />
      <DifferentiatorsSection />
      <FAQSection items={faqItems} />
      <CTASection />
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(faqItems)]} />
    </>
  );
}
