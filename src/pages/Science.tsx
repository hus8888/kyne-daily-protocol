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
              why sublingual delivery?
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Skip digestion. Bypass first-pass metabolism. Get active compounds into your bloodstream in 90 seconds.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container max-w-3xl space-y-12">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">01 — speed</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">90 seconds vs 30 minutes</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Capsules need to travel through your stomach, dissolve, and wait for intestinal absorption. 
              Sublingual strips dissolve under your tongue and deliver compounds directly into the bloodstream 
              through the highly vascularized mucosa. First measurable blood levels appear within 2-5 minutes.
            </p>
          </div>

          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">02 — bypassing first-pass metabolism</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">skip the liver's metabolic tax</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When you swallow a supplement, everything absorbed in your intestines goes straight to your liver 
              via portal circulation. CYP450 enzymes metabolize a significant fraction before it reaches systemic 
              circulation. Sublingual delivery enters through the lingual venous drainage, bypassing hepatic 
              first-pass metabolism entirely.
            </p>
          </div>

          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">03 — convenience</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">no water, no swallowing, no waiting</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Place the strip under your tongue. It dissolves in seconds. You're done. 
              No pill bottles, no measuring, no need to time it with food or water. 
              Take it during your morning coffee, in the car, or before a meeting.
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
              {n:"01", t:"Mucoadhesive matrix", d:"Hydroxypropyl methylcellulose + carbopol polymers adhere to sublingual tissue, preventing premature dissolution and maximizing contact time (5-8 minutes)."},
              {n:"02", t:"Permeation enhancers", d:"GRAS-status surfactants and fatty acid esters temporarily increase membrane permeability, allowing polar molecules to cross more efficiently."},
              {n:"03", t:"Rapid-dissolve film", d:"Water-soluble polymer matrix dissolves in 15-30 seconds, releasing actives immediately into the sublingual space for absorption."},
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
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">clinical evidence</span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-foreground">what the research shows</h2>
            <p className="mt-3 text-sm text-muted-foreground">Based on peer-reviewed clinical trials published 2024-2026.</p>
          </div>
          <div className="mt-10 space-y-6" data-reveal>
            <div className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-display text-lg font-light tracking-tight text-foreground">Vitamin D₃ (Buccal Nanoemulsion)</div>
              <p className="mt-2 text-sm text-muted-foreground">
                In patients with IBD, buccal spray achieved comparable efficacy to conventional oral drops at 
                approximately half the dose (1,143 IU/day vs 2,000 IU/day), suggesting roughly 2× improved bioavailability.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Source: Kojecký et al. (2025). <em>Front. Med.</em> 12:1649677. Randomized trial, n=120.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-display text-lg font-light tracking-tight text-foreground">Vitamin B₁₂ (Sublingual vs Oral)</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Meta-analysis of 16 studies (6,098 participants) found sublingual and oral B₁₂ equally effective 
                in raising serum cobalamin levels. No statistically significant difference (p=0.270). 
                Both routes outperformed placebo by approximately 400 pg/mL.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Source: PMC 12757266 (2025). Systematic review & meta-analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-display text-lg font-light tracking-tight text-foreground">NMN (Sublingual Administration)</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Sublingual NMN increased terminal catabolites (2PY, 4PY) more rapidly than oral administration in the 
                first 60 minutes. However, no significant difference in circulating NMN, NAM, or NAD⁺ levels was observed 
                between routes.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Source: Sci Rep. 2026 Jun 16;16(1):27464. Randomized crossover, n=14.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#d4a574]/30 bg-[#d4a574]/[0.05] p-6" data-reveal>
            <div className="font-display text-sm font-medium text-foreground">Important note</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The primary advantage of sublingual delivery for most compounds is <strong>speed and convenience</strong>, 
              not dramatically higher bioavailability. For individuals with normal GI function, sublingual absorption 
              is typically 1.5-2× more efficient than oral, not 10-15×. The exception is individuals with malabsorption 
              disorders, post-bariatric surgery, or conditions affecting intrinsic factor.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">references</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">selected literature</h2>
          </div>
          <ol className="mt-8 space-y-4 text-sm text-muted-foreground" data-reveal>
            <li>1. Kojecký V, et al. Improved bioavailability of buccal nanoemulsion vitamin D. <em>Front Med.</em> 2025;12:1649677.</li>
            <li>2. Efficacy of sublingual and oral vitamin B12 versus intramuscular administration. <em>PMC</em> 12757266, 2025.</li>
            <li>3. Sublingual NMN administration increases early circulating terminal catabolites. <em>Sci Rep.</em> 2026;16(1):27464.</li>
            <li>4. Patel VF et al. Mucosal Drug Delivery. <em>J Control Release.</em> 2011;153(2):106–116.</li>
            <li>5. Rathbone MJ, Hadgraft J. Absorption of drugs from the human oral cavity. <em>Int J Pharm.</em> 1991;74:9–24.</li>
            <li>6. Sohi H et al. Permeation enhancers in oral mucosa. <em>Drug Dev Ind Pharm.</em> 2010;36(3):254–82.</li>
          </ol>

          <div className="mt-12 flex flex-wrap gap-4" data-reveal>
            <Link to="/compare/capsules" className="rounded-full bg-[#d4a574] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">vs capsules →</Link>
            <Link to="/research" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">full research →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Science;
