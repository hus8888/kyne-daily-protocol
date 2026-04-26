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
                  {/* dissolvable strip illustration */}
                  <div className="relative transition-transform duration-700 group-hover:rotate-[-4deg] group-hover:scale-105">
                    {/* second strip peeking behind */}
                    <div className="absolute -right-3 top-1.5 h-2.5 w-28 rotate-[6deg] rounded-[3px] border border-white/50 bg-white/55 shadow-soft backdrop-blur-sm md:h-3 md:w-36" />
                    {/* main strip */}
                    <div className="relative h-2.5 w-32 overflow-hidden rounded-[3px] border border-white/70 bg-gradient-to-b from-white via-white/85 to-white/65 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md md:h-3 md:w-40">
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(90deg, transparent 0 6px, rgba(255,255,255,0.7) 6px 7px)",
                        }}
                      />
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/85 to-transparent" />
                      <div className="absolute right-2.5 top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-foreground/25" />
                    </div>
                    {/* edge / thickness */}
                    <div className="mx-auto h-[2px] w-32 rounded-b-[3px] bg-gradient-to-b from-foreground/15 to-transparent md:w-40" />
                    {/* dissolving particles */}
                    <div className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2">
                      <div className="flex gap-1.5 opacity-60">
                        <span className="h-1 w-1 rounded-full bg-white/80" />
                        <span className="h-0.5 w-0.5 rounded-full bg-white/60" />
                        <span className="h-1 w-1 rounded-full bg-white/70" />
                      </div>
                    </div>
                  </div>
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