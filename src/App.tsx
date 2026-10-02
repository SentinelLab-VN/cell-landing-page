import { Diagram } from "@/components/diagram";
import { GitHubIcon, XIcon } from "@/components/icons";
import { APP_URL, GITHUB_ORG, REPOS, X_URL } from "@/links";

const points = [
  ["Private", "Outsiders see every deposit and every release. They do not see who paid whom inside the channel, or how much."],
  ["Signed", "Users sign every transfer with their own Stellar key. The operator cannot move in-channel funds without it."],
  ["Backed", "The escrow holds the assets the whole time, and can never release more than it holds. Anyone can check."],
];

export function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <header className="border-b border-sidebar-border">
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-8 max-md:px-4">
          <a href="#" className="inline-flex shrink-0 items-center gap-2.5 md:gap-3" aria-label="Cell">
            <img src="/logo.png" alt="" width={48} height={48} className="size-9 shrink-0 object-contain md:size-12" />
            <span className="text-[24px] leading-none font-semibold tracking-[-0.01em] text-foreground md:text-[32px]">Cell</span>
          </a>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="inline-flex h-8 items-center gap-2 rounded-full border border-warning-subtle-border bg-warning-subtle px-3.5 text-sm font-medium text-warning">
              <span className="size-1.5 rounded-full bg-warning" aria-hidden />
              Testnet
            </span>
            <a href={X_URL} aria-label="Cell on X" className="flex size-10 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground max-md:hidden">
              <XIcon className="size-4" />
            </a>
            <a href={GITHUB_ORG} aria-label="Source on GitHub" className="flex size-10 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground max-md:hidden">
              <GitHubIcon className="size-4" />
            </a>
            <a href={APP_URL} className="inline-flex h-10 items-center rounded-[10px] bg-primary px-4 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-colors hover:bg-primary-hover">
              Open the app
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-[1360px] px-5 lg:px-10">
        <img src="/logo.png" alt="" aria-hidden className="pointer-events-none absolute -bottom-28 -left-40 w-[560px] max-w-none opacity-5" />

        <section className="relative grid items-center gap-10 pt-10 pb-14 md:pt-16 md:pb-20 lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-20">
          <div>
            <p className="num text-sm tracking-[0.25em] text-primary-ink uppercase md:text-base">Cell Protocol</p>
            <h1 className="mt-5 max-w-2xl text-[36px] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground md:text-[50px] lg:text-[64px]">
              Instant transfers, backed on Stellar.
            </h1>
            <p className="mt-6 max-w-[540px] text-base leading-[1.65] text-muted-foreground">
              A private payment channel. An operator locks real assets in an escrow anyone can audit; inside the channel
              its users pay each other instantly, and the public ledger never sees those transfers.
            </p>
          </div>
          <div className="grid w-full gap-4 lg:w-[460px]">
            <RoleCard href={`${APP_URL}/start/operator`} title="I run a channel" body="Set up an escrow and share it." />
            <RoleCard href={`${APP_URL}/start/member`} title="I was sent a link" body="Deposit, pay, withdraw." />
          </div>
        </section>

        <section className="relative border-t border-border py-14">
          <h2 className="text-xl font-semibold text-foreground">How it works</h2>
          <p className="mt-2 mb-8 max-w-[540px] text-[15px] leading-[1.6] text-muted-foreground">
            Money enters once and leaves once. Everything in between stays inside the channel.
          </p>
          <Diagram />
        </section>

        <section className="relative grid gap-4 border-t border-border py-14 md:grid-cols-3">
          {points.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm max-md:p-[18px]">
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
            </div>
          ))}
        </section>

        <section className="relative border-t border-border py-14">
          <h2 className="text-xl font-semibold text-foreground">Tenants and channels</h2>
          <p className="mt-2 max-w-[600px] text-[15px] leading-[1.6] text-muted-foreground">
            A bank, a fintech or a marketplace deploys its own escrow. That is a tenant. Each asset it opens inside the
            tenant is a channel: USDC, EURC, XLM. Users need nothing but a Stellar wallet.
          </p>
        </section>
      </main>

      <footer className="mt-auto border-t border-border">
        <div className="mx-auto flex w-full max-w-[1360px] flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground lg:px-10">
          <span className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="size-6 object-contain" />
            <span className="font-semibold text-foreground">Cell</span>
            <span className="text-dim">by SentinelLab</span>
          </span>
          <span className="flex items-center gap-5">
            <a className="hover:text-foreground" href={REPOS.docs}>
              How it works
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

function RoleCard({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-border-strong hover:bg-secondary"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold text-foreground">{title}</span>
        <span className="mt-0.5 block text-[15px] text-muted-foreground">{body}</span>
      </span>
      <span className="text-dim transition-transform group-hover:translate-x-1 group-hover:text-foreground" aria-hidden>
        →
      </span>
    </a>
  );
}
