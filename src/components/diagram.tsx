/** The core loop from overview.md §1, as the app draws a step list. */
const steps = [
  ["Deposit", "A user sends a Stellar asset to the operator's escrow. It is locked there.", "public ledger"],
  ["Mirror", "The deposit is credited to the user's balance inside the channel.", "channel"],
  ["Transact", "Users pay each other inside the channel. Instant, and never on the public ledger.", "channel"],
  ["Withdraw", "On an approved request the escrow releases the asset on Stellar, to the address the user chose.", "public ledger"],
] as const;

export function Diagram() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
      <ol className="max-w-[560px] space-y-5">
        {steps.map(([title, body, where], i) => (
          <li key={title} className="flex gap-4 text-base leading-[1.6]">
            <span className="num mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-subtle text-[13px] font-semibold text-primary-ink">
              {i + 1}
            </span>
            <span>
              <span className="font-medium text-foreground">{title}</span>
              <span className="num ml-2 text-xs text-dim">{where}</span>
              <span className="mt-0.5 block text-muted-foreground">{body}</span>
            </span>
          </li>
        ))}
      </ol>

      <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm max-md:p-[18px]">
        <p className="text-sm font-semibold text-foreground">What the public ledger sees</p>
        <ul className="mt-4 space-y-3 text-[15px]">
          <li className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">Deposit</span>
            <span className="rounded-full border border-warning-subtle-border bg-warning-subtle px-2.5 py-0.5 text-xs font-medium text-warning">visible</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">Transfers between users</span>
            <span className="rounded-full border border-success-subtle-border bg-success-subtle px-2.5 py-0.5 text-xs font-medium text-success">private</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">Withdrawal</span>
            <span className="rounded-full border border-warning-subtle-border bg-warning-subtle px-2.5 py-0.5 text-xs font-medium text-warning">visible</span>
          </li>
        </ul>
        <p className="mt-5 border-t border-border pt-4 text-[13px] leading-[1.6] text-dim">
          One release per withdrawal, nothing netted. The balances in between live in the operator's ledger.
        </p>
      </aside>
    </div>
  );
}
