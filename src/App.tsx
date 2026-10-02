import { Diagram } from "@/components/diagram";
import { GitHubIcon, XIcon } from "@/components/icons";
import { APP_URL, GITHUB_ORG, REPOS, X_URL } from "@/links";

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

      <main className="mx-auto w-full max-w-[720px] px-8 max-md:px-4">
        <section className="py-16 md:py-24">
          <h1 className="text-[36px] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground md:text-[48px]">
            Private payments on Stellar
          </h1>
          <p className="mt-6 text-base leading-[1.65] text-muted-foreground">
            An operator locks assets in an escrow on Stellar. Its users pay each other against that escrow, instantly
            and off chain. Only deposits and withdrawals touch the ledger.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={APP_URL} className={primary}>
              Open the app
            </a>
            <a href={REPOS.docs} className={outline}>
              Read the docs
            </a>
          </div>
        </section>

        <section className="border-t border-border py-14">
          <h2 className="text-xl font-semibold text-foreground">How it works</h2>
          <div className="mt-6">
            <Diagram />
          </div>
        </section>

        <section className="border-t border-border py-14">
          <h2 className="text-xl font-semibold text-foreground">Who it is for</h2>
          <p className="mt-4 text-base leading-[1.65] text-muted-foreground">
            Banks, fintechs and marketplaces that want to move money between their users without putting every
            payment on chain. Each operator runs its own escrow and keeps its own keys. Users only need a Stellar
            wallet.
          </p>
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
            <a className="hover:text-foreground" href={REPOS.docs}>
              Docs
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
