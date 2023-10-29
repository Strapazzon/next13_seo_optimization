The NextJS project for demonstrating the functionality of the App router and the dynamic opengraph image feature.

[Live demo](https://next-seo-optimization.vercel.app)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Technologies and libraries

- [NextJS](https://nextjs.org/)
- [Radix UI](https://www.radix-ui.com)
- [Vercel](https://vercel.com)

## Environment variables:

Create a new file named `.env.local` in the project's root directory and add the following variables to it:

```dosini
# .env.sample, committed to repo
MOVIES_API=https://api.themoviedb.org/3
MOVIES_API_KEY=ekjflksjdkf....
MOVIES_API_IMAGE=https://image.tmdb.org/t/p/w500
DEEPL_API_URL=https://api-free.deepl.com/v2
DEEPL_API_KEY=jkdlajsldkja.....
BASE_URL=http://localhost:3000
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
