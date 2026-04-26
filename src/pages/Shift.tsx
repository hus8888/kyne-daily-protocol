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
      { n: "01", title: "afternoon clarity", body: "Cuts through the 3pm fog without adding caffeine to the day." },
      { n: "02", title: "calmer under load", body: "Lowers reactive stress so back-to-back demands don't compound." },
      { n: "03", title: "gentle recovery", body: "Helps you close the laptop without feeling drained from it." },
    ]}
    steps={[
      { n: "01", title: "dissolves on tongue", body: "One strip — a mid-day ritual that takes seconds." },
      { n: "02", title: "bypasses digestion", body: "Active compounds reach your bloodstream without GI delay." },
      { n: "03", title: "evens you out", body: "A subtle reset. You don't feel taken anywhere — just steadier." },
    ]}
    ingredients={[
      { name: "Rhodiola Rosea", dose: "200 mg", body: "Adaptogen that smooths cortisol response and supports mental endurance." },
      { name: "L-Theanine", dose: "100 mg", body: "Promotes alpha-wave states associated with focused calm." },
      { name: "Ashwagandha (KSM-66)", dose: "150 mg", body: "Lowers reactive stress and supports steady afternoon performance." },
      { name: "B-Complex", dose: "blend", body: "Supports the energy-conversion pathways that get depleted by long workdays." },
      { name: "Magnesium Glycinate", dose: "75 mg", body: "Quiets the nervous system without sedation." },
      { name: "Cordyceps", dose: "100 mg", body: "Cellular ATP support for sustained physical and mental output." },
    ]}
    experience={[
      { time: "T + 0:00", label: "dissolve", body: "Strip placed. Soft herbal note on the tongue." },
      { time: "T + 0:12", label: "settle", body: "Tension softens. The next thing feels manageable again." },
      { time: "T + 0:40", label: "carry on", body: "Clear, even, steady — for hours, not minutes." },
    ]}
  />
);

export default Shift;