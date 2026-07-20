import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitCard } from "@/components/marketing/BenefitCard";

const benefits = [
  "Mais velocidade nas decisões.",
  "Redução do tempo gasto com relatórios.",
  "Maior controle financeiro.",
  "Melhor acompanhamento das metas.",
  "Identificação antecipada de problemas.",
  "Redução de perdas e desperdícios.",
  "Maior previsibilidade.",
  "Informações confiáveis em um único lugar.",
  "Acesso por computador, tablet e celular.",
  "Melhoria da produtividade das equipes.",
];

export function BenefitsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Benefícios"
          title="Menos planilhas. Mais controle. Melhores decisões."
          description="O foco é criar clareza operacional e gerencial sem prometer resultados não comprovados."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit}>{benefit}</BenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
}
