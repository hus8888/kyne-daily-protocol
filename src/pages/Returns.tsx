import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const Returns = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Support</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">returns & refunds</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              30 days. No interrogation. If KYNE isn't working for you, we'll make it right.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-3xl space-y-10">
          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">the policy in one paragraph</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You have 30 days from the day your order is delivered to request a return for any
              reason. Unopened pouches: full refund to original payment method. Opened pouches:
              one-time courtesy refund per customer (you keep the product — don't ship perishables back).
              Damaged on arrival or wrong item shipped: photo + email and we ship a replacement
              same day at our cost.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3" data-reveal>
            {[
              {t:"unopened",d:"Full refund to original payment. Send back via the prepaid label we email you. Refund posts within 5 business days of arrival at our warehouse.",p:"100% refund"},
              {t:"opened, first-time",d:"One courtesy refund per customer, no shipping back required. We'd rather you keep trying a different line than go through the motions.",p:"100% refund"},
              {t:"damaged / wrong",d:"Email a photo to hello@kyne.health within 7 days of delivery. Replacement ships same business day.",p:"replacement + apology"},
            ].map((c)=>(
              <div key={c.t} className="rounded-2xl border border-border bg-white/60 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">{c.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                <p className="mt-4 font-display text-lg font-light tracking-tight text-foreground">{c.p}</p>
              </div>
            ))}
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">how to start a return</h2>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground list-decimal pl-5">
              <li>Email <a href="mailto:hello@kyne.health" className="text-[#d4a574]">hello@kyne.health</a> with your order number and the reason. One line is fine.</li>
              <li>For unopened returns, we email you a prepaid Canada Post or USPS label within one business day.</li>
              <li>Pack the pouches in any padded mailer. Drop at any postal location.</li>
              <li>Refund posts to your card within 5 business days of arrival. You'll get an email confirmation.</li>
            </ol>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">what we can't refund</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Orders past 30 days from delivery (contact us anyway if there's a quality issue).</li>
              <li>• Subscription orders that already shipped — pause or cancel for the next renewal instead.</li>
              <li>• Orders refused at delivery without contacting support — we'll refund minus return shipping.</li>
              <li>• Promotional or "free with bundle" items.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#d4a574]/60 bg-gradient-to-br from-[#d4a574]/[0.18] to-[#d4a574]/[0.04] p-8" data-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">subscription</p>
            <p className="mt-3 text-foreground">
              Need to pause, change cadence, or cancel a subscription? Do it from your account
              dashboard before the next renewal — no email required, no exit survey.
            </p>
          </div>

          <div className="flex flex-wrap gap-4" data-reveal>
            <Link to="/contact" className="rounded-full bg-[#d4a574] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">contact support →</Link>
            <Link to="/shipping" className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">shipping info →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Returns;
