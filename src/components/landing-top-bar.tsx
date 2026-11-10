import { CONTACT_URL } from "@/links";
import { hero, nav } from "@/content/landing-copy";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button, cn } from "./primitives";

const sectionIds = nav.map(({ href }) => href.slice(1));

/**
 * The app's 72px top bar, sticky. The section links stay visible on phones (the wordmark gives way
 * to them) and the one being read is lit, so the reader always knows which product they are in.
 */
export function LandingTopBar() {
  const active = useActiveSection(sectionIds);
  return (
    <header className="sticky top-0 z-20 border-b border-sidebar-border bg-background/85 backdrop-blur-[12px]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-3 px-[clamp(16px,4vw,32px)]">
        <a href="#" aria-label="Cell" className="inline-flex shrink-0 items-center gap-3">
          <img src="/logo.png" alt="" width={48} height={48} className="size-9 shrink-0 object-contain md:size-12" />
          <span className="text-[32px] leading-none font-semibold tracking-[-0.01em] text-foreground max-md:hidden">Cell</span>
        </a>
        <nav aria-label="Sections" className="flex min-w-0 items-center gap-1 text-sm md:gap-2">
          {nav.map(({ href, label }) => {
            const on = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                aria-current={on ? "location" : undefined}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 whitespace-nowrap transition-colors duration-150 md:px-3",
                  on ? "bg-primary-subtle text-primary-ink" : "text-muted-foreground hover:text-foreground",
                  href === "#compare" && "max-[400px]:hidden",
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <Button href={CONTACT_URL} className="shrink-0 max-[400px]:px-3">
          {hero.talk}
        </Button>
      </div>
    </header>
  );
}
