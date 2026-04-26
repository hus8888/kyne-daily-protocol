import { useEffect, useRef, useState } from "react";

type Props = {
  /** Target numeric value to count up to. */
  to: number;
  /** Animation duration in ms. */
  duration?: number;
  /** Decimal places to render (e.g. 1 for 4.9). */
  decimals?: number;
  /** Optional prefix (e.g. "≈ ", "$"). */
  prefix?: string;
  /** Optional suffix (e.g. "%", " min", "k", "+"). */
  suffix?: string;
  className?: string;
};

/**
 * Animates a number from 0 → `to` once it scrolls into view.
 * Honors prefers-reduced-motion (renders final value instantly).
 */
const CountUp = ({
  to,
  duration = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setValue(to);
      startedRef.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // ease-out-cubic
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(to * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;