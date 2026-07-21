import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { DashboardPreview } from "@/components/dashboards/DashboardPreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { createWhatsappUrl } from "@/config/company";
import { getDashboardByKey } from "@/data/dashboards";
import { getSegmentBySlug, segments } from "@/data/segments";
import { breadcrumbSchema, createMetadata, serviceSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return segments.map((segment) => ({ slug: segment.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const segment = getSegmentBySlug((await params).slug); return segment ? createMetadata({ title: `Tecnologia para ${segment.name}`, description: segment.description, path: `/segmentos/${segment.slug}` }) : {}; }

export default async function SegmentPage({ params }: Props) { const segment = getSegmentBySlug((await params).slug); if (!segment) notFound(); const dashboard = getDashboardByKey(segment.dashboardKey); const whatsapp = createWhatsappUrl(`Olá, gostaria de conversar sobre soluções de tecnologia para ${segment.name}.`); return <>
  <section className="bg-neutral-950 py-16 text-white md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="[&_a]:text-neutral-400 [&_span]:text-neutral-400"><Breadcrumbs items={[{ label: "Segmentos", href: "/segmentos" }, { label: segment.name }]} /></div><span className="mt-8 grid h-12 w-12 place-items-center rounded-md bg-teal-400 text-neutral-950"><Icon name={segment.icon} /></span><p className="mt-8 text-sm font-semibold uppercase text-teal-300">Tecnologia para {segment.name}</p><h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{segment.headline}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">{segment.description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-neutral-950" href="/diagnostico">Fazer diagnóstico <ArrowRight className="h-4 w-4" /></Link><a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> Falar sobre este segmento</a></div></div></section>
  <section className="bg-white py-16 md:py-24"><div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-2"><SegmentList eyebrow="O que precisa ficar visível" title="Prioridades da gestão" items={segment.priorities} /><SegmentList eyebrow="Como evoluir" title="Oportunidades de tecnologia" items={segment.opportunities} /></div></section>
  <section className="bg-[#f3f5f7] py-16 md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold uppercase text-blue-600">Interface demonstrativa</p><h2 className="mt-3 text-3xl font-semibold text-neutral-950">Uma leitura construída para a rotina.</h2></div><span className="self-start rounded-md bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">Dados fictícios</span></div><DashboardPreview dashboard={dashboard} /></div></section>
  <section className="bg-blue-600 py-16 text-white"><div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-3xl font-semibold">Conecte as prioridades de {segment.name.toLowerCase()} em um plano possível.</h2><p className="mt-2 text-blue-100">Comece pelo problema mais relevante e evolua por etapas.</p></div><a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-950" href={whatsapp} target="_blank" rel="noopener noreferrer">Conversar agora <ArrowRight className="h-4 w-4" /></a></div></section>
  <JsonLd data={[serviceSchema(`Tecnologia para ${segment.name}`, segment.description, `/segmentos/${segment.slug}`), breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Segmentos", path: "/segmentos" }, { name: segment.name, path: `/segmentos/${segment.slug}` }])]} />
  </>; }

function SegmentList({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) { return <div className="rounded-lg border border-neutral-200 p-6 sm:p-8"><p className="text-xs font-semibold uppercase text-blue-600">{eyebrow}</p><h2 className="mt-3 text-2xl font-semibold text-neutral-950">{title}</h2><ul className="mt-6 grid gap-4">{items.map((item) => <li className="flex gap-3 text-sm leading-7 text-neutral-700" key={item}><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />{item}</li>)}</ul></div>; }

