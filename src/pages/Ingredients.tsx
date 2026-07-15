import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { useState } from "react";

type Ing = { name: string; dose: string; lines: string[]; window: string; mech: string };

const INGREDIENTS: Ing[] = [
  { name: "Vitamin D3 (cholecalciferol)", dose: "2000–4000 IU", lines: ["d3+k","core"], window: "AM", mech: "Steroid hormone precursor; nuclear-receptor signaling for calcium/immune homeostasis." },
  { name: "Vitamin K2 (MK-7)", dose: "100–180 mcg", lines: ["d3+k","age"], window: "N", mech: "Activates osteocalcin and matrix-Gla protein; directs calcium to bone and away from soft tissue." },
  { name: "Magnesium Bisglycinate", dose: "100–200 mg", lines: ["d3+k","mind","nerve"], window: "N", mech: "Glycine-chelated magnesium; cofactor for >300 enzymes; GABA-A modulator at night." },
  { name: "Boron (sodium borate)", dose: "3–5 mg", lines: ["d3+k","age"], window: "N", mech: "Modulates steroid hormone half-life; supports bone mineralization." },
  { name: "L-Glutamine", dose: "200 mg", lines: ["gut"], window: "N", mech: "Primary fuel for enterocytes; supports tight-junction integrity." },
  { name: "Zinc Carnosine", dose: "37.5 mg", lines: ["gut"], window: "N", mech: "Mucosal-protective chelate; clinically validated for gastric lining repair." },
  { name: "Decolorized Aloe Vera", dose: "50 mg", lines: ["gut"], window: "N", mech: "Acemannan-rich polysaccharide; soothes mucosa without anthraquinones." },
  { name: "Lion's Mane (8:1 extract)", dose: "100 mg", lines: ["mind"], window: "AM/N", mech: "Hericenones and erinacines stimulate NGF and BDNF pathways." },
  { name: "Phosphatidylserine (sunflower)", dose: "100 mg", lines: ["mind"], window: "N", mech: "Phospholipid building-block; modulates evening cortisol." },
  { name: "L-Theanine", dose: "100–200 mg", lines: ["mind","core"], window: "AM/D", mech: "Alpha-wave EEG signature; reduces caffeine jitter without sedation." },
  { name: "Niagen® Nicotinamide Riboside (NR)", dose: "100 mg", lines: ["mito","age"], window: "AM/D/N", mech: "NAD+ precursor; supports mitochondrial sirtuin and SIRT3 activity." },
  { name: "Shilajit (PrimaVie®)", dose: "100 mg", lines: ["mito"], window: "N", mech: "Fulvic-acid complex; CoQ10 cofactor; mitochondrial bioenergetics." },
  { name: "Ubiquinol (Kaneka QH®, nano)", dose: "50 mg", lines: ["mito","age"], window: "N", mech: "Reduced form of CoQ10; electron transport chain Complex I/III." },
  { name: "PharmaGABA®", dose: "200 mg", lines: ["nerve"], window: "N", mech: "Naturally-fermented GABA; vagal-tone calming via sublingual route." },
  { name: "Methylcobalamin (B12)", dose: "500–1000 mcg", lines: ["nerve","mito"], window: "AM", mech: "Methyl-donor coenzyme; myelin synthesis; sublingual is the gold standard." },
  { name: "Honokiol (magnolia bark)", dose: "30–50 mg", lines: ["core"], window: "N", mech: "GABA-A modulator; anxiolytic without sedation hangover." },
  { name: "Melatonin", dose: "0.3 mg", lines: ["core"], window: "N", mech: "Physiologic dose matching natural pineal output; chronobiotic, not sedative." },
  { name: "Glycine", dose: "200 mg", lines: ["core"], window: "N", mech: "Inhibitory amino acid; lowers core body temperature for sleep onset." },
  { name: "Spermidine (wheat-germ)", dose: "3 mg", lines: ["age"], window: "N", mech: "Polyamine; induces autophagy via TFEB pathway." },
  { name: "S-Acetyl Glutathione (Setria®)", dose: "75 mg", lines: ["age"], window: "N", mech: "Acetylated glutathione; sublingual-stable; master antioxidant." },
  { name: "Quercetin Phytosome", dose: "75 mg", lines: ["age"], window: "N", mech: "Flavonoid; senolytic activity in combination with fisetin." },
  { name: "Caffeine (anhydrous, low-dose)", dose: "40 mg", lines: ["core"], window: "AM", mech: "Adenosine A1/A2A antagonist at 1/3 the dose of coffee." },
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
