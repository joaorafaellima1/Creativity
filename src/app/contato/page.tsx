import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { company, whatsappUrl } from "@/config/company";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description: "Agende um diagnóstico sobre BI, Copilot, IA aplicada e Microsoft com a Creativity.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <section className="bg-slate-100 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div>
          <Breadcrumbs items={[{ label: "Contato" }]} />
          <p className="text-sm font-semibold uppercase text-teal-700">Contato</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#071827] sm:text-5xl">
            Comece pela decisão que sua empresa precisa melhorar.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Conte onde os dados, relatórios ou licenças estão travando a operação. Vamos organizar o
            cenário e indicar um próximo passo objetivo.
          </p>
          <a
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-900 hover:bg-teal-100"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden className="h-5 w-5" />
            {company.phoneDisplay}
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
