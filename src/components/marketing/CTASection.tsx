import { whatsappUrl } from "@/config/company";
import { ButtonLink } from "@/components/ui/ButtonLink";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Qual tecnologia sua empresa precisa agora?",
  description = "Conte o desafio para a Creativity. Nós ajudamos a organizar a necessidade e indicar o próximo passo.",
}: CTASectionProps) {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-200">Próximo passo</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink href="/contato" variant="dark" eventName="cta_diagnostico_click">
            Solicitar diagnóstico
          </ButtonLink>
          <ButtonLink
            external
            href={whatsappUrl}
            icon="whatsapp"
            variant="primary"
            eventName="cta_whatsapp_click"
          >
            Falar pelo WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
