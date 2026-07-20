import type { Metadata } from "next";
import { company } from "@/config/company";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Política de Privacidade",
  description:
    "Base institucional de Política de Privacidade da Creativity Tecnologia, preparada para validação jurídica antes da publicação final.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />
        <p className="text-sm font-semibold uppercase text-cyan-700">LGPD e privacidade</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Política de Privacidade</h1>
        <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          Este texto é uma base institucional e deve ser validado pela empresa ou assessoria jurídica
          antes da publicação em produção.
        </p>
        <div className="mt-8 grid gap-6 text-base leading-8 text-slate-700 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-950">
          <h2>1. Controladora</h2>
          <p>
            A {company.legalName}, marca {company.brandName}, pode tratar dados pessoais fornecidos
            voluntariamente por visitantes que solicitam contato, demonstração ou diagnóstico.
          </p>
          <h2>2. Dados coletados</h2>
          <p>
            O formulário pode coletar nome, empresa, cargo, telefone, e-mail, segmento, número aproximado
            de colaboradores, sistema utilizado, principal necessidade e mensagem.
          </p>
          <h2>3. Finalidades</h2>
          <p>
            Os dados são usados para responder solicitações, entender necessidades comerciais, preparar
            diagnóstico inicial e viabilizar comunicação sobre soluções de Business Intelligence.
          </p>
          <h2>4. Cookies e analytics</h2>
          <p>
            O site possui aviso simples de cookies e estrutura preparada para ferramentas de análise,
            tagueamento e eventos de conversão, que devem ser ativados com consentimento e configuração adequada.
          </p>
          <h2>5. Compartilhamento</h2>
          <p>
            Dados podem ser compartilhados com fornecedores técnicos apenas quando necessário para operação
            do site, hospedagem, recebimento de formulários ou atendimento ao titular.
          </p>
          <h2>6. Direitos do titular</h2>
          <p>
            O titular pode solicitar acesso, correção, atualização ou eliminação de dados, conforme a legislação
            aplicável e os canais oficiais disponibilizados pela empresa.
          </p>
          <h2>7. Segurança</h2>
          <p>
            A Creativity deve adotar medidas técnicas e organizacionais compatíveis com o contexto do tratamento,
            incluindo controle de acesso, cuidado com credenciais e revisão de integrações.
          </p>
        </div>
      </div>
    </section>
  );
}
