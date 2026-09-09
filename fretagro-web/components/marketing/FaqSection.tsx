// components/marketing/FaqSection.tsx — objections answered before the signup form
// Server Component (Accordion is a client component internally).

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const PERGUNTAS = [
  {
    pergunta: 'Como o motorista entra no sistema?',
    resposta:
      'Você cadastra o motorista no painel e ele recebe um link de convite por WhatsApp para ativar a conta no app. Não existe cadastro por conta própria — só entra na frota quem você colocou.',
  },
  {
    pergunta: 'O motorista precisa de um celular caro?',
    resposta:
      'Não. O app foi feito para rodar em aparelhos Android simples, do tipo que o motorista já carrega. O que ele precisa fazer é registrar o trecho e o abastecimento — nada além disso.',
  },
  {
    pergunta: 'A carga que eu transporto entra no sistema?',
    resposta:
      'O tipo de carga faz parte do cadastro de cada frete, junto com origem, destino e valor — você descreve a carga da viagem em vez de escolher de uma lista fechada.',
  },
  {
    pergunta: 'O acerto some se eu apagar um frete?',
    resposta:
      'Não. Caminhão, motorista e frete com histórico financeiro são inativados, nunca apagados: a viagem sai da operação do dia a dia mas continua no histórico e nos relatórios.',
  },
  {
    pergunta: 'Consigo mandar os números para o meu contador?',
    resposta:
      'Sim. Os relatórios saem em PDF e Excel por período, por motorista ou por caminhão, e cada acerto tem o comprovante em PDF.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta:
      'Os planos ainda estão sendo fechados. Crie a conta agora para usar o sistema e conversamos com você antes de qualquer cobrança.',
  },
]

export function FaqSection() {
  return (
    <section id="perguntas" className="border-t border-mkt-ink/10 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2
          className="max-w-[12ch] font-display font-normal leading-[1.06] tracking-[-0.02em] text-mkt-ink"
          style={{ fontSize: 'clamp(2rem, 3.9vw, 3.5rem)' }}
        >
          Antes de você perguntar.
        </h2>

        <Accordion type="single" collapsible className="border-t border-mkt-ink/10">
          {PERGUNTAS.map((item) => (
            <AccordionItem
              key={item.pergunta}
              value={item.pergunta}
              className="border-b border-mkt-ink/10"
            >
              <AccordionTrigger className="py-6 text-[16.5px] font-normal text-mkt-ink hover:text-mkt-ink [&>svg]:text-mkt-ink/50">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="max-w-[62ch] pb-7 pr-8 text-[15px] leading-relaxed text-mkt-ink/55">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
