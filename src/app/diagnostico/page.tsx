import type { Metadata } from "next";
import { MaturityDiagnostic } from "@/components/forms/MaturityDiagnostic";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Diagnóstico de Maturidade em Tecnologia e Dados",
  description: "Avalie gratuitamente a maturidade da empresa em dados, cloud, segurança, Microsoft, BI, IA e automação.",
  path: "/diagnostico",
});

export default function DiagnosticPage() {
  return (
    <>
      <section className="bg-[#e8f1ff] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Breadcrumbs items={[{ label: "Diagnóstico" }]} />
          <p className="mt-8 text-sm font-semibold uppercase text-blue-700">Diagnóstico gratuito</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">Descubra o próximo passo da evolução tecnológica da sua empresa.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">Em poucos minutos, identifique o nível atual, os pontos mais estruturados e três prioridades para conectar tecnologia, operação e gestão.</p>
        </div>
      </section>
      <section className="bg-neutral-100 py-12 md:py-20">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-8"><MaturityDiagnostic /></div>
      </section>
    </>
  );
}
