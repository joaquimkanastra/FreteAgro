// components/marketing/FaqSection.tsx — objections answered before the signup form
// Server Component (Accordion is a client component internally).

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// Ordered by what actually stops a fleet owner from signing up, not by topic:
// signal, the driver's willingness, the cost of switching, then money.
const PERGUNTAS = [
  {
    pergunta: 'E no meio da estrada, onde não pega sinal?',
    resposta:
      'Funciona igual. Iniciar a viagem, registrar o trecho e lançar a despesa são ações que o app salva no celular na hora, sem internet. Ele mostra na tela o que ainda está para subir e manda tudo sozinho quando o sinal volta — o motorista não aperta nenhum botão de sincronizar.',
  },
  {
    pergunta: 'Meu motorista não tem paciência com celular.',
    resposta:
      'A parte dele são três telas: começar a viagem, registrar o trecho e lançar a despesa com a foto da nota. Não tem relatório, não tem menu escondido, e o que o sistema calcula — como o total do abastecimento — ele não digita. O trabalho pesado fica no seu painel.',
  },
  {
    pergunta: 'O motorista precisa de um celular caro?',
    resposta:
      'Não. O app foi feito para rodar em aparelho Android simples, do tipo que o motorista já carrega. O app do motorista é Android por enquanto — o seu painel é web e abre em qualquer navegador, no computador ou no celular.',
  },
  {
    pergunta: 'Como o motorista entra no sistema?',
    resposta:
      'Você cadastra o motorista no painel e ele recebe um link de convite por WhatsApp para ativar a conta no app. Não existe cadastro por conta própria — só entra na frota quem você colocou.',
  },
  {
    pergunta: 'Preciso passar tudo o que já está na minha planilha?',
    resposta:
      'Não, e hoje não há importação automática de Excel. O caminho é começar pelo que está em aberto: cadastre os caminhões e os motoristas e registre os próximos fretes no sistema. O histórico velho continua na planilha; o novo já nasce fechado do jeito certo.',
  },
  {
    pergunta: 'Outra frota consegue ver os meus números?',
    resposta:
      'Não. Toda consulta do painel é presa ao cadastro da sua frota, e cada motorista enxerga apenas as próprias viagens e o próprio acerto — nunca o caixa nem os fretes dos outros.',
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
      'Os planos ainda estão sendo fechados. Crie a conta agora, use o sistema com a sua frota e converse com a gente antes de qualquer cobrança — não pedimos cartão no cadastro.',
  },
]

export function FaqSection() {
  return (
    <section id="perguntas" className="border-t border-mkt-ink/10 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2
            className="max-w-[12ch] font-display font-normal leading-[1.06] tracking-[-0.02em] text-mkt-ink"
            style={{ fontSize: 'clamp(2rem, 3.9vw, 3.5rem)' }}
          >
            Antes de você perguntar.
          </h2>
          <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-mkt-ink/50">
            O que os donos de frota querem saber antes de colocar o primeiro
            caminhão no sistema.
          </p>
        </div>

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
