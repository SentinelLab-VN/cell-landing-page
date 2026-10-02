/** The operator console's overview, drawn with the app's own components. */
export function Console() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
      <div className="flex items-center justify-between border-b border-sidebar-border px-5 py-3">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="size-5 object-contain" />
          <span className="text-sm font-semibold text-foreground">Acme Pay</span>
        </div>
        <Pill tone="ok">Reconciled 12s ago</Pill>
      </div>

      <div className="grid grid-cols-3 gap-px bg-border">
        <Stat label="Total locked" value="1,284,500.00" unit="USDC" />
        <Stat label="In channel" value="1,281,250.00" unit="USDC" />
        <Stat label="Awaiting payout" value="3,250.00" unit="USDC" />
      </div>

      <table className="w-full border-collapse text-left">
        <thead className="bg-secondary/60">
          <tr>
            {["Asset", "Locked", "Queue", "Gates"].map((h) => (
              <th key={h} className="num px-5 py-2.5 text-[11px] font-medium tracking-[0.2em] whitespace-nowrap text-dim uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["USDC", "1,284,500.00", "3", "open"],
            ["EURC", "212,000.00", "0", "open"],
            ["XLM", "90,000.00", "1", "deposits paused"],
          ].map(([asset, locked, queue, gates]) => (
            <tr key={asset} className="border-t border-sidebar-border">
              <td className="px-5 py-3">
                <span className="flex items-center gap-2.5">
                  <span className="num inline-flex size-7 items-center justify-center rounded-[8px] border border-border-strong bg-secondary text-[10px] font-semibold text-foreground">
                    {asset}
                  </span>
                  <span className="text-sm text-foreground">{asset}</span>
                </span>
              </td>
              <td className="num px-5 py-3 text-sm text-foreground">{locked}</td>
              <td className="num px-5 py-3 text-sm text-foreground">{queue}</td>
              <td className="px-5 py-3">
                <Pill tone={gates === "open" ? "ok" : "warn"}>{gates}</Pill>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="bg-card px-5 py-4">
      <p className="text-xs text-dim">{label}</p>
      <p className="num mt-1 text-[17px] text-foreground">
        {value} <span className="text-xs text-muted-foreground">{unit}</span>
      </p>
    </div>
  );
}

const tones = {
  ok: "border-success-subtle-border bg-success-subtle text-success",
  warn: "border-warning-subtle-border bg-warning-subtle text-warning",
};
const dots = { ok: "bg-success", warn: "bg-warning" };

export function Pill({ tone, children }: { tone: keyof typeof tones; children: string }) {
  return (
    <span className={`inline-flex h-6 items-center gap-1.5 rounded-full border px-2.5 text-[12px] font-medium whitespace-nowrap ${tones[tone]}`}>
      <span className={`size-[5px] rounded-full ${dots[tone]}`} aria-hidden />
      {children}
    </span>
  );
}
