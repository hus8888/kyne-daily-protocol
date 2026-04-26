const steps = [
  {
    n: "01",
    title: "take strip",
    body: "Place one PEPI strip on your tongue. No water, no pills, no friction.",
  },
  {
    n: "02",
    title: "dissolve",
    body: "Sublingual delivery routes actives directly into your bloodstream.",
  },
  {
    n: "03",
    title: "feel effect",
    body: "Onset within minutes — calibrated, consistent, repeatable.",
  },
];

const HowItWorks = () => {
  return (
    <section id="science" className="relative py-32 md:py-44">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            04 — how it works
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
            three steps.<br />zero friction.
          </h2>
        </div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative text-center">
                <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
                  <div className="glass relative flex h-full w-full items-center justify-center rounded-full">
                    <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                      {s.n}
                    </span>
                  </div>
                </div>
                <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">
                  {s.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;