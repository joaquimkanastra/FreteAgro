// components/marketing/MarketingFooter.tsx — public site footer
// Server Component.

import Link from 'next/link'
import { FreteAgroMark } from '@/components/marketing/FreteAgroMark'

const COLUNAS = [
  {
    titulo: 'Produto',
    links: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'O acerto', href: '#acerto' },
      { label: 'O painel', href: '#painel' },
      { label: 'Perguntas', href: '#perguntas' },
    ],
  },
  {
    titulo: 'Conta',
    links: [
      { label: 'Entrar', href: '/login' },
      { label: 'Criar conta', href: '/cadastro' },
      { label: 'Recuperar senha', href: '/recuperar-senha' },
    ],
  },
]

export function MarketingFooter() {
  return (
    <footer className="border-t border-mkt-ink/10">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-[15px] text-mkt-ink">
              <FreteAgroMark />
              <span className="font-medium tracking-tight">FreteAgro</span>
            </Link>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-mkt-ink/55">
              Gestão de frota de transporte agrícola: fretes, abastecimento,
              caixa e o acerto do motorista calculado sozinho, com comprovante
              em PDF.
            </p>
          </div>

          {COLUNAS.map((coluna) => (
            <nav key={coluna.titulo} aria-label={coluna.titulo}>
              <p className="text-[12px] uppercase tracking-[0.14em] text-mkt-ink/50">
                {coluna.titulo}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {coluna.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14.5px] text-mkt-ink/60 transition-colors duration-200 hover:text-mkt-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-mkt-ink/10 pt-7 text-[13px] text-mkt-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FreteAgro</p>
          <p>Painéis, acertos e valores desta página são exemplos ilustrativos.</p>
        </div>
      </div>
    </footer>
  )
}
