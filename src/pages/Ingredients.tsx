import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { useState } from "react";

type Ing = { name: string; dose: string; lines: string[]; window: string; mech: string };

const INGREDIENTS: Ing[] = [
  // d3+k
  { name: "Vitamin D3 (cholecalciferol)", dose: "2500–5000 IU", lines: ["d3+k"], window: "AM/D/N", mech: "Steroid hormone precursor; nuclear-receptor signaling for calcium absorption, immune homeostasis, and mood regulation. Potent at microgram scale — ideal strip active." },
  { name: "Vitamin K2-MK7 (MenaQ7®)", dose: "100–200 mcg", lines: ["d3+k"], window: "AM/D/N", mech: "Activates osteocalcin and matrix-Gla protein; directs calcium to bone and away from arterial soft tissue. Works synergistically with D3." },
  // core
  { name: "KSM-66 Ashwagandha", dose: "300 mg", lines: ["core"], window: "AM", mech: "Clinically validated full-spectrum root extract. Withanolides are lipophilic — strong buccal absorption. Supports cortisol balance and sustained energy without stimulants." },
  { name: "L-Tyrosine", dose: "200 mg", lines: ["core","mind"], window: "AM", mech: "Catecholamine precursor. Converts to dopamine and norepinephrine — supporting motivation, cognitive endurance, and drive under load." },
  { name: "SHR-5 Rhodiola rosea", dose: "200 mg", lines: ["core","mind"], window: "D", mech: "Standardized to rosavins and salidroside. Adaptogenic HPA axis modulation; supports mental endurance and cortisol smoothing." },
  { name: "Phosphatidylserine (sunflower)", dose: "100 mg", lines: ["core","mind"], window: "D/N", mech: "Phospholipid building block for neuronal membranes. Modulates evening cortisol. Emulsified in lipophilic PEPI layer." },
  { name: "Magnesium Glycinate", dose: "200 mg compound (~28 mg elemental)", lines: ["core","d3+k","mind","nerve"], window: "N", mech: "Strip-feasible form of magnesium. 2023 RCT meta-analysis (n=2,132) shows 200–400mg elemental reduces sleep onset latency ~17 min. Replaces Magtein across all night variants." },
  { name: "Apigenin", dose: "50 mg", lines: ["core","mind"], window: "N", mech: "Chamomile-derived flavonoid. Binds gently to benzodiazepine receptors. Low mass, high buccal compatibility, no sedation hangover." },
  { name: "Glycine", dose: "100 mg", lines: ["core","mito"], window: "N", mech: "Inhibitory amino acid that lowers core body temperature — the physiological trigger for sleep onset. Collagen synthesis cofactor." },
  { name: "Methylcobalamin (B12)", dose: "500–1000 mcg", lines: ["nerve","core"], window: "AM", mech: "Active methyl form of B12. Sublingual absorption matches injection-route bioavailability. Myelin synthesis and homocysteine regulation. Tiny mass, strips perfectly." },
  // gut
  { name: "Theracurmin® Curcumin", dose: "90 mg (nano-emulsion)", lines: ["gut","age"], window: "AM/D", mech: "Nano-emulsion curcumin with 6x oral bioavailability vs standard. Anti-inflammatory via NF-kB pathway. Integrates well in lipophilic PEPI layer." },
  { name: "Dihydroberberine (DHB)", dose: "200 mg", lines: ["gut","age"], window: "D", mech: "Reduced metabolite of berberine. Uncharged tertiary amine — buccal viable unlike berberine HCl. 200mg DHB produces greater plasma berberine AUC than 500mg standard berberine (PMC 2021 RCT). AMPK activator; glycemic and microbiome support." },
  { name: "Zinc Carnosine", dose: "37.5–75 mg", lines: ["gut"], window: "AM/N", mech: "Zinc-carnosine chelate that adheres strongly to gastric mucosa. Clinically validated for mucosal lining repair, tight-junction upregulation, and NSAID-damage protection at 75mg twice daily." },
  { name: "DGL Licorice Extract", dose: "150 mg", lines: ["gut"], window: "N", mech: "Deglycyrrhizinated licorice — glycyrrhizin removed to eliminate blood-pressure concern. Stimulates mucus-producing cells for overnight mucosal protection. Low mass, strip compatible." },
  { name: "Quercetin", dose: "150 mg", lines: ["gut","age"], window: "AM/N", mech: "Polyphenol flavonoid. Tight-junction support, anti-inflammatory, and senolytic activity in combination protocols. Strip feasible at this dose." },
  // mind
  { name: "Lion's Mane 8:1 Extract", dose: "150 mg (equiv ~1.2g raw)", lines: ["mind"], window: "AM/N", mech: "Standardized fruiting body extract. Hericenones and erinacines stimulate NGF and BDNF synthesis. 8:1 concentration keeps strip payload practical. 250mg/day raw equivalent showed cognitive improvement in 16-week RCT." },
  { name: "Alpha-GPC (Cognizin®)", dose: "150–300 mg", lines: ["mind","nerve"], window: "AM", mech: "Cholinergic precursor with ODF sublingual market precedent. Highly hygroscopic — requires foil packaging and moisture control. 300mg in mind-morning; 150mg in nerve-morning." },
  { name: "Bacognize® Bacopa monnieri", dose: "300 mg", lines: ["mind"], window: "D", mech: "Standardized bacosides extract for memory consolidation and synaptic plasticity. Cumulative benefits over 8–12 weeks of consistent daily use." },
  { name: "L-Theanine", dose: "100–150 mg", lines: ["core","mind","nerve"], window: "D/N", mech: "Alpha-wave EEG signature. High buccal absorption, taste neutral, fast onset. One of the best strip-native actives. 150mg in core-day; 100mg in mind-day, nerve-night, core-night." },
  // mito
  { name: "NMN (nicotinamide mononucleotide)", dose: "300 mg", lines: ["mito"], window: "AM", mech: "NAD+ precursor with real buccal advantage — hepatic first-pass bypass. 300mg/day shows statistically significant blood NAD+ increase at day 30 and 60 in RCTs. Monitor FDA regulatory status." },
  { name: "PQQ (pyrroloquinoline quinone)", dose: "20 mg", lines: ["mito"], window: "AM", mech: "Mitochondrial biogenesis cofactor. Potent at low mass — excellent strip active. Supports PGC-1alpha pathway and mitochondrial density." },
  { name: "CoQ10 / Ubiquinol (Kaneka QH®)", dose: "100 mg", lines: ["mito"], window: "AM/N", mech: "Reduced form of CoQ10. Electron transport chain Complex I/III. Lipophilic — delivered in PEPI lipid layer. Buccal route dramatically improves on ~3% oral bioavailability." },
  { name: "Mitopure® Urolithin A", dose: "500 mg", lines: ["mito"], window: "D", mech: "Clinical evidence floor is 500mg/day. Induces mitophagy via PINK1/Parkin pathway. Single-hero strip — uncompromised dose. Amazentis OTF licensing must be confirmed before production." },
  { name: "ALCAR (acetyl-L-carnitine)", dose: "200 mg", lines: ["mito"], window: "N", mech: "Mitochondrial fatty acid transport cofactor. Acetyl group supports acetylcholine synthesis. Dosed at 200mg in night stack to maintain payload headroom." },
  // nerve
  { name: "Levagen+® PEA", dose: "300 mg", lines: ["nerve"], window: "D", mech: "Palmitoylethanolamide. Endocannabinoid-adjacent signaling; anti-inflammatory and neuroprotective. Co-micronized form has enhanced absorption. Strip feasible at 300mg." },
  { name: "Pharma-GABA®", dose: "100 mg", lines: ["nerve"], window: "N", mech: "Naturally-fermented GABA (Pharma Foods International). Evidence-supported range for stress/calm: 2–100mg. Reduced from 500mg — no clinical evidence for that dose. Buccal route may engage vagal-tone pathway." },
  { name: "P5P (pyridoxal-5-phosphate)", dose: "50 mg", lines: ["nerve"], window: "N", mech: "Active form of B6. Essential cofactor for GABA, serotonin, and dopamine synthesis. Low mass, strip compatible." },
  // age
  { name: "Resvida® Resveratrol", dose: "150 mg", lines: ["age"], window: "AM", mech: "Pharmaceutical-grade trans-resveratrol. SIRT1 activator. Buccal route bypasses near-total hepatic first-pass — 150mg buccal likely rivals 500mg+ oral for systemic exposure." },
  { name: "Setria® Glutathione", dose: "250 mg", lines: ["age"], window: "N", mech: "The standout active in the portfolio for strip format. Orobuccal absorption >80% vs <10% oral. 250mg/day Setria increased whole blood glutathione by 17% at 6 months in published RCT. Master antioxidant and detoxification cofactor." },
  { name: "Spermidine", dose: "1 mg", lines: ["age"], window: "N", mech: "Polyamine autophagy activator via TFEB pathway. Micro-dose active — ideal strip ingredient. Emerging longevity evidence. Sourced from wheat-germ extract (Holoprotein or Biomvita)." },
];

const ALL_LINES = ["all","core","d3+k","gut","mind","mito","nerve","age"];

const Ingredients = () => {
  useScrollReveal();
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? INGREDIENTS : INGREDIENTS.filter(i => i.lines.includes(filter));

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-12">
        <div className="container max-w-4xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Catalog</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">ingredients</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Every active in the KYNE protocol. Pharmaceutical-grade, evidence-dosed, sublingually delivered.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" data-reveal>
            {ALL_LINES.map(l => (
              <button key={l} onClick={()=>setFilter(l)} className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition ${filter===l?"border-[#d4a574] bg-[#d4a574]/10 text-foreground":"border-border bg-background text-muted-foreground hover:border-[#d4a574]/60"}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-4xl space-y-3">
          {filtered.map((ing) => (
            <div key={ing.name} className="rounded-2xl border border-border bg-white/60 p-6 transition hover:border-[#d4a574]/60" data-reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-light tracking-tight text-foreground">{ing.name}</h3>
                <span className="font-mono text-xs text-[#d4a574]">{ing.dose} · {ing.window}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ing.mech}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ing.lines.map(l => (
                  <span key={l} className="rounded-full border border-border bg-surface/40 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-3xl text-center">
          <p className="text-sm text-muted-foreground" data-reveal>
            Don't see something? Email <a href="mailto:science@kyne.health" className="text-[#d4a574]">science@kyne.health</a> — we publish full ingredient panels for every SKU.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4" data-reveal>
            <Link to="/stack" className="rounded-full bg-[#d4a574] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">build a stack →</Link>
            <Link to="/science" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">how delivery works →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Ingredients;
