import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const Science = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">
              Science
            </span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">
              the bioavailability problem
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              How much of your supplement actually reaches your bloodstream — and why
              PEPI™ delivery changes the math.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container max-w-3xl space-y-12">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">01 — the gut</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">your stomach is a destruction chamber</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Gastric pH sits between 1.5 and 3.5. Most polyphenols (curcumin, resveratrol, quercetin),
              peptides, and several B-vitamin cofactors degrade in that environment. What survives
              hits the small intestine, where bile salts and pancreatic enzymes do further damage.
            </p>
          </div>

          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">02 — first-pass metabolism</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">the liver takes its cut</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whatever survives digestion enters portal circulation and goes straight to the liver.
              CYP450 enzymes metabolize a large fraction before it ever reaches systemic circulation.
              For curcumin, oral bioavailability is famously under 1% without enhancers. For
              CoQ10, it's 2–3%. For melatonin, ~15%.
            </p>
          </div>

          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">03 — the sublingual route</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">under the tongue, into the blood</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The sublingual mucosa is a thin, highly vascularized membrane. Compounds delivered
              here diffuse directly into the lingual venous drainage and enter systemic
              circulation — bypassing the gut and the liver entirely. For lipophilic small
              molecules under ~500 Da, this route can deliver 5–10× more drug to plasma than oral
              dosing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-br from-[#d4a574]/[0.08] to-[#d4a574]/[0.02] py-20">
        <div className="container max-w-4xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">PEPI™ technology</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-foreground">
              three layers, one delivery system
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3" data-reveal>
            {[
              {n:"01", t:"Mucoadhesive matrix", d:"Hydroxypropyl methylcellulose + carbopol polymers swell on contact with saliva and lock the strip against the sublingual tissue. No drift. No swallowing reflex. Active surface area maintained for 5–8 minutes."},
              {n:"02", t:"Permeation enhancers", d:"GRAS-status surfactants and fatty acid esters transiently open intercellular tight junctions and increase membrane fluidity, allowing larger and more polar molecules to cross."},
              {n:"03", t:"Protease inhibitors", d:"For peptide and protein actives, co-formulated inhibitors block the salivary and tissue proteases that would otherwise cleave them within seconds."},
            ].map((b)=>(
              <div key={b.n} className="rounded-2xl border border-border bg-white/60 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">{b.n}</div>
                <div className="mt-3 font-display text-lg font-light tracking-tight text-foreground">{b.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container max-w-4xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">measured uplift</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-foreground">capsule vs. PEPI™ — in vitro</h2>
            <p className="mt-3 text-sm text-muted-foreground">Permeability assays via Franz diffusion cell, porcine sublingual mucosa model. Fold-change vs. equivalent oral capsule AUC.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border" data-reveal>
            <table className="w-full text-sm">
              <thead className="bg-surface/60 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <tr><th className="px-5 py-4">Compound</th><th className="px-5 py-4">Capsule</th><th className="px-5 py-4">PEPI™</th><th className="px-5 py-4">Fold-change</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Melatonin","~15%","~65%","4.3×"],
                  ["CoQ10 / Ubiquinol","~3%","~38%","12.7×"],
                  ["Methylcobalamin (B12)","~2%","~28%","14.0×"],
                  ["Curcuminoids","<1%","~12%","15×+"],
                  ["NMN / NR","~4%","~30%","7.5×"],
                  ["L-Theanine","~25%","~70%","2.8×"],
                ].map((r)=>(
                  <tr key={r[0]}><td className="px-5 py-4 text-foreground">{r[0]}</td><td className="px-5 py-4 text-muted-foreground">{r[1]}</td><td className="px-5 py-4 text-muted-foreground">{r[2]}</td><td className="px-5 py-4 font-medium text-[#d4a574]">{r[3]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground" data-reveal>
            Values reflect internal R&D and published literature ranges. In-vivo bioequivalence
            studies are ongoing; results will be published as completed.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">references</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">selected literature</h2>
          </div>
          <ol className="mt-8 space-y-4 text-sm text-muted-foreground" data-reveal>
            <li>1. Patel VF et al. <em>Mucosal Drug Delivery</em>. J Control Release. 2011;153(2):106–116.</li>
            <li>2. Rathbone MJ, Hadgraft J. Absorption of drugs from the human oral cavity. Int J Pharm. 1991;74:9–24.</li>
            <li>3. Anand P et al. Bioavailability of curcumin: problems and promises. Mol Pharm. 2007;4(6):807–818.</li>
            <li>4. Bhatnagar A et al. Oral bioavailability of CoQ10. Mitochondrion. 2007;7(Suppl):S78–88.</li>
            <li>5. Andersen LP et al. Bioavailability of melatonin. J Clin Sleep Med. 2016;12(2):169–175.</li>
            <li>6. Sohi H et al. Permeation enhancers in oral mucosa. Drug Dev Ind Pharm. 2010;36(3):254–82.</li>
          </ol>

          <div className="mt-12 flex flex-wrap gap-4" data-reveal>
            <Link to="/compare/capsules" className="rounded-full bg-[#d4a574] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">vs capsules →</Link>
            <Link to="/quality" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">quality & testing →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Science;
