/** What the user signs, and what the contract makes of it. */
const parts = ["passphrase", "channel", "from", "to", "amount", "request_id", "expires_at"];

const enforced = [
  ["Destination", "the address in the signature, nobody else's"],
  ["Ceiling", "never above what the escrow holds for that asset, or its cap"],
  ["Replay", "each withdrawal is paid once; the contract keeps the proof"],
  ["Session", "a login token on its own cannot move value"],
];

export function Mechanism() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-border p-6 lg:border-r lg:border-b-0">
          <p className="num text-[11px] tracking-[0.2em] text-dim uppercase">What the user signs</p>
          <div className="mt-4 flex flex-wrap items-center gap-y-2">
            <span className="num text-sm text-foreground">cell:withdraw:v1</span>
            {parts.map((p) => (
              <span key={p} className="flex items-center">
                <span className="num mx-1 text-dim">:</span>
                <span className="num rounded-[6px] border border-border bg-background px-1.5 py-0.5 text-[13px] text-muted-foreground">{p}</span>
              </span>
            ))}
          </div>
          <p className="mt-4 text-[15px] leading-[1.6] text-muted-foreground">
            An Ed25519 signature from the user's own Stellar key, over the amount and the destination. Transfers
            inside the channel are signed the same way.
          </p>
        </div>
        <div className="p-6">
          <p className="num text-[11px] tracking-[0.2em] text-dim uppercase">What the contract enforces</p>
          <dl className="mt-4 divide-y divide-border">
            {enforced.map(([k, v]) => (
              <div key={k} className="flex gap-6 py-2.5 text-sm">
                <dt className="w-24 shrink-0 text-foreground">{k}</dt>
                <dd className="text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
