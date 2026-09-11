// components/marketing/FinalCtaSection.tsx — the page's close
// Server Component; the email field is a client island.

import { EmailCta } from '@/components/marketing/EmailCta'

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-mkt-ink/10">
      {/* The horizon the hero opened on, returning to close the page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-320px] mx-auto h-[640px] w-[900px] max-w-none"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--mkt-signal) / 0.16) 0%, rgb(var(--mkt-signal) / 0) 66%)',
        }}
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-5 py-28 text-center sm:px-8 lg:py-36">
        <h2
          className="max-w-[18ch] font-display font-normal leading-[1.04] tracking-[-0.02em] text-mkt-ink"
          style={{ fontSize: 'clamp(2.25rem, 4.6vw, 4rem)' }}
        >
          Feche o próximo acerto sem discussão.
        </h2>
        {/* The close asks for one freight, not for a migration: the smallest
            commitment that still shows the whole product working. */}
        <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-mkt-ink/55">
          Crie a conta, cadastre um caminhão e um motorista e rode um frete de
          ponta a ponta — do trecho registrado na estrada até o comprovante
          assinado. Dá para fazer isso antes da próxima viagem sair.
        </p>

        <div className="mt-10 flex w-full justify-center">
          <EmailCta />
        </div>

        <p className="mt-3.5 text-[13px] text-mkt-ink/55">
          Cadastro em duas etapas e sem cartão. Você configura a frota depois.
        </p>
      </div>
    </section>
  )
}
