// components/marketing/HeroSection.tsx — first viewport of the public surface
// Server Component; the reveal, the email field and the device showcase are client islands.
//
// Centred rather than left-set: the offer sits above the product, and the product
// below it is two devices on one axis. An off-centre headline would leave the
// composition hanging off the side of its own argument.
//
// The section is held to one viewport (with a floor, so a short laptop does not
// crop the offer) and clips. The devices are meant to run past the fold — what
// ends them is the fade at the bottom, not the edge of a box.

import { EmailCta } from '@/components/marketing/EmailCta'
import { HeroReveal } from '@/components/marketing/HeroReveal'
import { HeroShowcase } from '@/components/marketing/HeroShowcase'

export function HeroSection() {
  return (
    <section className="relative flex h-[100svh] min-h-[720px] flex-col overflow-hidden pt-[72px]">
      {/* ── The light ────────────────────────────────────────────────────────
          Ground is held at the centre-top, where the headline lands, and light
          gathers toward the edges and the floor — so the devices below sit in a
          pool of it instead of on a flat black. Green because it is the only
          colour this surface owns; it never touches the type, only the room
          around it. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <div
          className="absolute inset-0"
          style={{
            // `screen` is what makes this a lamp instead of a green film: it
            // adds luminance to the ground rather than tinting over it.
            mixBlendMode: 'screen',
            background:
              'radial-gradient(125% 125% at 50% 4%, rgb(var(--mkt-glow) / 0) 32%, rgb(var(--mkt-glow) / 0.06) 55%, rgb(var(--mkt-glow) / 0.18) 78%, rgb(var(--mkt-glow) / 0.28) 100%)',
          }}
        />

        {/* A wider, softer band riding just above the panel's top edge, so the
            device stack looks lit from behind rather than pasted on. */}
        <div
          className="absolute left-1/2 top-[38%] h-[38%] w-[86%] -translate-x-1/2 rounded-[50%]"
          style={{
            mixBlendMode: 'screen',
            background:
              'radial-gradient(closest-side, rgb(var(--mkt-glow) / 0.16) 0%, rgb(var(--mkt-glow) / 0.06) 52%, rgb(var(--mkt-glow) / 0) 100%)',
            filter: 'blur(46px)',
          }}
        />
      </div>

      {/* ── Offer ───────────────────────────────────────────────────────────── */}
      <div className="relative mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col px-5 pt-[4vh] sm:px-8 md:pt-[5vh]">
        <HeroReveal className="w-full text-center">
          {/* Short on purpose: two beats the owner can finish in one breath.
              Parallel verbs ("sai da planilha" / "sai calculado") so the visitor
              who knows nothing about the product still leaves with the trade it
              is offering: the routine goes out, the settlement comes back done. */}
          {/* The measure is 28ch, not the 17ch of the left-set version: centred,
              a tighter cap wraps the second sentence and leaves "calculado."
              alone on a line of its own. `text-balance` catches the narrow
              viewports where it still does not fit. */}
          <h1
            className="mx-auto max-w-[28ch] text-balance font-display font-normal leading-[1.05] tracking-[-0.02em] text-mkt-ink"
            style={{ fontSize: 'clamp(1.95rem, 4.8vw, 4rem)' }}
          >
            Sua frota sai da planilha.
            <br /> O acerto sai calculado.
          </h1>

          {/* The headline is the promise; this line is the category. A visitor
              arriving cold needs to learn, in one sentence, what the thing is,
              who writes into it and what comes out the other end. */}
          <p className="mx-auto mt-6 max-w-[56ch] text-[15.5px] leading-relaxed text-mkt-ink/60 lg:text-[17px]">
            O sistema de gestão para frotas de transporte agrícola: o motorista
            registra a viagem mesmo sem sinal e o acerto dele sai calculado, com
            comprovante em PDF.
          </p>

          <div className="mx-auto mt-8 w-full max-w-[520px]">
            <EmailCta />
          </div>

          {/* The hesitation right under the button is money, not effort:
              pricing is not closed yet, so saying "sem cartão" here is both
              true and the cheapest objection to remove. */}
          <p className="mt-3.5 text-[13px] text-mkt-ink/55">
            Cadastro em duas etapas e sem cartão. Você configura a frota depois.
          </p>
        </HeroReveal>

        {/* ── The product, both halves of it, before the visitor scrolls ────── */}
        <HeroShowcase />
      </div>

      {/* The ground reclaims the bottom of both devices, at the fold rather than
          at the end of the composition. This is what keeps the stack from
          reading as two pasted rectangles: they do not end, they dissolve into
          the page the hero is standing on. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[130px] md:h-[150px] lg:h-[170px]"
        style={{
          background:
            'linear-gradient(to top, rgb(var(--mkt-ground)) 16%, rgb(var(--mkt-ground) / 0.8) 48%, rgb(var(--mkt-ground) / 0) 100%)',
        }}
      />
    </section>
  )
}
