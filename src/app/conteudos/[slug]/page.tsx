import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { articles, getArticleBySlug } from "@/data/articles";
import { articleSchema, breadcrumbSchema, createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const article = getArticleBySlug((await params).slug); return article ? createMetadata({ title: article.title, description: article.description, path: `/conteudos/${article.slug}` }) : {}; }

export default async function ArticlePage({ params }: Props) { const article = getArticleBySlug((await params).slug); if (!article) notFound(); return <>
  <article><header className="bg-[#e8f1ff] py-16 md:py-24"><div className="mx-auto max-w-[920px] px-5 sm:px-8"><Breadcrumbs items={[{ label: "Conteúdos", href: "/conteudos" }, { label: article.category }]} /><p className="mt-8 text-sm font-semibold uppercase text-blue-700">{article.category} · {article.status}</p><h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">{article.title}</h1><p className="mt-6 text-lg leading-8 text-neutral-700">{article.description}</p><p className="mt-5 text-sm text-neutral-500">Leitura estimada: {article.readingTime}</p></div></header><div className="mx-auto max-w-[780px] px-5 py-16 sm:px-8 md:py-24"><p className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Conteúdo em revisão editorial. As recomendações devem ser validadas conforme o ambiente, os contratos e os riscos da empresa.</p><div className="mt-10 grid gap-12">{article.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-semibold text-neutral-950">{section.heading}</h2><div className="mt-4 grid gap-4 text-base leading-8 text-neutral-700">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div><div className="mt-14 border-t border-neutral-200 pt-8"><h2 className="text-2xl font-semibold text-neutral-950">Leve a pergunta para o seu cenário.</h2><Link className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white" href="/contato">Conversar com um especialista <ArrowRight className="h-4 w-4" /></Link></div></div></article>
  <JsonLd data={[articleSchema(article), breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Conteúdos", path: "/conteudos" }, { name: article.title, path: `/conteudos/${article.slug}` }])]} />
  </>; }

