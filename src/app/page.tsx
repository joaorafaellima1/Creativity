import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  Factory,
  Gauge,
  Layers3,
  MessageCircle,
  PackageSearch,
  Radar,
  Server,
  ShieldCheck,
  Sparkles,
  Sprout,
  Workflow,
} from "lucide-react";
import { AreaSolutionsTabs } from "@/components/marketing/AreaSolutionsTabs";
import { TechnologyJourney } from "@/components/marketing/TechnologyJourney";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { articles } from "@/data/articles";
import { portfolioPillars, getSolutionsByPillar } from "@/data/portfolio";
import { createWhatsappUrl } from "@/config/company";
import { createMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tecnologia, dados e IA para transformar operação em resultado",
  description: "Cloud, segurança, dados, BI, inteligência artificial, software e infraestrutura conectados para empresas que querem operar e decidir melhor.",
  path: "/",
});

const problems = [
  ["Planilhas manuais", "Equipes gastam horas reunindo dados antes de começar a analisar."],
  ["Indicadores atrasados", "A gestão descobre o desvio quando a margem ou o prazo já foram afetados."],
  ["Sistemas desconectados", "ERP, CRM, arquivos e aplicações contam versões diferentes da operação."],
  ["Licenças sem uso", "Microsoft, cloud e ferramentas crescem sem revisão de perfil, adoção ou custo."],
  ["Riscos invisíveis", "Backup, identidade e continuidade parecem resolvidos até o primeiro incidente."],
  ["Processos repetitivos", "Pessoas qualificadas continuam copiando, conferindo e enviando a mesma informação."],
];

const iconMap = {
  "dados-inteligencia": BarChart3,
  "cloud-produtividade": Cloud,
  "seguranca-continuidade": ShieldCheck,
  "ia-automacao": Bot,
  "software-integracoes": Workflow,
  "infraestrutura-suporte": Server,
};

const method = [
  ["01", "Diagnóstico", "Entendemos a operação, o ambiente atual, os riscos e o objetivo de negócio."],
  ["02", "Estratégia", "Organizamos prioridades, arquitetura, investimento e critérios de sucesso."],
  ["03", "Implementação", "Configuramos, integramos e desenvolvemos com validações frequentes."],
  ["04", "Adoção", "Preparamos usuários e responsáveis para incorporar a solução à rotina."],
  ["05", "Gestão", "Acompanhamos uso, estabilidade, segurança, custo e resultado operacional."],
  ["06", "Evolução", "O ambiente amadurece por ciclos, sem depender de projetos isolados."],
];

const differentials = [
  "Uma visão conectada entre infraestrutura, Microsoft, dados, BI, IA e software.",
  "A recomendação começa pelo impacto operacional, não pelo produto disponível.",
  "Governança, segurança, adoção e continuidade entram no desenho desde o início.",
  "Entregas evolutivas, com critérios claros para decidir o próximo investimento.",
];

const technologies = ["Microsoft 365", "Power BI", "Azure", "Fabric", "Dell", "Lenovo", "AvePoint"];

export default function Home() {
  return (
    <>
      <section className="bg-white px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="relative mx-auto min-h-[calc(100svh-112px)] max-w-[1480px] overflow-hidden rounded-lg bg-neutral-950 text-white">
          <Image alt="Gestor analisando informações para tomar decisões" className="object-cover object-center opacity-45" fill priority sizes="(max-width: 1480px) 100vw, 1480px" src="/hero-decision.jpg" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 grid min-h-[calc(100svh-112px)] min-w-0 max-w-full items-end gap-10 px-5 py-10 sm:px-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-16">
            <div className="min-w-0 max-w-3xl">
              <p className="text-sm font-semibold uppercase text-teal-300">Da infraestrutura à inteligência</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-7xl">Tecnologia que transforma operação em resultado.</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-200 sm:text-lg">Conectamos cloud, segurança, dados, BI, inteligência artificial, software e infraestrutura para sua empresa operar com menos desperdício e decidir com mais clareza.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-teal-300" data-analytics-event="hero_diagnostic" href="/diagnostico">Fazer diagnóstico gratuito <ArrowRight className="h-4 w-4" aria-hidden /></Link>
                <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200" data-analytics-event="hero_solutions" href="/solucoes">Conhecer soluções <ChevronRight className="h-4 w-4" aria-hidden /></Link>
                <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-black/20 px-6 py-3 text-sm font-semibold text-white hover:bg-black/50" data-analytics-event="hero_whatsapp" href={createWhatsappUrl("Olá, gostaria de entender como a Creativity pode conectar tecnologia, operação e dados na minha empresa.")} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden /> Falar com especialista</a>
              </div>
            </div>

            <div className="min-w-0 max-w-full self-end lg:justify-self-end">
              <div className="min-w-0 max-w-full overflow-hidden rounded-lg border border-white/20 bg-neutral-950/85 p-4 shadow-2xl backdrop-blur-sm sm:w-full sm:max-w-[620px] sm:p-6">
                <div className="flex min-w-0 items-center justify-between gap-3 border-b border-white/15 pb-4">
                  <div className="min-w-0"><p className="text-xs font-semibold uppercase text-teal-300">Creativity Decision Flow</p><p className="mt-1 text-sm font-semibold">Da operação à ação</p></div>
                  <span className="shrink-0 rounded-md bg-white/10 px-2 py-2 text-[10px] text-neutral-300 sm:px-3 sm:text-xs">Demonstração</span>
                </div>
                <div className="mt-5 grid grid-cols-5 gap-2 text-center text-[10px] font-semibold uppercase text-neutral-300 sm:text-xs">
                  {["Sistemas", "Dados", "Indicador", "Alerta", "Decisão"].map((step, index) => <div className="relative min-w-0" key={step}><span className={`mx-auto grid h-9 w-9 place-items-center rounded-md sm:h-10 sm:w-10 ${index === 4 ? "bg-teal-400 text-neutral-950" : "bg-white/10 text-white"}`}>{index === 0 ? <Layers3 className="h-4 w-4" /> : index === 1 ? <Database className="h-4 w-4" /> : index === 2 ? <Gauge className="h-4 w-4" /> : index === 3 ? <Radar className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}</span><span className="mt-2 block truncate">{step}</span>{index < 4 ? <span className="absolute left-[70%] top-5 hidden h-px w-[60%] bg-teal-300/60 sm:block" /> : null}</div>)}
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_0.72fr]">
                  <div className="rounded-md bg-white p-4 text-neutral-950"><div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase text-neutral-500">Evolução operacional</p><BarChart3 className="h-4 w-4 text-blue-600" /></div><div className="mt-5 flex h-24 items-end gap-2">{[30, 46, 38, 61, 57, 78, 88].map((height, index) => <span className={`${index > 4 ? "bg-teal-500" : "bg-blue-200"} w-full rounded-t-sm`} key={height} style={{ height: `${height}%` }} />)}</div></div>
                  <div className="rounded-md bg-blue-600 p-4"><Sparkles className="h-4 w-4 text-teal-300" /><p className="mt-5 text-xs font-semibold uppercase text-blue-100">Sinal prioritário</p><p className="mt-2 text-sm font-semibold leading-6">Margem e prazo exigem ação nesta semana.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          <p className="text-center text-xs font-semibold uppercase text-neutral-500">Tecnologias avaliadas conforme o cenário de cada empresa</p>
          <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-4">{technologies.map((technology) => <span className="text-sm font-semibold text-neutral-600 sm:text-base" key={technology}>{technology}</span>)}</div>
          <p className="mt-5 text-center text-xs text-neutral-400">A menção a marcas indica experiência ou compatibilidade técnica e não constitui declaração de parceria ou certificação.</p>
        </div>
      </section>

      <section className="bg-[#f3f5f7] py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-semibold uppercase text-blue-600">O problema não é falta de tecnologia</p><h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">É tecnologia sem conexão com a operação.</h2></div><p className="max-w-2xl text-base leading-8 text-neutral-600 lg:justify-self-end">Quando ferramentas, dados e responsabilidades crescem separadamente, o custo aparece em retrabalho, atraso, risco e decisões sem confiança.</p></div>
          <div className="mt-12 grid border-y border-neutral-300 md:grid-cols-2 lg:grid-cols-3">{problems.map(([title, description], index) => <article className={`p-6 md:p-8 ${index % 3 !== 2 ? "lg:border-r lg:border-neutral-300" : ""} ${index < 3 ? "border-b border-neutral-300" : index < 4 ? "border-b border-neutral-300 md:border-b-0" : ""}`} key={title}><span className="text-sm font-semibold text-blue-600">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold text-neutral-950">{title}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="solucoes">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase text-blue-600">Ecossistema Creativity</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><h2 className="max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Seis frentes conectadas. Uma estratégia para a empresa inteira.</h2><Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900" href="/solucoes">Ver todas as soluções <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">{portfolioPillars.map((pillar) => { const Icon = iconMap[pillar.id as keyof typeof iconMap] ?? Server; const solutions = getSolutionsByPillar(pillar); return <article className="bg-white p-6 sm:p-8" key={pillar.id}><span className="grid h-11 w-11 place-items-center rounded-md bg-blue-50 text-blue-700"><Icon className="h-5 w-5" aria-hidden /></span><h3 className="mt-7 text-xl font-semibold text-neutral-950">{pillar.name}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-600">{pillar.description}</p><dl className="mt-6 grid gap-3 border-y border-neutral-200 py-5 text-sm"><div><dt className="text-xs font-semibold uppercase text-neutral-500">Problema</dt><dd className="mt-1 text-neutral-800">{pillar.problem}</dd></div><div><dt className="text-xs font-semibold uppercase text-neutral-500">Resultado esperado</dt><dd className="mt-1 text-neutral-800">{pillar.result}</dd></div></dl><ul className="mt-5 grid gap-2">{solutions.slice(0, 4).map((solution) => <li key={solution.slug}><Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900" href={`/solucoes/${solution.slug}`}><ChevronRight className="h-4 w-4" aria-hidden />{solution.shortName}</Link></li>)}</ul></article>; })}</div>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8"><p className="text-sm font-semibold uppercase text-teal-300">Jornada tecnológica</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">Evolua por etapas, sem acumular soluções desconectadas.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-neutral-400">Cada estágio resolve uma necessidade e prepara o próximo. A ordem real depende do risco, da maturidade e do objetivo da empresa.</p><TechnologyJourney /></div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8"><p className="text-sm font-semibold uppercase text-blue-600">Soluções por área</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Cada área vê o que precisa para agir.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">A mesma base de dados pode orientar diretoria, comercial, financeiro, estoque, compras, RH e TI sem transformar a gestão em uma coleção de relatórios.</p><AreaSolutionsTabs /></div>
      </section>

      <section className="bg-[#dff5ef] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><span className="grid h-12 w-12 place-items-center rounded-md bg-neutral-950 text-teal-300"><Sprout className="h-6 w-6" aria-hidden /></span><p className="mt-8 text-sm font-semibold uppercase text-emerald-800">Especialização no agronegócio</p><h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Do campo à margem: dados para decidir antes da próxima safra.</h2><p className="mt-5 text-base leading-8 text-neutral-700">Integramos ERP, estoque, compras, comercial e financeiro para construir uma leitura útil de safra, margem, carteira, custo e produtividade. Sem inventar indicador: cada visão nasce da decisão que precisa melhorar.</p><Link className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800" href="/segmentos/agronegocio">Conhecer soluções para o agro <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="rounded-lg border border-emerald-900/15 bg-white p-5 shadow-lg shadow-emerald-950/10 sm:p-7"><div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5"><div><p className="text-xs font-semibold uppercase text-emerald-700">Visão de gestão</p><h3 className="mt-1 font-semibold text-neutral-950">Safra, estoque e resultado</h3></div><span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">Demonstração</span></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{[["Margem", "Por cultura e unidade"], ["Estoque", "Insumos e cobertura"], ["Carteira", "Risco e vencimento"]].map(([label, value]) => <div className="rounded-md border border-neutral-200 p-4" key={label}><p className="text-xs font-semibold uppercase text-neutral-500">{label}</p><p className="mt-3 text-sm font-semibold text-neutral-950">{value}</p></div>)}</div><div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.7fr]"><div className="rounded-md bg-neutral-950 p-5 text-white"><div className="flex items-center justify-between"><p className="text-sm font-semibold">Resultado por período</p><BarChart3 className="h-5 w-5 text-teal-300" /></div><div className="mt-8 flex h-40 items-end gap-3">{[38, 52, 44, 65, 58, 77, 72, 91].map((height, index) => <span className={`${index > 5 ? "bg-teal-300" : "bg-neutral-600"} w-full rounded-t-sm`} key={index} style={{ height: `${height}%` }} />)}</div></div><div className="rounded-md bg-emerald-700 p-5 text-white"><Radar className="h-5 w-5 text-emerald-100" /><p className="mt-8 text-xs font-semibold uppercase text-emerald-100">Prioridade</p><p className="mt-3 text-lg font-semibold leading-7">Antecipar pressão de margem por unidade.</p></div></div></div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8"><p className="text-sm font-semibold uppercase text-blue-600">Creativity 360</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Tecnologia não termina na implantação.</h2><div className="mt-12 border-t border-neutral-300">{method.map(([number, title, description]) => <div className="grid gap-3 border-b border-neutral-300 py-6 sm:grid-cols-[0.15fr_0.35fr_1fr] sm:items-center" key={number}><span className="text-sm font-semibold text-blue-600">{number}</span><h3 className="text-xl font-semibold text-neutral-950">{title}</h3><p className="text-sm leading-7 text-neutral-600">{description}</p></div>)}</div><Link className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700" href="/metodologia">Conhecer a metodologia <ArrowRight className="h-4 w-4" /></Link></div>
      </section>

      <section className="bg-[#edf2ff] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-semibold uppercase text-blue-700">Por que a Creativity</p><h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Uma conversa só, do risco técnico ao resultado da operação.</h2></div><ul className="grid gap-3">{differentials.map((item) => <li className="flex gap-4 rounded-md border border-blue-200 bg-white p-5 text-sm leading-7 text-neutral-700" key={item}><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden /><span>{item}</span></li>)}</ul></div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-semibold uppercase text-blue-600">Cenários demonstrativos</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Veja como um desafio vira uma frente de trabalho.</h2></div><Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700" href="/cases">Ver estrutura dos casos <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[[Factory, "Indústria", "Indicadores comerciais e operacionais divergentes", "Integrar fontes, definir regras e entregar uma visão de gestão."], [PackageSearch, "Distribuição", "Estoque, margem e carteira vistos em momentos diferentes", "Conectar operação e financeiro para priorizar risco e oportunidade."], [Sprout, "Agronegócio", "Safra, insumos e recebíveis sem visão consolidada", "Estruturar dados por unidade, cultura, período e impacto na margem."]].map(([Icon, segment, challenge, approach]) => { const CaseIcon = Icon as typeof Factory; return <article className="rounded-lg border border-neutral-200 p-6" key={String(segment)}><div className="flex items-center justify-between gap-4"><span className="grid h-10 w-10 place-items-center rounded-md bg-neutral-100 text-blue-600"><CaseIcon className="h-5 w-5" /></span><span className="rounded-md bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">Demonstração</span></div><h3 className="mt-6 text-xl font-semibold text-neutral-950">{String(segment)}</h3><p className="mt-5 text-xs font-semibold uppercase text-neutral-500">Desafio</p><p className="mt-2 text-sm leading-6 text-neutral-700">{String(challenge)}</p><p className="mt-5 text-xs font-semibold uppercase text-neutral-500">Abordagem</p><p className="mt-2 text-sm leading-6 text-neutral-700">{String(approach)}</p></article>; })}</div><p className="mt-5 text-xs leading-5 text-neutral-500">Os cenários acima são ilustrativos e não representam clientes, resultados ou projetos concluídos.</p></div>
      </section>

      <section className="bg-neutral-950 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-5 sm:px-8 lg:grid-cols-2"><div className="rounded-lg border border-white/15 p-7 sm:p-9"><Radar className="h-6 w-6 text-teal-300" /><p className="mt-8 text-sm font-semibold uppercase text-teal-300">Diagnóstico de maturidade</p><h2 className="mt-3 text-3xl font-semibold">Descubra onde sua empresa está e o que priorizar.</h2><p className="mt-4 text-sm leading-7 text-neutral-400">Avalie dados, cloud, segurança, Microsoft, BI, IA e processos em cerca de quatro minutos.</p><Link className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-teal-300" href="/diagnostico">Começar diagnóstico <ArrowRight className="h-4 w-4" /></Link></div><div className="rounded-lg border border-white/15 p-7 sm:p-9"><Gauge className="h-6 w-6 text-blue-300" /><p className="mt-8 text-sm font-semibold uppercase text-blue-300">Calculadora de oportunidade</p><h2 className="mt-3 text-3xl font-semibold">Torne visível o custo de rotinas manuais e licenças sem uso.</h2><p className="mt-4 text-sm leading-7 text-neutral-400">Gere uma hipótese responsável para orientar o diagnóstico, sem promessa artificial de economia.</p><Link className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200" href="/calculadora">Calcular oportunidade <ArrowRight className="h-4 w-4" /></Link></div></div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-semibold uppercase text-blue-600">Conteúdos</p><h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Decisões melhores começam por perguntas melhores.</h2></div><Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700" href="/conteudos">Ver todos os conteúdos <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 md:grid-cols-3">{articles.slice(0, 3).map((article) => <article className="flex min-h-72 flex-col bg-white p-6" key={article.slug}><span className="text-xs font-semibold uppercase text-blue-600">{article.category} · {article.status}</span><h3 className="mt-6 text-xl font-semibold leading-7 text-neutral-950">{article.title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{article.description}</p><Link className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-blue-700" href={`/conteudos/${article.slug}`}>Ler conteúdo <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div>
      </section>

      <section className="bg-blue-600 py-16 text-white md:py-24" id="contato">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"><div><p className="text-sm font-semibold uppercase text-blue-100">Próximo passo</p><h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Sua empresa não precisa de mais uma ferramenta isolada.</h2><p className="mt-6 max-w-xl text-base leading-8 text-blue-100">Precisa de clareza sobre o que organizar, integrar, proteger e automatizar primeiro. Vamos começar pelo problema que hoje afeta a operação.</p><a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-blue-300 underline-offset-4" href={createWhatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> Prefere conversar pelo WhatsApp?</a></div><ContactForm compact /></div>
      </section>

      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
