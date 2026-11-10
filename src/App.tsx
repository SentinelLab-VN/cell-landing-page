import { ChannelSection } from "@/components/channel-section";
import { Compare } from "@/components/compare";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { LandingTopBar } from "@/components/landing-top-bar";
import { SealSection } from "@/components/seal-section";
import { SiteFooter } from "@/components/site-footer";

/** The public page for Cell: one route. Both products up top, compared, then one part per product. */
export function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip text-base leading-normal">
      <LandingTopBar />
      <main className="flex-1">
        <Hero />
        <Compare />
        <ChannelSection />
        <SealSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
