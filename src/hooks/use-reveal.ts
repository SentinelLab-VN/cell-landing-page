import { useEffect, useRef } from "react";

/**
 * Scroll reveal. Attach the returned ref to an element with the `reveal` class;
 * once it enters the viewport the hook sets `data-visible` and the CSS transition plays.
 * Plays once, then the observer lets go.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.visible = "";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "";
          io.unobserve(entry.target);
        }
      },
      // Fires when the top 40% of the element's travel into the viewport is done, like the design's entry range.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
