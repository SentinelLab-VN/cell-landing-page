import { ADDR } from "@/content/landing-copy";
import { cn, Eyebrow, StepIndex } from "./primitives";

/**
 * One 250.00 USDC moving through the system. Which box holds it depends on the active step:
 * 1 deposit → escrow, 2 credit → member A, 3 pay → member B, 4 withdraw → wallet B.
 */
export function HowItWorksDiagram({ active }: { active: number }) {
  const on = (n: number) => active === n;
  const amount = (held: boolean) => ({ text: held ? "250.00 USDC" : "0.00 USDC", held });
  const escrow = amount(active >= 1 && active < 4);
  const memberA = amount(active === 2);
  const memberB = amount(active === 3);
  const walletA = amount(false);
  const walletB = amount(active >= 4);

  return (
    <div className="rounded-2xl border border-border bg-card p-[clamp(16px,2.4vw,28px)] shadow-lg">
      <Eyebrow tone="dim">Stellar · public ledger</Eyebrow>
      <div className="mt-3.5 grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-1.5">
        <Box label="Wallet" address={ADDR.a} amount={walletA} />
        <Arrow n={1} label="Deposit" active={on(1)} />
        <div
          className={cn(
            "num rounded-[10px] border bg-background px-3 py-2 text-center text-xs transition-colors duration-300",
            on(1) || on(4) ? "border-primary" : "border-border-strong",
          )}
        >
          <div className="text-[11px] tracking-[0.12em] text-primary-ink uppercase">Escrow</div>
          <div className="mt-0.5 text-[11px] text-dim">Soroban</div>
          <Amount {...escrow} />
        </div>
        <Arrow n={4} label="Withdraw" active={on(4)} />
        <Box label="Wallet" address={ADDR.b} amount={walletB} />
      </div>

      <div className="flex h-14 items-center justify-center gap-2.5">
        <span className={cn("relative block h-10 w-0.5 transition-colors duration-300", on(2) ? "bg-primary" : "bg-border")}>
          <span
            className={cn(
              "absolute -bottom-px -left-[3px] size-2 rotate-45 border-r-2 border-b-2 transition-colors duration-300",
              on(2) ? "border-primary" : "border-border",
            )}
          />
        </span>
        <ArrowLabel n={2} label="Credit" active={on(2)} />
      </div>

      <div className="rounded-xl border border-dashed border-border-strong bg-background p-3.5">
        <Eyebrow>Channel · your ledger</Eyebrow>
        <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-1.5">
          <Box label="Member" address={ADDR.a} amount={memberA} onCard />
          <Arrow n={3} label="Pay" active={on(3)} />
          <Box label="Member" address={ADDR.b} amount={memberB} onCard />
        </div>
        <p className="mt-3 text-xs text-dim">Instant, off chain.</p>
      </div>
    </div>
  );
}

function Amount({ text, held }: { text: string; held: boolean }) {
  return <div className={cn("mt-0.5 transition-colors duration-300", held ? "text-foreground" : "text-dim")}>{text}</div>;
}

function Box({ label, address, amount, onCard = false }: { label: string; address: string; amount: { text: string; held: boolean }; onCard?: boolean }) {
  return (
    <div className={cn("num min-w-0 rounded-[10px] border border-border px-2.5 py-2 text-xs max-sm:px-2", onCard ? "bg-card" : "bg-background")}>
      <div className="text-[11px] text-dim">{label}</div>
      <div className="mt-0.5 text-foreground">{address}</div>
      <Amount {...amount} />
    </div>
  );
}

/** Step number plus its word. `compact` hides the word on phones, where the horizontal rail has no room for it. */
function ArrowLabel({ n, label, active, compact = false }: { n: number; label: string; active: boolean; compact?: boolean }) {
  return (
    <span className={cn("num flex items-center gap-1.5 text-[11px] tracking-[0.12em] whitespace-nowrap uppercase transition-colors duration-300", active ? "text-primary-ink" : "text-dim")}>
      <StepIndex n={n} active={active} size="sm" />
      <span className={compact ? "max-sm:hidden" : undefined}>{label}</span>
    </span>
  );
}

/** Horizontal arrow: label row above a 2px line with a rotated-square head. */
function Arrow({ n, label, active }: { n: number; label: string; active: boolean }) {
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
