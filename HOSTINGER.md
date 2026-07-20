# Deploy na Hostinger

Este projeto está preparado para deploy como **Node.js Web App** na Hostinger, mantendo todos os recursos do Next.js, incluindo rotas dinâmicas, SEO, sitemap, Open Graph e o endpoint `/api/contact`.

## Caminho recomendado

Use um plano da Hostinger com suporte a Node.js Web Apps, como Business Web Hosting ou Cloud. No hPanel, escolha **Node.js Apps** e publique por GitHub ou upload de `.zip`.

Configuração sugerida:

```txt
Framework: Next.js
Node.js version: 22.x
Install command: npm install
Build command: npm run build
Start command: npm run hostinger:start -- -p $PORT
Output directory: .next
```

Se o hPanel detectar `pnpm` e aceitar Corepack, você também pode usar:

```txt
Install command: corepack enable && pnpm install --frozen-lockfile
Build command: pnpm build
Start command: pnpm hostinger:start -- -p $PORT
```

## Variáveis de ambiente

Configure no painel da Hostinger:

```txt
NEXT_PUBLIC_SITE_URL=https://creativity.eti.br
CONTACT_WEBHOOK_URL=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

`CONTACT_WEBHOOK_URL` é opcional. Sem ele, o formulário valida os dados e retorna sucesso demonstrativo. Para produção, configure um webhook, CRM ou serviço de e-mail no backend.

## Deploy por GitHub

1. Suba o projeto para um repositório.
2. No hPanel, vá em **Websites**.
3. Clique em **Add Website**.
4. Escolha **Node.js Apps**.
5. Selecione **Import Git Repository**.
6. Autorize a Hostinger no GitHub.
7. Escolha o repositório.
8. Confirme os comandos de install, build e start.
9. Configure as variáveis de ambiente.
10. Publique.

## Deploy por arquivo compactado

Compacte o projeto sem estas pastas:

```txt
node_modules
.next
out
coverage
.vercel
```

Depois, no hPanel, escolha **Node.js Apps** e **Upload your website files**. A Hostinger fará install e build no servidor.

Se o build falhar com `EACCES: permission denied, scandir`, o arquivo foi extraído com permissão incorreta no servidor. Gere o pacote com `tar`/`bsdtar` em vez de `Compress-Archive`, ou ajuste permissões no servidor para diretórios `755` e arquivos `644`.

## Importante sobre hospedagem compartilhada estática

Não envie apenas HTML estático para `public_html` se quiser manter o formulário `/api/contact`. Esse endpoint precisa de Node.js.

Se você usar um plano sem Node.js, será necessário transformar o site em exportação estática e trocar o formulário por WhatsApp, Formspree, Make, n8n, CRM externo ou outro serviço de webhook público. O projeto atual está configurado para a opção mais completa: Next.js rodando como servidor Node.js.

## Checklist antes de publicar

- Rodar `npm run build` localmente.
- Confirmar `NEXT_PUBLIC_SITE_URL=https://creativity.eti.br`.
- Configurar `CONTACT_WEBHOOK_URL` ou definir o destino final dos leads.
- Confirmar que a logo oficial em `public/brand/creativity-logo-official.png` está aprovada.
- Validar Política de Privacidade e Termos de Uso juridicamente.
- Configurar analytics somente com IDs reais.
- Testar formulário, WhatsApp, sitemap e robots após o deploy.
