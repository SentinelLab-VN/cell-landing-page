import type { ReactNode } from "react";
import type { Feature } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { container, h2 } from "./primitives";

interface FeatureGridProps {
  title: string;
  lede?: string;
  features: (Feature & { meta?: string })[];
  /** Anything that belongs under the grid in the same block, such as Seal's testnet numbers. */
  children?: ReactNode;
}

/** A product's capabilities as one compact grid of cells: title, optional meta line, one line of body. */
export function FeatureGrid({ title, lede, features, children }: FeatureGridProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="border-t border-border">
      <div className={`${container} py-[clamp(36px,4vw,56px)]`}>
        <h3 className={h2}>{title}</h3>
        {lede && <p className="mt-3 max-w-[600px] text-base leading-[1.6] text-pretty text-muted-foreground">{lede}</p>}
        <div
          ref={ref}
          className="reveal mt-[clamp(20px,2.4vw,32px)] grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-px overflow-hidden rounded-2xl border border-border bg-border"
        >
          {features.map(({ title, body, meta }) => (
            <div key={title} className="bg-card p-[clamp(16px,1.8vw,22px)]">
              <h4 className="text-lg font-semibold tracking-[-0.01em] text-foreground">{title}</h4>
              {meta && <p className="num mt-1 text-xs text-dim">{meta}</p>}
              <p className="mt-1 text-sm leading-[1.55] text-pretty text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
