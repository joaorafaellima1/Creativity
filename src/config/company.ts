const whatsappMessage =
  "Olá, conheci a Creativity e gostaria de conversar sobre o cenário de tecnologia da minha empresa.";

export const company = {
  legalName: "CREATIVITY TECNOLOGIA LTDA",
  brandName: "Creativity",
  domain: "creativity.eti.br",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://creativity.eti.br",
  phoneDisplay: "(43) 99686-9225",
  whatsappNumber: "5543996869225",
  whatsappMessage,
  email: "contato@creativity.eti.br",
  city: "Londrina",
  state: "Paraná",
  country: "Brasil",
  address: "",
  linkedin: "",
  instagram: "",
  tagline: "Da infraestrutura à inteligência.",
  description:
    "Cloud, segurança, dados, BI, inteligência artificial, software e infraestrutura conectados para transformar operação em resultado.",
} as const;

export function createWhatsappUrl(message = whatsappMessage) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsappUrl();

export const pendingCompanyInfo = [
  "Validar endereço oficial antes de publicar localização completa.",
  "Confirmar perfis oficiais de redes sociais.",
  "Confirmar certificações, níveis de parceria e autorização para uso de selos.",
  "Inserir cases, clientes, resultados e depoimentos somente após autorização.",
  "Validar políticas jurídicas com assessoria responsável.",
  "Confirmar o endpoint definitivo do formulário ou a integração com CRM.",
];
