import { howItWorks } from "@/content/landing-copy";
import { useActiveStep } from "@/hooks/use-active-step";
import { useMediaQuery } from "@/hooks/use-media-query";
import { HowItWorksDiagram } from "./how-it-works-diagram";
import { cn, container, Eyebrow, h2, LedgerLine, StepIndex } from "./primitives";

/**
 * Four steps the reader scrolls through; the diagram stays pinned and advances with them.
 * On wide screens the diagram is the right column. Below 1000px it comes first and sticks above the steps.
 */
export function HowItWorks() {
  const wide = useMediaQuery("(min-width: 1000px)");
  const { active, stepRef } = useActiveStep(howItWorks.steps.length);

  return (
    <section id="how" className="scroll-mt-[72px] border-t border-border">
      <div className={`${container} pt-[clamp(56px,7vw,96px)] pb-[clamp(24px,4vw,48px)]`}>
        <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
        <h2 className={`${h2} mt-4 max-w-[720px] text-pretty`}>{howItWorks.title}</h2>
      </div>

      <div className={`${container} grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(24px,4vw,64px)] pb-[clamp(40px,6vw,80px)]`}>
        <div className={cn("sticky top-[88px] z-[5]", wide ? "order-2" : "order-0")}>
          <HowItWorksDiagram active={active} />
        </div>

        <ol className="order-1 m-0 list-none p-0">
          {howItWorks.steps.map((step, i) => {
            const n = i + 1;
            const on = active === n;
            return (
              <li
                key={step.title}
                ref={stepRef(i)}
                className={cn("flex w-full gap-4 border-t border-border py-[clamp(20px,3vw,32px)]", wide ? "min-h-[44vh]" : "min-h-[34vh]")}
              >
                <span className="mt-1">
                  <StepIndex n={n} active={on} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3
                    className={cn(
                      "text-[clamp(22px,2.2vw,30px)] leading-[1.15] font-semibold tracking-[-0.02em] transition-colors duration-300",
                      on ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[460px] text-base leading-[1.6] text-pretty text-muted-foreground">{step.body}</p>
                  <LedgerLine line={step.line} tag={step.tag} tone={step.tone} className={cn("mt-5 max-w-[460px] transition-opacity duration-300", on ? "opacity-100" : "opacity-60")} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
