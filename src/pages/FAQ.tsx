import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "What are KYNE strips?",
    a: "KYNE strips are sublingual oral dissolving films — thin strips you place under your tongue. They dissolve in 3-5 minutes and deliver active compounds directly into your bloodstream through the sublingual membrane, bypassing your digestive system for faster, more efficient absorption.",
  },
  {
    q: "How is this different from pills or capsules?",
    a: "When you swallow a pill, it passes through your stomach and liver before reaching your blood — destroying up to 80-90% of the active compounds along the way. KYNE strips deliver ingredients sublingually, skipping that entire process. You get more of what you paid for, faster.",
  },
  {
    q: "What is PEPI technology?",
    a: "PEPI (Permeation-Enhanced Protective Immunofilm) is our proprietary strip technology. It combines mucoadhesive polymers that keep the strip locked in place, permeation enhancers that open tight junctions for better absorption, and protease inhibitors that shield compounds from enzymatic breakdown. The result: dramatically higher bioavailability than standard oral strips.",
  },
  {
    q: "How do I use them?",
    a: "Place one strip under your tongue. Let it dissolve completely (3-5 minutes). Don't chew or swallow it. That's it. The strip adheres to your sublingual tissue and delivers the active ingredients directly into your bloodstream.",
  },
  {
    q: "When should I take each strip?",
    a: "Morning strip — first thing when you wake up, before coffee. Day strip — early afternoon, around 1-3 PM when focus naturally dips. Night strip — 30-45 minutes before bed.",
  },
  {
    q: "Why only 0.3mg of melatonin in the night strip?",
    a: "Most melatonin supplements use 3-10mg, which is 10-30x more than your body naturally produces. Research shows 0.3mg is the physiologically optimal dose — it matches your natural production. The problem with pills isn't the dose, it's that your gut destroys most of it. Our PEPI technology delivers 0.3mg with ~65% bioavailability, so you actually absorb more melatonin than a 3mg pill at ~12% absorption.",
  },
  {
    q: "Are there any side effects?",
    a: "KYNE strips use well-studied, GRAS (Generally Recognized As Safe) ingredients at evidence-based doses. No stimulants, no synthetic compounds. Some people may experience mild tingling under the tongue from the permeation enhancers — this is normal and temporary.",
  },
  {
    q: "Can I take all three strips in one day?",
    a: "Yes — that's the protocol. Morning, day, and night are designed to work as a complete daily system. Each targets a different phase of your day with different compounds.",
  },
  {
    q: "How should I store them?",
    a: "Keep strips in their sealed foil pouches at room temperature, away from direct sunlight and moisture. No refrigeration needed. Shelf life is 24 months unopened.",
  },
  {
    q: "Do you ship internationally?",
    a: "We're launching in Canada and the United States first. International shipping will follow. Join the waitlist to be notified when we expand to your region.",
  },
  {
    q: "Are KYNE strips vegan?",
    a: "Yes. All KYNE strips are vegan, gluten-free, and contain no artificial colors or flavors.",
  },
  {
    q: "Is this FDA approved?",
    a: "KYNE strips are classified as dietary supplements, not drugs. Like all dietary supplements in North America, they are manufactured in GMP-certified facilities and comply with Health Canada and FDA dietary supplement regulations. They do not require pre-market FDA approval.",
  },
];

const FAQ = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Support
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tightest sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about KYNE strips and the PEPI delivery system.
            </p>
          </div>

          <div className="mt-16 space-y-0 divide-y divide-border">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group py-6"
                data-reveal
              >
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground transition-colors hover:text-foreground/80">
                  {faq.q}
                  <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FAQ;
