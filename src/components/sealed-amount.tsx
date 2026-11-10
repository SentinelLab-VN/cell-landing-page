import { Lock } from "lucide-react";
import { cn } from "./primitives";

/**
 * An amount as the public ledger stores it under Seal: a commitment, drawn as a locked chip.
 * With `open` (someone holding the viewing key), the number itself is shown instead.
 * Both states share one grid cell so the row never changes width.
 */
export function SealedAmount({ value, open, unit = "MTF" }: { value: string; open: boolean; unit?: string }) {
  return (
    <span className="num inline-grid shrink-0 text-xs whitespace-nowrap">
      <span
        aria-hidden={open}
        className={cn(
          "col-start-1 row-start-1 inline-flex items-center justify-end gap-1 text-dim transition-opacity duration-300",
          open ? "opacity-0" : "opacity-100",
        )}
      >
        <Lock className="size-3 text-primary-ink" aria-hidden />
        <span className="tracking-[0.12em]">•••••</span>
        <span>{unit}</span>
        <span className="sr-only">sealed amount</span>
      </span>
      <span
        aria-hidden={!open}
        className={cn("col-start-1 row-start-1 text-right text-foreground transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
      >
        {value}
      </span>
    </span>
  );
}
