import { APP_URL, CONTACT_URL } from "@/links";
import { finalCta, hero } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { Button, container, sectionPad } from "./primitives";

/** Closing card with the same two calls to action as the hero. */
export function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-t border-border">
      <div className={`${container} ${sectionPad}`}>
        <div
          ref={ref}
          className="reveal relative flex flex-wrap items-center justify-between gap-7 overflow-hidden rounded-2xl border border-border bg-card p-[clamp(28px,4vw,56px)]"
        >
          <img
            src="/logo.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -top-[140px] -right-[120px] size-[460px] max-w-none opacity-5 select-none"
          />
          <div className="relative">
            <h2 className="text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.03em] text-foreground">{finalCta.title}</h2>
            <p className="mt-2.5 text-base text-muted-foreground">{finalCta.body}</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Button href={CONTACT_URL} size="lg">
              {hero.talk}
            </Button>
            <Button href={APP_URL} variant="outline" size="lg">
              {hero.open}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
