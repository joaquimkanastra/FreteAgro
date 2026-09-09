// components/marketing/HeroSection.tsx — first viewport of the public surface
// Server Component; the email field and the lineage rail are client islands.

import { PanelMockup } from '@/components/marketing/mockups/PanelMockup'
import { AcertoLineage } from '@/components/marketing/AcertoLineage'
import { EmailCta } from '@/components/marketing/EmailCta'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[72px]">
      {/* ── The panel, glowing behind the type the way a screen glows in a cab ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <div
          className="absolute -right-[8%] top-[72px] hidden w-[1240px] opacity-[0.34] md:block lg:-right-[4%] lg:w-[1420px]"
          style={{
            // Defocused on purpose: the panel is here to glow, not to be read.
            // Saturation comes down so its greens stop blooming through the
            // scrims, and the blur keeps unlabelled money figures unreadable.
            filter: 'saturate(0.3) blur(2.5px)',
            maskImage:
              'radial-gradient(105% 85% at 72% 20%, #000 0%, rgba(0,0,0,0.62) 26%, transparent 64%)',
            WebkitMaskImage:
              'radial-gradient(105% 85% at 72% 20%, #000 0%, rgba(0,0,0,0.62) 26%, transparent 64%)',
          }}
        >
          <PanelMockup />
        </div>

        {/* Scrims: the ground reclaims the left column and the bottom edge. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgb(var(--mkt-ground)) 0%, rgb(var(--mkt-ground) / 0.94) 34%, rgb(var(--mkt-ground) / 0.55) 68%, rgb(var(--mkt-ground) / 0.2) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[46%]"
          style={{
            background:
              'linear-gradient(to top, rgb(var(--mkt-ground)) 12%, rgb(var(--mkt-ground) / 0) 100%)',
          }}
        />
        {/* Headlights on the horizon — the one warm bloom on the page. */}
        <div
          className="absolute left-[46%] top-[6%] h-[560px] w-[560px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgb(var(--mkt-signal) / 0.07) 0%, rgb(var(--mkt-signal) / 0) 70%)',
          }}
        />
      </div>

      {/* ── Offer ───────────────────────────────────────────────────────────── */}
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-5 pb-14 pt-16 sm:px-8 lg:pb-20 lg:pt-24">
        <h1
          className="max-w-[17ch] font-display font-normal leading-[1.02] tracking-[-0.02em] text-mkt-ink lg:max-w-none"
          style={{ fontSize: 'clamp(2.5rem, 5.6vw, 5.25rem)' }}
        >
          Todo frete termina num número
          <br className="hidden lg:block" /> que ninguém contesta.
        </h1>

        <p className="mt-7 max-w-[54ch] text-[16.5px] leading-relaxed text-mkt-ink/60 lg:text-[18px]">
          O FreteAgro controla os fretes, o abastecimento e o caixa da sua frota
          agrícola — e calcula o acerto de cada motorista sozinho, com comprovante
          em PDF para assinar.
        </p>

        <div className="mt-9">
          <EmailCta />
        </div>

        <p className="mt-3.5 pl-5 text-[13px] text-mkt-ink/55">
          Cadastro em duas etapas. Você configura a frota depois.
        </p>
      </div>

      {/* ── The mechanism, settled, before the visitor scrolls ──────────────── */}
      <div className="relative border-t border-mkt-ink/10">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-9 sm:px-8 lg:py-11">
          <p className="mb-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[13px] text-mkt-ink/55">
            <span className="text-mkt-ink/70">Como um acerto fecha, do frete ao saldo</span>
            <span>valores ilustrativos</span>
          </p>
          <AcertoLineage />
        </div>
      </div>
    </section>
  )
}
