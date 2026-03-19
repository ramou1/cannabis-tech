# Cannabis Tech Site

Landing page institucional da Cannabis Tech, desenvolvida com Next.js.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Firebase (mantido no projeto para próximas etapas)

## Requisitos

- Node.js 20+
- npm 10+

## Como rodar localmente

```bash
npm install
npm run dev
```

Aplicação em `http://localhost:3000`.

## Scripts

- `npm run dev` - ambiente de desenvolvimento
- `npm run build` - build de produção
- `npm run start` - roda build em produção local
- `npm run lint` - validação com ESLint

## Autenticação (status atual)

No momento, login/cadastro estão em modo mock para facilitar validação do front-end.

- Flag atual: `lib/authMock.ts`
- Valor atual: `USE_MOCK_AUTH = true`

Para voltar ao fluxo real com Firebase depois:

1. Defina `USE_MOCK_AUTH = false`
2. Configure as variáveis de ambiente do Firebase na Vercel e localmente

## Variáveis de ambiente (Firebase)

Crie um `.env.local` (local) e configure também na Vercel:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Em [Vercel](https://vercel.com/), clique em **Add New Project**.
3. Importe o repositório.
4. Framework detectado: **Next.js**.
5. (Opcional agora) Configure variáveis de ambiente do Firebase.
6. Clique em **Deploy**.

## Estrutura principal

- `app/page.tsx` - composição da Home
- `components/` - seções e componentes visuais
- `context/` - contextos de autenticação/idioma
- `lib/firebase*` - integração com Firebase (preparada para ativar depois)
- `lib/authMock.ts` - controle do modo mock de auth
