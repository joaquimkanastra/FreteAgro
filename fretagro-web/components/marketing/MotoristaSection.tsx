// components/marketing/MotoristaSection.tsx — the field half of the product
// Server Component. The driver writes from the road; the owner's panel reads it.

import { MobileMockup } from '@/components/marketing/mockups/MobileMockup'

const PASSOS = [
  {
    titulo: 'Abre o frete que você criou',
    texto:
      'A viagem já chega com origem, destino e carga definidos no painel. O motorista não precisa cadastrar nada do zero.',
  },
  {
    titulo: 'Registra o trecho e o abastecimento',
    texto:
      'Km de saída e de chegada, carregado ou vazio, litros, preço e a foto da nota do posto. O total do abastecimento é calculado, nunca digitado.',
  },
  {
    titulo: 'Finaliza a viagem',
    texto:
      'O que ele registrou vira km rodado e despesa no seu painel, e já entra na conta do acerto dele.',
  },
]

// The two things an owner asks about this half of the product before he asks
// anything else: does it work where there is no signal, and who can get in.
const RESSALVAS = [
  {
    titulo: 'Onde não pega sinal, continua funcionando',
    texto:
      'Tudo o que ele registra é salvo no celular na hora e sobe sozinho quando o sinal volta. Ninguém precisa lembrar de sincronizar nada, e o dado aparece no seu painel em segundos depois que ele reconecta.',
  },
  {
    titulo: 'Só entra na frota quem você colocou',
    texto:
      'O motorista não se cadastra sozinho: você o cadastra no painel e ele recebe o convite por WhatsApp. No app ele vê as próprias viagens e o próprio acerto — nunca o caixa da frota nem o frete dos outros.',
  },
]

export function MotoristaSection() {
  return (
    <section className="border-t border-mkt-ink/10 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] items-start gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <h2
            className="max-w-[17ch] font-display font-normal leading-[1.06] tracking-[-0.02em] text-mkt-ink"
            style={{ fontSize: 'clamp(2rem, 3.9vw, 3.5rem)' }}
          >
            Na estrada, o motorista faz três coisas.
          </h2>
          <p className="mt-6 max-w-[54ch] text-[16.5px] leading-relaxed text-mkt-ink/55">
            O aplicativo dele existe para alimentar o seu painel sem
            intermediário — sem foto no WhatsApp, sem papel que some no caminho.
            Roda no Android simples que ele já carrega.
          </p>

          {/* Same rail as the settlement: what the driver writes runs on one line. */}
          <ol className="relative mt-12">
            <span
              aria-hidden
              className="absolute bottom-6 left-[3.5px] top-3 w-px bg-mkt-ink/12"
            />
            {PASSOS.map((p) => (
              <li key={p.titulo} className="relative pb-9 pl-8 last:pb-0">
                <span
                  aria-hidden
                  className="absolute left-0 top-[7px] block h-[8px] w-[8px] rounded-full bg-mkt-signal"
                />
                <p className="text-[15.5px] text-mkt-ink">{p.titulo}</p>
                <p className="mt-2 max-w-[50ch] text-[14.5px] leading-relaxed text-mkt-ink/50">
                  {p.texto}
                </p>
              </li>
            ))}
          </ol>

          {/* Same ruled idiom as the settlement's guarantees: these are answers,
              not features, so they sit under a hairline instead of on the rail. */}
          <dl className="mt-10 border-t border-mkt-ink/10">
            {RESSALVAS.map((r) => (
              <div key={r.titulo} className="border-b border-mkt-ink/10 py-6">
                <dt className="text-[15px] text-mkt-ink">{r.titulo}</dt>
                <dd className="mt-2 max-w-[54ch] text-[14.5px] leading-relaxed text-mkt-ink/50">
                  {r.texto}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="m-0 flex flex-col items-center lg:items-end">
          <MobileMockup />
          <figcaption className="mt-5 text-[13px] text-mkt-ink/50">
            App do motorista, com dados ilustrativos.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
