const stats = [
  { value: "≈ 20%", label: "average absorption from oral capsules" },
  { value: "45 min+", label: "typical onset before you feel anything" },
  { value: "60%", label: "of users skip doses within two weeks" },
];

const Problem = () => {
  return (
    <section id="problem" className="relative py-32 md:py-44">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            01 — the problem
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
            most supplements<br />never reach you.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-balance text-muted-foreground md:text-lg">
            Pills and powders are slow, inconsistent, and largely degraded
            before your body can use them. The result: a routine that costs
            money, time, and trust — without delivering what it promised.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-background p-10 transition-colors hover:bg-surface"
            >
              <div className="font-display text-5xl font-semibold tracking-tightest text-foreground md:text-6xl">
                {s.value}
              </div>
              <div className="mt-6 max-w-[18ch] text-sm leading-relaxed text-muted-foreground">
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