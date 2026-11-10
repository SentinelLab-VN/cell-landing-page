/** Boxes and arrows shared by the Channel and Seal step diagrams. */
import { cn, StepIndex } from "./primitives";

export function Amount({ text, held }: { text: string; held: boolean }) {
  return <div className={cn("mt-0.5 transition-colors duration-300", held ? "text-foreground" : "text-dim")}>{text}</div>;
}

export function Box({ label, address, amount, onCard = false }: { label: string; address: string; amount: { text: string; held: boolean }; onCard?: boolean }) {
  return (
    <div className={cn("num min-w-0 rounded-[10px] border border-border px-2.5 py-2 text-xs max-sm:px-2", onCard ? "bg-card" : "bg-background")}>
      <div className="text-[11px] text-dim">{label}</div>
      <div className="mt-0.5 text-foreground">{address}</div>
      <Amount {...amount} />
    </div>
  );
}

/** Step number plus its word. `compact` hides the word on phones, where the horizontal rail has no room for it. */
export function ArrowLabel({ n, label, active, compact = false }: { n: number; label: string; active: boolean; compact?: boolean }) {
  return (
    <span className={cn("num flex items-center gap-1.5 text-[11px] tracking-[0.12em] whitespace-nowrap uppercase transition-colors duration-300", active ? "text-primary-ink" : "text-dim")}>
      <StepIndex n={n} active={active} size="sm" />
      <span className={compact ? "max-sm:hidden" : undefined}>{label}</span>
    </span>
  );
}

/** Horizontal arrow: label row above a 2px line with a rotated-square head. */
export function Arrow({ n, label, active }: { n: number; label: string; active: boolean }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1.5">
      <ArrowLabel n={n} label={label} active={active} compact />
      <span className={cn("relative block h-0.5 w-full transition-colors duration-300", active ? "bg-primary" : "bg-border")}>
        <span
          className={cn(
            "absolute -top-[3px] -right-px size-2 rotate-45 border-t-2 border-r-2 transition-colors duration-300",
            active ? "border-primary" : "border-border",
          )}
        />
      </span>
    </div>
  );
}
