import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const About = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">
              Company
            </span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">
              about kyne
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A small Canadian team building the supplement protocol we couldn't buy.
            </p>
          </div>

          <div className="mt-16 space-y-8 text-base leading-relaxed text-muted-foreground" data-reveal>
            <p>
              KYNE Protocol Inc. was founded in Canada with a single thesis: the supplement
              industry has been selling absorption it can't deliver. Capsules lose 80–90% of their
              active compounds to stomach acid and first-pass liver metabolism. The bottle on your
              counter is, mostly, expensive urine.
            </p>
            <p>
              We started by reading the pharmacology literature — sublingual delivery, mucoadhesive
              films, permeation enhancers, protease inhibitors. None of it was new science. It was
              just absent from the supplement aisle, because films are harder to formulate, harder
              to manufacture, and harder to get right than a #00 capsule.
            </p>

            <div className="my-12 border-l-2 border-[#d4a574] pl-6" data-reveal>
              <p className="font-display text-xl font-light text-foreground">
                We invented PEPI™
              </p>
              <p className="mt-3">
                Permeation-Enhanced Protective Immunofilm — a multi-layer mucoadhesive sublingual
                strip that locks against the tissue under your tongue, opens tight junctions for
                absorption, and shields actives from enzymatic breakdown. Independent in-vitro
                models show 6–15× the bioavailability of equivalent capsules.
              </p>
            </div>

            <p data-reveal>
              We work with a vetted contract manufacturer in Asia — the only region with mature
              OTF (oral thin film) capacity at pharmaceutical-grade tolerances. Every batch is
              tested by an independent third-party lab in North America and shipped from our
              Canadian fulfillment partner.
            </p>

            <h2 className="mt-16 font-display text-2xl font-light tracking-tight text-foreground" data-reveal>
              what we believe
            </h2>
            <ul className="mt-6 space-y-4 list-none pl-0" data-reveal>
              <li><span className="text-foreground font-medium">Delivery is the formula.</span> A 50mg dose at 60% absorption beats a 500mg dose at 8%.</li>
              <li><span className="text-foreground font-medium">Timing is part of the dose.</span> Cortisol, melatonin, NAD+, and dopamine all run on a clock. Your supplements should too.</li>
              <li><span className="text-foreground font-medium">Less, but better.</span> No proprietary blends. No 47-ingredient kitchen sinks. Eight lines, three windows each.</li>
              <li><span className="text-foreground font-medium">Earn the claim.</span> If we can't cite the study, we don't make the claim.</li>
            </ul>

            <h2 className="mt-16 font-display text-2xl font-light tracking-tight text-foreground" data-reveal>
              who we are
            </h2>
            <p data-reveal>
              We're a small operating team — formulation, supply chain, software. No venture
              capital. No conglomerate parent. We answer to customers and to the science, in
              that order.
            </p>

            <div className="mt-12 flex flex-wrap gap-4" data-reveal>
              <Link to="/science" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">
                read the science →
              </Link>
              <Link to="/quality" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">
                quality standards →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
