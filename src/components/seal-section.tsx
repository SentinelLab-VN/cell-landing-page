import { CONTACT_URL } from "@/links";
import { hero, sealFacts, sealIntro, sealProperties, sealSteps } from "@/content/landing-copy";
import { useReveal } from "@/hooks/use-reveal";
import { FeatureGrid } from "./feature-grid";
import { Button } from "./primitives";
import { ProductIntro } from "./product-intro";
import { ScrollSteps } from "./scroll-steps";
import { SealDiagram } from "./seal-diagram";

/** Everything about Cell Seal: the problem, the four steps, its three properties with the testnet numbers. */
export function SealSection() {
  const { problem } = sealIntro;
  return (
    <section id="seal" className="scroll-mt-[72px] border-t border-border">
      <ProductIntro
        name={sealIntro.name}
        title={sealIntro.title}
        lede={sealIntro.lede}
        actions={
          <Button href={CONTACT_URL} size="lg">
            {hero.talk}
          </Button>
        }
        aside={
          <div className="rounded-2xl border border-border bg-card p-[clamp(20px,2.6vw,32px)] shadow-lg">
            <h3 className="text-[clamp(22px,2.2vw,28px)] leading-[1.2] font-semibold tracking-[-0.02em] text-foreground">{problem.title}</h3>
            <p className="mt-3 text-sm leading-[1.6] text-pretty text-muted-foreground">{problem.body}</p>
          </div>
        }
      />
      <ScrollSteps {...sealSteps} diagram={(active) => <SealDiagram active={active} />} />
      <FeatureGrid
        title="What is hidden and what is public"
        features={sealProperties}
      >
        <SealFacts />
      </FeatureGrid>
    </section>
  );
}

function SealFacts() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mt-[clamp(28px,3vw,40px)]">
      <h4 className="text-base font-semibold text-foreground">{sealFacts.title}</h4>
      <dl className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-px overflow-hidden rounded-2xl border border-border bg-border">
        {sealFacts.items.map((item) => (
          <div key={item.value} className="bg-card px-5 py-4">
            <dt className="num text-[clamp(20px,2vw,24px)] font-semibold tracking-[-0.02em] text-foreground">{item.value}</dt>
            <dd className="mt-1 text-sm leading-[1.5] text-muted-foreground">{item.label}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 max-w-[720px] text-sm leading-[1.6] text-pretty text-dim">{sealFacts.note}</p>
    </div>
  );
}
