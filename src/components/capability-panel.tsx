import { capabilityZones, type Capability } from "@/content/landing-copy";
import { cn } from "./primitives";

/** The selected capability, large, with the three zones it touches lit up. Desktop only. */
export function CapabilityPanel({ index, capability }: { index: number; capability: Capability }) {
  const Icon = capability.icon;
  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border border-border bg-card p-[clamp(24px,3vw,36px)] shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary-subtle-border bg-primary-subtle">
            <Icon className="size-[22px] text-primary-ink" aria-hidden />
          </span>
          <span className="num text-xs font-semibold tracking-[0.2em] text-primary-ink">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-6 text-[clamp(26px,2.6vw,34px)] leading-[1.15] font-semibold tracking-[-0.025em] text-foreground">{capability.title}</h3>
        <p className="mt-3 text-lg leading-[1.6] text-pretty text-muted-foreground">{capability.body}</p>

        <div className="mt-7 grid gap-2">
          {capabilityZones.map(({ zone, label, value }) => {
            const lit = capability.zones.includes(zone);
            return (
              <div
                key={zone}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border bg-background px-4 py-3 transition-colors duration-200",
                  lit ? "border-primary" : "border-border",
                )}
              >
                <span className={cn("num text-xs tracking-[0.2em] uppercase transition-colors duration-200", lit ? "text-primary-ink" : "text-dim")}>{label}</span>
                <span className={cn("num text-xs transition-colors duration-200", lit ? "text-foreground" : "text-dim")}>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
