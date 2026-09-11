// components/marketing/AcertoSection.tsx — the differentiator, shown settling
// Server Component. The receipt is the product's core claim, so the page renders one
// end to end instead of describing it. Figures are illustrative and labelled as such.

import { FileDown } from 'lucide-react'

const DEDUCOES = [
  { descricao: 'Vale adiantado', data: '05/09', valor: 'R$ 200,00' },
  { descricao: 'Oficina — troca de lona', data: '11/09', valor: 'R$ 140,00' },
]

// Four guarantees, in the order the owner's doubt actually arrives: is the
// formula the one I use, does the driver agree with it, do the cents hold, and
// what do I have in hand at the end.
const GARANTIAS = [
  {
    titulo: 'A conta é a mesma que você já faz',
    texto:
      'Valor do frete vezes o percentual do motorista, menos as deduções lançadas nesse frete. Nada de cabeça, nada de fórmula escondida.',
  },
  {
    titulo: 'O motorista vê o mesmo número que você',
    texto:
      'O saldo dele aparece no app conforme você lança. Quando chega a hora de acertar, não existe número novo para nenhum dos dois.',
  },
  {
    titulo: 'O centavo não muda de tela para tela',
    texto:
      'Todo valor é guardado em centavos inteiros e arredondado uma única vez, então o painel, o acerto e o comprovante mostram o mesmo centavo.',
  },
  {
    titulo: 'Sai comprovante para os dois',
    texto:
      'O acerto vira um PDF com a conta aberta, item por item — o documento que encerra a conversa em vez de começá-la.',
  },
]

export function AcertoSection() {
  return (
    <section id="acerto" className="border-t border-mkt-ink/10 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">
        {/* ── The argument ──────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-[104px]">
          <h2
            className="max-w-[13ch] font-display font-normal leading-[1.06] tracking-[-0.02em] text-mkt-ink"
            style={{ fontSize: 'clamp(2rem, 3.9vw, 3.5rem)' }}
          >
            O acerto se fecha sozinho.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-mkt-ink/55">
            É a parte que mais custa tempo e mais gera atrito na frota, e é a
            parte que o FreteAgro assume inteira: do valor bruto do frete até o
            saldo que o motorista recebe na mão. Um acerto por frete, fechado e
            guardado.
          </p>

          <dl className="mt-12 border-t border-mkt-ink/10">
            {GARANTIAS.map((g) => (
              <div key={g.titulo} className="border-b border-mkt-ink/10 py-6">
                <dt className="text-[15px] text-mkt-ink">{g.titulo}</dt>
                <dd className="mt-2 max-w-[52ch] text-[14.5px] leading-relaxed text-mkt-ink/50">
                  {g.texto}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── The settlement itself ─────────────────────────────────────── */}
        <figure className="m-0">
          <div className="overflow-hidden rounded-2xl border border-mkt-ink/12 bg-mkt-raise">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-mkt-ink/10 px-6 py-5 sm:px-8">
              {/* One settlement per freight, not a monthly closing — the header
                  identifies the freight so the document matches the product. */}
              <p className="text-[15px] text-mkt-ink">Acerto do motorista</p>
              <p className="text-[13px] text-mkt-ink/55" data-figure>
                Frete 184 · 14/09/2026
              </p>
            </div>

            <div className="px-6 py-6 sm:px-8">
              <p className="text-[13px] text-mkt-ink/55">Frete</p>
              <p className="mt-1 text-[15px] text-mkt-ink/85">
                Sorriso/MT → Rondonópolis/MT · soja
              </p>

              <dl className="mt-7 flex flex-col gap-3.5">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-[14.5px] text-mkt-ink/60">Valor bruto do frete</dt>
                  <dd className="whitespace-nowrap text-[15.5px] text-mkt-ink" data-figure>
                    R$ 12.400,00
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-[14.5px] text-mkt-ink/60">
                    Comissão do motorista
                    <span className="ml-2 rounded-full bg-mkt-ink/[0.07] px-2 py-0.5 text-[12px] text-mkt-ink/70" data-figure>
                      12%
                    </span>
                  </dt>
                  <dd className="whitespace-nowrap text-[15.5px] text-mkt-ink" data-figure>
                    R$ 1.488,00
                  </dd>
                </div>
              </dl>

              <div className="mt-7 border-t border-mkt-ink/10 pt-6">
                <p className="text-[13px] text-mkt-ink/55">Deduções deste frete</p>
                <dl className="mt-3.5 flex flex-col gap-3">
                  {DEDUCOES.map((d) => (
                    <div key={d.descricao} className="flex items-baseline justify-between gap-6">
                      <dt className="text-[14.5px] text-mkt-ink/60">
                        {d.descricao}
                        <span className="ml-2 text-mkt-ink/50" data-figure>
                          {d.data}
                        </span>
                      </dt>
                      <dd className="whitespace-nowrap text-[15px] text-mkt-ink/75" data-figure>
                        − {d.valor}
                      </dd>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-6 border-t border-mkt-ink/[0.07] pt-3">
                    <dt className="text-[14.5px] text-mkt-ink/60">Total de deduções</dt>
                    <dd className="whitespace-nowrap text-[15.5px] text-mkt-ink" data-figure>
                      − R$ 340,00
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* The number the whole page exists to produce. */}
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-t border-mkt-ink/10 bg-mkt-signal/[0.05] px-6 py-7 sm:px-8">
              <p className="text-[14.5px] text-mkt-ink/70">Saldo a pagar ao motorista</p>
              <p
                className="font-display leading-none tracking-[-0.02em] text-mkt-glow"
                style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.25rem)' }}
                data-figure
              >
                R$ 1.148,00
              </p>
            </div>

            <div className="flex items-center gap-2.5 border-t border-mkt-ink/10 px-6 py-4 text-[13.5px] text-mkt-ink/55 sm:px-8">
              <FileDown className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
              Comprovante em PDF para o motorista assinar, com a conta aberta
              item por item.
            </div>
          </div>

          <figcaption className="mt-4 text-[13px] text-mkt-ink/50">
            Acerto de exemplo. Valores ilustrativos, calculados pela mesma fórmula do produto.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
