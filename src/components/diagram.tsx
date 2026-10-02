const steps = [
  ["Deposit", "A user sends a Stellar asset to the operator's escrow. It is locked there."],
  ["Mirror", "The deposit is credited to the user's balance inside the channel."],
  ["Transact", "Users pay each other inside the channel. Instant, and never on the public ledger."],
  ["Withdraw", "On an approved request the escrow releases the asset on Stellar, to the address the user chose."],
];

export function Diagram() {
  return (
    <ol className="max-w-[600px] space-y-5">
      {steps.map(([title, body], i) => (
        <li key={title} className="flex gap-4 text-base leading-[1.6]">
          <span className="num mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-subtle text-[13px] font-semibold text-primary-ink">
            {i + 1}
          </span>
          <span>
            <span className="font-medium text-foreground">{title}</span>
            <span className="mt-0.5 block text-muted-foreground">{body}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
