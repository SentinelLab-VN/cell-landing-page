/** Money enters once, leaves once. Everything in between stays inside. */
export function Diagram() {
  return (
    <svg viewBox="0 0 720 170" className="w-full" role="img" aria-label="Deposit on Stellar, pay inside the channel in private, withdraw to Stellar">
      <defs>
        <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" className="fill-dim" />
        </marker>
      </defs>

      <rect x="200.5" y="20.5" width="319" height="89" rx="8" className="fill-card stroke-primary" />
      <text x="360" y="54" textAnchor="middle" className="fill-foreground text-[14px] font-medium">
        Cell Channel
      </text>
      <text x="360" y="76" textAnchor="middle" className="fill-muted-foreground text-[11px]">
        payments between members · instant · private
      </text>

      <path d="M60 65 H200" fill="none" className="stroke-border-strong" markerEnd="url(#arrow)" />
      <path d="M520 65 H660" fill="none" className="stroke-border-strong" markerEnd="url(#arrow)" />
      <text x="130" y="55" textAnchor="middle" className="fill-muted-foreground text-[11px]">
        deposit
      </text>
      <text x="590" y="55" textAnchor="middle" className="fill-muted-foreground text-[11px]">
        withdraw
      </text>

      <line x1="0" y1="140" x2="720" y2="140" className="stroke-border" />
      <text x="0" y="160" className="fill-dim text-[11px]">
        Stellar · public ledger
      </text>
      <text x="720" y="160" textAnchor="end" className="fill-dim text-[11px]">
        only the deposit and the withdrawal appear here
      </text>
    </svg>
  );
}
