const ingredients = [
  {
    name: "L-Theanine",
    benefit: "calm, focused alertness",
    why: "Sublingual delivery bypasses first-pass metabolism, preserving full activity.",
  },
  {
    name: "CoQ10",
    benefit: "cellular energy production",
    why: "Notoriously poorly absorbed orally. Strip format dramatically improves uptake.",
  },
  {
    name: "Methyl B12",
    benefit: "cognitive & neural support",
    why: "Direct mucosal absorption matches the gold-standard injection profile.",
  },
  {
    name: "Magnesium Glycinate",
    benefit: "recovery & nervous system",
    why: "Avoids GI distress common with oral magnesium dosing.",
  },
  {
    name: "Adaptogen Complex",
    benefit: "stress & cortisol balance",
    why: "Active compounds delivered intact, with predictable onset.",
  },
  {
    name: "Glycine + GABA",
    benefit: "deep, restorative sleep",
    why: "Crosses faster, acts cleaner — without next-day residue.",
  },
];

const Ingredients = () => {
  return (
    <section className="relative py-32 md:py-44">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            05 — transparency
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
            every input,<br />accountable.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            No proprietary blends. No hidden fillers. Each active is selected
            because the strip format meaningfully changes how it works.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="group bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {ing.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  active
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground/80">{ing.benefit}</p>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                {ing.why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;