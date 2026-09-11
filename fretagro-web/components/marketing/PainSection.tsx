// components/marketing/PainSection.tsx — the manual routine, set against the product
// Server Component. A ruled ledger rather than a card grid: the two columns are meant
// to be read across, line by line, the way the owner actually compares them.

const LINHAS = [
  {
    hoje: 'O motorista anota o km num caderno e manda a foto da nota no WhatsApp. À noite, você digita tudo de novo na planilha.',
    agora: 'Ele registra o trecho e o abastecimento no celular, mesmo sem sinal. O km e a despesa entram no frete sozinhos.',
  },
  {
    hoje: 'A comissão sai de cabeça e os vales são descontados de memória, num papel que some.',
    agora: 'A comissão sai do valor do frete e cada vale fica itemizado, com data e motivo.',
  },
  {
    hoje: 'O fechamento vira discussão: você chega com um número, o motorista chega com outro.',
    agora: 'Os dois olham a mesma conta aberta — ele no app, você no painel — e assinam o mesmo PDF.',
  },
  {
    hoje: 'No fim do mês a margem sumiu e não dá para dizer em qual caminhão ela ficou.',
    agora: 'Receita, despesa e lucro por caminhão, por motorista e por período, prontos para exportar.',
  },
]

export function PainSection() {
  return (
    <section id="como-funciona" className="border-t border-mkt-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <h2
          className="max-w-[16ch] font-display font-normal leading-[1.06] tracking-[-0.02em] text-mkt-ink"
          style={{ fontSize: 'clamp(2rem, 3.9vw, 3.5rem)' }}
        >
          O problema nunca foi o frete. Foi o fechamento.
        </h2>
        {/* The lead qualifies before it argues: the visitor should recognise
            his own fleet in the first clause, or know in one line that this
            page is not for him. */}
        <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-mkt-ink/55">
          Quem toca de cinco a trinta caminhões no caderno, no WhatsApp e na
          planilha perde sempre nos mesmos quatro pontos — e é neles que o
          FreteAgro entra.
        </p>

        {/* Column headers appear once; on phones each cell carries its own label. */}
        <div className="mt-16 hidden grid-cols-2 gap-12 border-b border-mkt-ink/10 pb-4 md:grid lg:gap-20">
          <p className="text-[13px] uppercase tracking-[0.14em] text-mkt-ink/50">Hoje</p>
          <p className="text-[13px] uppercase tracking-[0.14em] text-mkt-ink/75">
            Com o FreteAgro
          </p>
        </div>

        <ul className="mt-10 border-t border-mkt-ink/10 md:mt-0 md:border-t-0">
          {LINHAS.map((linha) => (
            <li
              key={linha.agora}
              className="grid gap-6 border-b border-mkt-ink/10 py-8 md:grid-cols-2 md:gap-12 md:py-9 lg:gap-20"
            >
              <div>
                <p className="mb-2 text-[12px] uppercase tracking-[0.14em] text-mkt-ink/50 md:hidden">
                  Hoje
                </p>
                <p className="max-w-[46ch] text-[15.5px] leading-relaxed text-mkt-ink/55">
                  {linha.hoje}
                </p>
              </div>

              <div className="relative md:pl-7">
                <span
                  aria-hidden
                  className="absolute left-0 top-[9px] hidden h-[7px] w-[7px] rounded-full bg-mkt-signal md:block"
                />
                <p className="mb-2 text-[12px] uppercase tracking-[0.14em] text-mkt-signal md:hidden">
                  Com o FreteAgro
                </p>
                <p className="max-w-[46ch] text-[15.5px] leading-relaxed text-mkt-ink/85">
                  {linha.agora}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
