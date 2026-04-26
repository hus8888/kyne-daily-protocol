import ProductPage from "@/components/kyne/ProductPage";

const Signal = () => (
  <ProductPage
    slug="signal"
    name="kyne signal"
    short="signal"
    time="morning"
    tagline="clean, sustained energy to begin the day with intention."
    badge="Morning protocol · 01"
    cta="start your morning protocol"
    metrics={[
      { v: "75 mg", l: "L-theanine" },
      { v: "20s", l: "dissolve" },
      { v: "~10m", l: "onset" },
    ]}
    benefits={[
      { n: "01", title: "steady energy", body: "A clean lift that climbs gently — no spike, no crash." },
      { n: "02", title: "calm focus", body: "Alert without being wired. Built for the first deep work block of the day." },
      { n: "03", title: "replaces the second coffee", body: "Most users find one cup is plenty by the second week." },
    ]}
    steps={[
      { n: "01", title: "dissolves on tongue", body: "One thin strip. Gone in seconds, no water required." },
      { n: "02", title: "bypasses digestion", body: "Sublingual delivery routes ingredients directly into circulation." },
      { n: "03", title: "calmly turns on", body: "A gentle climb begins within minutes — not the sudden hit of caffeine." },
    ]}
    ingredients={[
      { name: "L-Theanine", dose: "75 mg", body: "Quiets the over-active mind, smoothing the edges of natural alertness." },
      { name: "Caffeine (microdose)", dose: "40 mg", body: "About one third of a coffee — enough to lift, not enough to spike." },
      { name: "Methyl B12", dose: "500 mcg", body: "Supports cellular energy production and clear, sustained mental output." },
      { name: "Tyrosine", dose: "150 mg", body: "Precursor to dopamine — supports motivation and cognitive endurance." },
      { name: "Lion's Mane", dose: "100 mg", body: "Adaptogen for clean, long-arc cognitive support throughout the morning." },
      { name: "Vitamin D3", dose: "1000 IU", body: "Daily baseline support for mood, immunity and energy regulation." },
    ]}
    experience={[
      { time: "T + 0:00", label: "dissolve", body: "Strip placed. Bright, citrus sensation on the tongue." },
      { time: "T + 0:08", label: "lift", body: "A gentle wave of clarity arrives — no jitters." },
      { time: "T + 0:30", label: "lock in", body: "Fully present. Ready for whatever the morning asks." },
    ]}
  />
);

export default Signal;