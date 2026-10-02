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
          Payments on Stellar that stay private.
        </h1>
        <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
          You put money into Cell Channel once. From then on you pay other members inside it: instantly, and without
          the payment appearing on the public ledger. When you want it back on Stellar, you withdraw.
        </p>
      </header>

      <div className="border-t border-border py-10">
        <Diagram />
      </div>

      <section className="grid gap-8 border-t border-border py-14 sm:grid-cols-3 sm:gap-10">
        {[
          ["Private", "Nobody watching the ledger sees who paid whom, or how much. They see money go in and money come out."],
          ["Yours", "Your wallet signs every payment. No one, not even the operator, can move your balance without it."],
          ["Backed", "The money sits in an escrow contract on Stellar the whole time. Anyone can check that it is there."],
        ].map(([title, body]) => (
          <div key={title}>
            <h2 className="text-[15px] font-semibold text-foreground">{title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border py-14">
        <h2 className="text-[15px] font-semibold text-foreground">Who runs a channel</h2>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
          A bank, a fintech, a marketplace. They deploy their own escrow, choose which assets to accept, and decide who
          may join. Their users need nothing but a Stellar wallet.
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
