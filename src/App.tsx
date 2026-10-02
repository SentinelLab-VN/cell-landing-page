import { LogoMark } from "@/components/logo-mark";
import { LinkButton } from "@/components/ui";
import { APP_URL, GITHUB_ORG } from "@/links";
import { Developers } from "@/sections/developers";
import { Hero } from "@/sections/hero";
import { How } from "@/sections/how";
import { Roles } from "@/sections/roles";
import { Trust } from "@/sections/trust";

const nav = [
  ["How it works", "#how"],
  ["Operators", "#operators"],
  ["Trust", "#trust"],
  ["Developers", "#developers"],
];

export function App() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <LogoMark className="size-[22px] text-primary" />
            <span className="text-base font-semibold text-foreground">Cell</span>
            <span className="num ml-1 hidden text-xs text-dim sm:inline">testnet</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-[13px] text-muted-foreground hover:text-foreground">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LinkButton variant="ghost" href={GITHUB_ORG} className="hidden md:inline-flex">
              GitHub
            </LinkButton>
            <LinkButton href={APP_URL} className="h-10 px-3 sm:px-4">
              Open the app
            </LinkButton>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        <div className="border-y border-border bg-card/40">
          <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 md:grid-cols-4">
            {[
              ["Instant", "transfers inside a channel", "committed before the request returns"],
              ["~5 s", "to withdraw to Stellar", "one on-chain release per withdrawal"],
              ["0", "sign-ups", "your Stellar key is the account"],
              ["1", "escrow per operator", "every asset they open lives inside it"],
            ].map(([n, d, sub]) => (
              <div key={d}>
                <dt className="num text-3xl text-foreground">{n}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{d}</dd>
                <dd className="mt-0.5 text-[13px] leading-snug text-muted-foreground">{sub}</dd>
              </div>
            ))}
          </dl>
        </div>

        <How />
        <Roles />
        <Trust />
        <Developers />

        <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8">
          <div className="rounded-3xl border border-border bg-[radial-gradient(80%_120%_at_50%_0%,rgba(200,249,78,0.12),transparent_60%)] px-6 py-14 text-center sm:px-12">
            <LogoMark className="mx-auto size-10 text-primary" />
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Connect a wallet. That is the whole onboarding.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Sign a one-time challenge — no transaction, no fee — and land on your tenants: the ones you run, and the
              ones that owe you money.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton size="lg" href={APP_URL}>
                Open the app
              </LinkButton>
              <LinkButton size="lg" variant="outline" href={`${GITHUB_ORG}/cell-protocol-workflow`}>
                Read the docs
              </LinkButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-[13px] text-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <LogoMark className="size-4 text-primary" />
            <span className="text-foreground">Cell</span>
            <span>· a private payment channel on Stellar</span>
          </div>
          <div className="flex gap-5">
            <a className="hover:text-foreground" href={GITHUB_ORG}>
              SentinelLab
            </a>
            <a className="hover:text-foreground" href={`${GITHUB_ORG}/cell-protocol-workflow`}>
              Docs
            </a>
            <a className="hover:text-foreground" href={`${GITHUB_ORG}/cell-protocol-contract`}>
              Contract
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
