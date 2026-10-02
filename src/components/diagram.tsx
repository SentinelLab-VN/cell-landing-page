const steps = [
  ["Deposit", "A user sends an asset to the operator's escrow contract on Stellar."],
  ["Credit", "The operator sees the deposit and credits the same amount to the user's balance in the channel."],
  ["Pay", "Users send balances to each other in the channel. This takes a moment and is not written to the chain."],
  ["Withdraw", "A user asks to withdraw. Once the operator approves, the escrow sends the asset to the Stellar address the user chose."],
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
