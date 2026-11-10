import { useState, type ReactNode } from "react";
import type { Step } from "@/content/landing-copy";
import { useActiveStep } from "@/hooks/use-active-step";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn, container, h2, LedgerLine, StepIndex } from "./primitives";

interface ScrollStepsProps {
  title: string;
  steps: Step[];
  /** The diagram, drawn for the step the reader is on (1-based). */
  diagram: (active: number) => ReactNode;
}

/**
 * A product's steps next to a diagram that follows them.
 * Wide screens: the reader scrolls the steps and the diagram stays pinned beside them.
 * Narrow screens: a pinned diagram would cover the step being read, so the steps become tabs
 * above the diagram, with the chosen step's text below it.
 */
export function ScrollSteps(props: ScrollStepsProps) {
  const wide = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <div className={`${container} pt-[clamp(36px,4vw,56px)] pb-[clamp(16px,3vw,32px)]`}>
        <h3 className={`${h2} max-w-[760px] text-pretty`}>{props.title}</h3>
      </div>
      {wide ? <PinnedSteps {...props} /> : <TabbedSteps {...props} />}
    </div>
  );
}

function PinnedSteps({ steps, diagram }: ScrollStepsProps) {
  const { active, stepRef } = useActiveStep(steps.length);
  return (
    <div className={`${container} grid grid-cols-2 items-start gap-[clamp(24px,4vw,64px)] pb-[clamp(32px,4vw,56px)]`}>
      <ol className="m-0 list-none p-0">
        {steps.map((step, i) => (
          <li key={step.title} ref={stepRef(i)} className="flex min-h-[32vh] w-full gap-4 border-t border-border py-[clamp(18px,2.4vw,28px)]">
            <span className="mt-1">
              <StepIndex n={i + 1} active={active === i + 1} />
            </span>
            <StepText step={step} on={active === i + 1} />
          </li>
        ))}
      </ol>
      <div className="sticky top-[88px]">{diagram(active)}</div>
    </div>
  );
}

function TabbedSteps({ steps, diagram }: ScrollStepsProps) {
  const [active, setActive] = useState(1);
  const step = steps[active - 1];
  return (
    <div className={`${container} pb-[clamp(32px,4vw,56px)]`}>
      <div role="tablist" aria-label="Steps" className="grid grid-cols-4 gap-1.5">
        {steps.map((s, i) => {
          const on = active === i + 1;
          return (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i + 1)}
              className={cn(
                "flex min-w-0 flex-col items-center gap-1.5 rounded-xl border px-1 py-2.5 transition-colors duration-200",
                on ? "border-primary bg-primary-subtle" : "border-border bg-card",
              )}
            >
              <StepIndex n={i + 1} active={on} />
              <span className={cn("w-full text-center text-xs leading-[1.2] font-medium text-balance", on ? "text-foreground" : "text-muted-foreground")}>{s.title}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4">{diagram(active)}</div>
      <div role="tabpanel" className="mt-5">
        <StepText step={step} on />
      </div>
    </div>
  );
}

function StepText({ step, on }: { step: Step; on: boolean }) {
  return (
    <div className="min-w-0 flex-1">
      <h4
        className={cn(
          "text-[clamp(20px,1.9vw,26px)] leading-[1.15] font-semibold tracking-[-0.02em] transition-colors duration-300",
          on ? "text-foreground" : "text-muted-foreground",
        )}
      >
        {step.title}
      </h4>
      <p className="mt-2.5 max-w-[460px] text-base leading-[1.6] text-pretty text-muted-foreground">{step.body}</p>
      <LedgerLine line={step.line} tag={step.tag} tone={step.tone} className={cn("mt-5 max-w-[460px] transition-opacity duration-300", on ? "opacity-100" : "opacity-60")} />
    </div>
  );
}
