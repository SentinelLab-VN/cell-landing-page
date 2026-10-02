import { Card, Eyebrow, Pill, Section } from "@/components/ui";

export function Roles() {
  return (
    <Section
      id="operators"
      eyebrow="Two sides, one app"
      title="Run a channel, or just get paid in one."
      lede="A tenant is one escrow a business deploys and owns. A user is anyone with a Stellar address who has been sent money inside it."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-7">
          <Eyebrow>Operator</Eyebrow>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">I want to run a channel</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Deploy an escrow you own, open the assets you want to support, and let your users hold balances backed by
            it. You keep the admin key; Cell holds a payout key the escrow authorises and nothing more.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground">
            {[
              ["Deploy", "Your wallet signs the deploy. Your key is the admin, from the first ledger."],
              ["Open assets", "USDC, EURC, XLM — any Stellar asset. A per-release cap and two gates per asset."],
              ["Review payouts", "Approve or reject withdrawals. Debit happens on approval, payout on chain."],
              ["Membership", "Open, approval, or invite only. Block never seizes: a blocked balance stays owed."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-3">
                <span className="num mt-0.5 w-28 shrink-0 text-[11px] tracking-[0.1em] text-primary uppercase">{k}</span>
                <span className="text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-7">
          <Eyebrow tone="dim">User</Eyebrow>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">Someone is going to pay me</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Give them your Stellar address. The moment their transfer settles, the balance is yours. No invite, no
            claim, no sign-up — the wallet you connect is the account.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">Acme Pay</p>
                <p className="num text-[11px] text-dim">from GBXK…7QZM · 2 hours ago</p>
              </div>
              <div className="text-right">
                <p className="num text-base text-foreground">250.00 USDC</p>
                <p className="num text-[11px] text-success">already yours</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill tone="ok">Credited</Pill>
              <Pill tone="info">Can send now</Pill>
              <Pill tone="warn">Withdraw may need an ID check</Pill>
            </div>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-dim">
            Each tenant sets its own withdrawal rule. Receiving and sending are never gated by it.
          </p>
        </Card>
      </div>
    </Section>
  );
}
