/** The core loop from overview.md §1, drawn the way the app draws a role guide. */
const steps = [
  ["Deposit", "A user sends a Stellar asset to the operator's escrow. It is locked there.", true],
  ["Mirror", "The deposit is credited to the user's balance inside the channel.", false],
  ["Transact", "Users pay each other inside the channel. Instant, and never on the public ledger.", false],
  ["Withdraw", "On an approved request the escrow releases the asset on Stellar, to the address the user chose.", true],
] as const;

export function Diagram() {
  return (
    <ol className="grid gap-4 md:grid-cols-4">
      {steps.map(([title, body, onChain], i) => (
        <li key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm max-md:p-[18px]">
          <span
            className={`num inline-flex size-8 items-center justify-center rounded-lg border text-sm ${
              onChain
                ? "border-border-strong bg-secondary text-muted-foreground"
                : "border-primary-subtle-border bg-primary-subtle text-primary-ink"
            }`}
          >
            {i + 1}
          </span>
          <p className="mt-4 text-lg font-semibold text-foreground">{title}</p>
          <p className="mt-1.5 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
          <p className={`mt-4 text-xs ${onChain ? "text-dim" : "text-primary-ink"}`}>
            {onChain ? "On the public ledger" : "Inside the channel"}
          </p>
        </li>
      ))}
    </ol>
  );
}
