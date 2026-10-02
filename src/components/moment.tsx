/** The operator's review dialog, as it is in the app. */
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
      <div className="relative flex min-h-[400px] items-center justify-center px-6 py-14">
        <div className="w-full max-w-[440px] rounded-2xl border border-border-strong bg-popover p-6 shadow-lg">
          <p className="text-lg font-semibold text-foreground">Review withdrawal</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
            Approving debits the member now and pays them on Stellar. It cannot be undone once paid.
          </p>
          <dl className="mt-5 divide-y divide-border text-sm">
            <Row k="Member" v="GDZQ…9MRT" />
            <Row k="Pays to" v="GBXK…7QZM" />
            <Row k="Amount" v="250.00 USDC" />
            <Row k="Member's balance now" v="1,180.00 USDC" />
          </dl>
          <div className="mt-6 flex justify-end gap-2">
            <span className="inline-flex h-10 items-center justify-center rounded-[10px] border border-destructive/70 bg-destructive/8 px-4 text-sm font-semibold text-destructive">
              Reject…
            </span>
            <span className="inline-flex h-10 items-center justify-center rounded-[10px] bg-primary px-4 text-sm font-semibold text-primary-foreground">
              Approve payout
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
