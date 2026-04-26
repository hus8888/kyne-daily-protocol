const products = [
  {
    name: "kyne signal",
    time: "morning",
    desc: "Clean, sustained focus and energy. Engineered for the first window of the day.",
    accent: "from-[hsl(40_100%_70%)] to-[hsl(20_100%_60%)]",
    glow: "hsl(40 100% 60% / 0.3)",
  },
  {
    name: "kyne shift",
    time: "day",
    desc: "Cognitive endurance and recovery between demands. Stay level under load.",
    accent: "from-[hsl(195_100%_70%)] to-[hsl(220_100%_60%)]",
    glow: "hsl(195 100% 60% / 0.35)",
  },
  {
    name: "kyne rhythm",
    time: "night",
    desc: "Deep recovery, repair and sleep architecture. Wake restored, not depleted.",
    accent: "from-[hsl(260_80%_70%)] to-[hsl(220_80%_50%)]",
    glow: "hsl(260 80% 60% / 0.3)",
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
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
            three strips.<br />one protocol.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            Each strip is formulated for a specific window of your day — and
            engineered to work in sequence, not isolation.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-surface"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* visual */}
              <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background">
                <div
                  className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 60%, ${p.glow}, transparent 65%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`h-24 w-44 rounded-2xl bg-gradient-to-br ${p.accent} opacity-90 shadow-2xl transition-transform duration-700 group-hover:rotate-[-4deg] group-hover:scale-105`}
                  />
                </div>
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {p.time}
                </div>
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  0{i + 1}
                </div>
              </div>

              <h3 className="font-display text-2xl font-medium tracking-tight">
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
                  details →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSystem;