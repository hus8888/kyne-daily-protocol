import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Accessibility = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Legal</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight">accessibility</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 29, 2026</p>
          </div>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground" data-reveal>
            <p>
              KYNE Protocol Inc. is committed to making kyne.health usable for everyone, regardless
              of ability or assistive technology. We design and build to the Web Content
              Accessibility Guidelines (WCAG) 2.1 Level AA standard.
            </p>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">what we do</h2>
              <ul className="mt-3 space-y-2">
                <li>• Semantic HTML and proper heading hierarchy.</li>
                <li>• Keyboard navigation across every interactive element.</li>
                <li>• Visible focus indicators that meet 3:1 contrast.</li>
                <li>• Color contrast meeting AA on body text and AAA on critical CTAs.</li>
                <li>• Alt text on every meaningful image.</li>
                <li>• `prefers-reduced-motion` honored — animations disable cleanly.</li>
                <li>• Screen-reader testing on NVDA, JAWS, and VoiceOver before each release.</li>
                <li>• Form labels, error messages, and ARIA live regions where appropriate.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">known gaps</h2>
              <p className="mt-3">
                Some of our scroll-reveal animations and the ingredient catalog filter rely on
                JavaScript. The site degrades to readable HTML with JS disabled, but interactive
                filtering will not work in that mode. We're tracking this for our next accessibility
                review.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">accommodations & feedback</h2>
              <p className="mt-3">
                If you encounter a barrier, need an alternative format (large print, plain-text
                email order summaries, or assisted ordering by phone), or have feedback that
                would make the site better — email <a href="mailto:access@kyne.health" className="text-[#d4a574]">access@kyne.health</a>.
                We respond within 2 business days and resolve confirmed issues within 30 days where feasible.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">third-party content</h2>
              <p className="mt-3">
                Some embedded video, payment, and analytics components are provided by third
                parties. We choose vendors with documented WCAG conformance and report issues
                upstream when we find them.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">jurisdiction</h2>
              <p className="mt-3">
                As a Canadian company, we work toward the standards set by the Accessible Canada
                Act and the AODA (for Ontario). We also align with the U.S. ADA and Section 508
                guidance for our American customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Accessibility;
