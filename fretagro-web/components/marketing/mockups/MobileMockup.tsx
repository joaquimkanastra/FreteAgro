// components/marketing/mockups/MobileMockup.tsx — the driver's screen, rebuilt in markup
// Server Component. Shows the two things the driver writes from the road: the leg's
// odometer readings and the fuel stop. Figures are illustrative.

import { Camera, Check, Fuel, Route } from 'lucide-react'

export function MobileMockup() {
  return (
    <div className="w-[268px] shrink-0 rounded-[34px] border border-mkt-ink/15 bg-mkt-raise p-2.5 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.9)]">
      <div className="overflow-hidden rounded-[26px] border border-mkt-ink/10 bg-mkt-ground">
        {/* Status strip */}
        <div className="flex items-center justify-between px-5 pb-2 pt-3.5 text-[10.5px] text-mkt-ink/50">
          <span data-figure>14:32</span>
          <span className="h-[5px] w-[64px] rounded-full bg-mkt-ink/15" />
          <span data-figure>78%</span>
        </div>

        <div className="px-4 pb-5">
          <p className="mt-2 text-[11px] text-mkt-ink/55">Frete em andamento</p>
          <p className="mt-1 text-[14px] leading-snug text-mkt-ink">
            Sorriso/MT → Rondonópolis/MT
          </p>

          {/* Leg */}
          <div className="mt-4 rounded-xl border border-mkt-ink/10 bg-mkt-ink/[0.03] p-3.5">
            <p className="flex items-center gap-2 text-[12px] text-mkt-ink/80">
              <Route className="h-[14px] w-[14px] text-mkt-signal" strokeWidth={1.75} aria-hidden />
              Trecho carregado
            </p>
            <dl className="mt-3 flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <dt className="text-[11.5px] text-mkt-ink/50">Km de saída</dt>
                <dd className="text-[12.5px] text-mkt-ink/90" data-figure>
                  128.940
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-[11.5px] text-mkt-ink/50">Km de chegada</dt>
                <dd className="text-[12.5px] text-mkt-ink/90" data-figure>
                  129.252
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-mkt-ink/[0.08] pt-2">
                <dt className="text-[11.5px] text-mkt-ink/50">Rodado</dt>
                <dd className="text-[12.5px] text-mkt-glow" data-figure>
                  312 km
                </dd>
              </div>
            </dl>
          </div>

          {/* Fuel */}
          <div className="mt-3 rounded-xl border border-mkt-ink/10 bg-mkt-ink/[0.03] p-3.5">
            <p className="flex items-center justify-between text-[12px] text-mkt-ink/80">
              <span className="flex items-center gap-2">
                <Fuel className="h-[14px] w-[14px] text-mkt-signal" strokeWidth={1.75} aria-hidden />
                Abastecimento
              </span>
              <span data-figure className="text-mkt-ink/90">
                180 L
              </span>
            </p>
            <p className="mt-2.5 flex items-center justify-between text-[11.5px] text-mkt-ink/50">
              <span className="flex items-center gap-1.5">
                <Camera className="h-[13px] w-[13px]" strokeWidth={1.75} aria-hidden />
                Nota anexada
              </span>
              <span data-figure className="text-mkt-ink/75">
                R$ 1.242,00
              </span>
            </p>
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 rounded-full bg-mkt-signal py-2.5 text-[13px] font-medium text-mkt-ground">
            <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            Finalizar viagem
          </p>
        </div>
      </div>
    </div>
  )
}
