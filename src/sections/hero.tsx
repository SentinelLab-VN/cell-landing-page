import { LinkButton, Pill } from "@/components/ui";
import { APP_URL, GITHUB_ORG } from "@/links";

const balances = [
  { code: "USDC", amount: "250.00", from: "GBXK…7QZM", when: "2 hours ago" },
  { code: "EURC", amount: "40.00", from: "GC2M…P0RD", when: "Mar 09" },
  { code: "XLM", amount: "1,200.0000000", from: "deposit", when: "Mar 02" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(200,249,78,0.10),transparent_70%)]"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Pill tone="accent">Private payment channel on Stellar</Pill>
          <h1 className="mt-6 text-[40px] leading-[1.05] font-semibold tracking-[-0.025em] text-foreground sm:text-[56px]">
            Instant transfers,
            <br />
            backed on Stellar.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your balance is held in an on-chain escrow you can verify. Transfers inside the channel settle instantly
            and never appear on mainnet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton size="lg" href={APP_URL}>
              Open the app
            </LinkButton>
            <LinkButton size="lg" variant="outline" href="#how">
              How it works
            </LinkButton>
          </div>
          <p className="mt-5 text-[13px] text-dim">No email, no password. Your Stellar key is your account.</p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="eyebrow text-dim">Acme Pay · Balances</p>
                <p className="num mt-1 text-xs text-muted-foreground">GDZQ…9MRT</p>
              </div>
              <Pill tone="ok">Reconciled</Pill>
            </div>
            <ul className="divide-y divide-border">
              {balances.map((b) => (
                <li key={b.code} className="flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="num flex size-9 items-center justify-center rounded-xl bg-popover text-[11px] font-medium text-muted-foreground">
                      {b.code.slice(0, 1)}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{b.code}</p>
                      <p className="num text-[11px] text-dim">
                        {b.from} · {b.when}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="num text-base text-foreground">{b.amount}</p>
                    <p className="num text-[11px] text-success">already yours</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-2 border-t border-border p-3">
              {["Deposit", "Send", "Withdraw"].map((a, i) => (
                <span
                  key={a}
                  className={`flex h-10 items-center justify-center rounded-[10px] text-sm font-semibold ${
                    i === 1 ? "bg-primary text-primary-foreground" : "border border-border-strong text-foreground"
                  }`}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <p className="num mt-3 text-center text-[11px] text-dim">
            Escrow{" "}
            <a className="hover:text-foreground" href={`${GITHUB_ORG}/cell-protocol-contract`}>
              CD3Z…FK5Y
            </a>{" "}
            · testnet
          </p>
        </div>
      </div>
    </header>
  );
}
