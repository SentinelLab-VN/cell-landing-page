import type { AnchorHTMLAttributes, ReactNode } from "react";

type Tone = "ok" | "info" | "warn" | "danger" | "neutral" | "accent";

const dots: Record<Tone, string> = {
  ok: "bg-success",
  info: "bg-info",
  warn: "bg-warning",
  danger: "bg-destructive",
  neutral: "bg-dim",
  accent: "bg-primary",
};

export function Pill({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-popover px-2.5 py-1 text-[11px] font-medium tracking-[0.01em] text-foreground">
      <span className={`size-1.5 rounded-full ${dots[tone]}`} aria-hidden />
      {children}
    </span>
  );
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
}

export function LinkButton({ variant = "primary", size = "md", className = "", children, ...props }: LinkButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-colors";
  const sizes = size === "lg" ? "h-12 px-6 text-[15px]" : "h-[46px] px-5 text-sm";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-[#D6FF62]",
    outline: "border border-border-strong bg-transparent text-foreground hover:bg-secondary",
    ghost: "text-muted-foreground hover:text-foreground",
  }[variant];
  return (
    <a className={`${base} ${sizes} ${variants} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Eyebrow({ children, tone = "primary" }: { children: ReactNode; tone?: "primary" | "dim" }) {
  return <p className={`eyebrow ${tone === "primary" ? "text-primary" : "text-dim"}`}>{children}</p>;
}

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-[40px] sm:leading-[1.1]">{title}</h2>
        {lede && <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{lede}</p>}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>{children}</div>;
}
