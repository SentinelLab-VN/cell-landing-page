import { useState } from "react";
import { capabilities, zoneName } from "@/content/landing-copy";
import { useMediaQuery } from "@/hooks/use-media-query";
import { CapabilityPanel } from "./capability-panel";
import { cn, container, Eyebrow, h2, sectionPad } from "./primitives";

/**
 * Six capabilities as a list the reader hovers or taps. On desktop the selected one is
 * shown large in a pinned panel; on narrower screens its body opens under the row instead.
 */
export function Capabilities() {
  const [selected, setSelected] = useState(0);
  const wide = useMediaQuery("(min-width: 1000px)");

  return (
    <section id="capabilities" className="scroll-mt-[72px] border-t border-border">
      <div className={`${container} ${sectionPad}`}>
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className={`${h2} mt-4`}>What an operator gets</h2>

        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(24px,5vw,80px)]">
          <ol className="m-0 list-none border-b border-border p-0">
            {capabilities.map((cap, i) => {
              const on = i === selected;
              const pick = () => setSelected(i);
              return (
                <li
                  key={cap.title}
                  onMouseEnter={pick}
                  onClick={pick}
                  className="relative grid cursor-pointer grid-cols-[36px_1fr] gap-4 border-t border-border py-[22px]"
                >
                  <span
                    aria-hidden
                    className={cn("absolute top-[22px] bottom-[22px] -left-5 w-0.5 rounded-sm transition-colors duration-200", on ? "bg-primary" : "bg-transparent")}
                  />
                  <span className={cn("num mt-1.5 text-xs font-semibold tracking-[0.1em] transition-colors duration-200", on ? "text-primary-ink" : "text-dim")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h3 className={cn("text-[clamp(20px,2vw,26px)] font-semibold tracking-[-0.02em] transition-colors duration-200", on ? "text-foreground" : "text-muted-foreground")}>
                        {cap.title}
                      </h3>
                      <span className={cn("num text-[11px] tracking-[0.16em] whitespace-nowrap uppercase transition-colors duration-200", on ? "text-primary-ink" : "text-dim")}>
                        {cap.zones.map((z) => zoneName[z]).join(" → ")}
                      </span>
                    </div>
                    {!wide && on && <p className="mt-2.5 max-w-[520px] text-sm leading-[1.6] text-pretty text-muted-foreground">{cap.body}</p>}
                  </div>
                </li>
              );
            })}
          </ol>

          {wide && <CapabilityPanel index={selected} capability={capabilities[selected]} />}
        </div>
      </div>
    </section>
  );
}
