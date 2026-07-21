import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Factory, Sprout, Truck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { segments } from "@/data/segments";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Soluções de Tecnologia por Segmento", description: "Tecnologia, dados, BI, IA, cloud, segurança e infraestrutura para agronegócio, distribuidores, indústrias e empresas de serviços.", path: "/segmentos" });
const icons = [Sprout, Truck, Factory, BriefcaseBusiness];

export default function SegmentsPage() { return <>
  <section className="bg-[#e8f1ff] py-16 md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8"><Breadcrumbs items={[{ label: "Segmentos" }]} /><p className="mt-8 text-sm font-semibold uppercase text-blue-700">Soluções por segmento</p><h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">A tecnologia muda quando a lógica da operação muda.</h1><p className="mt-6 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">Partimos dos indicadores, riscos e rotinas de cada contexto para conectar infraestrutura, cloud, segurança, dados, software e inteligência.</p></div></section>
  <section className="bg-white py-16 md:py-24"><div className="mx-auto grid max-w-[1280px] gap-5 px-5 sm:px-8 md:grid-cols-2">{segments.map((segment, index) => { const Icon = icons[index]; return <article className="rounded-lg border border-neutral-200 p-6 sm:p-8" key={segment.slug}><span className="grid h-12 w-12 place-items-center rounded-md bg-blue-50 text-blue-600"><Icon className="h-6 w-6" /></span><p className="mt-7 text-xs font-semibold uppercase text-blue-600">{segment.name}</p><h2 className="mt-3 text-2xl font-semibold leading-8 text-neutral-950">{segment.headline}</h2><p className="mt-4 text-sm leading-7 text-neutral-600">{segment.description}</p><Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700" href={`/segmentos/${segment.slug}`}>Conhecer este cenário <ArrowRight className="h-4 w-4" /></Link></article>; })}</div></section>
  <section className="bg-neutral-950 py-16 text-white"><div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-3xl font-semibold">Seu segmento não está na lista?</h2><p className="mt-2 text-neutral-400">A conversa começa pela operação, não pela categoria.</p></div><Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-neutral-950" href="/contato">Apresentar meu cenário <ArrowRight className="h-4 w-4" /></Link></div></section>
  </>; }

