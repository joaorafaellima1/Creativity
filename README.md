# Creativity Tecnologia

Site institucional e comercial da Creativity, construído em Next.js, React, TypeScript e Tailwind CSS. O posicionamento conecta infraestrutura, cloud, segurança, dados, BI, inteligência artificial, software, automação e suporte em uma jornada única.

## Executar localmente

Requisitos: Node.js 22 e pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

A aplicação abre em `http://localhost:3000`.

## Validação de produção

```bash
pnpm lint
pnpm test
pnpm typecheck
pnpm build
pnpm start
```

## Rotas principais

- `/`: narrativa comercial completa, ecossistema, jornada, áreas, agro, método e conversão.
- `/solucoes` e `/solucoes/[slug]`: 13 ofertas com problema, entregáveis, aplicações, governança, FAQ e SEO.
- `/segmentos` e `/segmentos/[slug]`: agronegócio, distribuidores, indústrias e serviços.
- `/metodologia`: Creativity 360.
- `/cases`: cenários demonstrativos claramente identificados.
- `/diagnostico`: diagnóstico interativo de maturidade.
- `/calculadora`: estimativa de oportunidade operacional, sem promessa de economia.
- `/conteudos` e `/conteudos/[slug]`: central editorial.
- `/sobre`, `/contato` e páginas legais.

## Configuração institucional

Telefone, WhatsApp, e-mail, domínio e endereço resumido ficam em `src/config/company.ts`. Revise esse arquivo antes de publicar.

## Formulário

O formulário possui validação nativa, consentimento LGPD, honeypot, estados de carregamento, sucesso e erro. Há dois modos:

1. Com `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`: envia por `POST` para Formspree ou serviço compatível.
2. Sem endpoint: abre o WhatsApp oficial com a mensagem preenchida.

O endpoint nunca deve ser configurado com credenciais ou segredos no navegador.

## Analytics

Configure `NEXT_PUBLIC_GTM_ID` ou `NEXT_PUBLIC_GA_ID`. Os scripts só carregam após consentimento no aviso de cookies. Eventos de CTA, formulário, diagnóstico e calculadora usam `dataLayer`. Parâmetros UTM são mantidos apenas durante a sessão.

## Conteúdo demonstrativo

Dashboards, cenários e artigos em revisão são rotulados no site. Não publique nomes, números, depoimentos, selos, certificações ou parcerias sem autorização e comprovação.

## Deploy

O caminho recomendado é importar o repositório como aplicação Node.js na Hostinger. Consulte `HOSTINGER.md`. Variáveis disponíveis estão em `.env.example`.

## Pontos de edição

- `src/data/portfolio.ts`: soluções e FAQs.
- `src/data/segments.ts`: segmentos e prioridades.
- `src/data/articles.ts`: conteúdos.
- `src/data/dashboards.ts`: interfaces demonstrativas.
- `src/config/company.ts`: dados institucionais.
- `src/app/page.tsx`: narrativa da home.

As pendências de validação estão em `PENDENCIAS-COMERCIAIS.md`.

