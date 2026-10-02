import { Diagram } from "@/components/diagram";
import { LogoMark } from "@/components/logo-mark";
import { APP_URL, GITHUB_ORG, REPOS } from "@/links";

export function App() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <nav className="flex h-14 items-center justify-between text-[13px]">
        <a href="#" className="flex items-center gap-2 font-semibold text-foreground">
          <LogoMark className="size-4 text-primary" /> Cell
        </a>
        <a className="text-foreground hover:text-primary" href={APP_URL}>
          Open the app →
        </a>
      </nav>

      <header className="border-t border-border py-16 sm:py-24">
        <h1 className="text-[34px] leading-[1.12] font-semibold tracking-[-0.02em] text-foreground sm:text-[44px]">
          A private payment channel on Stellar.
        </h1>
        <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
          Cell Protocol lets an operator give its users instant, private transfers, fully backed by real assets locked
          on Stellar. Mainnet sees a deposit going in and a release coming out. It never sees the transfers in
          between.
        </p>
      </header>

      <div className="border-t border-border py-12">
        <Diagram />
      </div>

      <section className="grid gap-8 border-t border-border py-14 sm:grid-cols-3 sm:gap-10">
        {[
          ["Private", "Outsiders see every deposit and every release. They do not see who paid whom inside the channel, or how much."],
          ["Signed", "Users sign every transfer with their own Stellar key. The operator cannot move in-channel funds without it."],
          ["Backed", "The escrow holds the assets the whole time, and can never release more than it holds. Anyone can check."],
        ].map(([title, body]) => (
          <div key={title}>
            <h2 className="text-[15px] font-semibold text-foreground">{title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border py-14">
        <h2 className="text-[15px] font-semibold text-foreground">Tenants and channels</h2>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
          An operator — a bank, a fintech, a marketplace — deploys its own escrow. That is a tenant. Each asset it
          opens inside it is a channel: USDC, EURC, XLM. Users need nothing but a Stellar wallet.
        </p>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-6 text-[12px] text-dim">
        <span>SentinelLab · testnet</span>
        <span className="flex gap-5">
          <a className="hover:text-foreground" href={REPOS.docs}>
            How it works
          </a>
          <a className="hover:text-foreground" href={GITHUB_ORG}>
            Source
          </a>
        </span>
      </footer>
    </div>
  );
}
