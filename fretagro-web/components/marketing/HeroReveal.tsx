"use client"

// components/marketing/HeroReveal.tsx — the hero's opening beat.
// Wraps each direct child in its own flex item and brings them in one after the
// other, out of focus and slightly low. A flex column is deliberate: margins do
// not collapse across flex items, so each child keeps the exact spacing it was
// written with instead of having it swallowed by the wrapper.

import { Children, isValidElement } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

const PARADA: Variants = {
  oculto: { opacity: 0, filter: "blur(10px)", y: 20 },
  visivel: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.9 },
  },
}

export function HeroReveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduzido = useReducedMotion()

  // Under a reduced-motion preference the wrapper still has to exist, or the
  // children lose the flex column that holds their spacing.
  if (reduzido) {
    return <div className={`flex flex-col ${className ?? ""}`}>{children}</div>
  }

  return (
    <motion.div
      className={`flex flex-col ${className ?? ""}`}
      initial="oculto"
      animate="visivel"
      variants={{ visivel: { transition: { staggerChildren: 0.1 } } }}
    >
      {Children.map(children, (filho) =>
        isValidElement(filho) ? (
          <motion.div className="w-full" variants={PARADA}>
            {filho}
          </motion.div>
        ) : (
          filho
        )
      )}
    </motion.div>
  )
}
