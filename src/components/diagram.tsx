/** Money enters once, leaves once. Everything in between stays inside. */
export function Diagram() {
  return (
    <figure>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Step label="deposit" sub="from a Stellar wallet" />
        <Arrow />
        <div className="flex-1 rounded-lg border border-primary px-5 py-4 text-center">
          <p className="text-[15px] font-medium text-foreground">Cell Channel</p>
          <p className="mt-1 text-[12px] text-muted-foreground">payments between members · instant · private</p>
        </div>
        <Arrow />
        <Step label="withdraw" sub="to any Stellar address, yours or someone else's" />
      </div>
      <figcaption className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-border pt-3 text-[12px] text-dim">
        <span>Stellar · public ledger</span>
        <span>only the deposit and the withdrawal appear here</span>
      </figcaption>
    </figure>
  );
}

function Step({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="text-center sm:w-40">
      <p className="text-[13px] text-foreground">{label}</p>
      <p className="text-[11px] text-dim">{sub}</p>
    </div>
  );
}

function Arrow() {
  return (
    <span className="self-center text-dim sm:flex-none" aria-hidden>
      <span className="sm:hidden">↓</span>
      <span className="hidden sm:inline">→</span>
    </span>
  );
}
