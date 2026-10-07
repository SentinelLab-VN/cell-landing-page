import { streamRows } from "@/content/landing-copy";
import { Eyebrow, Pill } from "./primitives";

/**
 * The hero visual: transfers stream inside the channel, while the Stellar rail at the
 * bottom only ever sees a deposit and a release. The row list is rendered twice and
 * translated by half its height, so the loop has no seam.
 */
export function HeroChannelStream() {
  const rows = [...streamRows, ...streamRows];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <Eyebrow>Inside the channel</Eyebrow>
        <Pill tone="accent">Off chain</Pill>
      </div>

      <div className="stream-mask relative h-[300px] overflow-hidden px-5">
        <ul className="animate-stream-up m-0 list-none p-0 will-change-transform">
          {rows.map((row, i) => (
            <li
              key={i}
              aria-hidden={i >= streamRows.length}
              className="num flex items-center justify-between gap-3 border-b border-border/60 py-[11px] text-xs"
            >
              <span className="flex items-center gap-2.5 text-muted-foreground">
                <span className="text-foreground">{row.from}</span>
                <span className="text-dim">→</span>
                <span className="text-foreground">{row.to}</span>
              </span>
              <span className="text-foreground">{row.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-strong bg-background px-5 py-3.5">
        <Eyebrow tone="dim">Stellar · public ledger</Eyebrow>
        <div className="num flex gap-2 text-xs">
          <EdgeChip label="Deposit" labelClass="text-success" />
          <EdgeChip label="Release" labelClass="text-info" delayed />
        </div>
      </div>
    </div>
  );
}

function EdgeChip({ label, labelClass, delayed = false }: { label: string; labelClass: string; delayed?: boolean }) {
  return (
    <span
      className="animate-edge-pulse inline-flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-[5px] whitespace-nowrap text-foreground"
      style={delayed ? { animationDelay: "6s" } : undefined}
    >
      <span className={labelClass}>{label}</span>500.00 USDC
    </span>
  );
}
