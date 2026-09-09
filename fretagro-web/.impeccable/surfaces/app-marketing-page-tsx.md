---
version: 1
slug: "app-marketing-page-tsx"
primary_target: "app/(marketing)/page.tsx"
related_targets: ["app/(marketing)/layout.tsx","components/marketing"]
---

Scope: public marketing landing (`/`). Visitor mode: Persuade.

Audience: Brazilian agricultural fleet owner (dono de frota), 3–15 trucks, today running the business on paper, WhatsApp and spreadsheets. Job: decide FreteAgro is worth an account. Action: `/cadastro`. Constraints: nothing is proven yet — no customers, no testimonials, no final pricing. Demo figures ship labeled as illustrative; commercial claims stay uninvented.

## Direction contract

THESIS: The settlement (acerto) is the product, so the page settles a number in front of the visitor instead of describing features. It refuses the category default this landing currently is — badge pill, bold sans promise, two buttons, tilted screenshot trio, invented logo wall.

OWN-WORLD: The night highway. Near-black asphalt ground, the panel glowing in the dark the way a phone glows in a cab at 3am. One ink on black: white type, tone made by opacity, never by adding colors. FreteAgro green appears only as signal — the lane line, the settled figure, the live state — never as decoration. Bodoni Moda carries display only; Inter carries every UI atom, so the app's typeface rule survives. Hairline rules, generous black, no cards floating on gradients.

STORY: This owner recognizes the mess (paper, WhatsApp, mental math, arguments at closing). They watch one settlement compute itself end to end, see the panel that number lands in, understand the driver's phone feeds it, and open an account.

FIRST VIEWPORT: Fixed hairline nav — mark and wordmark left, four links center, "Entrar" plus white pill right. Below it the display headline at the largest scale on the page, two lines, left-aligned on the black. The recreated FreteAgro panel sits behind it, dimmed and gradient-masked to glow rather than to be read. Sub in Inter under the headline; email field plus white pill button directly beneath, the primary action, above the fold. Anchoring the viewport's bottom edge: the acerto lineage — frete value, commission, deductions, final balance, threaded on one continuous green hairline, marked illustrative. That band replaces the reference's logo wall, because a logo wall here would have to be invented.

FORM: Brief-pinned direction (the user's reference image); it beats the roll, seed key b683cf51, mode persuade, assigned index 3. Raised by the declined and competitive hands: LINEAGE (from the provenance ribbon) — the money's path from frete to saldo is one unbroken line with every deduction attached, never a static feature card. MEASURE (from the oscilloscope bench) — every figure on the page reads against one shared baseline grid instead of floating in its own box. SINGLE INK (from the ASCII render) — tone is density and opacity of one ink, so adding a color is a decision that must be argued for.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- No real customers, testimonials, logos or case studies exist. Testimonials and the social-proof bar are removed rather than redesigned; the slot is held by the acerto lineage until real material arrives.
- Pricing is not final. The pricing table is removed from the home; the page closes on the CTA. "14 dias grátis" is treated as unconfirmed and kept out of CTA labels.
- FAQ claims the previous build carried that PRODUCT.md does not confirm were dropped rather than reworded: the offline-capable driver app, the Android 8 floor, the historical-data import help, and the enumerated cargo types are all absent from the shipped `FaqSection`. The one soft claim that remains is "aparelhos Android simples" in the cheap-phone answer; it is on the user's verification list.
- The pricing question is answered honestly on the page ("os planos ainda estão sendo fechados") rather than omitted, so the FAQ carries the gap instead of hiding it.
