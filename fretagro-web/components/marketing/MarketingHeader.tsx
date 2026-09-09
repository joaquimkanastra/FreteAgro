"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { FreteAgroMark } from "@/components/marketing/FreteAgroMark"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "O acerto", href: "#acerto" },
  { label: "O painel", href: "#painel" },
  { label: "Perguntas", href: "#perguntas" },
]

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-colors duration-300 ${
        scrolled
          ? "border-mkt-ink/10 bg-mkt-ground/80 backdrop-blur-xl"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center gap-6 px-5 sm:px-8 lg:gap-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-[15px] tracking-tight text-mkt-ink"
        >
          <FreteAgroMark />
          <span className="font-medium">FreteAgro</span>
        </Link>

        {/* Appears from md so the tablet range is not left without navigation. */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-mkt-ink/55 transition-colors duration-200 hover:text-mkt-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-full px-3 py-2 text-[14px] text-mkt-ink/70 transition-colors duration-200 hover:text-mkt-ink lg:px-4"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="rounded-full bg-mkt-ink px-4 py-2.5 text-[14px] font-medium text-mkt-ground transition-colors duration-200 hover:bg-white lg:px-5"
          >
            Criar conta
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Abrir menu"
            className="ml-auto rounded-full p-2 text-mkt-ink/70 transition-colors hover:text-mkt-ink md:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="mkt flex w-[300px] flex-col border-l-mkt-ink/10 bg-mkt-ground text-mkt-ink"
          >
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <nav className="mt-10 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-mkt-ink/10 py-4 font-display text-[22px] tracking-tight text-mkt-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pb-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-full border border-mkt-ink/20 py-3 text-center text-[15px] text-mkt-ink"
              >
                Entrar
              </Link>
              <Link
                href="/cadastro"
                onClick={() => setOpen(false)}
                className="rounded-full bg-mkt-ink py-3 text-center text-[15px] font-medium text-mkt-ground"
              >
                Criar conta
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
