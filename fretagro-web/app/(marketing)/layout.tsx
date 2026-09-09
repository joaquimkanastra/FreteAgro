// app/(marketing)/layout.tsx — Public marketing site layout (landing page)
// Server Component — no auth guard; header/footer shared across marketing routes.

import type { Metadata } from 'next'
import { Bodoni_Moda } from 'next/font/google'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

// Display face for the public surface only. The app keeps Inter (constitution
// Principle III); this exception is recorded in the marketing surface brief.
const display = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'FreteAgro — o acerto do motorista, calculado sozinho',
  description:
    'Controle fretes, abastecimento e caixa da sua frota agrícola. O acerto de cada motorista é calculado automaticamente, com comprovante em PDF.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`mkt min-h-screen bg-mkt-ground text-mkt-ink ${display.variable}`}>
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  )
}
