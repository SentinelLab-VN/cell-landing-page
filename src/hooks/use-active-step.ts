import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Which step the reader is on, from scroll position:
 * `active = 1 + (number of step elements whose top is above 55% of the viewport)`, never below 1.
 * The scroll handler is rAF-throttled. Returns the active index and a ref callback factory for each step.
 */
export function useActiveStep(count: number) {
  const [active, setActive] = useState(1);
  const els = useRef<(HTMLElement | null)[]>([]);
  const raf = useRef(0);

  const stepRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      els.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const measure = () => {
      raf.current = 0;
      const line = window.innerHeight * 0.55;
      let next = 1;
      els.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < line) next = i + 1;
      });
      setActive((prev) => (prev === Math.min(next, count) ? prev : Math.min(next, count)));
    };
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [count]);

  return { active, stepRef };
}
