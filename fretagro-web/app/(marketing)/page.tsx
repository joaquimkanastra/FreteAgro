// app/(marketing)/page.tsx — Public landing page ("/")
// Server Component — stacks marketing sections; interactive parts are Client Components.

import { HeroSection } from '@/components/marketing/HeroSection'
import { PainSection } from '@/components/marketing/PainSection'
import { AcertoSection } from '@/components/marketing/AcertoSection'
import { PanelSection } from '@/components/marketing/PanelSection'
import { MotoristaSection } from '@/components/marketing/MotoristaSection'
import { FaqSection } from '@/components/marketing/FaqSection'
import { FinalCtaSection } from '@/components/marketing/FinalCtaSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <PainSection />
      <AcertoSection />
      <PanelSection />
      <MotoristaSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
