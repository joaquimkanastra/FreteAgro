// components/marketing/AcertoLineageBand.tsx — the mechanism, stated once, immediately
// Server Component. This used to be the hero's bottom band; the device showcase took
// that space, so it stands on its own rule instead. It is still the first thing after
// the offer, because the settlement is what the offer is actually promising.

import { AcertoLineage } from '@/components/marketing/AcertoLineage'

export function AcertoLineageBand() {
  return (
    <section className="border-t border-mkt-ink/10">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-11 sm:px-8 lg:py-14">
        <p className="mb-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[13px] text-mkt-ink/55">
          <span className="text-mkt-ink/70">
            A conta inteira do acerto: do valor do frete ao saldo do motorista
          </span>
          <span>exemplo com valores ilustrativos</span>
        </p>
        <AcertoLineage />
      </div>
    </section>
  )
}
