import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Cookies = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Legal</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight">cookie policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 29, 2026</p>
          </div>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground" data-reveal>
            <p>
              We use a small set of cookies and similar technologies to make kyne.health work,
              measure how it's used, and (with your permission) tailor a small amount of marketing.
              This page explains exactly what's set and why.
            </p>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">categories</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <p className="font-medium text-foreground">Strictly necessary</p>
                  <p className="mt-1">Cart contents, session, CSRF, checkout flow, fraud prevention. These can't be disabled — without them the site doesn't work.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Preferences</p>
                  <p className="mt-1">Remembered region, currency, ingredient-filter selections, dismissed banners.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Analytics (consent-based)</p>
                  <p className="mt-1">Privacy-respecting page-view and event analytics. IPs are truncated. We use this to understand which pages help and which confuse.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Marketing (consent-based)</p>
                  <p className="mt-1">Conversion measurement and retargeting on Meta, TikTok, and Google. Disabled by default in jurisdictions requiring opt-in.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">cookie inventory</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-surface/60 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <tr><th className="px-4 py-3">name</th><th className="px-4 py-3">purpose</th><th className="px-4 py-3">duration</th></tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted-foreground">
                    {[
                      ["kyne_cart","Cart contents","30 days"],
                      ["kyne_session","Session token","Session"],
                      ["kyne_region","Region & currency","1 year"],
                      ["kyne_consent","Cookie preference record","1 year"],
                      ["_ga / _ga_*","Google Analytics 4","13 months"],
                      ["_fbp","Meta Pixel","90 days"],
                      ["ttp / tt_*","TikTok Pixel","13 months"],
                    ].map((r)=>(
                      <tr key={r[0]}><td className="px-4 py-3 font-mono text-xs text-foreground">{r[0]}</td><td className="px-4 py-3">{r[1]}</td><td className="px-4 py-3">{r[2]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">your choices</h2>
              <p className="mt-3">
                You can change consent for analytics and marketing cookies at any time using the
                "Cookie preferences" link in the footer. You can also block or delete cookies in
                your browser settings — note that this may break cart and checkout.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">do-not-track & gpc</h2>
              <p className="mt-3">
                We honor the Global Privacy Control (GPC) signal as a valid opt-out for analytics
                and marketing cookies in jurisdictions where it carries legal weight.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-light tracking-tight">questions</h2>
              <p className="mt-3"><a href="mailto:privacy@kyne.health" className="text-[#d4a574]">privacy@kyne.health</a></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Cookies;
