import ProductPage from "@/components/kyne/ProductPage";

const Signal = () => (
  <ProductPage
    slug="signal"
    name="kyne morning"
    short="morning"
    time="morning"
    tagline="clean, sustained energy to begin the day with intention."
    badge="Morning protocol · 01"
    cta="start your morning protocol"
    metrics={[
      { v: "300 mg", l: "ashwagandha" },
      { v: "20s", l: "dissolve" },
      { v: "~10m", l: "onset" },
    ]}
    benefits={[
      { n: "01", title: "grounded energy", body: "KSM-66 ashwagandha supports cortisol balance so your energy climbs cleanly — no spike, no crash." },
      { n: "02", title: "calm focus", body: "L-tyrosine fuels dopamine pathways. Alert, motivated, without being wired." },
      { n: "03", title: "sharp from the first hour", body: "Methylcobalamin B12 via buccal route matches the profile of the gold-standard injection — absorbed in seconds." },
    ]}
    steps={[
      { n: "01", title: "dissolves on tongue", body: "One thin strip. Gone in seconds, no water required." },
      { n: "02", title: "bypasses digestion", body: "Sublingual delivery routes ingredients directly into circulation — no first-pass, no gut delay." },
      { n: "03", title: "settles in", body: "A steady, grounded lift begins within minutes. Not wired — just on." },
    ]}
    ingredients={[
      { name: "KSM-66 Ashwagandha", dose: "300 mg", body: "Clinically validated adaptogen. Buccal delivery of withanolides bypasses gut degradation. Supports cortisol balance and sustained energy without stimulants." },
      { name: "L-Tyrosine", dose: "200 mg", body: "Catecholamine precursor. Converts to dopamine and norepinephrine — supporting motivation, focus, and cognitive endurance under load." },
      { name: "Methylcobalamin B12", dose: "500 mcg", body: "Active form of B12. Sublingual absorption matches injection-route bioavailability. Essential for myelin integrity and cellular energy." },
      { name: "Riboflavin (B2)", dose: "1.6 mg", body: "Cofactor for cellular energy conversion. Supports the mitochondrial pathways that power the morning." },
    ]}
    experience={[
      { time: "T + 0:00", label: "dissolve", body: "Strip placed. Clean, mild herbal note on the tongue." },
      { time: "T + 0:10", label: "settle", body: "A grounded clarity arrives — steady, not sharp." },
      { time: "T + 0:30", label: "lock in", body: "Fully present. Cortisol balanced. Ready for whatever the morning asks." },
    ]}
  />
);

export default Signal;