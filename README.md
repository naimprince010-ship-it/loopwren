# Loopwren Studio

Welcome to the **Loopwren** website repository. Loopwren is a small but precise software and app development studio specializing in robust engineering, beautiful UI design, and seamless user experiences.

## Tech Stack

This website is built with a modern, high-performance web stack:

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / Base UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Emails**: [Resend](https://resend.com) integration

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, set up your local environment variables:

1. Copy `.env.example` (or create a new `.env.local` file)
2. Add your Resend API key: `RESEND_API_KEY=your_actual_key_here`

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and layouts (Home, About, Services, Work, Contact).
- `components/`: Reusable React components (Header, Hero, Forms) and Shadcn UI primitives.
- `public/`: Static assets like `logo.svg` and `og-image.png`.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new). Make sure to add your `RESEND_API_KEY` to the Environment Variables in your Vercel project settings before deploying.
