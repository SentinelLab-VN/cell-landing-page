/** The core loop from overview.md §1. */
const steps = [
  ["Deposit", "A user sends a Stellar asset to the operator's escrow contract. It is locked there."],
  ["Mirror", "The deposit is credited to the user's balance inside the channel."],
  ["Transact", "Users pay each other inside the channel. Instant, and never on mainnet."],
  ["Withdraw", "On an approved request the escrow releases the asset on Stellar, to the address the user chose."],
];

export function Diagram() {
  return (
    <figure>
      <ol className="grid gap-6 sm:grid-cols-4 sm:gap-8">
        {steps.map(([title, body], i) => (
          <li key={title} className={i === 2 ? "rounded-lg border border-primary p-4 sm:-m-4 sm:p-4" : ""}>
            <p className="text-[13px] text-dim">{i + 1}</p>
            <p className="mt-1 text-[15px] font-medium text-foreground">{title}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
          </li>
        ))}
      </ol>
      <figcaption className="mt-8 border-t border-border pt-3 text-[12px] text-dim">
        Steps 1 and 4 are on the public ledger. Step 3 is not.
      </figcaption>
    </figure>
  );
}
