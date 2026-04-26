const tiers = [
  {
    name: "starter",
    price: 99,
    tagline: "Begin the protocol.",
    features: ["1 strip system (30 days)", "Choice of signal · shift · rhythm", "Onboarding guide"],
  },
  {
    name: "core",
    price: 149,
    tagline: "The full daily system.",
    features: ["All 3 strip systems", "Adaptive dosing protocol", "Priority shipping", "Member protocol app"],
    featured: true,
  },
  {
    name: "elite",
    price: 199,
    tagline: "Performance, calibrated.",
    features: ["Everything in core", "Quarterly bloodwork credits", "1:1 protocol coach", "Early access drops"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32 md:py-44">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            06 — protocols
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
            choose your<br />protocol.
          </h2>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-10 transition-all duration-500 hover:-translate-y-1 ${
                t.featured
                  ? "border-foreground/20 bg-surface shadow-elevated"
                  : "border-border bg-surface/40 hover:border-foreground/10"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-full border border-t-0 border-border bg-background px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  most chosen
                </div>
              )}

              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t.name}
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl font-semibold tracking-tightest">
                  ${t.price}
                </span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{t.tagline}</p>

              <ul className="mt-10 space-y-4 border-t border-border pt-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-12 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  t.featured
                    ? "bg-foreground text-background"
                    : "border border-border bg-transparent text-foreground hover:border-foreground/30"
                }`}
              >
                start {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;