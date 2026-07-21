# Publicação na Hostinger

O projeto deve ser publicado como **Node.js Web App**, não como site estático em `public_html`.

## Configuração recomendada

```txt
Framework: Next.js
Node.js: 22.x
Install: pnpm install --frozen-lockfile
Build: pnpm build
Start: pnpm hostinger:start -- -p $PORT
Output: .next
```

Se o painel não aceitar pnpm diretamente:

```txt
Install: corepack enable && pnpm install --frozen-lockfile
```

## Deploy pelo GitHub

1. No hPanel, abra **Websites > Adicionar site > Node.js App**.
2. Escolha **Importar repositório Git**.
3. Autorize o GitHub e selecione `joaorafaellima1/Creativity`.
4. Confirme a raiz do projeto como `./`.
5. Configure os comandos acima e as variáveis de ambiente.
6. Publique e associe `creativity.eti.br`.

## Variáveis

```txt
NEXT_PUBLIC_SITE_URL=https://creativity.eti.br
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
```

Sem endpoint de formulário, os contatos continuam pelo WhatsApp. Analytics é opcional e depende do consentimento do visitante.

## Erro EACCES

Se aparecer `EACCES: permission denied, scandir`, remova a implantação com permissões incorretas e reimporte pelo GitHub. Em upload manual, diretórios devem usar `755` e arquivos `644`. Não inclua `.next` nem `node_modules` no pacote.

## Checklist após publicar

- Abrir home, soluções, segmentos, diagnóstico, calculadora, conteúdo e contato.
- Confirmar logo, menu desktop e menu móvel.
- Testar WhatsApp e formulário no domínio final.
- Abrir `/sitemap.xml`, `/robots.txt` e `/manifest.webmanifest`.
- Validar política de privacidade, cookies e termos com assessoria jurídica.
- Testar consentimento antes de ativar analytics.

