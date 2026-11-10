import { CONTACT_URL } from "@/links";
import { finalCta, hero } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { Button, container, sectionPad } from "./primitives";

/** One closing card. Both products are still in development, so the only next step is a conversation. */
export function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-t border-border">
      <div className={`${container} ${sectionPad}`}>
        <div
          ref={ref}
          className="reveal relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-card p-[clamp(24px,3.4vw,44px)]"
        >
          <div className="relative max-w-[620px]">
            <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold tracking-[-0.03em] text-foreground">{finalCta.title}</h2>
            <p className="mt-2.5 text-base leading-[1.6] text-pretty text-muted-foreground">{finalCta.body}</p>
          </div>
          <Button href={CONTACT_URL} size="lg" className="relative">
            {hero.talk}
          </Button>
        </div>
      </div>
    </section>
  );
}
