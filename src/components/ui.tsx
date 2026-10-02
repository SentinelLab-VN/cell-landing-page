import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "ghost";
}

export function LinkButton({ variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-[#D6FF62]",
    outline: "border border-border-strong text-foreground hover:bg-secondary",
    ghost: "text-muted-foreground hover:text-foreground",
  }[variant];
  return (
    <a
      className={`inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-[10px] px-4 text-sm font-semibold whitespace-nowrap transition-colors ${variants} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function Section({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[180px_1fr] md:gap-12">
        <p className="eyebrow text-primary">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

/** A definition row: term in mono, one sentence after it. */
export function Row({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-border py-4 first:border-t-0 sm:grid-cols-[220px_1fr] sm:gap-6">
      <dt className="num text-[13px] text-foreground">{term}</dt>
      <dd className="text-[14px] leading-relaxed text-muted-foreground">{children}</dd>
    </div>
  );
}
