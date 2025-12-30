# BarberPro

Projeto front-end de exemplo: site de apresentação de um sistema de agendamento para barbearias.

Resumo
- Stack: Vite + React + TypeScript + Tailwind CSS + shadcn-ui (Radix UI).
- Entrada da aplicação: `src/main.tsx`.

Linguagem e dependências
- Linguagem principal: TypeScript (React, arquivos .ts/.tsx).

Dependências principais (runtime)
- react, react-dom
- @tanstack/react-query
- framer-motion
- lucide-react
- react-router-dom
- react-hook-form
- zod
- recharts
- sonner
- tailwind-merge / tailwindcss-animate
- radix-ui packages (por exemplo @radix-ui/react-*)

Dependências de desenvolvimento
- vite
- typescript
- tailwindcss
- postcss
- autoprefixer
- @vitejs/plugin-react-swc
- eslint e plugins relacionados

Para ver a lista completa de dependências e versões, consulte o arquivo `package.json`.

Pré-requisitos
- Node.js (recomenda-se v18+)
- npm, pnpm ou bun

Instalação
1. No diretório do projeto instale dependências:

```bash
npm install
# ou
# pnpm install
# bun install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o navegador em `http://localhost:8080` (ou na porta mostrada pelo Vite no terminal).

Scripts úteis (em `package.json`)
- `npm run dev` — inicia o servidor de desenvolvimento (hot-reload).
- `npm run build` — gera build de produção.
- `npm run preview` — pré-visualiza o build localmente.
- `npm run lint` — roda ESLint.

Fontes e favicon
- As fontes são carregadas via `<link>` em `index.html`.
- O favicon principal está em `public/barbearia.svg`. Para suporte a navegadores antigos, há também `public/favicon.png` e `public/favicon.ico`.

Notas de desenvolvimento
- Tailwind utiliza PostCSS; se você editar `src/index.css` lembre-se que diretivas `@import` devem vir antes de outras regras — por isso usamos `<link>` no HTML para as fonts.
- Se encontrar problemas com `node-gyp` ou compilações nativas, instale Python e ferramentas de build do sistema.

Deploy
- O build gerado por `npm run build` pode ser servido em qualquer hosting estático (Netlify, Vercel, S3, etc.).

Créditos
- Desenvolvido por Victor Silva — https://www.linkedin.com/in/victor-silva-01front/

Licença
- Este projeto é licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para o texto completo.
