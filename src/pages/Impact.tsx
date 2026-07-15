import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Impact = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Impact</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">sustainability</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              The supplement aisle is a graveyard of plastic bottles. Strips don't have to be.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-4xl">
          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">a 90-day side-by-side</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              One quarter of supplementation. Capsule stack vs. KYNE PEPI™ strips.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border" data-reveal>
            <table className="w-full text-sm">
              <thead className="bg-surface/60 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <tr><th className="px-5 py-4">over 90 days</th><th className="px-5 py-4">capsules</th><th className="px-5 py-4">kyne</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Plastic bottles", "5–8 HDPE bottles", "0"],
                  ["Plastic weight (g)", "~280 g", "~12 g (foil)"],
                  ["Cotton + desiccant inserts", "Yes (each bottle)", "None"],
                  ["Outer cartons", "Per-bottle paperboard", "Recycled paperboard outer only"],
                  ["Total package volume shipped", "~3.4 L", "~0.8 L"],
                  ["Cold-chain required", "Some (fish oil, probiotics)", "No"],
                ].map((r)=>(
                  <tr key={r[0]}><td className="px-5 py-4 text-foreground">{r[0]}</td><td className="px-5 py-4 text-muted-foreground">{r[1]}</td><td className="px-5 py-4 font-medium text-[#d4a574]">{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-4xl grid gap-6 md:grid-cols-2" data-reveal>
          {[
            {t:"foil pouch primary pack", d:"Mono-material aluminum-laminate foil pouch — recyclable through TerraCycle (we cover the program). The right balance between barrier protection (no oxygen, no light) and post-consumer recovery."},
            {t:"recycled paperboard outer", d:"FSC-certified, 70% post-consumer recycled fiber, soy-based inks. Curbside-recyclable everywhere in North America."},
            {t:"no plastic fillers", d:"No air pillows, no peanuts. Recycled-paper void fill where needed for transit."},
            {t:"carbon-neutral shipping", d:"All Canadian and US orders are carrier-offset by default through Pachama-verified forestry projects. No checkbox required."},
            {t:"smaller dose, smaller footprint", d:"Higher bioavailability means lower mg per serving — which means less raw material extracted, transported, and disposed of for the same biological effect."},
            {t:"manufacturing in asia, deliberately", d:"OTF capacity is concentrated in Asia. Air-shipping a single 6-month inventory wave generates less per-unit emissions than fragmented domestic small-batch runs would. We publish lifecycle assumptions on request."},
          ].map((c)=>(
            <div key={c.t} className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-display text-lg font-light tracking-tight text-foreground">{c.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-3xl space-y-10">
          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">ethics & sourcing</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We work with branded actives (Niagen®, Setria®, Kaneka QH®, PharmaGABA®, PrimaVie®)
              specifically because they come with documented supply chains, sustainability audits,
              and IP protection for the small farms and processors that produce the raw inputs.
              We don't buy commodity-grade raw material on the spot market.
            </p>
          </div>
          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">what we're still working on</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Compostable foil alternative — current barrier candidates fail oxygen-transmission testing for our melatonin and ubiquinol SKUs. R&D is active.</li>
              <li>• Refill model for subscription customers — pilot launching late 2026.</li>
              <li>• Annual third-party impact audit — first publication targeted for Q3 2026.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#d4a574]/60 bg-gradient-to-br from-[#d4a574]/[0.18] to-[#d4a574]/[0.04] p-8" data-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">honest disclosure</p>
            <p className="mt-3 text-foreground">
              The most sustainable supplement is the one you don't take. We try to make sure
              every dose in your KYNE protocol is doing measurable work — because the second-most
              sustainable supplement is the one that absorbs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Impact;
