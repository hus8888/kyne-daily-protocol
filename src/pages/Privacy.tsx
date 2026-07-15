import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Privacy = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Legal</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight">privacy policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 29, 2026</p>
          </div>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground" data-reveal>
            <p>KYNE Protocol Inc. ("KYNE", "we") respects your privacy. This policy explains what we collect, why we collect it, and the rights you have under PIPEDA (Canada), GDPR (EU/UK), and applicable U.S. state laws including the CCPA/CPRA.</p>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">what we collect</h2>
              <ul className="mt-3 space-y-2">
                <li><strong className="text-foreground">Account & order data</strong> — name, email, shipping address, order history.</li>
                <li><strong className="text-foreground">Payment data</strong> — handled by our PCI-DSS-compliant payment processor; we never see or store your full card number.</li>
                <li><strong className="text-foreground">Communications</strong> — emails to support, survey responses, reviews.</li>
                <li><strong className="text-foreground">Usage data</strong> — IP, device, pages visited, referrer, via privacy-respecting analytics.</li>
                <li><strong className="text-foreground">Marketing preferences</strong> — newsletter consent and opt-out status.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">why we collect it</h2>
              <p className="mt-3">To process orders, ship product, provide support, comply with legal obligations, prevent fraud, improve the site, and (with your consent) send marketing.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">who we share with</h2>
              <p className="mt-3">Service providers acting on our behalf: payment processor, fulfillment partner, email/SMS provider, analytics, and customer-support tooling. We do not sell personal data to third parties. We may disclose data when required by law or to protect rights and safety.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">cookies</h2>
              <p className="mt-3">We use strictly necessary cookies for cart and checkout, plus optional analytics and marketing cookies you can manage in your browser. See our <a href="/cookies" className="text-[#d4a574]">cookie policy</a>.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">data retention</h2>
              <p className="mt-3">Order records: 7 years (tax law). Account data: until you delete your account. Marketing data: until you unsubscribe. Backups are purged on rolling 90-day cycles.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">your rights</h2>
              <p className="mt-3">Depending on your jurisdiction, you may have the right to access, correct, port, or delete your personal data, withdraw consent, or object to certain processing. Email <a href="mailto:privacy@kyne.health" className="text-[#d4a574]">privacy@kyne.health</a> and we'll respond within 30 days.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">data transfers</h2>
              <p className="mt-3">Some of our service providers may process data in the United States or the EU. We rely on Standard Contractual Clauses or equivalent safeguards where required.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">security</h2>
              <p className="mt-3">TLS in transit, encryption at rest, principle-of-least-privilege access, and routine security review. No system is perfectly secure; we'll notify affected users in the event of a qualifying breach as required by law.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">children</h2>
              <p className="mt-3">Our site and products are not intended for anyone under 18. We do not knowingly collect data from children.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">changes</h2>
              <p className="mt-3">We may update this policy. Material changes will be flagged at the top of the page and emailed to active subscribers.</p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">contact</h2>
              <p className="mt-3">Privacy Officer — KYNE Protocol Inc., Toronto, Ontario, Canada. <a href="mailto:privacy@kyne.health" className="text-[#d4a574]">privacy@kyne.health</a></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Privacy;
