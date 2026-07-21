import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("rotas comerciais obrigatórias existem", () => {
  ["src/app/page.tsx", "src/app/solucoes/page.tsx", "src/app/segmentos/page.tsx", "src/app/metodologia/page.tsx", "src/app/cases/page.tsx", "src/app/diagnostico/page.tsx", "src/app/calculadora/page.tsx", "src/app/conteudos/page.tsx", "src/app/sobre/page.tsx", "src/app/contato/page.tsx", "src/app/politica-de-cookies/page.tsx", "src/app/not-found.tsx"].forEach((path) => assert.equal(existsSync(new URL(`../${path}`, import.meta.url)), true, path));
});

test("portfólio inclui todas as frentes principais", () => {
  const portfolio = read("src/data/portfolio.ts");
  ["business-intelligence", "engenharia-de-dados", "inteligencia-artificial", "microsoft-365", "microsoft-azure", "seguranca-backup", "infraestrutura-corporativa", "desenvolvimento-sistemas", "automacao-integracoes", "consultoria-suporte"].forEach((slug) => assert.match(portfolio, new RegExp(`slug: "${slug}"`)));
});

test("formulário tem consentimento e honeypot", () => {
  const form = read("src/components/forms/ContactForm.tsx");
  assert.match(form, /name="consent"/);
  assert.match(form, /name="website"/);
  assert.match(form, /NEXT_PUBLIC_CONTACT_FORM_ENDPOINT/);
});

test("casos publicados são identificados como demonstrativos", () => {
  const cases = read("src/app/cases/page.tsx");
  assert.match(cases, /Cenário demonstrativo/);
  assert.match(cases, /Não representa cliente real/);
});

test("redirecionamentos não escondem as rotas dinâmicas", () => {
  const config = read("next.config.ts");
  assert.doesNotMatch(config, /source:\s*["']\/solucoes\/:path\*/);
  assert.doesNotMatch(config, /source:\s*["']\/segmentos\/:path\*/);
});

