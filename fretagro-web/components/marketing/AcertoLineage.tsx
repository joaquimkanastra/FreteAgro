"use client"

// components/marketing/AcertoLineage.tsx — the money's path, drawn as one unbroken line.
// The settlement is the product, so the first viewport settles a number instead of
// describing the feature. Figures follow the real formula:
//   valorComissao = valorFrete × percentual        saldoFinal = valorComissao − deduções
// Values are illustrative and labelled as such by the caller.

import { motion, useReducedMotion } from "framer-motion"

// The operator belongs to the figure it acts on, not to the label above it:
// on the label line the chain reads "12.400 × 1.488 − 340", which is not the sum.
// Here it reads 12.400 at 12% → 1.488, then 1.488 − 340 = 1.148.
// The rail no longer sits above the fold — the hero's bottom band became the
// device showcase — so the draw waits until it is actually on screen instead of
// firing where nobody is looking. Once only: this is a statement, not a loop.
const VIEWPORT = { once: true, amount: 0.4 } as const

const PARADAS = [
  { op: null, label: "Valor do frete", valor: "R$ 12.400,00" },
  { op: null, label: "Comissão do motorista · 12%", valor: "R$ 1.488,00" },
  { op: "−", label: "Deduções (vale, oficina)", valor: "R$ 340,00" },
  { op: "=", label: "Saldo a pagar", valor: "R$ 1.148,00", final: true },
]

export function AcertoLineage() {
  const reduzido = useReducedMotion()

  return (
    <div className="relative">
      {/* Rail — vertical until lg, horizontal above it. Four columns any earlier
          wraps the commission label and drops its figure off the shared baseline.
          The drawn segment is the page's one authored motion moment; the figures
          themselves never animate in. */}
      <div
        aria-hidden
        className="absolute left-[3.5px] top-2 w-px bg-mkt-ink/12 lg:left-0 lg:right-0 lg:top-[3.5px] lg:h-px lg:w-auto"
        style={{ bottom: "0.5rem" }}
      />
      <motion.div
        aria-hidden
        initial={reduzido ? false : { scaleY: 0, scaleX: 0 }}
        whileInView={{ scaleY: 1, scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[3.5px] top-2 w-px origin-top bg-mkt-signal lg:left-0 lg:right-0 lg:top-[3.5px] lg:h-px lg:w-auto lg:origin-left"
        style={{ bottom: "0.5rem" }}
      />

      <ol className="relative grid gap-7 lg:grid-cols-4 lg:gap-6">
        {PARADAS.map((p, i) => (
          <li key={p.label} className="relative pl-6 lg:pl-0 lg:pt-6">
            <motion.span
              aria-hidden
              initial={reduzido ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.32, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute left-0 top-2 block h-[8px] w-[8px] -translate-x-[2.5px] rounded-full lg:top-0 ${
                p.final ? "bg-mkt-glow" : "bg-mkt-signal"
              }`}
            />
            <p className="text-[13px] leading-snug text-mkt-ink/55">{p.label}</p>
            <p
              data-figure
              className={`mt-1.5 whitespace-nowrap font-display text-[26px] leading-none tracking-[-0.01em] lg:text-[31px] ${
                p.final ? "text-mkt-glow" : "text-mkt-ink"
              }`}
            >
              {p.op && <span className="mr-1.5 text-mkt-ink/50">{p.op}</span>}
              {p.valor}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
