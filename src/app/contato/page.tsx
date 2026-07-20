import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { company, whatsappUrl } from "@/config/company";
import { createMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description:
    "Solicite um diagnóstico, cotação de licenciamento ou contato comercial com a Creativity Tecnologia.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div>
          <Breadcrumbs items={[{ label: "Contato" }]} />
          <p className="text-sm font-semibold uppercase text-cyan-700">Contato</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">
            Conte o que sua empresa precisa resolver.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Pode ser um dashboard, licenciamento Microsoft, cloud, segurança, equipamento ou
            infraestrutura. Nossa equipe organiza a demanda e retorna com os próximos passos.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              className="inline-flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden className="h-5 w-5" />
              Falar pelo WhatsApp: {company.phoneDisplay}
            </a>
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
              Para agilizar, informe a quantidade de usuários, equipamentos ou unidades e o prazo
              desejado, quando souber.
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
