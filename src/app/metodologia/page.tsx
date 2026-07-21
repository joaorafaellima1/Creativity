import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { implementationSteps } from "@/data/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Metodologia Creativity 360", description: "Conheça a metodologia da Creativity para diagnóstico, estratégia, implantação, adoção, gestão e evolução contínua de tecnologia.", path: "/metodologia" });

const stages = [
  ["01", "Diagnóstico", "Negócio, processos, dados, ambiente, riscos, contratos e prioridades.", "Mapa do cenário e problemas que merecem ação."],
  ["02", "Estratégia", "Arquitetura, escopo, responsabilidades, investimento e critérios de sucesso.", "Roadmap executivo com ordem e dependências."],
  ["03", "Implementação", "Configuração, integração, desenvolvimento, migração, testes e validação.", "Solução funcional e documentada."],
  ["04", "Adoção", "Treinamento por perfil, comunicação, responsáveis e acompanhamento de uso.", "Tecnologia incorporada à rotina."],
  ["05", "Gestão", "Segurança, estabilidade, custo, níveis de serviço e resultado operacional.", "Ambiente acompanhado com indicadores."],
  ["06", "Evolução", "Revisão de resultados, novas necessidades e melhoria contínua.", "Próximo ciclo priorizado com clareza."],
];

export default function MethodologyPage() {
  return <>
    <section className="bg-neutral-950 py-16 text-white md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="[&_a]:text-neutral-400 [&_span]:text-neutral-400"><Breadcrumbs items={[{ label: "Metodologia" }]} /></div><p className="mt-8 text-sm font-semibold uppercase text-teal-300">Creativity 360</p><h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Da primeira pergunta à evolução contínua.</h1><p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">Um método para evitar projetos isolados, reduzir risco de implantação e conectar cada decisão técnica ao que a operação precisa melhorar.</p></div></section>
    <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="border-t border-neutral-300">{stages.map(([number, title, activity, output]) => <article className="grid gap-5 border-b border-neutral-300 py-7 lg:grid-cols-[0.12fr_0.28fr_0.8fr_0.8fr]" key={number}><span className="text-sm font-semibold text-blue-600">{number}</span><h2 className="text-xl font-semibold text-neutral-950">{title}</h2><div><p className="text-xs font-semibold uppercase text-neutral-500">O que acontece</p><p className="mt-2 text-sm leading-7 text-neutral-600">{activity}</p></div><div><p className="text-xs font-semibold uppercase text-neutral-500">Saída esperada</p><p className="mt-2 flex gap-2 text-sm leading-7 text-neutral-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600" />{output}</p></div></article>)}</div></div></section>
    <section className="bg-[#e8f1ff] py-16"><div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="text-sm font-semibold uppercase text-blue-700">Implementação por solução</p><h2 className="mt-4 text-3xl font-semibold text-neutral-950">Cada frente respeita o mesmo princípio.</h2></div><div className="grid gap-3">{implementationSteps.map(([title, description], index) => <div className="flex gap-4 rounded-md bg-white p-4" key={title}><span className="font-semibold text-blue-600">{index + 1}</span><p className="text-sm leading-6 text-neutral-700"><strong className="text-neutral-950">{title}:</strong> {description}</p></div>)}</div></div></section>
    <section className="bg-blue-600 py-16 text-white"><div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-3xl font-semibold">Descubra por qual etapa sua empresa deve começar.</h2><p className="mt-2 text-blue-100">O diagnóstico organiza o cenário antes de qualquer recomendação.</p></div><Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-950" href="/diagnostico">Fazer diagnóstico <ArrowRight className="h-4 w-4" /></Link></div></section>
  </>;
}

