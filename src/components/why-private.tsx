import { whyPrivate } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { container, Eyebrow, sectionPad } from "./primitives";

/** The question the product answers, with a public ledger next to what Cell writes to it. */
export function WhyPrivate() {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();
  const { publicCard, cellCard } = whyPrivate;
  return (
    <section className="border-t border-border">
      <div className={`${container} ${sectionPad} grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(32px,5vw,72px)]`}>
        <div ref={left} className="reveal">
          <Eyebrow>{whyPrivate.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[clamp(28px,3.4vw,46px)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-foreground">
            {whyPrivate.title}
          </h2>
          <p className="mt-5 max-w-[520px] text-base leading-[1.65] text-pretty text-muted-foreground">{whyPrivate.body}</p>
        </div>

        <div ref={right} className="reveal grid gap-4">
          <div className="rounded-2xl border border-border bg-card px-6 py-5">
            <Eyebrow tone="dim">{publicCard.eyebrow}</Eyebrow>
            <dl className="num mt-3 text-sm text-foreground">
              {publicCard.rows.map(([pair, amount]) => (
                <LedgerRow key={pair} label={pair} labelClass="text-muted-foreground" amount={amount} />
              ))}
            </dl>
            <p className="mt-3.5 text-sm leading-[1.5] text-muted-foreground">{publicCard.footer}</p>
          </div>

          <div className="rounded-2xl border border-primary-subtle-border bg-card px-6 py-5 shadow-lg">
            <Eyebrow>{cellCard.eyebrow}</Eyebrow>
            <dl className="num mt-3 text-sm text-foreground">
              <LedgerRow label={cellCard.deposit[0]} labelClass="text-success" amount={cellCard.deposit[1]} />
              <LedgerRow label={cellCard.release[0]} labelClass="text-info" amount={cellCard.release[1]} last />
            </dl>
            <p className="mt-3.5 text-sm leading-[1.5] text-muted-foreground">{cellCard.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LedgerRow({ label, labelClass, amount, last = false }: { label: string; labelClass: string; amount: string; last?: boolean }) {
  return (
    <div className={`flex justify-between gap-3 py-[9px] ${last ? "" : "border-b border-border/70"}`}>
      <dt className={labelClass}>{label}</dt>
      <dd>{amount}</dd>
    </div>
  );
}
