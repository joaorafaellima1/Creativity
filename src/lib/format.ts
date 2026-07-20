export function currencyBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function percentBR(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100);
}

export function dateBR(value: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(value);
}

export function absoluteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://creativity.eti.br";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
