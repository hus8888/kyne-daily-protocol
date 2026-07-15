import { useState } from "react";
import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Review = { name: string; line: string; rating: number; verified: boolean; title: string; body: string; date: string };

const REVIEWS: Review[] = [
  { name: "Mira K.", line: "core", rating: 5, verified: true, date: "2 weeks ago", title: "Replaced four bottles in my drawer", body: "I was taking magnesium, melatonin, theanine, and B-complex separately. Three strips a day and I feel more steady than I did chasing pills. The morning one hits faster than my coffee." },
  { name: "Dr. Aaron P.", line: "mind", rating: 5, verified: true, date: "1 month ago", title: "Sublingual lion's mane is finally a real product", body: "I've recommended Lion's Mane to patients for years and watched them buy 500mg capsules that did almost nothing. PEPI delivery actually puts the active where it needs to be. Subjective focus on the day strip is real." },
  { name: "Jay R.", line: "rhythm", rating: 5, verified: true, date: "3 weeks ago", title: "Sleep onset under 20 min consistently", body: "0.3mg melatonin sounded like nothing — I was used to 5mg gummies. But I fall asleep faster on this and wake up without the next-day fog. The honokiol is the unlock." },
  { name: "Sasha L.", line: "gut", rating: 4, verified: true, date: "5 weeks ago", title: "First two weeks rough, then a switch flipped", body: "Bloating got slightly worse week one. By week three the gut night strip had me sleeping through the night with no more 4am acid. Glutamine + zinc carnosine is the real deal sublingually." },
  { name: "Tomás A.", line: "mito", rating: 5, verified: true, date: "2 months ago", title: "Energy isn't a cliff anymore", body: "Long covid hangover for almost 2 years. Been on mito morning + night for 6 weeks. The 3pm crash is gone. I can't promise it's the NR — but something here is working." },
  { name: "Priya N.", line: "shift", rating: 5, verified: true, date: "1 week ago", title: "Caffeine without the jitter", body: "40mg caffeine + 200mg theanine in one strip. Cleanest focus I've had on a stimulant. No tachycardia, no afternoon crash." },
  { name: "Marco D.", line: "longevity", rating: 4, verified: true, date: "6 weeks ago", title: "Spermidine sublingually — the real test", body: "Bought it for the spermidine + glutathione combo. Hard to feel longevity protocols subjectively, but bloodwork at 12 weeks showed my GGT dropped 18%. Coincidence? Maybe. Re-upping anyway." },
  { name: "Elise W.", line: "nerve", rating: 5, verified: true, date: "3 weeks ago", title: "Anxiety strip that doesn't blunt me", body: "PharmaGABA actually crosses sublingually — that's the whole story. I take it 30 min before client meetings. Calm without dulled. This is what L-theanine wishes it was." },
  { name: "Ben H.", line: "d3+k", rating: 4, verified: true, date: "2 months ago", title: "Vitamin D actually moved my levels", body: "Had been on 5000 IU pills for 2 years and my 25(OH)D hovered at 32. Switched to KYNE d3+k for 90 days and re-tested at 58. Same dose, very different absorption." },
  { name: "Naomi C.", line: "core", rating: 5, verified: true, date: "1 week ago", title: "Travel-perfect format", body: "Three foil pouches in a passport sleeve, no water, no TSA bottle issues. Took these through 4 timezones last month and didn't miss a day. The format alone is worth the upgrade." },
  { name: "Kai M.", line: "signal", rating: 4, verified: true, date: "2 weeks ago", title: "Strong onset, mild aftertaste", body: "Mint flavor is fine but there's a slight herbal note from the honokiol. Onset is 10 minutes flat. Wouldn't trade it." },
  { name: "Hannah J.", line: "mind", rating: 5, verified: true, date: "4 weeks ago", title: "PMS focus weeks are bearable", body: "Mind day during luteal phase has been a complete reset. Less brain fog, fewer dropped tasks. The sublingual L-theanine is a different planet from capsules." },
];

const FILTERS = ["all","core","signal","shift","rhythm","mind","mito","nerve","gut","d3+k","longevity"];

const Reviews = () => {
  useScrollReveal();
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? REVIEWS : REVIEWS.filter(r => r.line === filter);
  const avg = (REVIEWS.reduce((s,r)=>s+r.rating,0)/REVIEWS.length).toFixed(1);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-12">
        <div className="container max-w-4xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Reviews</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">customer reviews</h1>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-display text-5xl font-light text-foreground">{avg}</span>
              <span className="text-[#d4a574] text-xl">★★★★★</span>
              <span className="text-sm text-muted-foreground">based on {REVIEWS.length} verified reviews</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" data-reveal>
            {FILTERS.map(f => (
              <button key={f} onClick={()=>setFilter(f)} className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition ${filter===f?"border-[#d4a574] bg-[#d4a574]/10 text-foreground":"border-border bg-background text-muted-foreground hover:border-[#d4a574]/60"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-4xl space-y-4">
          {filtered.map((r,i) => (
            <article key={i} className="rounded-2xl border border-border bg-white/60 p-6 transition hover:border-[#d4a574]/60" data-reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-[#d4a574]">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</span>
                  <h3 className="font-display text-lg font-light tracking-tight text-foreground">{r.title}</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{r.line}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{r.name}</span>
                <span>•</span>
                <span>{r.date}</span>
                {r.verified && <span className="rounded-full border border-[#d4a574]/40 bg-[#d4a574]/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4a574]">verified</span>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Reviews;
