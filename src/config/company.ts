const whatsappMessage =
  "Olá, conheci as soluções da Creativity e gostaria de falar sobre tecnologia para a minha empresa.";

export const company = {
  legalName: "CREATIVITY TECNOLOGIA LTDA",
  brandName: "Creativity Tecnologia",
  domain: "creativity.eti.br",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://creativity.eti.br",
  phoneDisplay: "(43) 99121-2718",
  whatsappNumber: "5543991212718",
  whatsappMessage,
  email: "",
  address: "",
  linkedin: "",
  instagram: "",
  tagline: "Tecnologia para decidir, produzir e crescer.",
  description:
    "Business Intelligence, licenciamento Microsoft e soluções de cloud, segurança, infraestrutura e tecnologia para empresas.",
};

export const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const pendingCompanyInfo = [
  "E-mail institucional para exibição e recebimento de contatos.",
  "Endereço físico ou cidade de atuação, caso deseje publicar.",
  "Logotipo oficial em SVG ou PNG com fundo transparente.",
  "Perfis oficiais de redes sociais.",
  "Cases, depoimentos e clientes autorizados para publicação.",
  "Política jurídica final validada pela empresa ou assessoria jurídica.",
];
