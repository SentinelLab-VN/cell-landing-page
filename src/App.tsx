import { LogoMark } from "@/components/logo-mark";
import { APP_URL, GITHUB_ORG, REPOS } from "@/links";

const diagram = `wallet ──signed message──▶ gateway ──▶ pipeline ──▶ postgres
  │                            │                        ▲
  │ deposit (tx)               │ unsigned XDR           │ ledger
  ▼                            ▼                        │
escrow (Soroban) ◀──getEvents / release_funds── indexer ┘`;

const entrypoints: [string, string, string][] = [
  ["deposit(from, mint, amount, recipient?)", "from", "locks the asset, credits what arrived"],
  ["release_funds(op, mint, to, amount, nonce, new_root, siblings)", "operator", "pays once per nonce, installs new_root"],
  ["reset_smt_root(op, expected_tree_index)", "operator", "starts a new generation of 65 536 nonces"],
  ["allow_mint(mint, release_cap)", "admin", "opens an asset; 0 = uncapped"],
  ["set_mint_gates(mint, deposits_blocked, withdrawals_blocked)", "admin", "independent incident levers"],
  ["add_operator / remove_operator(addr)", "admin", "who may release"],
  ["sweep(mint, to)", "admin", "balance above TotalLocked only"],
  ["upgrade(wasm_hash)", "admin", "storage kept"],
];

const deployments: [string, string, string, string][] = [
  ["testnet", "CD3ZEOIZNMR2RPENWVDLATILSAENOEHD2LLOLKUTIA26EP7INGORFK5Y", "2cc64d78…fd028a0", "1"],
  ["testnet", "CBN2CRQQ653O32IQJTBBDBBTXWMTFDSKBNMXFHT5WFLVZ4GEFR2SN7M5", "2cc64d78…fd028a0", "1"],
];

export function App() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <nav className="flex h-14 items-center justify-between text-[13px]">
        <a href="#" className="flex items-center gap-2 font-semibold text-foreground">
          <LogoMark className="size-4 text-primary" /> Cell
        </a>
        <div className="flex gap-5 text-muted-foreground">
          <a className="hover:text-foreground" href={REPOS.docs}>
            Specification
          </a>
          <a className="hover:text-foreground" href={GITHUB_ORG}>
            Source
          </a>
          <a className="text-foreground hover:text-primary" href={APP_URL}>
            App →
          </a>
        </div>
      </nav>

      <header className="border-t border-border py-14 sm:py-20">
        <h1 className="max-w-2xl text-[30px] leading-[1.15] font-semibold tracking-[-0.02em] text-foreground sm:text-[40px]">
          A payment channel on Stellar. Custody on chain, transfers off it.
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          An operator deploys one escrow contract and owns its admin key. Deposits into it are mirrored to a ledger the
          operator runs. Transfers inside that ledger are signed by the sender's Stellar key and commit immediately.
          A withdrawal is paid by the contract once, against a Merkle proof.
        </p>
        <pre className="num mt-10 overflow-x-auto border-y border-border py-6 text-[12px] leading-[1.6] text-muted-foreground">
          {diagram}
        </pre>
        <p className="mt-3 text-[12px] text-dim">
          Three processes, one PostgreSQL. The indexer is the only process holding a key, and that key can only
          release.
        </p>
      </header>

      <Section n="01" title="What the contract enforces">
        <div className="overflow-x-auto">
        <table className="num w-full min-w-[640px] text-left text-[12.5px]">
          <thead className="text-dim">
            <tr>
              <th className="py-2 pr-4 font-normal">entrypoint</th>
              <th className="py-2 pr-4 font-normal">auth</th>
              <th className="py-2 font-normal">effect</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {entrypoints.map(([sig, auth, effect]) => (
              <tr key={sig} className="border-t border-border align-top">
                <td className="py-2.5 pr-4 text-foreground">{sig}</td>
                <td className="py-2.5 pr-4">{auth}</td>
                <td className="py-2.5">{effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <p className="mt-5 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
          A release cannot exceed <code className="num text-foreground">TotalLocked(mint)</code> or a non-zero{" "}
          <code className="num text-foreground">release_cap</code>, and a nonce pays at most once: the contract
          verifies exclusion against its current SHA-256 sparse Merkle root and inclusion in the new one. Who was owed
          the money is not on chain. That is the operator's ledger, and the reason it is double-entry and reconciled
          continuously.
        </p>
      </Section>

      <Section n="02" title="What the wallet signs">
        <p className="max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
          A session token can read and cancel. It cannot move value. Every transfer and every withdrawal request
          carries an Ed25519 signature (SEP-53) over a message naming the amount and the destination:
        </p>
        <pre className="num mt-5 overflow-x-auto border-y border-border py-4 text-[12px] leading-[1.8] text-foreground">
{`cell:transfer:v1:<passphrase>:<channel>:<from>:<to>:<amount>:<nonce>:<expires_at>
cell:withdraw:v1:<passphrase>:<channel>:<from>:<to>:<amount>:<request_id>:<expires_at>`}
        </pre>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
          The network passphrase is inside the bytes, so a testnet signature is worthless on mainnet. Admin actions
          are unsigned envelopes the backend builds and the admin's wallet signs; the backend never holds that key.
        </p>
      </Section>

      <Section n="03" title="Operating a tenant">
        <dl className="grid gap-x-10 gap-y-5 text-[14px] leading-relaxed sm:grid-cols-2">
          {[
            ["Isolation", "One escrow per operator. Admin key, operator set and nonce space are per contract instance, so nothing is shared between tenants."],
            ["Keys", "Your admin key stays in your wallet. The payout key is derived per tenant from one master secret and is authorised by you with add_operator."],
            ["Deployment", "The same image runs hosted or self-hosted. Self-hosted: your master secret, your RPC, your database."],
            ["Controls", "Per-asset release cap and two gates on chain. Membership policy, block, KYC status and an audit log off chain."],
            ["Reconciliation", "Journal, event mirror and a live read of the contract are compared per asset. A difference halts that tenant's payouts until a person clears it."],
            ["Not in v1", "A user cannot force an exit; redemption goes through the operator. Deposits and releases are public on chain."],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-medium text-foreground">{k}</dt>
              <dd className="mt-1 text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section n="04" title="Deployments">
        <div className="overflow-x-auto">
        <table className="num w-full min-w-[720px] text-left text-[12px]">
          <thead className="text-dim">
            <tr>
              <th className="py-2 pr-4 font-normal">network</th>
              <th className="py-2 pr-4 font-normal">escrow</th>
              <th className="py-2 pr-4 font-normal">wasm sha256</th>
              <th className="py-2 font-normal">storage</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {deployments.map(([net, id, hash, v]) => (
              <tr key={id} className="border-t border-border">
                <td className="py-2.5 pr-4">{net}</td>
                <td className="py-2.5 pr-4 text-foreground">{id}</td>
                <td className="py-2.5 pr-4">{hash}</td>
                <td className="py-2.5">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <p className="mt-4 text-[12px] text-dim">
          Mainnet: not yet. The record is kept in{" "}
          <a className="text-muted-foreground hover:text-foreground" href={`${REPOS.contract}/blob/main/docs/deploy.md`}>
            cell-protocol-contract/docs/deploy.md
          </a>
          .
        </p>
      </Section>

      <Section n="05" title="Source">
        <ul className="grid gap-y-2 text-[13px] sm:grid-cols-2">
          {[
            ["cell-protocol-contract", "Soroban, Rust. The escrow.", REPOS.contract],
            ["cell-channel", "Rust, axum, PostgreSQL. Gateway, pipeline, indexer.", REPOS.backend],
            ["cell-frontend", "React. Wallet view and operator console.", REPOS.frontend],
            ["cell-protocol-workflow", "The specification. Code that disagrees with it is wrong.", REPOS.docs],
          ].map(([name, what, href]) => (
            <li key={name}>
              <a className="num text-foreground hover:text-primary" href={href}>
                {name}
              </a>
              <span className="text-muted-foreground"> — {what}</span>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="flex items-center justify-between border-t border-border py-6 text-[12px] text-dim">
        <span>SentinelLab</span>
        <span>Stellar testnet</span>
      </footer>
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-6 text-[15px] font-semibold text-foreground">
        <span className="num mr-3 text-dim">{n}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
