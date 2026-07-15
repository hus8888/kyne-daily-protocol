import { CompareLayout } from "./CompareLayout";

const CompareCapsules = () => (
  <CompareLayout
    eyebrow="Compare"
    title="kyne vs. capsules"
    subtitle="The same actives. A radically different delivery system. Here's why the format is the formula."
    themName="Generic capsules"
    rows={[
      { label: "Delivery route", kyne: "Sublingual mucosa — direct to bloodstream", them: "GI tract — stomach acid + liver first-pass", advantage: "kyne" },
      { label: "Bioavailability (avg.)", kyne: "60–70%", them: "8–15%", advantage: "kyne" },
      { label: "Onset", kyne: "5–15 minutes", them: "45–90 minutes", advantage: "kyne" },
      { label: "Stomach upset", kyne: "Bypassed entirely", them: "Common with iron, magnesium, fish oil", advantage: "kyne" },
      { label: "Dose required", kyne: "Lower — 100mg often equivalent", them: "Higher — 500–1000mg label claims", advantage: "kyne" },
      { label: "Take with food?", kyne: "Not required", them: "Often required for absorption", advantage: "kyne" },
      { label: "Excipients", kyne: "Film-forming polymers (4–6 ingredients)", them: "Fillers, binders, magnesium stearate, dyes", advantage: "kyne" },
      { label: "Pill fatigue", kyne: "One strip dissolves under the tongue", them: "5–15 capsules per day for full stack", advantage: "kyne" },
      { label: "Travel", kyne: "Foil pouches, no water needed", them: "Bottles, water, refrigeration for some", advantage: "kyne" },
      { label: "Price per serving", kyne: "$1.80–$2.60", them: "$0.30–$2.00", advantage: "them" },
      { label: "Shelf life", kyne: "24 months sealed", them: "24–36 months sealed", advantage: "tie" },
      { label: "Vegan / gluten-free", kyne: "Yes, all SKUs", them: "Varies — gelatin caps common", advantage: "kyne" },
    ]}
    closing={
      <div className="rounded-3xl border border-[#d4a574]/60 bg-gradient-to-br from-[#d4a574]/[0.18] to-[#d4a574]/[0.04] p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">the math</p>
        <p className="mt-3 text-foreground font-display text-2xl font-light tracking-tight">
          A 100mg KYNE strip at 65% bioavailability delivers more active to plasma than a 500mg capsule at 12%.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">Format isn't a finish — it's the formula. PEPI™ is the difference between paying for absorption and paying for label claims.</p>
      </div>
    }
  />
);

export default CompareCapsules;
