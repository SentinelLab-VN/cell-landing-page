import { EyeOff, Eye, Lock } from "lucide-react";
import { compare, type Visibility } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { cn, container, h2, sectionPad } from "./primitives";

const columns = ["Plain Stellar", "Cell Channel", "Cell Seal"] as const;

const look: Record<Visibility, { icon: typeof Eye; className: string; label: string }> = {
  public: { icon: Eye, className: "text-muted-foreground", label: "public" },
  hidden: { icon: EyeOff, className: "text-primary-ink", label: "off the ledger" },
  sealed: { icon: Lock, className: "text-primary-ink", label: "sealed" },
};

/**
 * What the public ledger records, field by field: on plain Stellar, with Channel, with Seal.
 * A table on wide screens; below 760px each field becomes a card with the three answers stacked.
 */
export function Compare() {
  const head = useReveal<HTMLDivElement>();
  const table = useReveal<HTMLDivElement>();
  return (
    <section id="compare" className="scroll-mt-[72px] border-t border-border">
      <div className={`${container} ${sectionPad}`}>
        <div ref={head} className="reveal max-w-[760px]">
          <h2 className={`${h2} text-balance`}>{compare.title}</h2>
          <p className="mt-5 max-w-[620px] text-base leading-[1.65] text-pretty text-muted-foreground">{compare.body}</p>
        </div>

        <div ref={table} className="reveal mt-[clamp(32px,4vw,48px)] overflow-hidden rounded-2xl border border-border bg-card shadow-lg" role="table" aria-label={compare.title}>
          <div role="row" className="grid grid-cols-[1.15fr_1fr_1fr_1fr] border-b border-border-strong bg-background max-[760px]:hidden">
            <span role="columnheader" className="num px-5 py-3.5 text-[11px] tracking-[0.16em] text-dim uppercase">
              On the ledger
            </span>
            {columns.map((col, i) => (
              <span
                key={col}
                role="columnheader"
                className={cn("num px-5 py-3.5 text-[11px] tracking-[0.16em] uppercase", i === 0 ? "text-dim" : "text-primary-ink", i > 0 && "border-l border-border")}
              >
                {col}
              </span>
            ))}
          </div>

          {compare.rows.map((row, r) => (
            <div
              key={row.field}
              role="row"
              className={cn("grid grid-cols-[1.15fr_1fr_1fr_1fr] max-[760px]:grid-cols-1 max-[760px]:py-2", r > 0 && "border-t border-border")}
            >
              <span role="rowheader" className="px-5 py-4 text-sm font-semibold text-foreground max-[760px]:pb-1">
                {row.field}
              </span>
              <Cell column={columns[0]} state="public" text={row.stellar} muted />
              <Cell column={columns[1]} state={row.channel[0]} text={row.channel[1]} />
              <Cell column={columns[2]} state={row.seal[0]} text={row.seal[1]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cell({ column, state, text, muted = false }: { column: string; state: Visibility; text: string; muted?: boolean }) {
  const { icon: Icon, className, label } = look[state];
  return (
    <span
      role="cell"
      className="flex items-center gap-2.5 border-l border-border px-5 py-4 text-sm max-[760px]:justify-between max-[760px]:border-l-0 max-[760px]:py-1.5"
    >
      <span className="num hidden text-[11px] tracking-[0.12em] text-dim uppercase max-[760px]:inline">{column}</span>
      <span className={cn("flex items-center gap-2", muted ? "text-muted-foreground" : "text-foreground")}>
        <Icon className={cn("size-3.5 shrink-0", className)} aria-label={label} />
        {text}
      </span>
    </span>
  );
}
