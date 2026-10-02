import { Card, LinkButton, Section } from "@/components/ui";
import { REPOS } from "@/links";

const repos = [
  {
    name: "cell-protocol-contract",
    href: REPOS.contract,
    stack: "Soroban · Rust",
    body: "One contract, the escrow. Custody per asset, an operator set, and a proof-gated release_funds. Eight events for anyone watching.",
  },
  {
    name: "cell-channel",
    href: REPOS.backend,
    stack: "Rust · axum · PostgreSQL",
    body: "Gateway, pipeline and indexer. The double-entry ledger, the release worker, the reconciler. Postgres is the only datastore.",
  },
  {
    name: "cell-frontend",
    href: REPOS.frontend,
    stack: "React · Vite · Tailwind",
    body: "One app, two roles: the user's wallet view and the operator console. Signs with Freighter and friends via SEP-53.",
  },
  {
    name: "cell-protocol-workflow",
    href: REPOS.docs,
    stack: "Specification",
    body: "The architecture, the contract spec, the backend TDD and the design board. Where the code disagrees with it, the code is wrong.",
  },
];

export function Developers() {
  return (
    <Section
      id="developers"
      eyebrow="Open source"
      title="Four repositories, one specification."
      lede="Built in the open on Stellar. A tenant is one escrow deployment; adding an asset is one call, not another contract."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((r) => (
          <a key={r.name} href={r.href} className="group block">
            <Card className="h-full transition-colors group-hover:border-border-strong">
              <div className="flex items-start justify-between gap-4">
                <p className="num text-sm text-foreground">{r.name}</p>
                <span className="eyebrow shrink-0 text-dim">{r.stack}</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{r.body}</p>
              <p className="num mt-4 text-[11px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                github ↗
              </p>
            </Card>
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <LinkButton variant="outline" href={REPOS.docs}>
          Read the spec
        </LinkButton>
        <LinkButton variant="ghost" href={`${REPOS.contract}/blob/main/docs/deploy.md`}>
          Deploy an escrow on testnet →
        </LinkButton>
      </div>
    </Section>
  );
}
