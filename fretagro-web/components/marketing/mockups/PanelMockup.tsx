// components/marketing/mockups/PanelMockup.tsx — the owner's panel, rebuilt in markup
// Server Component. Mirrors the real dashboard (KPIs, receita × despesa, composição
// de despesas, fretes recentes) so the landing shows the product rather than a promise.
// Every figure here is illustrative; callers label it as such.

import {
  LayoutDashboard,
  Package,
  Truck,
  HandCoins,
  Wallet,
  BarChart3,
  Search,
  ChevronDown,
} from 'lucide-react'
import { FreteAgroMark } from '@/components/marketing/FreteAgroMark'

const NAV = [
  { label: 'Painel', icon: LayoutDashboard, active: true },
  { label: 'Fretes', icon: Package, active: false },
  { label: 'Frota', icon: Truck, active: false },
  { label: 'Acertos', icon: HandCoins, active: false },
  { label: 'Caixa', icon: Wallet, active: false },
  { label: 'Relatórios', icon: BarChart3, active: false },
]

const KPIS = [
  { label: 'Receita bruta', valor: 'R$ 284.600', delta: '+12,4%', positivo: true },
  { label: 'Despesas', valor: 'R$ 173.240', delta: '+3,1%', positivo: false },
  { label: 'Lucro líquido', valor: 'R$ 111.360', delta: '+18,9%', positivo: true, destaque: true },
  { label: 'Margem', valor: '39,1%', delta: '+2,2 p.p.', positivo: true },
]

// [receita, despesa] per month, in thousands of reais — drives the bar chart.
const MESES = [
  { mes: 'Mar', receita: 34, despesa: 22 },
  { mes: 'Abr', receita: 41, despesa: 25 },
  { mes: 'Mai', receita: 38, despesa: 24 },
  { mes: 'Jun', receita: 47, despesa: 28 },
  { mes: 'Jul', receita: 44, despesa: 27 },
  { mes: 'Ago', receita: 52, despesa: 30 },
  { mes: 'Set', receita: 49, despesa: 29 },
]
const MAX_MES = 56

const DESPESAS = [
  { label: 'Combustível', pct: 52 },
  { label: 'Manutenção', pct: 21 },
  { label: 'Pedágio', pct: 14 },
  { label: 'Outros', pct: 13 },
]

const FRETES = [
  { rota: 'Sorriso/MT → Rondonópolis/MT', motorista: 'Motorista 1', valor: 'R$ 12.400', status: 'Acerto pendente', tom: 'pend' },
  { rota: 'Lucas do Rio Verde/MT → Santos/SP', motorista: 'Motorista 2', valor: 'R$ 28.900', status: 'Em andamento', tom: 'curso' },
  { rota: 'Sapezal/MT → Rondonópolis/MT', motorista: 'Motorista 3', valor: 'R$ 15.750', status: 'Acerto realizado', tom: 'ok' },
  { rota: 'Campo Novo/MT → Cuiabá/MT', motorista: 'Motorista 1', valor: 'R$ 9.180', status: 'Acerto realizado', tom: 'ok' },
]

const TOM_STATUS: Record<string, string> = {
  pend: 'bg-mkt-ink/10 text-mkt-ink/75',
  curso: 'bg-mkt-signal/15 text-mkt-glow',
  ok: 'bg-mkt-ink/[0.06] text-mkt-ink/50',
}

/** Donut of expense composition, drawn from DESPESAS. */
function DonutDespesas() {
  const R = 42
  const C = 2 * Math.PI * R
  let offset = 0

  return (
    <div className="flex items-center gap-5">
      <svg viewBox="0 0 120 120" className="h-[112px] w-[112px] shrink-0 -rotate-90">
        {DESPESAS.map((d, i) => {
          const len = (d.pct / 100) * C
          const el = (
            <circle
              key={d.label}
              cx="60"
              cy="60"
              r={R}
              fill="none"
              stroke="rgb(var(--mkt-signal))"
              strokeOpacity={1 - i * 0.24}
              strokeWidth="13"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={-offset}
            />
          )
          offset += len
          return el
        })}
      </svg>

      <ul className="flex min-w-0 flex-col gap-2">
        {DESPESAS.map((d, i) => (
          <li key={d.label} className="flex items-center gap-2.5 text-[12px]">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-mkt-signal"
              style={{ opacity: 1 - i * 0.24 }}
            />
            <span className="text-mkt-ink/60">{d.label}</span>
            <span className="ml-auto pl-3 text-mkt-ink/85" data-figure>
              {d.pct}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PanelMockup() {
  return (
    <div className="flex min-w-[700px] overflow-hidden rounded-[14px] border border-mkt-ink/10 bg-mkt-ground lg:min-w-[980px]">
      {/* ── Sidebar ─────────────────────────────────────────────────────
          Dropped below lg so a narrow viewport opens on the panel's content
          (KPIs and charts) instead of on the navigation rail. */}
      <aside className="hidden w-[188px] shrink-0 flex-col gap-1 border-r border-mkt-ink/10 bg-mkt-ink/[0.02] p-3 lg:flex">
        <div className="mb-4 flex items-center gap-2 px-2 pt-1.5">
          <FreteAgroMark className="h-[18px] w-[18px]" />
          <span className="text-[13px] font-medium tracking-tight text-mkt-ink/90">FreteAgro</span>
        </div>
        {NAV.map(({ label, icon: Icon, active }) => (
          <span
            key={label}
            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[12.5px] ${
              active ? 'bg-mkt-ink/[0.07] text-mkt-ink' : 'text-mkt-ink/50'
            }`}
          >
            <Icon className="h-[15px] w-[15px]" strokeWidth={1.75} />
            {label}
          </span>
        ))}
      </aside>

      {/* ── Panel body ──────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <div className="flex items-center gap-4 border-b border-mkt-ink/10 px-5 py-3">
          <span className="text-[14px] tracking-tight text-mkt-ink/90">Painel</span>
          <span className="flex items-center gap-1.5 rounded-full border border-mkt-ink/10 px-2.5 py-1 text-[11.5px] text-mkt-ink/60">
            Este mês
            <ChevronDown className="h-3 w-3" strokeWidth={2} />
          </span>
          <span className="ml-auto flex items-center gap-2 rounded-full border border-mkt-ink/10 px-3 py-1.5 text-[11.5px] text-mkt-ink/50">
            <Search className="h-3 w-3" strokeWidth={2} />
            Buscar frete, motorista…
          </span>
        </div>

        <div className="flex flex-col gap-3.5 p-5">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-3">
            {KPIS.map((k) => (
              <div
                key={k.label}
                className={`rounded-xl border p-3.5 ${
                  k.destaque
                    ? 'border-mkt-signal/35 bg-mkt-signal/[0.07]'
                    : 'border-mkt-ink/10 bg-mkt-ink/[0.02]'
                }`}
              >
                <p className="text-[11.5px] text-mkt-ink/55">{k.label}</p>
                <p
                  className={`mt-1.5 text-[19px] tracking-tight ${
                    k.destaque ? 'text-mkt-glow' : 'text-mkt-ink'
                  }`}
                  data-figure
                >
                  {k.valor}
                </p>
                <p
                  className={`mt-1 text-[11px] ${
                    k.positivo ? 'text-mkt-signal' : 'text-mkt-ink/55'
                  }`}
                  data-figure
                >
                  {k.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-[1.55fr_1fr] gap-3">
            <div className="rounded-xl border border-mkt-ink/10 bg-mkt-ink/[0.02] p-4">
              <div className="flex items-baseline justify-between">
                <p className="text-[12.5px] text-mkt-ink/80">Receita × Despesa</p>
                <p className="flex items-center gap-3 text-[11px] text-mkt-ink/50">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-[2px] bg-mkt-signal" /> Receita
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-[2px] bg-mkt-ink/25" /> Despesa
                  </span>
                </p>
              </div>

              <div className="mt-4 flex h-[132px] items-end gap-3.5">
                {MESES.map((m) => (
                  <div key={m.mes} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex h-[112px] w-full items-end justify-center gap-1">
                      <div
                        className="w-1/2 rounded-t-[3px] bg-mkt-signal"
                        style={{ height: `${(m.receita / MAX_MES) * 100}%` }}
                      />
                      <div
                        className="w-1/2 rounded-t-[3px] bg-mkt-ink/20"
                        style={{ height: `${(m.despesa / MAX_MES) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10.5px] text-mkt-ink/55">{m.mes}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-mkt-ink/10 bg-mkt-ink/[0.02] p-4">
              <p className="text-[12.5px] text-mkt-ink/80">Composição das despesas</p>
              <div className="mt-4">
                <DonutDespesas />
              </div>
            </div>
          </div>

          {/* Recent freights */}
          <div className="rounded-xl border border-mkt-ink/10 bg-mkt-ink/[0.02]">
            <p className="border-b border-mkt-ink/10 px-4 py-3 text-[12.5px] text-mkt-ink/80">
              Fretes recentes
            </p>
            <table className="w-full text-left">
              <tbody>
                {FRETES.map((f) => (
                  <tr key={f.rota} className="border-b border-mkt-ink/[0.07] last:border-0">
                    <td className="px-4 py-[11px] text-[12px] text-mkt-ink/85">{f.rota}</td>
                    <td className="px-4 py-[11px] text-[12px] text-mkt-ink/50">{f.motorista}</td>
                    <td className="px-4 py-[11px] text-right text-[12px] text-mkt-ink/85" data-figure>
                      {f.valor}
                    </td>
                    <td className="py-[11px] pl-4 pr-4 text-right">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-[10.5px] ${TOM_STATUS[f.tom]}`}
                      >
                        {f.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
