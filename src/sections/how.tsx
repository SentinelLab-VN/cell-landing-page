import { Card, Section } from "@/components/ui";
import { Planes } from "./planes";

const steps = [
  {
    n: "1",
    title: "Deposit",
    body: "Send a Stellar asset to the tenant's escrow contract. The asset is locked, and the escrow records exactly what arrived.",
    chain: "on chain",
  },
  {
    n: "2",
    title: "Mirror",
    body: "The indexer sees the deposit event and credits the same amount to your address inside the channel. No claim step.",
    chain: "indexer",
  },
  {
    n: "3",
    title: "Transact",
    body: "Send to any Stellar address in the channel. Your wallet signs each transfer; it commits in milliseconds and never touches mainnet.",
    chain: "off chain",
  },
  {
    n: "4",
    title: "Withdraw",
    body: "Ask for a payout. Once approved, the operator calls release_funds with a proof that this withdrawal was never paid before. The asset is yours on Stellar again.",
    chain: "on chain",
  },
];

export function How() {
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="One escrow on chain. One ledger off it."
      lede="An operator locks real assets in an escrow on Stellar. Cell mirrors them into a private channel where transfers are instant, and pays them back out on chain when asked."
    >
      <Planes />
      <p className="eyebrow mt-14 text-dim">Step by step</p>
      <ol className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="num text-sm text-primary">{s.n}</span>
                <span className="eyebrow text-dim">{s.chain}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{s.body}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
