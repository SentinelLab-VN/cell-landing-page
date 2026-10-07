import { X_URL } from "@/links";
import { XIcon } from "./icons";

/** Brand on the left, the X profile on the right. No other links, by team decision. */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-[clamp(16px,4vw,32px)] py-8 text-sm text-muted-foreground">
        <span className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="size-6 object-contain" />
          <span className="font-semibold text-foreground">Cell</span>
        </span>
        <a href={X_URL} className="flex items-center gap-1.5 transition-colors duration-150 hover:text-foreground">
          <XIcon className="size-3.5" /> @cellprotocol_
        </a>
      </div>
    </footer>
  );
}
