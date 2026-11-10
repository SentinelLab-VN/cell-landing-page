import { KeyRound } from "lucide-react";
import { SEAL_ADDR, sealWindowNet } from "@/content/landing-copy";
import { ArrowLabel } from "./diagram-parts";
import { cn, Eyebrow, StepIndex } from "./primitives";
import { SealedAmount } from "./sealed-amount";

/**
 * One settlement window of a fund on Seal. What lights up depends on the active step:
 * 1 wrap → the fund token goes into the wrapper, 2 settle → sealed legs inside it,
 * 3 close → only the window's net is public, 4 disclose → the viewing key opens the amounts.
 */
export function SealDiagram({ active }: { active: number }) {
  const on = (n: number) => active === n;
  const disclosed = active >= 4;

  return (
    <div className="rounded-2xl border border-border bg-card p-[clamp(16px,2.4vw,28px)] shadow-lg">
      <Eyebrow tone="dim">Stellar · public ledger</Eyebrow>

      <div className="mt-3.5 grid grid-cols-[1fr_auto_1fr] items-center gap-1.5">
        <Tile label="Fund token" title="MTF · SEP-41" note="Issuer mints and burns" lit={on(1) || on(3)} />
        <div className="flex flex-col items-center gap-1.5 px-1">
          <ArrowLabel n={1} label="Wrap 1:1" active={on(1)} compact />
          <Line active={on(1)} />
        </div>
        <Tile label="Seal wrapper" title="1,000.00 MTF" note="Balances are commitments" lit={on(1)} />
      </div>

      <div
        className={cn(
          "mt-4 rounded-xl border border-dashed bg-background p-3.5 transition-colors duration-300",
          on(2) ? "border-primary" : "border-border-strong",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <Eyebrow>Inside the wrapper · sealed</Eyebrow>
          <ArrowLabel n={2} label="Settle" active={on(2)} compact />
        </div>
        <ul className={cn("m-0 mt-2 list-none p-0 transition-opacity duration-300", active >= 2 ? "opacity-100" : "opacity-40")}>
          <Leg from={SEAL_ADDR.fund} to={SEAL_ADDR.a} kind="Subscription" amount="250.00 MTF" open={disclosed} />
          <Leg from={SEAL_ADDR.b} to={SEAL_ADDR.fund} kind="Redemption · order ref" amount="100.00 MTF" open={disclosed} last />
        </ul>
        <p className="mt-2 text-xs text-dim">Each leg has a ZK proof.</p>
      </div>

      <div
        className={cn(
          "mt-4 flex flex-wrap items-center justify-between gap-2 rounded-[10px] border bg-background px-3 py-2.5 transition-colors duration-300",
          on(3) ? "border-primary" : "border-border",
        )}
      >
        <span className="num flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase">
          <StepIndex n={3} active={on(3)} size="sm" />
          <span className={on(3) ? "text-primary-ink" : "text-dim"}>Window close</span>
        </span>
        <span className={cn("num text-xs transition-colors duration-300", active >= 3 ? "text-foreground" : "text-dim")}>net {sealWindowNet}</span>
      </div>

      <div
        className={cn(
          "mt-2 flex flex-wrap items-center justify-between gap-2 rounded-[10px] border px-3 py-2.5 transition-colors duration-300",
          on(4) ? "border-info-subtle-border bg-info-subtle" : "border-border bg-background",
        )}
      >
        <span className="num flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase">
          <StepIndex n={4} active={on(4)} size="sm" />
          <span className={on(4) ? "text-info" : "text-dim"}>Viewing key</span>
        </span>
        <span className={cn("num flex items-center gap-1.5 text-xs transition-colors duration-300", on(4) ? "text-foreground" : "text-dim")}>
          <KeyRound className="size-3.5" aria-hidden />
          Issuer · TA · regulator
        </span>
      </div>
    </div>
  );
}

function Tile({ label, title, note, lit }: { label: string; title: string; note: string; lit: boolean }) {
  return (
    <div className={cn("num min-w-0 rounded-[10px] border bg-background px-3 py-2 text-xs transition-colors duration-300", lit ? "border-primary" : "border-border")}>
      <div className="text-[11px] text-dim">{label}</div>
      <div className="mt-0.5 truncate text-foreground">{title}</div>
      <div className="mt-0.5 truncate text-[11px] text-dim">{note}</div>
    </div>
  );
}

function Line({ active }: { active: boolean }) {
  return (
    <span className={cn("relative block h-0.5 w-full min-w-8 transition-colors duration-300", active ? "bg-primary" : "bg-border")}>
      <span
        className={cn("absolute -top-[3px] -right-px size-2 rotate-45 border-t-2 border-r-2 transition-colors duration-300", active ? "border-primary" : "border-border")}
      />
    </span>
  );
}

function Leg({ from, to, kind, amount, open, last = false }: { from: string; to: string; kind: string; amount: string; open: boolean; last?: boolean }) {
  return (
    <li className={cn("flex items-center justify-between gap-3 py-2", last ? "" : "border-b border-border/60")}>
      <span className="num flex min-w-0 flex-col gap-0.5 text-xs">
        <span className="truncate text-foreground">
          {from} <span className="text-dim">→</span> {to}
        </span>
        <span className="text-[11px] text-dim">{kind}</span>
      </span>
      <SealedAmount value={amount} open={open} />
    </li>
  );
}
