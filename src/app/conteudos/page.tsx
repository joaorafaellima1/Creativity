import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { articles, contentCategories } from "@/data/articles";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Conteúdos sobre Tecnologia, Dados e IA", description: "Artigos da Creativity sobre BI, IA, Microsoft 365, Azure, segurança, infraestrutura, automação e agronegócio.", path: "/conteudos" });

export default function ContentsPage() { return <>
  <section className="bg-neutral-950 py-16 text-white md:py-24"><div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="[&_a]:text-neutral-400 [&_span]:text-neutral-400"><Breadcrumbs items={[{ label: "Conteúdos" }]} /></div><p className="mt-8 text-sm font-semibold uppercase text-teal-300">Conteúdos</p><h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Contexto para decidir melhor sobre tecnologia.</h1><p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">Guias diretos para lideranças que precisam avaliar custo, risco, adoção e resultado antes de contratar a próxima ferramenta.</p></div></section>
  <section className="border-b border-neutral-200 bg-white py-8"><div className="mx-auto flex max-w-[1280px] flex-wrap gap-2 px-5 sm:px-8">{contentCategories.map((category) => <span className="rounded-md border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-600" key={category}>{category}</span>)}</div></section>
  <section className="bg-[#f3f5f7] py-16 md:py-24"><div className="mx-auto grid max-w-[1280px] gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <article className="flex min-h-80 flex-col rounded-lg border border-neutral-200 bg-white p-6" key={article.slug}><span className="text-xs font-semibold uppercase text-blue-600">{article.category}</span><h2 className="mt-6 text-2xl font-semibold leading-8 text-neutral-950">{article.title}</h2><p className="mt-3 text-sm leading-6 text-neutral-600">{article.description}</p><div className="mt-auto flex items-center justify-between gap-4 pt-7"><span className="text-xs text-neutral-500">{article.readingTime} · {article.status}</span><Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700" href={`/conteudos/${article.slug}`}>Ler <ArrowRight className="h-4 w-4" /></Link></div></article>)}</div></section>
  </>; }

