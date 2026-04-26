import { useState } from "react";
import ChapterLabel from "./ChapterLabel";
import CountUp from "./CountUp";

type Product = "signal" | "shift" | "rhythm";

const tabs: { id: Product; label: string; time: string; tint: string; glow: string }[] = [
  { id: "signal", label: "kyne morning", time: "morning", tint: "hsl(var(--signal-soft))", glow: "hsl(var(--signal) / 0.45)" },
  { id: "shift", label: "kyne day", time: "day", tint: "hsl(var(--shift-soft))", glow: "hsl(var(--shift) / 0.45)" },
  { id: "rhythm", label: "kyne night", time: "night", tint: "hsl(var(--rhythm-soft))", glow: "hsl(var(--rhythm) / 0.45)" },
];

const quotes: Record<Product, { rating: number; quote: string; name: string; meta: string }[]> = {
  signal: [
    {
      rating: 5,
      quote:
        "I used to need two coffees and a 30-minute warm-up to feel awake. Morning gives me a clean lift in about ten minutes. No jitters, no crash.",
      name: "Maya R.",
      meta: "designer · 4 months",
    },
    {
      rating: 5,
      quote:
        "It's the calmest 'energy' product I've ever used. I'm focused without feeling wired — exactly what mornings should feel like.",
      name: "Daniel K.",
      meta: "product manager · 6 months",
    },
    {
      rating: 4,
      quote:
        "Subtle but real. By week two I noticed I wasn't reaching for a second espresso. I just felt steady.",
      name: "Priya S.",
      meta: "physician · 3 months",
    },
  ],
  shift: [
    {
      rating: 5,
      quote:
        "Day completely changed my afternoons. The 3pm fog used to wreck me — now I just keep going, evenly, without forcing it.",
      name: "Amara T.",
      meta: "writer · 5 months",
    },
    {
      rating: 5,
      quote:
        "I take it before back-to-back meetings. I'm sharper, calmer, and don't feel drained when I close my laptop.",
      name: "Jonas B.",
      meta: "founder · 7 months",
    },
    {
      rating: 4,
      quote:
        "It's the most 'invisible' supplement I've tried — I only notice it when I forget to take it. That's the highest compliment.",
      name: "Naomi L.",
      meta: "architect · 4 months",
    },
  ],
  rhythm: [
    {
      rating: 5,
      quote:
        "I fall asleep within twenty minutes and wake up clear, not groggy. It feels like sleep the way it's supposed to feel.",
      name: "Ravi M.",
      meta: "engineer · 8 months",
    },
    {
      rating: 5,
      quote:
        "I've tried everything for sleep. Night is the first one that doesn't knock me out — it just gently lets me go.",
      name: "Elena V.",
      meta: "therapist · 6 months",
    },
    {
      rating: 5,
      quote:
        "Replaced three different bottles in my drawer. One strip, lights out, no residue in the morning. Simple.",
      name: "Theo W.",
      meta: "athlete · 5 months",
    },
  ],
};

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.4"
    className="h-3.5 w-3.5"
    aria-hidden
  >
    <polygon points="12 2 15 9 22 9.3 16.5 14 18.5 21 12 17.3 5.5 21 7.5 14 2 9.3 9 9" />
  </svg>
);

const Rating = ({ value }: { value: number }) => (
  <div className="flex items-center gap-0.5 text-foreground/80" aria-label={`${value} out of 5`}>
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} filled={i < value} />
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState<Product>("shift");
  const activeTab = tabs.find((t) => t.id === active)!;
  const items = quotes[active];

  // overall stats
  const allRatings = Object.values(quotes).flat().map((q) => q.rating);
  const avg =
    allRatings.reduce((a, b) => a + b, 0) / allRatings.length;

  return (
    <section id="testimonials" className="relative py-32 md:py-44">
      <div className="container">
        <ChapterLabel>07 — what people say</ChapterLabel>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-10 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
            calm, quiet,<br />consistent results.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            Real notes from people running the protocol every day.
          </p>

          {/* aggregate */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-surface-elevated px-5 py-2 shadow-soft">
            <Rating value={Math.round(avg)} />
            <CountUp
              to={avg}
              decimals={1}
              className="text-sm font-medium text-foreground"
            />
            <span className="text-xs text-muted-foreground">·</span>
            <CountUp
              to={2400}
              suffix="+ reviews"
              className="text-xs text-muted-foreground"
            />
          </div>
        </div>

        {/* product tabs */}
        <div className="mt-14 flex justify-center">
          <div
            role="tablist"
            className="inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-surface-elevated p-1 shadow-soft"
          >
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                    isActive
                      ? "bg-foreground text-background shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: `hsl(var(--${t.id}))` }}
                  />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* quotes grid */}
        <div
          key={active}
          className="relative mt-12 grid gap-4 md:grid-cols-3 md:gap-6"
        >
          {/* soft tinted backdrop matching active product */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-[40px]"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${activeTab.glow}, transparent 70%)`,
              opacity: 0.5,
            }}
          />

          {items.map((q, i) => (
            <figure
              key={`${active}-${i}`}
              className="relative flex flex-col rounded-[28px] border border-border bg-surface-elevated p-7 shadow-soft transition-transform duration-500 hover:-translate-y-0.5 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <Rating value={q.rating} />
                <span
                  className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70"
                  style={{ backgroundColor: activeTab.tint }}
                >
                  {activeTab.time}
                </span>
              </div>

              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground/85">
                <span className="select-none text-foreground/30">“</span>
                {q.quote}
                <span className="select-none text-foreground/30">”</span>
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium text-foreground/70"
                  style={{ backgroundColor: activeTab.tint }}
                >
                  {q.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground">
                    {q.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {q.meta}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;