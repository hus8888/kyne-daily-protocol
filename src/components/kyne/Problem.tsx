import CountUp from "./CountUp";
import ChapterLabel from "./ChapterLabel";

const stats = [
  { to: 20, prefix: "≈ ", suffix: "%", label: "average absorption from oral capsules" },
  { to: 45, suffix: " min", label: "typical onset before you feel anything" },
  { to: 60, suffix: "%", label: "of people skip doses within two weeks" },
];

const Problem = () => {
  return (
    <section id="problem" className="relative py-32 md:py-44">
      <div className="container">
        <ChapterLabel>01 — why we made this</ChapterLabel>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-10 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
            most supplements<br />never reach you.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-balance text-muted-foreground md:text-lg">
            Pills and powders are slow, inconsistent, and largely lost before
            your body can use them. We started with a simple question: what
            would a daily routine that actually works look like?
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-border bg-surface-elevated p-10 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <CountUp
                to={s.to}
                prefix={s.prefix ?? ""}
                suffix={s.suffix}
                className="font-display text-5xl font-light tracking-tightest text-foreground md:text-6xl"
              />
              <div className="mt-6 max-w-[20ch] text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;