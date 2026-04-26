const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-48">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-border bg-surface-elevated p-12 text-center shadow-soft md:p-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--signal)/0.4),transparent_65%)] blur-3xl" />
            <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--rhythm)/0.4),transparent_65%)] blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--shift)/0.35),transparent_65%)] blur-3xl" />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            begin today
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-light leading-[1.02] tracking-tightest text-foreground md:text-7xl">
            a calmer way<br />to feel better.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-muted-foreground md:text-lg">
            One ritual. Three windows. A daily protocol that actually fits your life.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.03]"
            >
              start your protocol
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#science"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              how it works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;