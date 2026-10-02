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
            Cell is a payment channel for Stellar. An operator, such as a bank or a fintech, locks assets in an escrow
            contract and gives its users balances backed by it. Users pay each other inside the channel, which is
            instant and does not show up on the public ledger. When a user wants the money back on Stellar, the
            operator approves the withdrawal and the escrow pays it out.
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
          <h2 className="text-xl font-semibold text-foreground">What is on chain and what is not</h2>
          <p className="mt-4 text-base leading-[1.65] text-muted-foreground">
            Every deposit and every withdrawal is a normal Stellar transaction, so anyone can see them and can check
            that the escrow holds what it should. The transfers between users are not on chain. They are recorded in
            the operator's ledger, and each one is signed by the sender's own Stellar key, so the operator cannot move
            a balance on its own. The escrow can never pay out more than it holds, and it pays each withdrawal exactly
            once.
          </p>
          <p className="mt-4 text-base leading-[1.65] text-muted-foreground">
            This is the trade-off: the operator is trusted to keep its books honestly, and in this version there is no
            way for a user to force a withdrawal without the operator.
          </p>
        </section>

        <section className="border-t border-border py-14">
          <h2 className="text-xl font-semibold text-foreground">Running a channel</h2>
          <p className="mt-4 text-base leading-[1.65] text-muted-foreground">
            Each operator deploys its own escrow contract and keeps the admin key in its own wallet. Inside that
            contract it can open as many assets as it wants, for example USDC, EURC and XLM, and decide who may join.
            The software can be run by us or on the operator's own servers. Users only need a Stellar wallet.
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
