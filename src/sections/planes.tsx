/** The two planes, as a picture: what touches Stellar and what never does. */
export function Planes() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid gap-px bg-border md:grid-cols-[1fr_auto_1fr]">
        <Plane
          label="Stellar · public"
          tone="info"
          title="Escrow contract"
          items={["Holds the deposited assets", "Records custody per asset", "Pays a withdrawal once, against a proof"]}
        />
        <div className="hidden items-center justify-center bg-card px-8 md:flex">
          <div className="flex flex-col items-center gap-3">
            <Arrow label="deposit" dir="right" />
            <Arrow label="release_funds" dir="left" />
          </div>
        </div>
        <Plane
          label="Channel · private"
          tone="primary"
          title="Your balance"
          items={["Credited the moment a deposit lands", "Sent to anyone, instantly, signed by your wallet", "Reconciled against the escrow, continuously"]}
        />
      </div>
      <p className="border-t border-border px-6 py-4 text-center text-[13px] text-muted-foreground">
        Mainnet sees <span className="text-foreground">deposits in</span> and{" "}
        <span className="text-foreground">one release per withdrawal out</span>. The transfers in between never
        appear on it.
      </p>
    </div>
  );
}

function Plane({ label, tone, title, items }: { label: string; tone: "info" | "primary"; title: string; items: string[] }) {
  return (
    <div className="bg-card p-6">
      <p className={`eyebrow ${tone === "info" ? "text-info" : "text-primary"}`}>{label}</p>
      <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className={`mt-[9px] size-1 shrink-0 rounded-full ${tone === "info" ? "bg-info" : "bg-primary"}`} />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ label, dir }: { label: string; dir: "left" | "right" }) {
  return (
    <div className="flex items-center gap-2 text-dim">
      {dir === "left" && <span aria-hidden>←</span>}
      <span className="num text-[11px]">{label}</span>
      {dir === "right" && <span aria-hidden>→</span>}
    </div>
  );
}
