import { Check } from "lucide-react";
import { CONTACT_URL } from "@/links";
import { capabilities, channelIntro, channelSteps, hero, useCases, zoneName } from "@/content/landing-copy";
import { ChannelDiagram } from "./channel-diagram";
import { FeatureGrid } from "./feature-grid";
import { Button } from "./primitives";
import { ProductIntro } from "./product-intro";
import { ScrollSteps } from "./scroll-steps";

const capabilityCells = capabilities.map((cap) => ({ ...cap, meta: cap.zones.map((z) => zoneName[z]).join(" → ") }));

/** Everything about Cell Channel: intro with use cases, the four steps, what the operator runs. */
export function ChannelSection() {
  return (
    <section id="channel" className="scroll-mt-[72px] border-t border-border">
      <ProductIntro
        name={channelIntro.name}
        title={channelIntro.title}
        lede={channelIntro.lede}
        actions={
          <>
            <ul className="m-0 mb-7 grid w-full list-none gap-2 p-0">
              {channelIntro.checks.map((check) => (
                <li key={check} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="size-4 shrink-0 text-primary-ink" aria-hidden />
                  {check}
                </li>
              ))}
            </ul>
            <Button href={CONTACT_URL} size="lg">
              {hero.talk}
            </Button>
          </>
        }
        aside={
          <div className="rounded-2xl border border-border bg-card p-[clamp(18px,2.2vw,26px)] shadow-lg">
            <h3 className="text-sm font-semibold text-muted-foreground">Use cases</h3>
            <ul className="m-0 mt-3 list-none p-0">
              {useCases.map(({ title, body }) => (
                <li key={title} className="border-t border-border py-4 first:border-t-0 first:pt-1 last:pb-0">
                  <h4 className="text-base font-semibold text-foreground">{title}</h4>
                  <p className="mt-0.5 text-sm leading-[1.55] text-pretty text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        }
      />
      <ScrollSteps {...channelSteps} diagram={(active) => <ChannelDiagram active={active} />} />
      <FeatureGrid title="Operator features" features={capabilityCells} />
    </section>
  );
}
