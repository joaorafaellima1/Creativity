const whatsappMessage =
  "Olá, quero entender como a Creativity pode ativar BI, IA e Microsoft na minha empresa.";

export const company = {
  legalName: "CREATIVITY TECNOLOGIA LTDA",
  brandName: "Creativity",
  domain: "creativity.eti.br",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://creativity.eti.br",
  phoneDisplay: "(43) 99121-2718",
  whatsappNumber: "5543991212718",
  whatsappMessage,
  email: "",
  address: "",
  linkedin: "",
  instagram: "",
  tagline: "Dado virando decisão no ecossistema Microsoft.",
  description:
    "BI, Copilot e IA aplicada para empresas que já usam Microsoft e querem transformar dados em decisões.",
};

export const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const pendingCompanyInfo = [
  "E-mail institucional para exibição e recebimento de contatos.",
  "Endereço físico ou cidade de atuação, caso deseje publicar.",
  "Perfis oficiais de redes sociais.",
  "Cases, depoimentos e clientes autorizados para publicação.",
  "Política jurídica final validada pela empresa ou assessoria jurídica.",
];
