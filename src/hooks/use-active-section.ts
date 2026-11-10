import { useEffect, useState } from "react";

/**
 * Which of the given section ids is under the middle of the viewport, for the top bar's active link.
 * Null above the first section (the hero).
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const els = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length || !("IntersectionObserver" in window)) return;

    // A thin band across the middle of the screen: the section crossing it is the one being read.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else if (entry.target.id === els[0].id && entry.boundingClientRect.top > 0) setActive(null);
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);

  return active;
}
