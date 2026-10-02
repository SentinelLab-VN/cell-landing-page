/** Three processes, one database, one contract. Scales with its container. */
export function Diagram() {
  return (
    <svg viewBox="0 0 720 220" className="w-full" role="img" aria-label="Wallet to gateway to pipeline to Postgres; indexer between Postgres and the escrow contract">
      <defs>
        <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L8 4 L0 8 z" className="fill-dim" />
        </marker>
      </defs>

      <Box x={0} y={20} w={110} label="Wallet" sub="user or admin" />
      <Box x={200} y={20} w={120} label="gateway" sub="HTTP API" />
      <Box x={400} y={20} w={120} label="pipeline" sub="transfers" />
      <Box x={600} y={20} w={120} label="PostgreSQL" sub="the ledger" />
      <Box x={0} y={150} w={150} label="Escrow" sub="Soroban contract" accent />
      <Box x={400} y={150} w={120} label="indexer" sub="events, releases" />

      <Edge d="M110 45 H200" label="signed message" lx={155} ly={38} />
      <Edge d="M320 45 H400" label="held open" lx={360} ly={38} />
      <Edge d="M520 45 H600" label="commit" lx={560} ly={38} />
      <Edge d="M55 70 V150" label="deposit tx" lx={62} ly={138} anchor="start" />
      <Edge d="M260 70 V110 H75" label="unsigned XDR, signed by the wallet" lx={168} ly={103} />
      <Edge d="M400 175 H150" label="getEvents · release_funds" lx={275} ly={168} />
      <Edge d="M460 150 V70" label="" lx={0} ly={0} />
      <Edge d="M520 175 H660 V70" label="ledger" lx={670} ly={120} anchor="start" />
    </svg>
  );
}

function Box({ x, y, w, label, sub, accent = false }: { x: number; y: number; w: number; label: string; sub: string; accent?: boolean }) {
  return (
    <g>
      <rect x={x + 0.5} y={y + 0.5} width={w - 1} height={49} rx={6} className={accent ? "fill-card stroke-primary" : "fill-card stroke-border-strong"} />
      <text x={x + 12} y={y + 22} className="fill-foreground text-[12px] font-medium">
        {label}
      </text>
      <text x={x + 12} y={y + 38} className="fill-dim text-[10px]">
        {sub}
      </text>
    </g>
  );
}

function Edge({ d, label, lx, ly, anchor = "middle" }: { d: string; label: string; lx: number; ly: number; anchor?: "middle" | "start" }) {
  return (
    <g>
      <path d={d} fill="none" className="stroke-border-strong" strokeWidth={1} markerEnd="url(#arrow)" />
      {label && (
        <text x={lx} y={ly} textAnchor={anchor} className="fill-muted-foreground text-[10px]">
          {label}
        </text>
      )}
    </g>
  );
}

/** A signed message, part by part. */
export function Message({ kind, parts }: { kind: string; parts: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-2 text-[12px]">
      <span className="num text-foreground">{kind}</span>
      {parts.map((p) => (
        <span key={p} className="flex items-center">
          <span className="num mx-1 text-dim">:</span>
          <span className="num rounded-[4px] border border-border px-1.5 py-0.5 text-muted-foreground">{p}</span>
        </span>
      ))}
    </div>
  );
}
