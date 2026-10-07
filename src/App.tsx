import { Capabilities } from "@/components/capabilities";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { LandingTopBar } from "@/components/landing-top-bar";
import { ProofPoints } from "@/components/proof-points";
import { SiteFooter } from "@/components/site-footer";
import { UseCases } from "@/components/use-cases";
import { WhyPrivate } from "@/components/why-private";

/** The public page for Cell: one route, sections top to bottom. */
export function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip text-base leading-normal">
      <LandingTopBar />
      <main className="flex-1">
        <Hero />
        <WhyPrivate />
        <HowItWorks />
        <Capabilities />
        <ProofPoints />
        <UseCases />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
