# Creativity Tecnologia

Site institucional premium para a Creativity Tecnologia, focado em Business Intelligence, dashboards, integração de dados, automação de relatórios e conversão de contatos qualificados.

## Tecnologias

- Next.js com App Router
- React e TypeScript
- Tailwind CSS
- lucide-react para ícones
- Rotas dinâmicas para soluções e segmentos
- Endpoint demonstrativo para contato em `src/app/api/contact/route.ts`

## Como executar

```bash
pnpm install
pnpm dev
```

O site ficará disponível em `http://localhost:3000`.

## Build de produção

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Deploy na Hostinger

O projeto está pronto para Hostinger como **Node.js Web App**. Use Node.js 22.x, build `npm run build` e start `npm run hostinger:start -- -p $PORT`.

Veja o passo a passo em [HOSTINGER.md](./HOSTINGER.md).

## Estrutura principal

- `src/app`: rotas, metadados, sitemap, robots e endpoint de contato.
- `src/components/layout`: header, footer, menu mobile, WhatsApp e cookies.
- `src/components/marketing`: seções institucionais e comerciais.
- `src/components/dashboards`: mockups de dashboards com dados demonstrativos.
- `src/components/forms`: formulário de contato com validação, consentimento e honeypot.
- `src/data`: conteúdo editável de soluções, segmentos, FAQs, processo e dashboards.
- `src/config/company.ts`: dados institucionais, telefone, WhatsApp e placeholders.
- `src/lib`: SEO, formatação e eventos de analytics.

## Páginas entregues

- `/`
- `/solucoes`
- `/solucoes/bi-executivo`
- `/solucoes/bi-comercial`
- `/solucoes/bi-financeiro`
- `/solucoes/bi-estoque`
- `/solucoes/bi-compras`
- `/solucoes/bi-logistica`
- `/solucoes/bi-margem-rentabilidade`
- `/solucoes/bi-clientes-crm`
- `/solucoes/bi-operacoes`
- `/solucoes/bi-recursos-humanos`
- `/solucoes/bi-agronegocio`
- `/solucoes/automacao-relatorios`
- `/segmentos`
- `/segmentos/agronegocio`
- `/segmentos/distribuidoras`
- `/segmentos/industrias`
- `/segmentos/varejo-atacado`
- `/segmentos/servicos`
- `/segmentos/operacao-comercial`
- `/segmentos/multiplas-unidades`
- `/como-funciona`
- `/calculadora`
- `/sobre`
- `/contato`
- `/politica-de-privacidade`
- `/termos-de-uso`

## Como alterar textos

Edite os arquivos em `src/data`. As páginas consomem esses dados diretamente, então novas soluções, indicadores, FAQs e segmentos podem ser adicionados sem alterar o layout principal.

## Como alterar telefone e WhatsApp

Edite `src/config/company.ts`:

```ts
phoneDisplay: "(43) 99121-2718",
whatsappNumber: "5543991212718",
```

A mensagem pré-preenchida também fica no mesmo arquivo.

## Como inserir o logo oficial

O componente usa a logo oficial em `public/brand/creativity-logo-official.png`, renderizada por `src/components/layout/Logo.tsx`. Para trocar o arquivo no futuro, mantenha o mesmo caminho ou ajuste o `src` do componente.

## Como configurar o formulário

O formulário envia para `/api/contact`. Sem `CONTACT_WEBHOOK_URL`, o endpoint valida os dados e retorna sucesso demonstrativo. Para integração real, configure `CONTACT_WEBHOOK_URL` em ambiente seguro de servidor.

Campos implementados:

- Nome
- Empresa
- Cargo
- Telefone
- E-mail
- Segmento
- Número aproximado de colaboradores
- Sistema ou ERP utilizado
- Principal necessidade
- Mensagem
- Consentimento LGPD
- Honeypot antispam

## Como configurar analytics

As variáveis estão documentadas em `.env.example`. A base de eventos está em `src/lib/analytics.ts` e já prevê `dataLayer`, `gtag` e nomes de eventos para CTAs, WhatsApp e formulário.

IDs reais não foram adicionados para evitar dados fictícios de produção.

## Como substituir dados demonstrativos

Edite `src/data/dashboards.ts`. Todos os mockups estão identificados como “Dados demonstrativos” e devem continuar assim até que usem dados reais autorizados.

## Como adicionar novas soluções

Adicione um item em `src/data/solutions.ts` com `slug`, nome, descrição, indicadores, benefício e chave de dashboard. A rota `/solucoes/[slug]` será gerada automaticamente.

## Como adicionar cases reais

Edite `src/data/case-studies.ts` e adicione cases com autorização do cliente. Use `status: "Autorizado"` quando o nome puder aparecer ou `status: "Nome preservado"` quando o cliente autorizar o uso do contexto sem identificação.

Exemplo:

```ts
{
  slug: "cliente-x-bi-comercial",
  clientName: "Nome autorizado do cliente",
  segment: "Distribuidora de insumos agrícolas",
  status: "Autorizado",
  challenge: "Descrever o problema real antes do projeto.",
  solution: "Descrever dashboards e integrações implantadas.",
  indicators: ["Faturamento", "Margem", "Estoque", "Inadimplência"],
  results: [
    "Resultado comprovável e autorizado para publicação.",
    "Outro ganho real sem prometer percentuais não validados."
  ],
  testimonial: {
    quote: "Depoimento autorizado.",
    author: "Nome autorizado",
    role: "Cargo autorizado"
  }
}
```

Não publique nomes, números ou depoimentos sem autorização.

## Como ajustar a calculadora de investimento

A fórmula e os valores comerciais ficam em `src/data/pricing-calculator.ts`. A configuração atual está calibrada com `hourlyRate: 200`, usando valores por blocos de horas. Ajuste bases, adicionais por área, fontes de dados, multiplicadores de complexidade, mensalidade mínima e percentual de variação conforme a política comercial da Creativity.

A página fica em `/calculadora` e o componente principal está em `src/components/forms/ProjectCostCalculator.tsx`.

Importante: a calculadora entrega uma estimativa preliminar. A proposta final deve continuar dependendo do diagnóstico das fontes, regras de negócio e disponibilidade dos dados.

## Deploy

O projeto está preparado para Vercel ou ambiente equivalente:

1. Configure as variáveis de ambiente.
2. Execute `pnpm build`.
3. Publique a aplicação Next.js.
4. Aponte o domínio `creativity.eti.br`.
5. Revise sitemap e robots após o domínio final estar ativo.

Para Hostinger, use a modalidade Node.js Web App. Hospedagem estática simples em `public_html` não mantém o endpoint `/api/contact`.

## Informações pendentes

- E-mail institucional.
- Endereço ou cidade de atuação, caso deseje exibir.
- Logotipo oficial.
- Redes sociais oficiais.
- Cases, clientes e depoimentos autorizados.
- Validação jurídica da Política de Privacidade e dos Termos de Uso.
- Destino real do formulário: e-mail, CRM ou webhook.
- IDs reais de Google Analytics, Google Tag Manager ou Meta Pixel.

## Integrações futuras recomendadas

- CRM para registro automático de leads.
- Envio transacional de e-mails.
- Google Analytics ou Tag Manager com consentimento.
- Eventos de conversão para WhatsApp e formulário.
- Antispam adicional, como rate limit e captcha invisível.
- CMS ou painel simples para atualizar conteúdo sem deploy.
- Integração com ferramenta de monitoramento e logs.
