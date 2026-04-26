const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-52 md:pb-44">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.18),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
      </div>

      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur animate-fade-in"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Introducing PEPI strip technology
          </div>

          <h1
            className="text-gradient text-balance font-display text-[44px] font-semibold leading-[1.02] tracking-tightest md:text-7xl lg:text-[88px] animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            your daily<br />protocol
          </h1>

          <p
            className="mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            engineered strips designed for how your body actually absorbs.
          </p>

          <div
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-elevated transition-transform hover:scale-[1.02]"
            >
              build your protocol
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#system"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              see the system
            </a>
          </div>
        </div>

        {/* floating strip visual */}
        <div
          className="relative mx-auto mt-24 max-w-4xl animate-fade-up"
          style={{ animationDelay: "480ms" }}
        >
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.22),transparent_70%)] blur-3xl" />
          <div className="glass relative aspect-[16/8] overflow-hidden rounded-[40px] shadow-elevated">
            {/* strip shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-16 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative h-40 w-72 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl md:h-48 md:w-96">
                  <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(115deg,transparent_30%,hsl(var(--primary)/0.25)_50%,transparent_70%)] [background-size:200%_100%] animate-shimmer" />
                  <div className="absolute inset-x-0 bottom-4 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    KYNE · PEPI
                  </div>
                </div>
              </div>
            </div>

            {/* corner indicators */}
            <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              01 / dose
            </div>
            <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              98% bioavail.
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              dissolves · 12s
            </div>
            <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              onset · 4 min
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;