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
  title: 'FreteAgro — gestão de frota agrícola e acerto do motorista',
  description:
    'Sistema de gestão para frotas de transporte agrícola. O motorista registra a viagem no celular, mesmo sem sinal; você controla fretes, abastecimento e caixa, e o acerto dele sai calculado com comprovante em PDF.',
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
