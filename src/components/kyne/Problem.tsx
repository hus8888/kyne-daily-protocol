const stats = [
  { value: "≈ 20%", label: "average absorption from oral capsules" },
  { value: "45 min", label: "typical onset before you feel anything" },
  { value: "60%", label: "of people skip doses within two weeks" },
];

const Problem = () => {
  return (
    <section id="problem" className="relative py-32 md:py-44">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            01 — why we made this
          </p>
          <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
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
              <div className="font-display text-5xl font-light tracking-tightest text-foreground md:text-6xl">
                {s.value}
              </div>
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