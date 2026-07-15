import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Story = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Company
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tightest sm:text-5xl">
              Our Story
            </h1>
          </div>

          <div className="mt-16 space-y-8 text-base leading-relaxed text-muted-foreground" data-reveal>
            <p>
              KYNE started with a simple frustration: supplements don't work the way they should.
            </p>
            <p>
              You buy a bottle of capsules. You swallow them with water. Your stomach acid destroys
              most of the active compounds before they ever reach your bloodstream. What survives
              gets filtered by your liver. By the time anything actually gets where it needs to go,
              you've absorbed maybe 10-15% of what you paid for.
            </p>
            <p>
              We thought that was a solvable problem.
            </p>
            <p>
              The sublingual route — under the tongue — bypasses all of that. Direct absorption
              into the bloodstream through the thin membrane beneath your tongue. No stomach acid.
              No liver first-pass. Bioavailability jumps from 10% to 60-70%.
            </p>
            <p>
              But existing sublingual strips were basic. Single-layer films that dissolve too fast,
              slide around in your mouth, and don't do anything special to enhance absorption. They
              were better than pills, but not by much.
            </p>
            <p>
              So we built something better.
            </p>

            <div className="my-12 border-l-2 border-foreground/20 pl-6" data-reveal>
              <p className="text-lg font-medium text-foreground">
                PEPI — Permeation-Enhanced Protective Immunofilm
              </p>
              <p className="mt-3">
                Our proprietary strip technology combines mucoadhesive polymers that lock the strip
                in place, permeation enhancers that actively improve absorption through the sublingual
                membrane, and protease inhibitors that shield compounds from enzymatic breakdown.
              </p>
            </div>

            <p data-reveal>
              The result: a strip that stays where you put it, protects what's inside it, and
              delivers more of it into your blood than anything else on the market.
            </p>
            <p data-reveal>
              We designed three strips — morning, day, and night — because your body needs different
              things at different times. Not a one-size-fits-all multivitamin. A protocol. Calibrated
              compounds, delivered at the right time, in the right way.
            </p>
            <p data-reveal>
              We're a small team based in Canada. We're not backed by venture capital or owned by a
              conglomerate. We built KYNE because we wanted it to exist — and because we believe
              the supplement industry has been getting away with selling expensive urine for too long.
            </p>
            <p className="text-foreground font-medium" data-reveal>
              Better delivery. Better ingredients. Better timing. That's the protocol.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Story;
