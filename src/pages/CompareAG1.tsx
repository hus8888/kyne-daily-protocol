import { CompareLayout } from "./CompareLayout";

const CompareAG1 = () => (
  <CompareLayout
    eyebrow="Compare"
    title="kyne vs. ag1"
    subtitle="AG1 is a powdered greens blend. KYNE is a sublingual delivery protocol. Different products, different problems — here's how they actually compare."
    themName="AG1 (Athletic Greens)"
    rows={[
      { label: "Format", kyne: "3 sublingual strips per day", them: "1 scoop powder in water", advantage: "tie" },
      { label: "Delivery route", kyne: "Sublingual — bypasses gut + liver", them: "Oral — full GI transit", advantage: "kyne" },
      { label: "Bioavailability", kyne: "60–70% measured", them: "8–25% (varies by ingredient)", advantage: "kyne" },
      { label: "Ingredient count", kyne: "3–6 actives per strip, dose-disclosed", them: "75 ingredients, proprietary blend", advantage: "kyne" },
      { label: "Dose transparency", kyne: "Every mg on the panel", them: "Most doses hidden in 'blend'", advantage: "kyne" },
      { label: "Caffeine", kyne: "40mg in core morning (optional)", them: "None", advantage: "tie" },
      { label: "Greens / superfoods", kyne: "Not the core proposition", them: "Yes — primary positioning", advantage: "them" },
      { label: "Probiotics", kyne: "Separate kyne gut line", them: "Included (low CFU count)", advantage: "tie" },
      { label: "Sugar / sweeteners", kyne: "Mild natural mint, no sugar", them: "Stevia + natural flavors", advantage: "tie" },
      { label: "Onset", kyne: "5–15 min", them: "30–60 min", advantage: "kyne" },
      { label: "Travel friendliness", kyne: "Foil pouches, no water", them: "Travel packs require water + shaker", advantage: "kyne" },
      { label: "Price per day", kyne: "From $1.80 (single strip)", them: "~$3.30 / scoop", advantage: "kyne" },
      { label: "Subscription required for best price", kyne: "No — discount available, not required", them: "Yes — meaningful sub-only pricing", advantage: "kyne" },
    ]}
    closing={
      <div className="rounded-3xl border border-border bg-white/60 p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">honest take</p>
        <p className="mt-3 text-foreground">
          If you want a 75-ingredient greens blend you mix into water, AG1 does that well.
          If you want pharmaceutical-grade actives delivered to your bloodstream at known doses,
          KYNE is the answer to a different question.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Many of our customers stack both — KYNE for the targeted compounds, greens powder for fiber and phytonutrient breadth.
        </p>
      </div>
    }
  />
);

export default CompareAG1;
