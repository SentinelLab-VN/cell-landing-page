import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { container } from "./primitives";

interface ProductIntroProps {
  name: string;
  title: string;
  lede: string;
  actions: ReactNode;
  /** Right column: what the product promises, or the problem it answers. */
  aside: ReactNode;
}

/** The band that opens a product's part of the page: name, headline and calls to action, next to `aside`. */
export function ProductIntro({ name, title, lede, actions, aside }: ProductIntroProps) {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();
  return (
    <div className="border-b border-border bg-card/40">
      <div className={`${container} grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(28px,4vw,56px)] py-[clamp(36px,4.4vw,60px)]`}>
        <div ref={left} className="reveal">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" aria-hidden className="size-7 object-contain" />
            <span className="text-base font-semibold text-foreground">{name}</span>
          </div>
          <h2 className="mt-5 text-[clamp(30px,3.4vw,46px)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance text-foreground">{title}</h2>
          <p className="mt-5 max-w-[560px] text-base leading-[1.65] text-pretty text-muted-foreground">{lede}</p>
          <div className="mt-7 flex flex-wrap gap-3">{actions}</div>
        </div>
        <div ref={right} className="reveal">
          {aside}
        </div>
      </div>
    </div>
  );
}
