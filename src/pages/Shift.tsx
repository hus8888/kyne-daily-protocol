import ProductPage from "@/components/kyne/ProductPage";

const Shift = () => (
  <ProductPage
    slug="shift"
    name="kyne day"
    short="day"
    time="day"
    tagline="even focus and gentle recovery to carry you through what the day asks."
    badge="Day protocol · 02"
    cta="start your day protocol"
    metrics={[
      { v: "200 mg", l: "rhodiola" },
      { v: "20s", l: "dissolve" },
      { v: "~12m", l: "onset" },
    ]}
    benefits={[
      { n: "01", title: "afternoon clarity", body: "Rhodiola smooths cortisol response and supports mental endurance through back-to-back demands." },
      { n: "02", title: "calm under load", body: "L-theanine promotes alpha-wave states — focused calm without sedation." },
      { n: "03", title: "no crash", body: "Phosphatidylserine modulates evening cortisol so the day ends on your terms, not stress's." },
    ]}
    steps={[
      { n: "01", title: "dissolves on tongue", body: "One strip — a mid-day ritual that takes seconds." },
      { n: "02", title: "bypasses digestion", body: "Active compounds reach your bloodstream without GI delay or first-pass loss." },
      { n: "03", title: "evens you out", body: "A subtle reset. You don't feel taken anywhere — just steadier." },
    ]}
    ingredients={[
      { name: "SHR-5 Rhodiola rosea", dose: "200 mg", body: "Clinically validated adaptogen standardized to rosavins and salidroside. Smooths cortisol response and supports mental endurance under sustained cognitive load." },
      { name: "L-Theanine", dose: "150 mg", body: "Promotes alpha-wave EEG states associated with focused calm. One of the best strip-native actives — high buccal absorption, taste neutral, fast onset." },
      { name: "Phosphatidylserine", dose: "100 mg", body: "Phospholipid building block for neuronal membranes. Modulates evening cortisol and supports smooth cognitive transitions through the afternoon." },
    ]}
    experience={[
      { time: "T + 0:00", label: "dissolve", body: "Strip placed. Soft herbal note on the tongue." },
      { time: "T + 0:12", label: "settle", body: "Tension softens. The next thing feels manageable again." },
      { time: "T + 0:40", label: "carry on", body: "Clear, even, steady — for hours, not minutes." },
    ]}
  />
);

export default Shift;