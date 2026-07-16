const ingredients = [
  {
    name: "Setria® Glutathione",
    benefit: "master antioxidant + longevity",
    why: "Orobuccal absorption >80% vs <10% oral. The best-fit active in the entire portfolio for strip format.",
  },
  {
    name: "NMN 300mg",
    benefit: "NAD+ precursor + cellular energy",
    why: "Buccal delivery bypasses hepatic first-pass — the real advantage over capsules for NAD+ precursors.",
  },
  {
    name: "Methylcobalamin B12",
    benefit: "neural support + myelin integrity",
    why: "Sublingual absorption matches the gold-standard injection profile. Tiny mass, instant delivery.",
  },
  {
    name: "Dihydroberberine (DHB)",
    benefit: "glycemic + microbiome support",
    why: "200mg DHB delivers greater plasma berberine than 500mg standard berberine. Buccal-native unlike berberine HCl.",
  },
  {
    name: "KSM-66 Ashwagandha",
    benefit: "cortisol balance + sustained energy",
    why: "Withanolides are lipophilic — strong transmucosal absorption without gut degradation.",
  },
  {
    name: "Magnesium Glycinate",
    benefit: "sleep onset + nervous system",
    why: "Strip-feasible form of magnesium. RCT-backed sleep support without the GI distress of other forms.",
  },
];

import ChapterLabel from "./ChapterLabel";

const Ingredients = () => {
  return (
    <section className="relative py-32 md:py-44">
      <div className="container">
        <ChapterLabel>05 — what's inside</ChapterLabel>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-10 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
            simple, considered<br />ingredients.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            No proprietary blends. No hidden fillers. Just well-known
            ingredients chosen for how gently — and effectively — they work.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="group rounded-3xl border border-border bg-surface-elevated p-7 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                  {ing.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  active
                </span>
              </div>
              <p className="mt-3 text-sm text-foreground/70">{ing.benefit}</p>
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