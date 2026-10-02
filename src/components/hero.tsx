import { APP_URL, CONTACT_URL } from "@/links";
import { hero } from "@/content/landing-copy";
import { HeroChannelStream } from "./hero-channel-stream";
import { Button, Pill } from "./primitives";

/** Headline, lede and the two calls to action, next to the live channel visual. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Watermark mark anchored to the content column, as on the app's connect screen. */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-[260px] left-[calc(50%-780px)] size-[680px] max-w-none opacity-5 select-none"
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-[clamp(40px,5vw,72px)] px-[clamp(16px,4vw,32px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,6vw,80px)]">
        <div className="max-w-[620px]">
          <div className="animate-fade-up">
            <Pill tone="warn">{hero.pill}</Pill>
          </div>
          <h1
            className="animate-fade-up mt-6 text-[clamp(38px,4.6vw,64px)] leading-[1.08] font-semibold tracking-[-0.03em] text-pretty text-foreground"
            style={{ animationDelay: "60ms" }}
          >
            {hero.title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-[560px] text-base leading-[1.65] text-pretty text-muted-foreground" style={{ animationDelay: "120ms" }}>
            {hero.lede}
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "180ms" }}>
            <Button href={CONTACT_URL} size="lg">
              {hero.talk}
            </Button>
            <Button href={APP_URL} variant="outline" size="lg">
              {hero.open}
            </Button>
          </div>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "200ms", animationDuration: "500ms" }}>
          <HeroChannelStream />
        </div>
      </div>
    </section>
  );
}
