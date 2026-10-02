import { LogoMark } from "@/components/logo-mark";
import { LinkButton, Row, Section } from "@/components/ui";
import { APP_URL, GITHUB_ORG, REPOS } from "@/links";

const spec = [
  ["escrow", "one Soroban contract per operator; every asset inside it"],
  ["custody bound", "release ≤ TotalLocked(asset), ≤ release_cap(asset)"],
  ["release gate", "SHA-256 sparse Merkle proof, one payout per nonce"],
  ["authorisation", "Ed25519 wallet signature on every transfer and withdrawal"],
  ["finality", "in-channel: synchronous · on-chain: one ledger (~5 s)"],
  ["datastore", "PostgreSQL, double-entry, reconciled against the chain"],
];

export function App() {
  return (
    <div className="min-h-screen">
      <nav className="border-b border-border">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <LogoMark className="size-5 text-primary" />
            <span className="text-[15px] font-semibold text-foreground">Cell</span>
          </a>
          <div className="flex items-center gap-1">
            <LinkButton variant="ghost" href="#protocol" className="hidden md:inline-flex">
              Protocol
            </LinkButton>
            <LinkButton variant="ghost" href="#institutions" className="hidden md:inline-flex">
              Institutions
            </LinkButton>
            <LinkButton variant="ghost" href={REPOS.docs}>
              Specification
            </LinkButton>
            <LinkButton href={APP_URL}>Open the app</LinkButton>
          </div>
        </div>
      </nav>

      <header className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow text-dim">Stellar · Soroban · testnet</p>
          <h1 className="mt-4 text-[36px] leading-[1.08] font-semibold tracking-[-0.025em] text-foreground sm:text-[52px]">
            A private payment channel protocol on Stellar.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            An operator locks assets in an escrow it owns. Users transact against that escrow off chain, instantly,
            each move signed by their own key. Withdrawals leave through a proof the contract verifies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={REPOS.docs}>Read the specification</LinkButton>
            <LinkButton variant="outline" href={`${REPOS.contract}/blob/main/docs/deploy.md`}>
              Deploy on testnet
            </LinkButton>
          </div>
        </div>

        <dl className="self-center rounded-xl border border-border bg-card">
          {spec.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[120px_1fr] gap-4 border-t border-border px-5 py-3.5 first:border-t-0 sm:grid-cols-[140px_1fr]">
              <dt className="eyebrow pt-0.5 text-dim">{k}</dt>
              <dd className="num text-[13px] leading-relaxed text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <Section id="protocol" label="Protocol">
        <dl>
          <Row term="Escrow">
            Holds custody per asset and records <span className="num">TotalLocked</span>. Admin opens assets, sets a
            per-release cap and two independent gates. Operators may only release.
          </Row>
          <Row term="Channel">
            A double-entry ledger the operator runs. A deposit event credits the recipient; a transfer moves balance
            between two addresses and never touches the chain.
          </Row>
          <Row term="Release">
            One <span className="num">release_funds</span> per withdrawal, carrying an exclusion proof against the
            current root and the new root with the nonce spent. The contract pays once, then installs the new root.
          </Row>
          <Row term="Tenant">
            One escrow deployment. Isolation is by contract instance: admin key, operator set and nonce space are never
            shared between operators.
          </Row>
        </dl>
      </Section>

      <Section id="institutions" label="Institutions">
        <dl>
          <Row term="Keys">
            The admin key stays in your wallet; the backend only builds unsigned envelopes. The payout key is derived per
            tenant and can only call <span className="num">release_funds</span> and{" "}
            <span className="num">reset_smt_root</span>.
          </Row>
          <Row term="Deployment">
            One image, hosted or self-hosted. Self-hosted means your own master secret, your own RPC, your own
            database.
          </Row>
          <Row term="Controls">
            Per-asset release cap and deposit / withdrawal gates on chain. Membership policy (open, approval, invite
            only), block, KYC status and a full audit log off chain.
          </Row>
          <Row term="Reconciliation">
            Journal, event mirror and a live chain read are compared per asset, continuously. A difference halts that
            tenant's payouts until a person resumes them.
          </Row>
          <Row term="Trust model">
            The chain bounds what can leave. The wallet authorises every move. The operator is trusted for the books,
            and there is no user-forced exit in v1.
          </Row>
        </dl>
      </Section>

      <Section id="source" label="Source">
        <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {[
            ["cell-protocol-contract", "Soroban escrow", REPOS.contract],
            ["cell-channel", "gateway · pipeline · indexer", REPOS.backend],
            ["cell-frontend", "wallet view · operator console", REPOS.frontend],
            ["cell-protocol-workflow", "specification · design", REPOS.docs],
          ].map(([name, what, href]) => (
            <li key={name} className="flex items-baseline justify-between gap-4 border-b border-border py-3 text-[13px]">
              <a className="num text-foreground hover:text-primary" href={href}>
                {name}
              </a>
              <span className="text-muted-foreground">{what}</span>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 text-[12px] text-dim sm:px-8">
          <span className="flex items-center gap-2">
            <LogoMark className="size-4 text-primary" /> Cell
          </span>
          <a className="hover:text-foreground" href={GITHUB_ORG}>
            SentinelLab
          </a>
        </div>
      </footer>
    </div>
  );
}
