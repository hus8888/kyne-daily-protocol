import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Terms = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl prose prose-sm">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Legal</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight">terms of service</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 29, 2026</p>
          </div>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground" data-reveal>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the websites, products,
              and services offered by KYNE Protocol Inc. ("KYNE", "we", "us"), a corporation
              incorporated in the Province of Ontario, Canada. By accessing kyne.health or
              purchasing our products, you agree to these Terms.
            </p>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">1. eligibility</h2>
              <p className="mt-3">You must be at least 18 years old to purchase. By placing an order you confirm you are of legal age in your jurisdiction.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">2. products & medical disclaimer</h2>
              <p className="mt-3">KYNE products are dietary supplements. They are not intended to diagnose, treat, cure, or prevent any disease. Statements on this site have not been evaluated by Health Canada or the U.S. Food and Drug Administration. Consult your physician before use, particularly if you are pregnant, nursing, taking medication, or have a medical condition.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">3. orders, pricing, payment</h2>
              <p className="mt-3">All prices are in Canadian dollars unless otherwise stated. We reserve the right to refuse or cancel any order, including for pricing errors or suspected fraud. Payment is processed by third-party providers; we do not store full card numbers.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">4. subscriptions</h2>
              <p className="mt-3">Subscription orders renew automatically at the cadence selected at checkout. You may pause, modify, or cancel any subscription at any time from your account dashboard before the next renewal date. Charges already processed are non-refundable except as required by law.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">5. shipping & geographic restrictions</h2>
              <p className="mt-3">We ship to Canada and the United States. The KYNE peptide line is not available for sale or shipment to addresses in the United States. International shipping is rolling out region by region — see <a href="/shipping" className="text-[#d4a574]">/shipping</a>.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">6. returns</h2>
              <p className="mt-3">Unopened product may be returned within 30 days of delivery. See our <a href="/returns" className="text-[#d4a574]">return policy</a> for full details.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">7. intellectual property</h2>
              <p className="mt-3">"KYNE" and "PEPI" are trademarks of KYNE Protocol Inc. All site content, formulations, and proprietary delivery technology are the property of KYNE or its licensors. You may not reproduce, scrape, or commercially redistribute any portion of the site without written permission.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">8. user content</h2>
              <p className="mt-3">If you submit a review, photo, or other content, you grant KYNE a worldwide, royalty-free, non-exclusive license to use, display, and adapt that content in connection with our business.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">9. limitation of liability</h2>
              <p className="mt-3">To the maximum extent permitted by applicable law, KYNE's aggregate liability arising out of or in connection with the products or these Terms is limited to the amount you paid for the product(s) giving rise to the claim. KYNE is not liable for indirect, incidental, special, or consequential damages.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">10. indemnification</h2>
              <p className="mt-3">You agree to indemnify and hold KYNE harmless from any claims arising from your misuse of the products or your breach of these Terms.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">11. governing law</h2>
              <p className="mt-3">These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Disputes will be resolved in the courts of Ontario, Canada.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">12. changes</h2>
              <p className="mt-3">We may update these Terms from time to time. Continued use of the site or products after an update constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">13. contact</h2>
              <p className="mt-3">Questions? Email <a href="mailto:legal@kyne.health" className="text-[#d4a574]">legal@kyne.health</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Terms;
