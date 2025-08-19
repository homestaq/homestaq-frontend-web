# GitHub Copilot Instructions for Next.js 14+ (2025)

## 🏗️ Project Structure & Organization

- Use the `/app` directory and App Router for all routing, layouts, and server components.
- Organize routes with route groups (e.g., `(marketing)`, `(dashboard)`) for logical separation and clean URLs.
- Place reusable UI primitives in `/components/ui` and shared sections in `/components/shared`.
- Store domain-specific logic, forms, and services in `/features/[feature-name]/`.
- Keep utilities, configs, and database access in `/lib/`.
- Use `/hooks` for custom React hooks.
- Store all type definitions in `/types`.
- Use `/styles` for global and theme styles (prefer Tailwind CSS or CSS Modules).
- Place static assets in `/public`.
- Store all tests in `/tests` (unit, integration, and e2e).
- Use `/prisma` for Prisma schema and migrations if using Prisma ORM.

## 🧑‍💻 Clean Code & Best Practices

- Use TypeScript everywhere, with `strict: true` in `tsconfig.json`.
- Validate environment variables with Zod in `env.mjs`.
- Prefer Server Actions and React Server Components; use API routes only when necessary.
- Use ESLint, Prettier, and Husky for code quality and consistency.
- Write small, focused components (max 200 LOC per component).
- Follow feature-based folder structure: one feature = one folder.
- Use shadcn/ui for UI primitives and Tailwind for styling.
- Document all public functions, components, and modules with clear comments and JSDoc.
- Use Zod or similar for runtime type validation of API and environment variables.
- Centralize database access and business logic in `/lib` or `/features`.
- Use custom hooks for shared React logic.
- Prefer hooks over utility functions for stateful logic.
- Write tests for all critical features (auth, forms, dashboards, etc.).
- Use Playwright for E2E tests and Vitest/Jest for unit/integration tests.

## 📂 Example Directory Layout

```
/app
  /(marketing)/
  /(dashboard)/
  /api/
/components
  /ui
  /shared
/features
/lib
/hooks
/types
/styles
/public
/tests
/prisma
```

## 📝 Example TypeScript & Zod Usage

```ts
// types/user.ts
import { z } from "zod";
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
});
export type User = z.infer<typeof UserSchema>;
```

```ts
// env.mjs
import { z } from "zod";
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
});
export const env = envSchema.parse(process.env);
```

## 🧩 Coding Conventions

- Use PascalCase for components and camelCase for variables/functions.
- Keep files and folders lowercase with hyphens or underscores for separation.
- Use absolute imports (e.g., `@/components/ui/Button`).
- Keep all business logic out of UI components.
- Use route groups for logical separation, not for URL changes.
- Prefer server components by default; use client components only when necessary.
- Use `"use client"` directive only when required.
- Keep environment variables out of the client bundle.

## 🛠️ Tooling

- ESLint: Use Next.js and TypeScript recommended configs.
- Prettier: Enforce consistent formatting.
- Husky + lint-staged: Run lint and format checks pre-commit.
- Tailwind CSS: For utility-first styling.
- shadcn/ui: For accessible, customizable UI primitives.
- Prisma: For database access (if using SQL DB).
- Zod: For runtime type validation.
- Playwright: For E2E testing.
- Vitest/Jest: For unit/integration testing.

## 🚦 General Guidance

- Prioritize maintainability, scalability, and clarity.
- Keep code DRY (Don’t Repeat Yourself) and modular.
- Write clear, concise documentation and comments.
- Follow the latest Next.js, React, and TypeScript best practices.

---

**Copilot, please follow these standards and structure for all code suggestions in this project.**

---

> Note: As of 2025, markdown-based instructions like this are the most effective way to guide Copilot. If JSON-based prompt engineering becomes officially supported, adapt these instructions to that format as needed.
