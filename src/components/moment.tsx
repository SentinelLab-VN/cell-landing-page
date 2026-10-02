/** One product moment on a textured panel: a payout the user signed, waiting for the operator. */
export function Moment() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border-strong) 1px, transparent 0), radial-gradient(60% 80% at 20% 30%, var(--primary-subtle) 0%, transparent 60%), radial-gradient(50% 70% at 85% 80%, var(--primary-subtle) 0%, transparent 60%)",
          backgroundSize: "22px 22px, 100% 100%, 100% 100%",
        }}
      />
      <div className="relative flex min-h-[380px] items-center justify-center px-6 py-14">
        <div className="w-full max-w-[380px] rounded-2xl border border-border bg-background p-6 shadow-lg">
          <p className="num text-[11px] tracking-[0.2em] text-dim uppercase">Withdrawal request</p>
          <p className="num mt-3 text-[28px] text-foreground">250.00 <span className="text-base text-muted-foreground">USDC</span></p>
          <dl className="mt-5 divide-y divide-border text-sm">
            <Row k="From" v="GDZQ…9MRT" />
            <Row k="Pays out to" v="GBXK…7QZM" />
            <Row k="Signed by" v="the user's wallet" />
            <Row k="Release" v="once, through the escrow" />
          </dl>
          <div className="mt-5 flex gap-2">
            <span className="inline-flex h-10 flex-1 items-center justify-center rounded-[10px] bg-primary text-sm font-semibold text-primary-foreground">
              Approve payout
            </span>
            <span className="inline-flex h-10 items-center justify-center rounded-[10px] border border-border-strong px-4 text-sm font-semibold text-foreground">
              Reject
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="num text-foreground">{v}</dd>
    </div>
  );
}
