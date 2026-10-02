/** The core loop from overview.md §1. */
const steps = [
  ["Deposit", "A user sends a Stellar asset to the operator's escrow contract. It is locked there.", true],
  ["Mirror", "The deposit is credited to the user's balance inside the channel.", false],
  ["Transact", "Users pay each other inside the channel. Instant, and never on the public ledger.", false],
  ["Withdraw", "On an approved request the escrow releases the asset on Stellar, to the address the user chose.", true],
] as const;

export function Diagram() {
  return (
    <figure>
      <ol className="relative grid gap-5 sm:grid-cols-4 sm:gap-6">
        <span aria-hidden className="absolute top-[11px] right-6 left-6 hidden h-px bg-border sm:block" />
        {steps.map(([title, body, onChain], i) => (
          <li key={title} className="relative">
            <span
              className={`num relative z-10 flex size-6 items-center justify-center rounded-full border text-[11px] ${
                onChain ? "border-border-strong bg-background text-muted-foreground" : "border-primary bg-primary text-primary-foreground"
              }`}
            >
              {i + 1}
            </span>
            <p className="mt-4 text-[15px] font-medium text-foreground">{title}</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
            <p className={`mt-3 text-[11px] ${onChain ? "text-dim" : "text-primary"}`}>{onChain ? "on the public ledger" : "inside the channel"}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
