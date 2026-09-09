---
name: FreteAgro — Marketing Surface ("Estrada à Noite")
description: The night-highway world of the public landing page: one warm ink on asphalt black, green only as signal, the settlement settling in front of the visitor.
colors:
  mkt-ground: "#070707"
  mkt-raise: "#101010"
  mkt-ink: "#f4f4f2"
  mkt-signal: "#16b84f"
  mkt-glow: "#1bde5f"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.5rem, 5.6vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2rem, 3.9vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum 1"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.35
  label-caps:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.14em"
    textTransform: "uppercase"
rounded:
  hairline: "2px"
  control: "8px"
  panel: "14px"
  card: "16px"
  device: "34px"
  pill: "9999px"
spacing:
  gutter: "20px"
  gutter-wide: "32px"
  section-y: "96px"
  section-y-lg: "128px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.mkt-ink}"
    textColor: "{colors.mkt-ground}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.mkt-ground}"
  nav-cta:
    backgroundColor: "{colors.mkt-ink}"
    textColor: "{colors.mkt-ground}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mkt-ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  input-email:
    backgroundColor: "rgb(244 244 242 / 0.04)"
    textColor: "{colors.mkt-ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "52px"
    typography: "{typography.title}"
  card-document:
    backgroundColor: "{colors.mkt-raise}"
    textColor: "{colors.mkt-ink}"
    rounded: "{rounded.card}"
    padding: "24px 32px"
  card-panel:
    backgroundColor: "rgb(244 244 242 / 0.02)"
    textColor: "{colors.mkt-ink}"
    rounded: "{rounded.control}"
    padding: "14px"
  chip-status:
    backgroundColor: "rgb(244 244 242 / 0.1)"
    textColor: "rgb(244 244 242 / 0.75)"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  chip-status-live:
    backgroundColor: "rgb(22 184 79 / 0.15)"
    textColor: "{colors.mkt-glow}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
---

# Design System: FreteAgro — Marketing Surface ("Estrada à Noite")

## Overview

**Creative North Star: "The Night Highway"**

**Scope, stated first.** This document covers the public marketing surface only — `app/(marketing)/**` and `components/marketing/**`, everything under the `.mkt` scope class applied in `app/(marketing)/layout.tsx`. The authenticated product (`app/(dashboard)/`, `app/(auth)/`) keeps the incumbent **Rayna UI v1.0** system documented at `../design-system/DESIGN_SYSTEM.md` with tokens in `../design-system/tokens.css` and `../design-system/tokens.ts`: ground `#0D0D0D`, surfaces `#161616`/`#1E1E1E`, primary green `#16b84f`, Inter throughout. Nothing here amends that system. The boundary is the `.mkt` class: inside it, the tokens below govern; outside it, Rayna UI governs, and the two share exactly one value — the brand green.

The world is asphalt at night with a screen glowing on it. The ground (`#070707`) is deliberately darker than the app's own background so the marketing surface reads as outside, not inside the product. There is one ink — a warm white (`#f4f4f2`), headlights rather than paper — and every level of emphasis on the page is that same ink at a different opacity. Colour is not how this page makes hierarchy; density is. Brand green appears only where the product is speaking: the lane line under the settlement, the settled figure, a live status, the mark. It never fills a background, never tints a heading, never decorates.

Composition is ruled rather than boxed. Hairline horizontal rules at 10% ink separate every section; content sits in a single 1280px measure with a 20/32px gutter; figures line up column-wise because anything numeric carries `data-figure` and gets tabular numerals. Cards exist in exactly two places — the settlement document and the recreated product panels — because those are objects the visitor is meant to read as artifacts, not as containers of copy.

**Key Characteristics:**
- One ink on near-black; tone made by opacity, never by adding hues.
- Green is signal, never surface: the lane line, the settled figure, the live state, the mark.
- Bodoni Moda for display and figures only; Inter for every UI atom.
- Hairline rules (10% ink) as the primary structural device; no floating cards on gradients.
- One authored motion moment on the whole page; figures never animate in.
- Every figure is tabular-lined via `[data-figure]`.

## Colors

A single warm-white ink on asphalt black, with one green admitted as signal and a brighter variant of it reserved for luminance on black.

### Primary
- **Signal Green** (`#16b84f`): the brand green, shared with the app. Used only where the product acts: the lineage rail that threads the settlement, the bullet marking the "with FreteAgro" column, the driver's confirm action, the chart's revenue series, the mark's field, and the two radial glows on the horizon (at 7% and 16% alpha). It never becomes a background for text and never carries a heading.
- **Glow Green** (`#1bde5f`): the brighter sibling, used where green must survive on black at small size or high stakes — the settled balance figure, the final node on the lineage rail, the highlighted KPI value, the live status chip, the focus outline.

### Neutral
- **Headlight Ink** (`#f4f4f2`): the only ink. Full strength for headings, settled labels and figures; `/85`–`/70` for secondary values; `/60`–`/55` for body copy and captions; `/50` at the floor for the quietest supporting text. Also supplies structure at low alpha: `/20`–`/15` for control borders, `/12` for the unlit rail, `/10` for section rules and panel borders, `/07`–`/02` for tinted fills.
- **Asphalt Ground** (`#070707`): the page ground, the mark's negative space, and the recreated panel's own background — the mockups sit on the same ground as the page, which is why they read as the product and not as a screenshot.
- **Raised Body** (`#101010`): the only surface lifted off the ground, used for the settlement document card and the phone's chassis.

### Named Rules
**The Single Ink Rule.** Tone on this surface is opacity of one ink. Adding a hue is a decision that must be argued for; the shipped page argues for exactly one (green, as signal).

**The Signal-Only Rule.** Green marks where the product acts or where money settles. If a green element could be recoloured to ink without losing meaning, it should be ink.

**The /50 Floor Rule.** Marketing text never goes below `/50` of the ink. On the `#070707` ground, `/50` composites to ~`#7d7d7c` and lands at 4.89:1; `/45` falls to 4.16:1 and fails AA. `/50` is the floor, not a style choice.

## Typography

**Display Font:** Bodoni Moda (with Georgia, serif fallback), weights 400 and 500, loaded via `next/font/google` as `--font-display`
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** A high-contrast Didone against a neutral grotesque — the serif carries the money and the argument, the sans carries the machinery. This is a scoped exception to the project's "Inter project-wide" rule and it is scoped by role, not by taste: Bodoni is allowed on headings, on the settled figure in the acerto card, on the four lineage figures, and on the mobile sheet's nav items. Everything else on the surface — labels, body, controls, table cells, chips, captions — is Inter.

### Hierarchy
- **Display** (Bodoni 400, `clamp(2.5rem, 5.6vw, 5.25rem)`, 1.02, `-0.02em`): the hero headline only, two lines, left-aligned, capped at 17ch until `lg`.
- **Headline** (Bodoni 400, `clamp(2rem, 3.9vw, 3.5rem)`, 1.06, `-0.02em`): section headings. The closing CTA runs slightly larger (`clamp(2.25rem, 4.6vw, 4rem)`, 1.04) because it is centred and alone.
- **Figure** (Bodoni 400, tabular): the settled balance at `clamp(2.25rem, 4.4vw, 3.25rem)`; the four lineage figures at 26px rising to 31px at `lg`. These are the only numbers allowed the display face.
- **Title** (Inter 400, 15–15.5px): row titles, list-step titles, panel headings.
- **Body** (Inter 400, 16.5px→18px, ~1.6, ink `/55`–`/60`): section leads, capped at 52–56ch. Long-form answers cap at 62ch.
- **Label** (Inter 400, 13px, ink `/50`–`/55`): captions, illustrative-value disclaimers, meta.
- **Label (caps)** (Inter 400, 12–13px, `0.14em`, uppercase): column headers in the comparison ledger and footer column titles. Used as a table header, never as a kicker above a heading.

### Named Rules
**The Serif-For-Money Rule.** Bodoni carries headings and settled figures. A number in a table, a chip, a KPI row or a form is Inter — the display face is reserved for the number the page exists to produce.

**The Tabular Figure Rule.** Anything numeric carries `data-figure`, which applies `tabular-nums` / `tnum` inside `.mkt`. Money, distances, dates and percentages line up column-wise wherever they can be compared.

## Layout

One centred measure of 1280px with a 20px gutter rising to 32px from `sm`; the header shares the same measure so the nav aligns to the content. Sections are separated by a top hairline rule at 10% ink and breathe at 96px vertical padding, rising to 128px at `lg`. The hero occupies `100svh` with a 72px top offset for the fixed header, splitting into an offer block that fills the remaining height and a bottom band — the acerto lineage — anchored above the fold behind its own hairline.

Two-column sections use asymmetric fractions rather than halves (`0.92fr 1.08fr` for the settlement, `1.05fr 0.95fr` for the driver, `0.8fr 1.2fr` for the FAQ), so the argument column and the artifact column are never mistaken for a symmetric feature grid. The settlement's argument column is sticky at `top: 104px` on `lg`.

Responsive behaviour is stated in three moves: `md` (768px) restores the nav and turns the comparison ledger into two ruled columns; `lg` (1024px) rotates the lineage rail from vertical to horizontal, adds the panel's sidebar, and opens the larger type steps; below `md` the header collapses into a right-side sheet and each ledger cell carries its own caps label. The wide panel recreation scrolls horizontally inside its own container rather than shrinking, with the affordance carried in the caption.

## Elevation & Depth

This world is flat and lit rather than stacked. Depth comes from three devices, in this order: the ground's own darkness against a barely-raised surface (`#101010`), hairline borders at 10–15% ink, and light — two radial green washes on the horizon (7% in the hero, 16% at the close) plus the hero's product panel, blurred at 2.5px, desaturated to 0.3 and radially mask-faded so it glows instead of being read. There is exactly one box-shadow on the whole surface, and it belongs to a physical object.

### Shadow Vocabulary
- **Device drop** (`box-shadow: 0 28px 60px -24px rgba(0,0,0,0.9)`): only on the phone chassis in the driver section, where a physical object needs to sit above the page. No other element on this surface casts a shadow.

### Named Rules
**The Lit-Not-Stacked Rule.** Surfaces do not float. If an element needs separation, it gets a hairline or a tonal step, not a shadow. Glow is atmosphere on the horizon, never a halo around a component.

## Shapes

Corners split by role. Controls and status chips are fully round (pill) — the email field, both CTA buttons, the header's account links, the nav-sheet buttons, the status chips, the lineage nodes and bullet dots. Read-surfaces are softly squared: 16px for the settlement document, 14px for the panel recreation, 8–12px for the panel's internal cards and the driver's leg and fuel blocks, 3px on chart bar caps. The phone is the outlier at 34px outer / 26px inner, because it is a device.

Structure is drawn with 1px hairlines, never with fills: section rules, panel dividers, table row rules (`/07`), the vertical/horizontal lineage rail (`/12` unlit, signal green lit), and the ledger's column borders. The mark is the only closed geometric form: a rounded square (8px) in signal green with two converging lane edges and a dashed centre line knocked out in ground.

## Components

### Buttons
- **Shape:** fully round (pill, `9999px`).
- **Primary:** ink fill, ground-coloured text, 52px tall with 28px horizontal padding in the CTA form; 10px/20px in the header. Inter medium at 14–15px.
- **Hover / Focus:** background lifts from ink to pure white over 200ms; focus shows the global 2px glow-green outline at 3px offset. Disabled drops to 70% opacity with `not-allowed`.
- **Ghost:** transparent with ink `/70` text going to full ink on hover, used for "Entrar". In the mobile sheet the same link takes a `/20` ink hairline border.

### Chips
- **Style:** pill, 10.5–12px Inter, no border. Neutral chips are ink `/10` fill on ink `/75` text; the quiet variant drops to `/06` fill on `/50` text.
- **State:** the live/in-progress state is the only coloured chip — signal green at 15% on glow-green text. Inline metric badges (the "12%" beside the commission) use ink `/07` fill.

### Cards / Containers
- **Corner Style:** 16px for the settlement document, 14px for the panel recreation, 8–12px for cards inside a recreation.
- **Background:** raised body (`#101010`) for the document and the phone chassis; ground for the panel recreation; ink `/02`–`/03` tint for internal cards.
- **Shadow Strategy:** none — see Elevation & Depth. Separation is the border.
- **Border:** 1px ink `/10`–`/12`.
- **Internal Padding:** 24px vertical / 24–32px horizontal on the document; 14–20px inside recreations.

### Inputs / Fields
- **Style:** 52px pill, ink `/04` fill, 1px ink `/15` border, 15px Inter, placeholder at ink `/55` (the floor).
- **Focus:** caret is signal green; the 2px glow-green outline at 3px offset comes from the `.mkt` focus rule. Hover lifts the border to ink `/25`.
- **Error:** border goes to ink `/40` and the message renders at ink `/75`, indented to the pill's optical left edge. Error is stated in ink, not in red — there is no destructive hue in this world.

### Navigation
- **Style:** fixed 72px bar, transparent over the hero and, past 8px of scroll, ink `/10` bottom hairline over an 80% ground with 24px backdrop blur, transitioning over 300ms. Mark plus wordmark left, four anchor links centre at 14px ink `/55` → full ink on hover, "Entrar" ghost plus "Criar conta" pill right.
- **Mobile:** below `md` everything collapses into a right-side 300px sheet on the ground, itself carrying the `.mkt` class. Nav items there are the one place Bodoni appears outside headings and figures: 22px display, each on its own ink `/10` rule, with the two account actions pinned to the bottom.

### Acerto Lineage (signature)
Four stops — freight value, commission, deductions, balance — threaded on one continuous hairline: vertical below `lg`, horizontal at `lg` and above. An unlit `/12` ink rail sits underneath; a signal-green rail draws over it once, scaling from its origin over 1.5s on a `cubic-bezier(0.16, 1, 0.3, 1)` curve after a 0.35s delay, with 8px nodes popping in at 0.32s intervals. The final node is glow green, as is the final figure. The whole animation is skipped when `useReducedMotion` reports a preference. Each stop is a 13px ink `/55` label above a Bodoni figure; the operator (`−`, `=`) sits with the figure it acts on at ink `/50`, never on the label line.

### Settlement Document (signature)
The acerto rendered as a document rather than a feature card: raised body, 16px corners, a ruled header (name and period), a freight identification block, an itemised commission list, a deductions block behind its own rule, then the settled total on a 5% signal-green wash with the balance in glow-green display type, and a closing PDF affordance row. Every row is a baseline-aligned label/value pair with the value right-set and tabular.

### Product Recreations (signature)
The panel and the driver's phone are rebuilt in markup from `mkt` tokens — never screenshots, never imports of the app's own components. They therefore inherit this world's palette (green on `#070707`) rather than the app's, which is what lets the hero blur one into the background as ambient light. Charts are drawn as CSS bars and an SVG donut; the donut's four slices are the same green stepped down 24% opacity each, which is the Single Ink Rule applied to the accent.

### Comparison Ledger (signature)
The "today vs. with FreteAgro" section is a ruled two-column list, read across line by line: caps column headers once at the top, then rows separated by ink `/10` hairlines, left column at ink `/55` and right column at ink `/85` with a 7px signal dot in the gutter. Below `md` each cell carries its own caps label and the columns stack.

## Do's and Don'ts

### Do:
- **Do** build tone from opacity of the single ink (`#f4f4f2`), and keep text at or above `/50`.
- **Do** spend green only on signal: the rail, the settled figure, the live state, the mark, the revenue series.
- **Do** separate with 1px hairlines at ink `/10` and let the ground carry the rest.
- **Do** mark every number with `data-figure` so tabular numerals apply.
- **Do** keep Bodoni to headings and settled figures, and hand every label, control and table cell to Inter.
- **Do** cap measure: 52–56ch for body, 62ch for long answers, 46–50ch inside columns.
- **Do** rebuild product surfaces in markup from `mkt` tokens and label illustrative figures as illustrative.
- **Do** keep the `.mkt` class on any portal-rendered content (sheets, popovers) so the world travels with it.

### Don't:
- **Don't** introduce a second hue. There is no red error state, no amber warning, no secondary accent on this surface.
- **Don't** use green as a background for text, a heading colour, or a decorative fill.
- **Don't** add box-shadows. The only shadow in this world is under the phone chassis.
- **Don't** animate figures in, stagger sections on scroll, or add a second authored motion moment; the lineage draw and the accordion are the whole motion budget.
- **Don't** put display type on a UI atom — labels, chips, buttons, table cells and form controls are Inter.
- **Don't** import the app's dashboard components or Rayna UI surfaces into a marketing section, and don't let `mkt` tokens leak into `app/(dashboard)` or `app/(auth)`.
- **Don't** show unlabelled money: any illustrative figure carries a caption saying so.
