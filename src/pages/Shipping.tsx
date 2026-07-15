import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Shipping = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Support</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">shipping</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              All North American orders ship from our Ontario fulfillment partner. Carbon-neutral by default.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-4xl grid gap-6 md:grid-cols-2" data-reveal>
          {[
            {r:"Canada", c:"Canada Post Expedited", t:"2–5 business days", p:"Free over CA$60 / $6.50 flat under"},
            {r:"USA", c:"USPS Priority", t:"4–8 business days", p:"Free over US$75 / $9.50 flat under"},
            {r:"UK & EU", c:"DHL Express", t:"5–10 business days", p:"Calculated at checkout — pilot regions only"},
            {r:"Australia / NZ", c:"DHL Express", t:"6–10 business days", p:"Calculated at checkout"},
          ].map((z)=>(
            <div key={z.r} className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-display text-xl font-light tracking-tight text-foreground">{z.r}</div>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4a574]">carrier</span><br/>{z.c}</div>
                <div><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4a574]">transit</span><br/>{z.t}</div>
                <div><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4a574]">price</span><br/>{z.p}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-3xl space-y-10">
          <div className="rounded-3xl border border-[#d4a574]/60 bg-gradient-to-br from-[#d4a574]/[0.18] to-[#d4a574]/[0.04] p-8" data-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">important — kyne peptide line</p>
            <p className="mt-3 text-foreground">
              The KYNE peptide line (<em>peptide morning, peptide day, peptide night</em>) is
              <strong className="font-medium"> not available for sale or shipment to addresses
              in the United States.</strong> US peptide regulations make consumer-facing OTC
              sale impossible right now. The peptide line ships to Canada, UK, EU pilot regions,
              Australia, and New Zealand. All other KYNE lines ship freely to the US.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">processing time</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Orders placed before 2pm ET on a business day usually ship the same day. Orders
              placed after 2pm or on weekends ship the next business day. Subscription renewals
              dispatch on a rolling basis on the renewal date.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">duties & taxes</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Canadian and US orders: all taxes shown at checkout, no surprise fees on delivery.
              International orders may incur local import duties or VAT collected by the carrier
              at delivery. Where possible we use DDP (delivered duty paid) — this is shown at
              checkout for your country.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">storage & handling in transit</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              KYNE strips are stable at room temperature in their foil pouches and don't require
              cold-chain shipping. We avoid express overnight by default — the carbon premium isn't
              justified for a shelf-stable product. If you need expedited shipping, contact support
              and we'll arrange it.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">tracking</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tracking number arrives by email within 1 business day of dispatch. You can also
              look up any order on our <a href="/track" className="text-[#d4a574]">track page</a> with
              your order number and email.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">missing or stuck shipments</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              If tracking hasn't moved in 5 business days, email <a href="mailto:hello@kyne.health" className="text-[#d4a574]">hello@kyne.health</a>.
              We file the carrier trace and ship a replacement at our cost — you don't have to
              wait on the carrier investigation.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Shipping;
