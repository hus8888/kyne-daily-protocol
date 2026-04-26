const points = [
  {
    n: "01",
    title: "fast dissolving",
    body: "PEPI strips dissolve in under 15 seconds on the tongue — no water, no waiting.",
  },
  {
    n: "02",
    title: "engineered for absorption",
    body: "Sublingual delivery bypasses the gut, putting actives directly into circulation.",
  },
  {
    n: "03",
    title: "morning · day · night",
    body: "A complete protocol calibrated to your body's natural rhythm and demand.",
  },
];

const Solution = () => {
  return (
    <section className="relative py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_60%)] blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              02 — the solution
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
              a different<br />delivery system.
            </h2>
            <p className="mt-8 max-w-md text-muted-foreground md:text-lg">
              KYNE is not a supplement. It is a protocol — a calibrated daily
              system designed around bioavailability, timing, and how
              performance actually compounds.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-px overflow-hidden rounded-3xl border border-border">
              {points.map((p) => (
                <div
                  key={p.n}
                  className="group flex items-start gap-8 bg-surface/40 p-8 transition-colors hover:bg-surface md:p-10"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {p.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;