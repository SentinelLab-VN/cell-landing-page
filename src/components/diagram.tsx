const steps = [
  ["Deposit", "Send an asset to the operator's escrow."],
  ["Credit", "The same amount appears in your channel balance."],
  ["Pay", "Send to other users in the channel. Instant, off chain."],
  ["Withdraw", "The operator approves and the escrow pays the address you chose."],
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
