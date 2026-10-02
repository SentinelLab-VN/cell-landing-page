import { Diagram } from "@/components/diagram";
import { GitHubIcon, XIcon } from "@/components/icons";
import { APP_URL, GITHUB_ORG, REPOS, X_URL } from "@/links";

const points = [
  ["Private", "Outsiders see every deposit and every release. They do not see who paid whom inside the channel, or how much."],
  ["Signed", "Users sign every transfer with their own Stellar key. The operator cannot move in-channel funds without it."],
  ["Backed", "The escrow holds the assets the whole time, and can never release more than it holds. Anyone can check."],
];

const button = "inline-flex h-10 items-center justify-center rounded-[10px] px-4 text-sm font-semibold whitespace-nowrap transition-colors";
const primary = `${button} bg-primary text-primary-foreground hover:bg-primary-hover`;
const outline = `${button} border border-border-strong text-foreground hover:bg-secondary`;

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-sidebar-border">
        <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-8 max-md:px-4">
          <a href="#" className="inline-flex shrink-0 items-center gap-2.5" aria-label="Cell">
            <img src="/logo.png" alt="" width={48} height={48} className="size-9 shrink-0 object-contain" />
            <span className="text-[24px] leading-none font-semibold tracking-[-0.01em] text-foreground">Cell</span>
          </a>
          <div className="flex items-center gap-2">
            <a href={X_URL} aria-label="Cell on X" className="flex size-10 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground max-md:hidden">
              <XIcon className="size-4" />
            </a>
            <a href={GITHUB_ORG} aria-label="Source on GitHub" className="flex size-10 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground max-md:hidden">
              <GitHubIcon className="size-4" />
            </a>
            <a href={APP_URL} className={primary}>
              Open the app
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-8 max-md:px-4">
        <section className="py-16 md:py-24">
          <h1 className="max-w-3xl text-[36px] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground md:text-[52px]">
            A private payment channel on Stellar.
          </h1>
          <p className="mt-6 max-w-[600px] text-base leading-[1.65] text-muted-foreground">
            Cell Protocol lets an operator give its users instant, private transfers, fully backed by real assets locked
            on Stellar. The public ledger sees a deposit going in and a release coming out. It never sees the transfers
            in between.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={APP_URL} className={primary}>
              Open the app
            </a>
            <a href={REPOS.docs} className={outline}>
              How it works
            </a>
          </div>
        </section>

        <section className="border-t border-border py-14">
          <h2 className="text-xl font-semibold text-foreground">The core loop</h2>
          <p className="mt-2 mb-8 max-w-[540px] text-[15px] leading-[1.6] text-muted-foreground">
            Money enters once and leaves once. Everything in between stays inside the channel.
          </p>
          <Diagram />
        </section>

        <section className="grid gap-4 border-t border-border py-14 md:grid-cols-3">
          {points.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm max-md:p-[18px]">
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
            </div>
          ))}
        </section>

        <section className="border-t border-border py-14">
          <h2 className="text-xl font-semibold text-foreground">Tenants and channels</h2>
          <p className="mt-2 max-w-[600px] text-[15px] leading-[1.6] text-muted-foreground">
            A bank, a fintech or a marketplace deploys its own escrow. That is a tenant. Each asset it opens inside the
            tenant is a channel: USDC, EURC, XLM. Users need nothing but a Stellar wallet.
          </p>
        </section>
      </main>

      <footer className="mt-auto border-t border-border">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-8 py-8 text-sm text-muted-foreground max-md:px-4">
          <span className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="size-6 object-contain" />
            <span className="font-semibold text-foreground">Cell</span>
            <span className="text-dim">by SentinelLab. Running on testnet.</span>
          </span>
          <span className="flex items-center gap-5">
            <a className="hover:text-foreground" href={REPOS.docs}>
              Documentation
            </a>
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
