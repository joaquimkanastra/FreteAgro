# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: the fleet owner ("dono de frota") of a Brazilian agricultural freight trucking operation. They manage a small fleet of trucks and drivers, and today track trips, driver pay, and expenses using paper, WhatsApp messages, and spreadsheets. They use fretagro-web from a desktop/laptop to run the business side of the fleet.

Secondary role (not a user of this surface): the driver ("motorista") uses the separate fretagro-mobile app in the field; fretagro-web exposes API contracts that mobile writes to and the owner's dashboard reads from.

## Product Purpose

FreteAgro digitizes fleet operations for small agricultural freight businesses: registering trucks and drivers, logging trips (fretes) with revenue and expenses, calculating and settling driver commissions (acertos), tracking overall cash flow (caixa), and reporting KPIs — replacing paper, WhatsApp, and spreadsheets. Success means the owner can register a trip, close out a driver's settlement, and see whether the fleet is profitable without manual calculation or reconciliation.

## Positioning

Automatic, conflict-free driver settlement (acerto) calculation is the product's core differentiator: commission is computed from trip value and percentage, deductions (advances, workshop expenses) are itemized, and a PDF receipt is generated — eliminating the manual math and owner/driver disputes over pay that spreadsheets and paper cause.

## Operating Context

- Multi-tenant SaaS; one owner account per fleet, drivers invited via WhatsApp deep link (no self-registration).
- Core entities/workflows: caminhões (trucks) and motoristas (drivers), 1-to-1 linked; fretes (trips) with a status cycle (em andamento → concluído → acerto pendente → acerto realizado); lançamentos (expense entries, some tagged as settlement deductions); acertos (settlements) with PDF receipts; caixa (cash flow ledger) with income/expense composition; relatórios (dashboard/reports) with KPIs and PDF/Excel export.
- Data written by the mobile driver app (TrechoKm, Abastecimento records) is read-only on the web side and must sync visibly into the owner's panel.
- Money is handled as integer centavos throughout (constitution rule); acerto formula: `valorComissao = round(valorFrete * percentualComissao / 100)`, `saldoFinal = valorComissao - totalDeducoes`.

## Capabilities and Constraints

- Stack: Next.js 14 (App Router), TypeScript strict, Prisma, Supabase Postgres (shared with mobile), Zod validation, Vitest + Playwright.
- Governed by `.specify/memory/constitution.md`: layered import discipline (`types → lib → hooks → components → app`), financial calculations isolated in `lib/finance/`, auth centralized in `lib/auth/`, no hardcoded colors (design tokens only), dark theme canonical, Inter typeface, WCAG AA, mobile-first down to 375px.
- Soft-delete (inativação) preserves history for trucks, drivers, and trips with financial links rather than hard-deleting.
- A public marketing/landing surface (`app/(marketing)`) is under active development alongside the authenticated owner dashboard.

## Brand Commitments

Name: FreteAgro. Existing dark-theme design system in place (`design-system/DESIGN_SYSTEM.md`, `tokens.css`/`tokens.ts`, "Rayna UI v1.0"): background `#0D0D0D`, surfaces `#161616`/`#1E1E1E`, primary action green `#22C55E`, Inter typeface.

## Evidence on Hand

None yet for the marketing surface: the in-progress landing page (`app/(marketing)/page.tsx`) scaffolds social proof, testimonials, and pricing sections, but no real customer testimonials, logos, case studies, or finalized pricing exist yet. These must not be fabricated — treat as explicit placeholders pending real content from the user.

## Product Principles

- Replace paper/WhatsApp/spreadsheet workflows with structured, auditable digital records — every screen should read as strictly better than the manual process it replaces.
- Money is never approximate: single rounding point, integer centavos, calculations isolated from UI.
- Preserve history: inactivate rather than delete anything with financial or operational lineage.
- Mobile (driver) and web (owner) are separate surfaces with a clear read/write boundary — the web panel is where the owner decides, not where field data originates.
- Don't fabricate social proof, pricing, or claims ahead of real evidence.

## Accessibility & Inclusion

WCAG AA contrast required project-wide (constitution rule); every input has an associated label; icon-only buttons carry `aria-label`; all components must be fully functional at 375px viewport width.
