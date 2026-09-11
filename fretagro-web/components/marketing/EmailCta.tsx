"use client"

// components/marketing/EmailCta.tsx — primary action for the public surface.
// Carries the address straight into /cadastro so the visitor never types it twice.

import { useId, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function EmailCta() {
  const router = useRouter()
  const id = useId()
  const [email, setEmail] = useState("")
  const [erro, setErro] = useState<string | null>(null)
  const [enviando, setEnviando] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const valor = email.trim()

    if (!valor) {
      setErro("Digite seu e-mail para continuar.")
      return
    }
    if (!EMAIL_RE.test(valor)) {
      setErro("Esse e-mail parece incompleto — confira antes de continuar.")
      return
    }

    setErro(null)
    setEnviando(true)
    router.push(`/cadastro?email=${encodeURIComponent(valor)}`)
  }

  // The field takes flex-1 only from sm up: inside the stacked column, a
  // flex-basis of 0 would collapse its height instead of honouring h-[52px].
  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-[520px]">
      <label htmlFor={id} className="sr-only">
        Seu e-mail
      </label>

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          id={id}
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (erro) setErro(null)
          }}
          // Not "e-mail de trabalho": this owner runs the fleet from the same
          // address he uses for everything else, and the corporate phrasing
          // reads as a form built for someone other than him.
          placeholder="Seu melhor e-mail"
          aria-invalid={erro ? true : undefined}
          aria-describedby={erro ? `${id}-erro` : undefined}
          className={`h-[52px] w-full min-w-0 rounded-full border bg-mkt-ink/[0.04] px-5 text-[15px] text-mkt-ink transition-colors duration-200 placeholder:text-mkt-ink/55 hover:border-mkt-ink/25 sm:w-auto sm:flex-1 ${
            erro ? "border-mkt-ink/40" : "border-mkt-ink/15"
          }`}
        />

        <button
          type="submit"
          disabled={enviando}
          className="inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-mkt-ink px-7 text-[15px] font-medium text-mkt-ground transition-colors duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {enviando && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          {enviando ? "Abrindo…" : "Criar conta"}
        </button>
      </div>

      {erro && (
        <p id={`${id}-erro`} role="alert" className="mt-2.5 pl-5 text-[13px] text-mkt-ink/75">
          {erro}
        </p>
      )}
    </form>
  )
}
