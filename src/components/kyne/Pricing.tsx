const tiers = [
  {
    name: "starter",
    price: 49,
    tagline: "Begin the protocol.",
    features: ["1 strip system (30 days)", "Choice of morning · day · night", "Digital onboarding guide", "Free shipping"],
  },
  {
    name: "core",
    price: 99,
    tagline: "The full daily system.",
    features: ["All 3 strip systems (90 strips/month)", "Morning + Day + Night protocol", "Adaptive dosing guide", "Priority support", "Member app access"],
    featured: true,
  },
  {
    name: "elite",
    price: 149,
    tagline: "Performance, calibrated.",
    features: ["Everything in core", "Monthly 1:1 protocol coaching call", "Quarterly bloodwork analysis ($300 value)", "Early access to new formulations", "Custom protocol adjustments"],
  },
];

import ChapterLabel from "./ChapterLabel";
import MagneticButton from "./MagneticButton";

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32 md:py-44">
      <div className="container">
        <ChapterLabel>06 — choose your protocol</ChapterLabel>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-10 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
            start small.<br />build a ritual.
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Launching Q1 2027. Join the waitlist for early access pricing.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-[28px] border p-10 shadow-soft transition-transform duration-500 hover:-translate-y-1 ${
                t.featured
                  ? "border-foreground/20 bg-surface-elevated shadow-elevated"
                  : "border-border bg-surface-elevated/70"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground shadow-soft">
                  most popular
                </div>
              )}

              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t.name}
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl font-light tracking-tightest text-foreground">
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

              <MagneticButton
                href="#waitlist"
                strength={t.featured ? 8 : 5}
                className={`mt-12 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium ${
                  t.featured
                    ? "bg-foreground text-background shadow-soft"
                    : "border border-border bg-transparent text-foreground hover:bg-accent"
                }`}
              >
                join waitlist
              </MagneticButton>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Early access pricing locks in for 12 months. Pilot study participants receive 50% off for 6 months.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
