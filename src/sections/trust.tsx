import { Card, Section } from "@/components/ui";

const chain = [
  ["≤ TotalLocked", "A release can never exceed what the escrow holds for that asset."],
  ["≤ release_cap", "A per-asset ceiling on any single payout, set by the admin."],
  ["one payout per nonce", "A SHA-256 sparse Merkle tree in the escrow records every paid withdrawal. The same one cannot be paid twice."],
];

const wallet = [
  ["every transfer", "Signed over the amount, the recipient, a nonce and an expiry. A session token alone cannot move value."],
  ["every withdrawal", "Signed over the amount and the destination. A stolen session cannot redirect a payout."],
  ["no admin key on the server", "Opening assets, gates, operators and upgrades are envelopes your wallet signs. Cell only proposes them."],
];

export function Trust() {
  return (
    <Section
      id="trust"
      eyebrow="Trust model"
      title="What the chain guarantees, and what it does not."
      lede="The operator runs the ledger and is trusted for correctness. The escrow bounds the worst case, and the wallet authorises every move. We would rather say exactly where the line is."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <p className="eyebrow text-primary">Enforced on chain</p>
          <ul className="mt-5 space-y-5">
            {chain.map(([k, v]) => (
              <li key={k}>
                <p className="num text-sm text-foreground">{k}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{v}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <p className="eyebrow text-info">Signed by the wallet</p>
          <ul className="mt-5 space-y-5">
            {wallet.map(([k, v]) => (
              <li key={k}>
                <p className="text-sm font-medium text-foreground">{k}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{v}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <p className="eyebrow text-warning">Plainly stated</p>
          <ul className="mt-5 space-y-5 text-[13px] leading-relaxed text-muted-foreground">
            <li>
              <p className="text-sm font-medium text-foreground">Deposits and releases are public</p>
              <p className="mt-1">Depositor, asset and amount in; recipient, asset and amount out. In-channel transfers are not.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-foreground">Balances live off chain</p>
              <p className="mt-1">
                A double-entry ledger, reconciled continuously against the escrow. A difference halts payouts until a
                person has looked.
              </p>
            </li>
            <li>
              <p className="text-sm font-medium text-foreground">Redemption goes through the operator</p>
              <p className="mt-1">There is no user-forced exit in v1. Choose a tenant you would trust with a bank account.</p>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
