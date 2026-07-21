import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { company, whatsappUrl } from "@/config/company";
import { createMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Contato", description: "Converse com a Creativity sobre cloud, segurança, Microsoft, dados, BI, IA, software, automação e infraestrutura.", path: "/contato" });
export default function ContactPage() { return <><section className="bg-[#f3f5f7] py-16 md:py-24"><div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]"><div><Breadcrumbs items={[{ label: "Contato" }]} /><p className="mt-8 text-sm font-semibold uppercase text-blue-600">Contato</p><h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">Comece pelo desafio que hoje limita a operação.</h1><p className="mt-5 text-base leading-8 text-neutral-600">Conte o cenário. A primeira conversa serve para organizar problema, impacto e prioridade antes de falar em produto ou projeto.</p><ul className="mt-8 grid gap-4 text-sm text-neutral-700"><li><a className="inline-flex items-center gap-3 font-semibold hover:text-blue-700" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5 text-blue-600" />{company.phoneDisplay}</a></li><li><a className="inline-flex items-center gap-3 font-semibold hover:text-blue-700" href={`mailto:${company.email}`}><Mail className="h-5 w-5 text-blue-600" />{company.email}</a></li><li className="inline-flex items-center gap-3 font-semibold"><MapPin className="h-5 w-5 text-blue-600" />{company.city}, {company.state}</li></ul></div><ContactForm /></div></section><JsonLd data={localBusinessSchema()} /></>; }

