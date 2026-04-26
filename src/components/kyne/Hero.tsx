const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-52 md:pb-48">
      {/* soft, light ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,hsl(30_60%_88%/0.7),transparent_60%)] blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,hsl(260_50%_92%/0.5),transparent_60%)] blur-3xl" />
        <div className="absolute left-[8%] top-[40%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,hsl(130_30%_92%/0.5),transparent_60%)] blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur animate-fade-in"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70 animate-pulse-glow" />
            A daily protocol, redesigned
          </div>

          <h1
            className="text-balance font-display text-[44px] font-light leading-[1.02] tracking-tightest text-foreground md:text-7xl lg:text-[88px] animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            your daily<br />protocol.
          </h1>

          <p
            className="mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            Dissolvable strips designed for how your body actually absorbs.
            Calm, calibrated, daily.
          </p>

          <div
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02]"
            >
              build your protocol
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#system"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              explore the system →
            </a>
          </div>
        </div>

        {/* hero product visual — three soft tinted orbs */}
        <div
          className="relative mx-auto mt-28 max-w-5xl animate-fade-up"
          style={{ animationDelay: "480ms" }}
        >
          <div className="relative grid grid-cols-3 gap-4 md:gap-8">
            {[
              { name: "signal", time: "morning", tint: "hsl(var(--signal-soft))", glow: "hsl(var(--signal) / 0.55)" },
              { name: "shift", time: "day", tint: "hsl(var(--shift-soft))", glow: "hsl(var(--shift) / 0.5)" },
              { name: "rhythm", time: "night", tint: "hsl(var(--rhythm-soft))", glow: "hsl(var(--rhythm) / 0.55)" },
            ].map((p, i) => (
              <div
                key={p.name}
                className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border shadow-soft transition-transform duration-500 hover:-translate-y-1"
                style={{ backgroundColor: p.tint, animationDelay: `${i * 120}ms` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 65%, ${p.glow}, transparent 65%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-end justify-center pb-10">
                  <div className="h-24 w-32 rounded-2xl bg-white/70 shadow-soft backdrop-blur-sm md:h-32 md:w-44" />
                </div>
                <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                  {p.time}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-display text-base font-medium tracking-tight text-foreground">
                    kyne {p.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                    0{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;