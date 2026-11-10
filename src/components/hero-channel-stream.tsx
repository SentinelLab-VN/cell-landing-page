import { streamRows } from "@/content/landing-copy";
import { Eyebrow } from "./primitives";

/**
 * The hero Channel visual: transfers stream inside the channel, while the Stellar rail at the
 * bottom only ever sees a deposit and a release. The row list is rendered twice and
 * translated by half its height, so the loop has no seam.
 */
export function HeroChannelStream() {
  const rows = [...streamRows, ...streamRows];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        <Eyebrow tone="dim">Inside the channel</Eyebrow>
        <span className="num text-xs text-primary-ink">off chain</span>
      </div>

      <div className="stream-mask relative h-[132px] flex-1 overflow-hidden px-4 max-sm:px-3">
        <ul className="animate-stream-up m-0 list-none p-0 will-change-transform">
          {rows.map((row, i) => (
            <li
              key={i}
              aria-hidden={i >= streamRows.length}
              className="num flex items-center justify-between gap-3 border-b border-border/60 py-[9px] text-xs"
            >
              <span className="flex min-w-0 items-center gap-2 truncate text-muted-foreground">
                <span className="text-foreground">{row.from}</span>
                <span className="text-dim">→</span>
                <span className="text-foreground">{row.to}</span>
              </span>
              <span className="shrink-0 text-foreground">{row.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-strong px-4 py-2.5">
        <span className="num text-[11px] tracking-[0.12em] text-dim uppercase">Stellar sees</span>
        <div className="num flex flex-wrap gap-2 text-xs">
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
