import { useCases, type UseCase } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { container, Eyebrow, LedgerLine, sectionPad } from "./primitives";

/** Three places Cell fits, each with one mono ledger line showing what the operator sees. */
export function UseCases() {
  return (
    <section id="uses" className="scroll-mt-[72px] border-t border-border">
      <div className={`${container} ${sectionPad}`}>
        <Eyebrow>Where it fits</Eyebrow>
        <div className="mt-[clamp(28px,4vw,40px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(24px,3vw,48px)]">
          {useCases.map((useCase) => (
            <UseCaseColumn key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseColumn({ icon: Icon, title, body, line, tag, tone }: UseCase) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal flex flex-col">
      <Icon className="size-5 text-muted-foreground" aria-hidden />
      <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-[1.6] text-pretty text-muted-foreground">{body}</p>
      <div className="mt-auto pt-5">
        <LedgerLine line={line} tag={tag} tone={tone} />
      </div>
    </div>
  );
}
