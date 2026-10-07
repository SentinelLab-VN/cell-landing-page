/**
 * Small presentational pieces shared by every landing section.
 * They mirror the app's Button, Pill and eyebrow styles so the page reads as the same product.
 */
import type { ReactNode } from "react";

export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

/** Centred content column, same gutter rhythm as the app (16px on phones, 32px on desktop). */
export const container = "mx-auto w-full max-w-[1200px] px-[clamp(16px,4vw,32px)]";
/** Vertical rhythm of a full section. */
export const sectionPad = "py-[clamp(56px,7vw,96px)]";
/** Section eyebrow + heading sizes. */
export const h2 = "font-semibold tracking-[-0.025em] text-foreground text-[clamp(28px,3.2vw,44px)] leading-[1.12]";

const buttonBase = "inline-flex items-center justify-center rounded-[10px] font-semibold whitespace-nowrap transition-colors duration-150";
const buttonVariant = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline: "border border-border-strong text-foreground hover:bg-secondary",
};
const buttonSize = { md: "h-10 px-4 text-sm", lg: "h-12 px-5 text-base" };

interface ButtonProps {
  href: string;
  variant?: keyof typeof buttonVariant;
  size?: keyof typeof buttonSize;
  className?: string;
  children: ReactNode;
}

/** Every call to action on the page is a link styled as the app's button. */
export function Button({ href, variant = "primary", size = "md", className, children }: ButtonProps) {
  return (
    <a href={href} className={cn(buttonBase, buttonVariant[variant], buttonSize[size], className)}>
      {children}
    </a>
  );
}

const pillTone = {
  warn: "border-warning-subtle-border bg-warning-subtle text-warning [&>i]:bg-warning",
  accent: "border-primary-subtle-border bg-primary-subtle text-primary-ink [&>i]:bg-primary",
};

/** Status pill with a dot, as on the app's top bar ("Testnet"). */
export function Pill({ tone, children }: { tone: keyof typeof pillTone; children: ReactNode }) {
  return (
    <span className={cn("inline-flex h-6 items-center gap-1.5 rounded-full border px-2.5 text-xs font-medium whitespace-nowrap", pillTone[tone])}>
      <i aria-hidden className="size-[5px] rounded-full" />
      {children}
    </span>
  );
}

/** Mono, uppercase, letter-spaced label above a section or inside a card. */
export function Eyebrow({ tone = "lime", className, children }: { tone?: "lime" | "dim"; className?: string; children: ReactNode }) {
  return (
    <p className={cn("num text-xs tracking-[0.2em] uppercase", tone === "lime" ? "text-primary-ink" : "text-dim", className)}>
      {children}
    </p>
  );
}

/** Numbered circle used for steps, matching the app's stepper. Active = lime fill, inactive = tinted fill. */
export function StepIndex({ n, active, size = "md" }: { n: number; active: boolean; size?: "sm" | "md" }) {
  return (
    <span
      className={cn(
        "num flex shrink-0 items-center justify-center rounded-full font-semibold transition-colors duration-300",
        size === "md" ? "size-7 text-sm" : "size-4 text-[10px]",
        active ? "bg-primary text-primary-foreground" : size === "md" ? "bg-primary-subtle text-primary-ink" : "bg-secondary text-dim",
      )}
    >
      {n}
    </span>
  );
}

const tagTone = { accent: "text-primary-ink", success: "text-success", info: "text-info" };
export type LedgerTone = keyof typeof tagTone;

/** One mono row of sample ledger data with a coloured status tag, as the operator would see it. */
export function LedgerLine({ line, tag, tone, className }: { line: string; tag: string; tone: LedgerTone; className?: string }) {
  return (
    <div className={cn("num flex items-center justify-between gap-2.5 overflow-hidden rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs whitespace-nowrap text-foreground", className)}>
      <span className="overflow-hidden text-ellipsis">{line}</span>
      <span className={cn("shrink-0", tagTone[tone])}>{tag}</span>
    </div>
  );
}
