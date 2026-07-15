import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const Quality = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Quality</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">quality & standards</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Pharmaceutical-grade manufacturing. Independent third-party verification. Every batch.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container max-w-4xl grid gap-6 md:grid-cols-2">
          {[
            {e:"01",t:"GMP-certified manufacturing",d:"Our oral thin film (OTF) is produced in a cGMP-compliant facility with ISO 9001 and ISO 22000 certifications. The same standards used for prescription buccal and sublingual films."},
            {e:"02",t:"Pharmaceutical-grade actives",d:"USP / EP / JP-grade raw materials, sourced from audited suppliers. No proprietary blends. Every milligram is on the panel."},
            {e:"03",t:"Independent third-party testing",d:"Every production batch is sent to an ISO/IEC 17025 accredited North American lab for identity, potency, microbial, and heavy-metal testing before release."},
            {e:"04",t:"COA on request",d:"Certificates of Analysis are available for any lot. Email science@kyne.health with the lot number printed on your pouch."},
            {e:"05",t:"Asia-based OTF manufacturing",d:"Asia is the only region with mature pharmaceutical-grade oral thin film capacity at the volumes and tolerances PEPI™ requires. We audit our partner annually and hold a master batch record on file."},
            {e:"06",t:"Canadian fulfillment",d:"All North American orders ship from our Ontario fulfillment partner. Climate-controlled warehousing. Tamper-evident sealing."},
          ].map((c)=>(
            <div key={c.e} className="rounded-2xl border border-border bg-white/60 p-6" data-reveal>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">{c.e}</div>
              <div className="mt-3 font-display text-lg font-light tracking-tight text-foreground">{c.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container max-w-3xl space-y-10">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">testing panel</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">what we test for, every batch</h2>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li>• Identity (HPLC / HPTLC)</li>
              <li>• Potency (% label claim)</li>
              <li>• Heavy metals (Pb, Cd, As, Hg)</li>
              <li>• Microbial (TAMC, TYMC, E. coli, Salmonella)</li>
              <li>• Residual solvents (USP &lt;467&gt;)</li>
              <li>• Mycotoxins (where applicable)</li>
              <li>• Dissolution time & uniformity</li>
              <li>• Mucoadhesion strength</li>
            </ul>
          </div>

          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">what we don't use</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">free-from list</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Artificial colors. Artificial sweeteners (no aspartame, sucralose, ace-K).
              Titanium dioxide. PEG-derived solvents above trace levels. Magnesium stearate.
              Soy. Gluten. Animal-derived gelatin. Ethanol carriers. GMO actives.
            </p>
          </div>

          <div className="rounded-3xl border border-[#d4a574]/60 bg-gradient-to-br from-[#d4a574]/[0.18] to-[#d4a574]/[0.04] p-8" data-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">request a coa</p>
            <p className="mt-3 text-foreground">
              Have a lot number? We'll send the full third-party Certificate of Analysis.
            </p>
            <a href="mailto:science@kyne.health?subject=COA%20Request" className="mt-5 inline-block rounded-full bg-[#d4a574] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">email science@kyne.health</a>
          </div>

          <div className="flex flex-wrap gap-4" data-reveal>
            <Link to="/science" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">the science →</Link>
            <Link to="/ingredients" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">ingredient catalog →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Quality;
