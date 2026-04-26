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
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              02 — our approach
            </p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
              a calmer<br />daily ritual.
            </h2>
            <p className="mt-8 max-w-md text-muted-foreground md:text-lg">
              KYNE is a calibrated daily system — designed around how your body
              works, the moments that matter most, and a routine you'll
              actually keep.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {points.map((p) => (
                <div
                  key={p.n}
                  className="flex items-start gap-8 rounded-3xl border border-border bg-surface-elevated p-8 shadow-soft transition-transform hover:-translate-y-0.5 md:p-10"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {p.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-medium tracking-tight text-foreground md:text-2xl">
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