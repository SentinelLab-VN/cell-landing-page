import { APP_URL, CONTACT_URL } from "@/links";
import { hero, nav } from "@/content/landing-copy";
import { Button } from "./primitives";

/**
 * The app's 72px top bar, sticky, with the three section links in the middle.
 * Its column is 40px wider than the content on each side, so the brand sits just left of the copy below it.
 */
export function LandingTopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-sidebar-border bg-background/85 backdrop-blur-[12px]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-[clamp(16px,4vw,32px)]">
        <a href="#" aria-label="Cell" className="inline-flex shrink-0 items-center gap-3">
          <img src="/logo.png" alt="" width={48} height={48} className="size-9 shrink-0 object-contain md:size-12" />
          <span className="text-[24px] leading-none font-semibold tracking-[-0.01em] text-foreground md:text-[32px]">Cell</span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground max-md:hidden">
          {nav.map(({ href, label }) => (
            <a key={href} href={href} className="transition-colors duration-150 hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href={CONTACT_URL} variant="outline" className="max-md:hidden">
            {hero.talk}
          </Button>
          <Button href={APP_URL}>{hero.open}</Button>
        </div>
      </div>
    </header>
  );
}
