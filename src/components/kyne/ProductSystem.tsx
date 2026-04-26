const products = [
  {
    name: "kyne signal",
    time: "morning",
    desc: "Clean, sustained energy and clarity to begin the day with intention.",
    tint: "hsl(var(--signal-soft))",
    glow: "hsl(var(--signal) / 0.6)",
    icon: "☀",
  },
  {
    name: "kyne shift",
    time: "day",
    desc: "Even focus and gentle recovery to carry you through what the day asks.",
    tint: "hsl(var(--shift-soft))",
    glow: "hsl(var(--shift) / 0.55)",
    icon: "❋",
  },
  {
    name: "kyne rhythm",
    time: "night",
    desc: "Quiet the system, restore the night, and wake feeling fully yours again.",
    tint: "hsl(var(--rhythm-soft))",
    glow: "hsl(var(--rhythm) / 0.6)",
    icon: "☾",
  },
];

const ProductSystem = () => {
  return (
    <section id="system" className="relative py-32 md:py-44">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            03 — the system
          </p>
          <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
            three strips.<br />one daily ritual.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            Each formula is designed for a specific window of your day — gentle
            enough to use every day, intentional enough to feel.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-surface-elevated p-2 shadow-soft transition-transform duration-500 hover:-translate-y-1"
            >
              {/* tinted visual */}
              <div
                className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[22px]"
                style={{ backgroundColor: p.tint }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 65%, ${p.glow}, transparent 65%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-32 rounded-2xl bg-white/80 shadow-soft backdrop-blur-sm transition-transform duration-700 group-hover:rotate-[-3deg] group-hover:scale-105 md:h-24 md:w-40" />
                </div>
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                  {p.time}
                </div>
                <div className="absolute right-4 top-4 text-base text-foreground/70">
                  {p.icon}
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="font-display text-2xl font-light tracking-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    30 strips
                  </span>
                  <span className="text-sm text-foreground/80 transition-colors group-hover:text-foreground">
                    learn more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSystem;