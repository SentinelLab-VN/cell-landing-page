import { proofPoints } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { cn, container, Pill } from "./primitives";

/** Three big statements, one per row: headline left, explanation right. */
export function ProofPoints() {
  return (
    <section className="border-t border-border bg-card/40">
      <div className={`${container} py-[clamp(40px,5vw,64px)]`}>
        {proofPoints.map((point, i) => (
          <ProofRow key={point.title} index={i} {...point} />
        ))}
      </div>
    </section>
  );
}

function ProofRow({ index, title, body, checks }: { index: number; title: string; body: string; checks?: string[] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "reveal grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(12px,3vw,48px)] py-[clamp(28px,4vw,48px)]",
        index > 0 ? "border-t border-border" : "border-t border-transparent",
      )}
    >
      <div className="flex items-start gap-5">
        <span className="num mt-2.5 text-xs font-semibold tracking-[0.2em] text-primary-ink">{String(index + 1).padStart(2, "0")}</span>
        <h2 className="text-[clamp(28px,3.4vw,46px)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-foreground">{title}</h2>
      </div>
      <div className="w-full max-w-[520px] justify-self-end">
        <p className="text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-pretty text-muted-foreground">{body}</p>
        {checks && (
          <div className="mt-5 flex flex-wrap gap-2">
            {checks.map((check) => (
              <Pill key={check} tone="accent">
                {check}
              </Pill>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
