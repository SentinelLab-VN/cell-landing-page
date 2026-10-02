import { Diagram } from "@/components/diagram";
import { GitHubIcon, XIcon } from "@/components/icons";
import { APP_URL, CONTACT_URL, GITHUB_ORG, REPOS, X_URL } from "@/links";

const button = "inline-flex h-10 items-center justify-center rounded-[10px] px-4 text-sm font-semibold whitespace-nowrap transition-colors";
const primary = `${button} bg-primary text-primary-foreground hover:bg-primary-hover`;
const outline = `${button} border border-border-strong text-foreground hover:bg-secondary`;

const capabilities = [
  ["Escrow custody", "One Soroban contract per operator holds the assets. The admin key never leaves your wallet."],
  ["Per-asset controls", "A cap on any single payout, and separate gates for deposits and withdrawals, set on chain."],
  ["Membership and KYC", "Open, approval or invite only. Block an address, record a KYC status, keep a reason."],
  ["Approval queue", "Every withdrawal is reviewed before the escrow pays it. The destination is in the user's signature."],
  ["Continuous reconciliation", "Books are checked against the chain per asset. A mismatch halts payouts until someone looks."],
  ["Hosted or self-hosted", "One image. Run it with us, or on your own servers with your own keys and database."],
];

const security = [
  "Users sign every transfer and every withdrawal with their own Stellar key. A session alone cannot move value.",
  "The escrow cannot release more than it holds, more than the asset's cap, or the same withdrawal twice.",
  "Deposits and withdrawals are ordinary Stellar transactions. Transfers inside the channel are not on chain.",
  "The operator is trusted to keep its ledger. In this version a user cannot withdraw without the operator.",
];

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-sidebar-border">
        <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-8 max-md:px-4">
          <a href="#" className="inline-flex shrink-0 items-center gap-2.5" aria-label="Cell">
            <img src="/logo.png" alt="" width={48} height={48} className="size-9 shrink-0 object-contain" />
            <span className="text-[24px] leading-none font-semibold tracking-[-0.01em] text-foreground">Cell</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground max-md:hidden">
            <a className="hover:text-foreground" href="#how">How it works</a>
            <a className="hover:text-foreground" href="#capabilities">Capabilities</a>
            <a className="hover:text-foreground" href="#security">Security</a>
            <a className="hover:text-foreground" href={REPOS.docs}>Docs</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={CONTACT_URL} className={`${outline} max-md:hidden`}>Talk to us</a>
            <a href={APP_URL} className={primary}>Open the app</a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-[1200px] px-8 py-16 max-md:px-4 md:py-24">
          <div className="max-w-[720px]">
            <p className="text-sm font-medium text-primary-ink">For banks, fintechs and marketplaces</p>
            <h1 className="mt-4 text-[36px] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground md:text-[52px]">
              Private payment infrastructure on Stellar
            </h1>
            <p className="mt-6 max-w-[600px] text-base leading-[1.65] text-muted-foreground">
              Lock assets in an escrow you control. Move money between your users instantly and off chain. Pay out
              through the contract, one withdrawal at a time, with your controls in between.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT_URL} className={primary}>Talk to us</a>
              <a href={REPOS.docs} className={outline}>Read the docs</a>
            </div>
          </div>
        </section>

        <div className="border-y border-border bg-card/40">
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-x-10 gap-y-3 px-8 py-5 text-sm text-muted-foreground max-md:px-4">
            <span className="text-dim">Built on</span>
            <span>Stellar</span>
            <span>Soroban smart contracts</span>
            <span>Stellar Asset Contract and SEP-41 tokens</span>
            <span>SEP-53 signed messages</span>
            <span className="ml-auto text-dim">Live on testnet</span>
          </div>
        </div>

        <section id="how" className="mx-auto grid w-full max-w-[1200px] gap-10 px-8 py-20 max-md:px-4 lg:grid-cols-[320px_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">How it works</h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">
              Deposits and withdrawals are on chain. Everything in between is in your ledger.
            </p>
          </div>
          <Diagram />
        </section>

        <section id="capabilities" className="border-t border-border">
          <div className="mx-auto w-full max-w-[1200px] px-8 py-20 max-md:px-4">
            <h2 className="text-2xl font-semibold text-foreground">What an operator gets</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6 max-md:p-[18px]">
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="border-t border-border">
          <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-8 py-20 max-md:px-4 lg:grid-cols-[320px_1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Security model</h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">
                What the chain enforces, what the wallet signs, and what is trusted.
              </p>
            </div>
            <ul className="max-w-[640px] space-y-4">
              {security.map((line) => (
                <li key={line} className="flex gap-4 text-base leading-[1.6] text-muted-foreground">
                  <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-primary-ink" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-6 px-8 py-16 max-md:px-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Run a channel on testnet</h2>
              <p className="mt-2 text-[15px] text-muted-foreground">Deploy an escrow in a few minutes. The code is open.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={APP_URL} className={primary}>Open the app</a>
              <a href={GITHUB_ORG} className={outline}>GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-border">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-8 py-8 text-sm text-muted-foreground max-md:px-4">
          <span className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="size-6 object-contain" />
            <span className="font-semibold text-foreground">Cell</span>
            <span className="text-dim">SentinelLab</span>
          </span>
          <span className="flex items-center gap-5">
            <a className="hover:text-foreground" href={REPOS.docs}>Docs</a>
            <a className="flex items-center gap-1.5 hover:text-foreground" href={X_URL}>
              <XIcon className="size-3.5" /> @cellprotocol_
            </a>
            <a className="flex items-center gap-1.5 hover:text-foreground" href={GITHUB_ORG}>
              <GitHubIcon className="size-3.5" /> GitHub
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
