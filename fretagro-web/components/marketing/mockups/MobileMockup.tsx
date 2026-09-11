// components/marketing/mockups/MobileMockup.tsx — the driver's screen, rebuilt in markup
// Server Component. Shows the two things the driver writes from the road: the leg's
// odometer readings and the fuel stop. Figures are illustrative.
//
// The screen carries its own aspect ratio (9:19.5, a current handset) rather than
// taking the height of its content. Content-sized, the device came out at 296×425 —
// a 1:1.44 slab that reads as a wide card with rounded corners, not as a phone. The
// ratio is the thing being drawn here, so it is a constraint, not an outcome: the
// column below it grows into the height, and the actions sit where a thumb expects
// them, above the home indicator.

import { Camera, Check, CloudOff, Fuel, Plus, Route } from 'lucide-react'

export function MobileMockup() {
  return (
    <div className="relative w-[296px] shrink-0">
      {/* Side hardware. Three millimetres of nothing, but the eye reads a device
          instead of a rounded rectangle because of them. */}
      <span
        aria-hidden
        className="absolute -left-[2px] top-[118px] h-[26px] w-[2px] rounded-l-full bg-mkt-ink/20"
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[158px] h-[44px] w-[2px] rounded-l-full bg-mkt-ink/20"
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[214px] h-[44px] w-[2px] rounded-l-full bg-mkt-ink/20"
      />
      <span
        aria-hidden
        className="absolute -right-[2px] top-[182px] h-[64px] w-[2px] rounded-r-full bg-mkt-ink/20"
      />

      {/* The rail: a lit metal edge, top-left and bottom-right, the way a
          machined chamfer catches a room. */}
      <div
        className="rounded-[46px] p-[2px] shadow-[0_34px_70px_-26px_rgba(0,0,0,0.95)]"
        style={{
          background:
            'linear-gradient(148deg, rgb(var(--mkt-ink) / 0.34) 0%, rgb(var(--mkt-ink) / 0.07) 26%, rgb(var(--mkt-ink) / 0.03) 56%, rgb(var(--mkt-ink) / 0.1) 78%, rgb(var(--mkt-ink) / 0.3) 100%)',
        }}
      >
        {/* The bezel: true black, so the screen reads as lit from within. */}
        <div className="rounded-[44px] bg-[#000] p-[9px]">
          <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[36px] bg-mkt-ground">
            {/* Status strip — the island floats above it, so the row only
                carries the two figures at the edges. */}
            <div className="flex items-center justify-between px-6 pb-1 pt-[15px] text-[11px] text-mkt-ink/50">
              <span data-figure>14:32</span>
              <span data-figure>78%</span>
            </div>

            <div
              aria-hidden
              className="absolute left-1/2 top-[9px] h-[24px] w-[80px] -translate-x-1/2 rounded-full bg-[#000]"
            />

            <div className="flex min-h-0 flex-1 flex-col px-5 pb-3">
              <p className="mt-3 text-[12px] text-mkt-ink/55">Frete em andamento</p>
              {/* 15px, not 16: the route is the longest string on the screen and
                  at 16 it breaks across two lines, which costs the header its
                  shape at the sizes the hero shows this phone at. */}
              <p className="mt-1 text-[15px] leading-snug text-mkt-ink">
                Sorriso/MT → Rondonópolis/MT
              </p>

              {/* The offline state, which the driver's app keeps visible on every
                  screen. It belongs in the recreation for the same reason it is in
                  the product: this is a phone in a field, and the page now promises
                  it keeps working there. */}
              <p className="mt-3.5 flex items-center gap-2 self-start rounded-full bg-mkt-ink/[0.07] px-3 py-1.5 text-[11.5px] text-mkt-ink/70">
                <CloudOff className="h-[13px] w-[13px]" strokeWidth={1.75} aria-hidden />
                Sem sinal · 3 itens guardados
              </p>

              {/* Leg */}
              <div className="mt-4 rounded-xl border border-mkt-ink/10 bg-mkt-ink/[0.03] p-4">
                <p className="flex items-center gap-2 text-[13px] text-mkt-ink/80">
                  <Route
                    className="h-[15px] w-[15px] text-mkt-signal"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  Trecho carregado
                </p>
                <dl className="mt-3.5 flex flex-col gap-2.5">
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[12.5px] text-mkt-ink/50">Km de saída</dt>
                    <dd className="text-[14px] text-mkt-ink/90" data-figure>
                      128.940
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[12.5px] text-mkt-ink/50">Km de chegada</dt>
                    <dd className="text-[14px] text-mkt-ink/90" data-figure>
                      129.252
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between border-t border-mkt-ink/[0.08] pt-2.5">
                    <dt className="text-[12.5px] text-mkt-ink/50">Rodado</dt>
                    <dd className="text-[14px] text-mkt-glow" data-figure>
                      312 km
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Fuel */}
              <div className="mt-3 rounded-xl border border-mkt-ink/10 bg-mkt-ink/[0.03] p-4">
                <p className="flex items-center justify-between text-[13px] text-mkt-ink/80">
                  <span className="flex items-center gap-2">
                    <Fuel
                      className="h-[15px] w-[15px] text-mkt-signal"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    Abastecimento
                  </span>
                  <span data-figure className="text-mkt-ink/90">
                    180 L
                  </span>
                </p>
                <p className="mt-3 flex items-center justify-between text-[12.5px] text-mkt-ink/50">
                  <span className="flex items-center gap-1.5">
                    <Camera className="h-[14px] w-[14px]" strokeWidth={1.75} aria-hidden />
                    Nota anexada
                  </span>
                  <span data-figure className="text-mkt-ink/75">
                    R$ 1.242,00
                  </span>
                </p>
              </div>

              {/* The actions take the slack the ratio opens up, and land where a
                  thumb reaches: at the bottom of the screen, not under the last
                  card. Secondary above primary, as in the app. */}
              <p className="mt-auto flex items-center justify-center gap-2 rounded-full border border-mkt-ink/15 py-3 text-[13.5px] text-mkt-ink/80">
                <Plus className="h-[15px] w-[15px]" strokeWidth={2} aria-hidden />
                Lançar despesa
              </p>

              <p className="mt-2.5 flex items-center justify-center gap-2 rounded-full bg-mkt-signal py-3.5 text-[14px] font-medium text-mkt-ground">
                <Check className="h-[17px] w-[17px]" strokeWidth={2.5} aria-hidden />
                Finalizar viagem
              </p>
            </div>

            {/* Home indicator — the last tell that this is a phone and not a card. */}
            <div
              aria-hidden
              className="mx-auto mb-2.5 h-[4px] w-[104px] shrink-0 rounded-full bg-mkt-ink/25"
            />

            {/* One raking reflection across the glass. Anything more and the
                device starts competing with what is on its screen. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(126deg, rgb(var(--mkt-ink) / 0.055) 0%, rgb(var(--mkt-ink) / 0.02) 22%, rgb(var(--mkt-ink) / 0) 44%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
