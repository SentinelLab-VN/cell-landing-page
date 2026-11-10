import { ArrowRight } from "lucide-react";
import { CONTACT_URL } from "@/links";
import { hero, products, type ProductCard } from "@/content/landing-copy";
import { HeroChannelStream } from "./hero-channel-stream";
import { Button, Pill } from "./primitives";
import { SealLedger } from "./seal-ledger";

const visual: Record<ProductCard["id"], () => React.JSX.Element> = { channel: HeroChannelStream, seal: SealLedger };

/** Headline for Cell as a whole, then one card per product, each with its own live visual. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Watermark mark anchored to the content column, as on the app's connect screen. */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-[180px] right-[calc(50%-820px)] size-[680px] max-w-none opacity-5 select-none"
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-[clamp(16px,4vw,32px)] pt-[clamp(40px,5vw,72px)] pb-[clamp(40px,5vw,64px)]">
        <div className="max-w-[780px]">
          <div className="animate-fade-up">
            <Pill tone="warn">{hero.pill}</Pill>
          </div>
          <h1
            className="animate-fade-up mt-6 text-[clamp(36px,4.4vw,58px)] leading-[1.06] font-semibold tracking-[-0.03em] text-balance text-foreground"
            style={{ animationDelay: "60ms" }}
          >
            {hero.title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-[640px] text-base leading-[1.65] text-pretty text-muted-foreground" style={{ animationDelay: "120ms" }}>
            {hero.lede}
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "180ms" }}>
            <Button href={CONTACT_URL} size="lg">
              {hero.talk}
            </Button>
            <Button href="#compare" variant="outline" size="lg">
              Compare
            </Button>
          </div>
        </div>

        <div className="mt-[clamp(32px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-[clamp(16px,2vw,24px)]">
          {products.map((product, i) => (
            <HeroProduct key={product.id} product={product} delay={240 + i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroProduct({ product, delay }: { product: ProductCard; delay: number }) {
  const Visual = visual[product.id];
  return (
    <article
      className="animate-fade-up group flex flex-col rounded-2xl border border-border bg-card p-[clamp(14px,2.2vw,28px)] shadow-lg transition-colors duration-200 hover:border-primary-subtle-border"
      style={{ animationDelay: `${delay}ms`, animationDuration: "500ms" }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-primary-ink">{product.name}</span>
        <a href={`#${product.id}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary-ink">
          {product.link}
          <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
      <h2 className="mt-3.5 text-[clamp(22px,2.1vw,28px)] leading-[1.15] font-semibold tracking-[-0.025em] text-balance text-foreground">{product.tagline}</h2>
      <p className="mt-2 text-sm leading-[1.55] text-pretty text-muted-foreground">{product.body}</p>
      <div className="mt-5 flex-1">
        <Visual />
      </div>
    </article>
  );
}
