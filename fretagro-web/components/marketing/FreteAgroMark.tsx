// components/marketing/FreteAgroMark.tsx — brand mark for the public surface
// Server Component. Two lane lines converging to a horizon: the road the fleet runs.

export function FreteAgroMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className={className}>
      <rect width="28" height="28" rx="8" className="fill-mkt-signal" />
      {/* Lane edges converging toward the horizon, and the dashed centre line. */}
      <path
        d="M7.5 21.5 12.2 7.5M20.5 21.5 15.8 7.5"
        stroke="rgb(var(--mkt-ground))"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M14 19.5v-2.4M14 14.6v-2.1M14 10v-1.6"
        stroke="rgb(var(--mkt-ground))"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}
