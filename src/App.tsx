import { Diagram } from "@/components/diagram";
import { GitHubIcon, XIcon } from "@/components/icons";
import { LogoMark } from "@/components/logo-mark";
import { APP_URL, GITHUB_ORG, REPOS, X_URL } from "@/links";

const points = [
  ["Private", "Outsiders see every deposit and every release. They do not see who paid whom inside the channel, or how much."],
  ["Signed", "Users sign every transfer with their own Stellar key. The operator cannot move in-channel funds without it."],
  ["Backed", "The escrow holds the assets the whole time, and can never release more than it holds. Anyone can check."],
];

export function App() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(70%_50%_at_30%_0%,rgba(200,249,78,0.07),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-[15px] font-semibold text-foreground">
            <LogoMark className="size-[22px] text-primary" /> Cell
          </a>
          <div className="flex items-center gap-1">
            <IconLink href={X_URL} label="Cell on X">
              <XIcon className="size-4" />
            </IconLink>
            <IconLink href={GITHUB_ORG} label="Source on GitHub">
              <GitHubIcon className="size-4" />
            </IconLink>
            <a
              href={APP_URL}
              className="ml-2 inline-flex h-10 items-center rounded-[10px] bg-primary px-4 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-colors hover:bg-[#D6FF62]"
            >
              Open the app
            </a>
          </div>
        </nav>

        <header className="pt-20 pb-16 sm:pt-28 sm:pb-20">
          <h1 className="max-w-3xl text-[40px] leading-[1.05] font-semibold tracking-[-0.03em] text-foreground sm:text-[64px]">
            A private payment channel on Stellar.
          </h1>
          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-muted-foreground sm:text-[19px]">
            Cell Protocol lets an operator give its users instant, private transfers, fully backed by real assets locked
            on Stellar. The public ledger sees a deposit going in and a release coming out. It never sees the transfers
            in between.
          </p>
        </header>

        <section className="border-t border-border py-14">
          <Diagram />
        </section>

        <section className="grid border-t border-border sm:grid-cols-3">
          {points.map(([title, body], i) => (
            <div key={title} className={`py-10 sm:pr-8 ${i > 0 ? "border-t border-border sm:border-t-0 sm:border-l sm:pl-8" : ""}`}>
              <h2 className="text-[16px] font-semibold text-foreground">{title}</h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </section>

        <section className="border-t border-border py-14">
          <h2 className="text-[16px] font-semibold text-foreground">Tenants and channels</h2>
          <p className="mt-2.5 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
            A bank, a fintech or a marketplace deploys its own escrow. That is a tenant. Each asset it opens inside the
            tenant is a channel: USDC, EURC, XLM. Users need nothing but a Stellar wallet.
          </p>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-8 text-[13px] text-muted-foreground">
          <span className="flex items-center gap-2">
            <LogoMark className="size-4 text-primary" />
            <span className="text-foreground">Cell</span>
            <span className="text-dim">by SentinelLab. Running on testnet.</span>
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
        </footer>
      </div>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </a>
  );
}
