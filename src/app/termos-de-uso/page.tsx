import type { Metadata } from "next";
import { company } from "@/config/company";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Termos de Uso",
  description:
    "Base institucional de Termos de Uso da Creativity Tecnologia, preparada para validação jurídica antes da publicação final.",
  path: "/termos-de-uso",
});

export default function TermsPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Termos de Uso" }]} />
        <p className="text-sm font-semibold uppercase text-cyan-700">Termos</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Termos de Uso</h1>
        <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          Este texto é uma base institucional e deve ser validado pela empresa ou assessoria jurídica
          antes da publicação em produção.
        </p>
        <div className="mt-8 grid gap-6 text-base leading-8 text-slate-700 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-950">
          <h2>1. Uso do site</h2>
          <p>
            Este site apresenta informações institucionais sobre a {company.brandName}, suas soluções
            de Business Intelligence, dashboards, integração de dados e automação de relatórios.
          </p>
          <h2>2. Conteúdo demonstrativo</h2>
          <p>
            Dashboards, números, cenários e estudos exibidos no site são demonstrativos, fictícios e
            usados apenas para ilustrar possibilidades de análise.
          </p>
          <h2>3. Informações comerciais</h2>
          <p>
            O envio de formulário ou mensagem pelo WhatsApp não cria obrigação de contratação. Condições,
            escopo e prazos dependem de diagnóstico e proposta específica.
          </p>
          <h2>4. Propriedade intelectual</h2>
          <p>
            Textos, componentes, identidade visual digital e materiais do site não devem ser copiados,
            reproduzidos ou utilizados sem autorização.
          </p>
          <h2>5. Links e integrações</h2>
          <p>
            O site pode conter links para canais externos, como WhatsApp. O uso desses serviços está sujeito
            às políticas e termos das respectivas plataformas.
          </p>
          <h2>6. Alterações</h2>
          <p>
            Estes termos podem ser atualizados para refletir mudanças no site, nas soluções, em requisitos
            legais ou em práticas institucionais.
          </p>
        </div>
      </div>
    </section>
  );
}
