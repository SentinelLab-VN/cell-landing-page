import { useState } from "react";
import { sealRows, sealWindowNet } from "@/content/landing-copy";
import { cn, Eyebrow } from "./primitives";
import { SealedAmount } from "./sealed-amount";

/**
 * The hero Seal visual: three settled legs as anyone reads them on Stellar, with the amount
 * sealed. The switch shows the same rows as the issuer, TA or regulator see them with the viewing key.
 */
export function SealLedger() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <Eyebrow tone="dim">Stellar · public ledger</Eyebrow>
        <div role="group" aria-label="Who is reading" className="num flex rounded-lg border border-border bg-card p-0.5 text-[11px] tracking-[0.08em] uppercase">
          <ViewButton on={!open} onClick={() => setOpen(false)}>
            Public
          </ViewButton>
          <ViewButton on={open} onClick={() => setOpen(true)}>
            Viewing key
          </ViewButton>
        </div>
      </div>

      <ul className="m-0 flex-1 list-none px-4 py-1 max-sm:px-3">
        {sealRows.map((row) => (
          <li key={row.kind} className="flex items-center justify-between gap-3 border-b border-border/60 py-[9px] last:border-b-0">
            <span className="num flex min-w-0 items-center gap-2 truncate text-xs text-foreground" title={row.kind}>
              {row.from}
              <span className="text-dim">→</span>
              {row.to}
            </span>
            <SealedAmount value={row.amount} open={open} />
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-strong px-4 py-2.5">
        <span className="num text-[11px] tracking-[0.12em] text-dim uppercase">Window close</span>
        <span className="flex items-center gap-2">
          <span className="num text-xs text-foreground">net {sealWindowNet}</span>
          <span className="num text-xs text-dim">public</span>
        </span>
      </div>
    </div>
  );
}

function ViewButton({ on, onClick, children }: { on: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn("rounded-md px-2.5 py-1 transition-colors duration-150", on ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}
    >
      {children}
    </button>
  );
}
