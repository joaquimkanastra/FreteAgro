"use client"

// components/marketing/HeroShowcase.tsx — the product, both halves of it, in one image.
// The owner's panel and the driver's phone are the two surfaces FreteAgro ships, and
// they are the argument: the panel reads what the phone writes. Showing them stacked
// says that in the first viewport, before any section has had to explain it.
//
// Both are the same markup recreations used further down the page (never screenshots
// — see DESIGN.md), so they inherit this world's palette and stay sharp at any density.

import { motion, useReducedMotion } from "framer-motion"
import { PanelMockup } from "@/components/marketing/mockups/PanelMockup"
import { MobileMockup } from "@/components/marketing/mockups/MobileMockup"

// The lineage draw's curve, reused so the two authored moments on this surface
// move with the same hand.
const CURVA = [0.16, 1, 0.3, 1] as const

export function HeroShowcase() {
  const reduzido = useReducedMotion()

  return (
    <div className="relative mt-7 w-full lg:mt-8">
      {/* No measure of its own: the composition fills the hero's 1280 gutter to
          gutter. Capping it narrower than the type it sits under made the
          product read as a thumbnail of itself. */}
      <div className="relative mx-auto w-full">
        {/* ── The panel ────────────────────────────────────────────────────
            Wider than a phone by nature. Rather than shrink it into
            illegibility, it keeps its own scale and is cropped from the right
            — the panel's left column (the figures that matter) is what a
            narrow viewport gets. */}
        <motion.div
          initial={reduzido ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: CURVA }}
          className="overflow-hidden rounded-[14px]"
        >
          <PanelMockup />
        </motion.div>

        {/* ── The phone, standing in front of it ───────────────────────────
            The phone lands in one specific slot: the panel's second KPI card.
            Anywhere else and it cuts a figure in half, which reads as a bug
            rather than as depth — and the third card is the profit number the
            panel exists to show, so that one stays clear at every width.

            What the phone may overlap is the neighbouring cards' padding: their
            own 14px inset is empty, so covering it reads as the phone standing
            in front of them. That is what buys the size — the slot is the gap
            between the two figures, not between the two cards.

            The slot is derived, not guessed. This wrapper reproduces the
            panel's own box (its `min-w`, filled by the measure when the measure
            is wider), the next one the KPI grid inside it, and 37.3% is where
            the second of four equal columns centres. */}
        <div className="absolute left-0 top-0 h-full w-[max(700px,100%)] lg:w-[max(980px,100%)]">
          <div className="absolute inset-y-0 left-5 right-5 lg:left-[208px]">
            {/* Three nested elements on purpose: the outer one positions, the
                middle one animates, the inner one scales. Framer writes
                `transform` inline, so a Tailwind translate on the animated
                element would be overwritten by the entrance. */}
            {/* A fixed offset, not a percentage: the panel's vertical rhythm is
                in fixed pixels (46px topbar, 20px body padding), so 24px puts
                the phone's top edge inside the header at every width. Anchoring
                the scale to the top is what keeps that true — scaled from the
                centre, each smaller step would sink the phone further into the
                fade. */}
            <div className="absolute left-[37.3%] top-[24px] z-20 -translate-x-1/2">
              <motion.div
                initial={reduzido ? false : { opacity: 0, scale: 0.86, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: CURVA }}
              >
                {/* Scaled rather than re-authored: the phone is one recreation
                    used at four sizes, so the driver's screen in the hero and
                    the one in the motorista section are the same object. Each
                    step is the widest that still clears the figures either side
                    — which is a card's width plus 52px, so the steps track the
                    panel's own grid. Below `sm` the viewport binds first. */}
                <div className="origin-top scale-[0.62] sm:scale-[0.68] lg:scale-[0.76] xl:scale-[0.95]">
                  <MobileMockup />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
