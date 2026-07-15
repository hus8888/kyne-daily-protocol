import { CompareLayout } from "./CompareLayout";

const CompareThorne = () => (
  <CompareLayout
    eyebrow="Compare"
    title="kyne vs. thorne"
    subtitle="Thorne is the gold standard for capsule-based clinical supplementation. Here's where KYNE fits — and where Thorne still wins."
    themName="Thorne capsules"
    rows={[
      { label: "Format", kyne: "Sublingual oral thin film", them: "Capsules + powders", advantage: "tie" },
      { label: "Bioavailability strategy", kyne: "Sublingual route + permeation enhancers", them: "Liposomal, chelated forms (still oral)", advantage: "kyne" },
      { label: "Average bioavailability", kyne: "60–70%", them: "15–35% (better than generic, still oral)", advantage: "kyne" },
      { label: "Ingredient quality", kyne: "USP/EP-grade, branded actives (Niagen, Setria, Kaneka, PharmaGABA)", them: "USP/NSF-grade, often the same branded actives", advantage: "tie" },
      { label: "Third-party testing", kyne: "Every batch, ISO 17025 lab", them: "Yes — published COAs", advantage: "tie" },
      { label: "Practitioner channel", kyne: "Direct-to-consumer", them: "Yes — extensive practitioner program", advantage: "them" },
      { label: "SKU breadth", kyne: "8 lines, 21 SKUs", them: "Hundreds of SKUs across categories", advantage: "them" },
      { label: "Dose frequency", kyne: "1–3 strips per day", them: "2–6 capsules per day per product", advantage: "kyne" },
      { label: "Stomach tolerance", kyne: "Bypassed", them: "Better than generic, still oral", advantage: "kyne" },
      { label: "Price per serving", kyne: "$1.80–$2.60", them: "$0.40–$2.50 depending on SKU", advantage: "tie" },
      { label: "Travel", kyne: "Foil pouches, pocket-friendly", them: "Bottles", advantage: "kyne" },
    ]}
    closing={
      <div className="rounded-3xl border border-border bg-white/60 p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">when thorne is the right call</p>
        <p className="mt-3 text-foreground">
          Working with a functional-medicine practitioner on a deep clinical protocol? Thorne's
          breadth and practitioner integration are unmatched.
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">when kyne is the right call</p>
        <p className="mt-3 text-foreground">
          You want a tight daily protocol — morning, day, night — with absorption you can feel
          inside 15 minutes, no pill stack, no stomach upset.
        </p>
      </div>
    }
  />
);

export default CompareThorne;
