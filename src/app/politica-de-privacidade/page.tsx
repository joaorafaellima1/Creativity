import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { company } from "@/config/company";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Política de Privacidade", description: "Saiba como a Creativity trata dados pessoais enviados pelos canais do site.", path: "/politica-de-privacidade" });
const sections = [
  ["1. Controladora", `A ${company.legalName}, marca ${company.brandName}, é responsável pelos dados pessoais enviados voluntariamente pelos visitantes nos canais deste site.`],
  ["2. Dados tratados", "O formulário pode tratar nome, empresa, e-mail, telefone, porte, interesse, desafio informado e parâmetros de origem da visita. O diagnóstico e a calculadora permanecem no navegador, salvo quando o visitante decide compartilhar o resultado."],
  ["3. Finalidades", "Os dados são usados para responder solicitações, entender o contexto comercial, organizar a conversa inicial, acompanhar a origem do contato e cumprir obrigações aplicáveis."],
  ["4. Base e consentimento", "O envio do formulário depende de consentimento explícito. O visitante pode optar pelo WhatsApp, sujeito às políticas da plataforma."],
  ["5. Compartilhamento", "Dados podem ser processados por fornecedores de hospedagem, formulário, comunicação e medição estritamente necessários à operação. Não há venda de dados pessoais."],
  ["6. Cookies e analytics", "Cookies essenciais mantêm preferências do site. Ferramentas de analytics somente são carregadas após autorização, conforme a Política de Cookies."],
  ["7. Segurança e retenção", "A Creativity deve adotar controles compatíveis com o risco e manter os dados somente pelo tempo necessário às finalidades, obrigações legais e defesa de direitos."],
  ["8. Direitos do titular", `Solicitações de acesso, correção, informação, oposição ou exclusão podem ser encaminhadas para ${company.email}. O atendimento observará a legislação aplicável.`],
];
export default function PrivacyPage() { return <LegalPage title="Política de Privacidade" eyebrow="LGPD e privacidade" sections={sections} />; }
function LegalPage({ title, eyebrow, sections }: { title: string; eyebrow: string; sections: string[][] }) { return <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-4xl px-5 sm:px-8"><Breadcrumbs items={[{ label: title }]} /><p className="mt-8 text-sm font-semibold uppercase text-blue-600">{eyebrow}</p><h1 className="mt-4 text-4xl font-semibold text-neutral-950">{title}</h1><p className="mt-5 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Texto-base sujeito à validação jurídica antes da publicação definitiva.</p><div className="mt-10 grid gap-9">{sections.map(([heading, content]) => <section key={heading}><h2 className="text-2xl font-semibold text-neutral-950">{heading}</h2><p className="mt-3 text-base leading-8 text-neutral-700">{content}</p></section>)}</div></div></section>; }

