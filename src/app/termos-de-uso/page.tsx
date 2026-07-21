import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { company } from "@/config/company";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Termos de Uso", description: "Condições gerais de uso do site institucional da Creativity Tecnologia.", path: "/termos-de-uso" });
const sections = [
  ["1. Finalidade", `Este site apresenta informações institucionais e comerciais da ${company.brandName} sobre infraestrutura, cloud, segurança, dados, BI, IA, software, automação e suporte.`],
  ["2. Conteúdo demonstrativo", "Interfaces, dashboards, números, cenários e casos identificados como demonstrativos são fictícios e servem apenas para ilustrar abordagens e possibilidades."],
  ["3. Estimativas", "Resultados do diagnóstico e da calculadora são orientativos. Não representam proposta, garantia de economia, prazo, desempenho ou resultado de projeto."],
  ["4. Contratação", "O envio de formulário ou mensagem não cria obrigação de contratação. Escopo, tecnologia, preço, prazo e responsabilidades dependem de diagnóstico e proposta específica."],
  ["5. Marcas e tecnologias", "A referência a fabricantes e produtos não declara automaticamente parceria, certificação ou endosso. Condições de licenciamento devem ser verificadas no momento da contratação."],
  ["6. Propriedade intelectual", "Textos, estrutura, identidade e materiais não podem ser reproduzidos comercialmente sem autorização, ressalvados os direitos de terceiros."],
  ["7. Links externos", "Canais e serviços externos possuem políticas próprias. A Creativity não controla disponibilidade ou práticas dessas plataformas."],
  ["8. Atualizações", `Estes termos podem ser revistos. Dúvidas podem ser enviadas para ${company.email}.`],
];
export default function TermsPage() { return <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-4xl px-5 sm:px-8"><Breadcrumbs items={[{ label: "Termos de Uso" }]} /><p className="mt-8 text-sm font-semibold uppercase text-blue-600">Termos</p><h1 className="mt-4 text-4xl font-semibold text-neutral-950">Termos de Uso</h1><p className="mt-5 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Texto-base sujeito à validação jurídica antes da publicação definitiva.</p><div className="mt-10 grid gap-9">{sections.map(([heading, content]) => <section key={heading}><h2 className="text-2xl font-semibold text-neutral-950">{heading}</h2><p className="mt-3 text-base leading-8 text-neutral-700">{content}</p></section>)}</div></div></section>; }
