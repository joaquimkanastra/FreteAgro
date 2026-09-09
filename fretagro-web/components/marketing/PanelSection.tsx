// components/marketing/PanelSection.tsx — the owner's panel at full fidelity
// Server Component. Wide on purpose; it scrolls inside its own container on phones.

import { PanelMockup } from '@/components/marketing/mockups/PanelMockup'

const AREAS = [
  {
    titulo: 'Fretes',
    texto:
      'Cada viagem com origem, destino, valor e despesas, seguindo o status até o acerto sair.',
  },
  {
    titulo: 'Frota',
    texto:
      'Caminhão e motorista vinculados, com custo, km rodado e consumo por veículo.',
  },
  {
    titulo: 'Caixa',
    texto:
      'Entradas e saídas do período, com o abastecimento lançado pelo motorista entrando como despesa.',
  },
]

export function PanelSection() {
  return (
    <section id="painel" className="border-t border-mkt-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <h2
          className="max-w-[15ch] font-display font-normal leading-[1.06] tracking-[-0.02em] text-mkt-ink"
          style={{ fontSize: 'clamp(2rem, 3.9vw, 3.5rem)' }}
        >
          O painel que você abre de manhã.
        </h2>
        <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-mkt-ink/55">
          Receita, despesa e lucro da frota inteira, atualizados conforme os fretes
          fecham e o motorista registra na estrada. Sem consolidar planilha no domingo.
        </p>
      </div>

      {/* Wider than a phone by nature, so it scrolls inside its own container.
          A gradient edge would be invisible here (the panel's ground is the page's
          ground), so the caption carries the affordance instead. */}
      <div className="relative mt-14">
        <div className="overflow-x-auto px-5 pb-3 sm:px-8">
          <div className="mx-auto w-full max-w-[1280px]">
            <PanelMockup />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <p className="mt-4 text-[13px] text-mkt-ink/50">
          Painel do FreteAgro com dados ilustrativos.
          <span className="xl:hidden"> Arraste para o lado para ver o restante.</span>
        </p>

        <ul className="mt-14 grid gap-px overflow-hidden border-y border-mkt-ink/10 sm:grid-cols-3 sm:gap-0">
          {AREAS.map((a, i) => (
            <li
              key={a.titulo}
              className={`py-7 sm:py-8 ${
                i > 0
                  ? 'border-t border-mkt-ink/10 sm:border-l sm:border-t-0 sm:pl-8 lg:pl-12'
                  : ''
              } ${i < AREAS.length - 1 ? 'sm:pr-8 lg:pr-12' : ''}`}
            >
              <p className="text-[15px] text-mkt-ink">{a.titulo}</p>
              <p className="mt-2 max-w-[40ch] text-[14.5px] leading-relaxed text-mkt-ink/50">
                {a.texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
