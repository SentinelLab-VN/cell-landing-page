import { Building2, Landmark, Lock, ScrollText, Scale, Server, ShieldCheck, Users } from "lucide-react";
import type { ComponentType } from "react";
import { Diagram } from "@/components/diagram";
import { XIcon } from "@/components/icons";
import { Moment } from "@/components/moment";
import { APP_URL, CONTACT_URL, X_URL } from "@/links";

const button = "inline-flex h-10 items-center justify-center rounded-[10px] px-4 text-sm font-semibold whitespace-nowrap transition-colors";
const primary = `${button} bg-primary text-primary-foreground hover:bg-primary-hover`;
const outline = `${button} border border-border-strong text-foreground hover:bg-secondary`;

type Icon = ComponentType<{ className?: string }>;

const capabilities: [Icon, string, string][] = [
  [Lock, "Escrow custody", "One Soroban contract per operator holds the assets. The admin key never leaves your wallet."],
  [Scale, "Per-asset controls", "A cap on any single payout, and separate gates for deposits and withdrawals, set on chain."],
  [Users, "Membership and KYC", "Open, approval or invite only. Block an address, record a KYC status, keep a reason."],
  [ShieldCheck, "Approval queue", "Every withdrawal is reviewed before the escrow pays it. The destination is in the user's signature."],
  [ScrollText, "Continuous reconciliation", "Books are checked against the chain per asset. A mismatch halts payouts until someone looks."],
  [Server, "Hosted or self-hosted", "One image. Run it with us, or on your own servers with your own keys and database."],
];

const uses: [Icon, string, string][] = [
  [Landmark, "Neobank balances", "Customer accounts backed one to one by assets in escrow, with instant transfers between them."],
  [Building2, "Marketplace payouts", "Hold seller balances off chain, pay out on Stellar when they ask, after your review."],
  [Users, "Payroll and B2B", "Invite-only channels where every member is known and every payment is signed."],
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
            <a className="hover:text-foreground" href="#uses">Use cases</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={CONTACT_URL} className={`${outline} max-md:hidden`}>Talk to us</a>
            <a href={APP_URL} className={primary}>Open the app</a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-[1200px] px-8 pt-16 pb-10 max-md:px-4 md:pt-24">
          <div className="max-w-[760px]">
            <h1 className="text-[36px] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground md:text-[52px]">
              Private payment channels on Stellar
            </h1>
            <p className="mt-6 max-w-[600px] text-base leading-[1.65] text-muted-foreground">
              Cell gives fintechs, banks and marketplaces a channel where their users can pay each other without
              those payments ever being written to the public ledger. The money itself stays in an escrow on Stellar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT_URL} className={primary}>Talk to us</a>
              <a href={APP_URL} className={outline}>Open the app</a>
            </div>
          </div>
          <div className="mt-12">
            <Moment />
          </div>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-8 py-14 max-md:px-4 md:grid-cols-3">
            {[
              ["Nobody sees your users pay each other", "Transfers inside the channel never reach the public ledger. Outsiders cannot tell who paid whom, how much, or how often."],
              ["Only the edges are public", "A deposit into the escrow and a withdrawal out of it are ordinary Stellar transactions. That is all the chain records."],
              ["Private, not unaccountable", "Your ledger is reconciled against the escrow continuously, and every balance movement carries the user's signature."],
            ].map(([title, body]) => (
              <div key={title}>
                <h2 className="text-base font-semibold text-foreground">{title}</h2>
                <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto w-full max-w-[1200px] px-8 py-20 max-md:px-4">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">How it works</h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">
                Deposits and withdrawals are on chain. Everything in between is in your ledger.
              </p>
            </div>
            <Diagram />
          </div>
        </section>

        <section id="capabilities" className="border-t border-border">
          <div className="mx-auto w-full max-w-[1200px] px-8 py-20 max-md:px-4">
            <h2 className="text-2xl font-semibold text-foreground">What an operator gets</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(([I, title, body]) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6 max-md:p-[18px]">
                  <I className="size-5 text-primary-ink" />
                  <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="uses" className="border-t border-border bg-card/40">
          <div className="mx-auto w-full max-w-[1200px] px-8 py-20 max-md:px-4">
            <p className="num text-[11px] tracking-[0.2em] text-primary-ink uppercase">Where it fits</p>
            <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-3">
              {uses.map(([I, title, body]) => (
                <div key={title}>
                  <I className="size-5 text-muted-foreground" />
                  <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-6 px-8 py-16 max-md:px-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Run a channel on testnet</h2>
              <p className="mt-2 text-[15px] text-muted-foreground">Deploy an escrow in a few minutes.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={CONTACT_URL} className={primary}>Talk to us</a>
              <a href={APP_URL} className={outline}>Open the app</a>
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
            <a className="flex items-center gap-1.5 hover:text-foreground" href={X_URL}>
              <XIcon className="size-3.5" /> @cellprotocol_
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
