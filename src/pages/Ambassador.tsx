import { useState } from "react";
import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Ambassador = () => {
  useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", handle:"", platform:"instagram", followers:"", why:"" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.handle) return;
    setSent(true);
    setForm({ name:"", email:"", handle:"", platform:"instagram", followers:"", why:"" });
    setTimeout(()=>setSent(false), 6000);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Community</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">ambassador program</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We work with health professionals, athletes, scientists, and creators who actually
              understand the science. If that's you, let's talk.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-4xl grid gap-6 md:grid-cols-3" data-reveal>
          {[
            {t:"20% commission", d:"On every order from your unique link, paid monthly via Stripe Connect or e-transfer."},
            {t:"15% audience discount", d:"Your followers get a working code the second you sign. No 'first-month-only' tricks."},
            {t:"Free product", d:"Quarterly resupply of any 3 lines, plus first access to new launches and limited drops."},
            {t:"Real assets", d:"Pre-shot photo and video kits, ingredient briefs, and citation packs you can actually use."},
            {t:"Direct line", d:"You get a Slack-shared channel with our science team for questions, COA pulls, and beta input."},
            {t:"No exclusivity required", d:"We don't lock you out of competitors. Recommend what works."},
          ].map((p)=>(
            <div key={p.t} className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-display text-lg font-light tracking-tight text-foreground">{p.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">who we work with</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">a quick honesty filter</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>✓ MDs, NDs, RDs, RNs, pharmacists, exercise physiologists</li>
              <li>✓ Trainers, coaches, performance specialists with active clients</li>
              <li>✓ Researchers and graduate students in pharmacology, nutrition, chronobiology</li>
              <li>✓ Creators who cite primary literature, not Instagram graphics</li>
              <li>✗ "Wellness" accounts that pivot every quarter to whatever's trending</li>
              <li>✗ MLM-adjacent or "biohack stack" affiliate farms</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">apply</span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">tell us who you are</h2>
            <p className="mt-3 text-sm text-muted-foreground">We review every application personally. Expect a response within 5 business days.</p>
          </div>

          <form onSubmit={submit} className="mt-8 space-y-5 rounded-3xl border border-border bg-surface/40 p-8" data-reveal>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">name</span>
                <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">email</span>
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">handle / username</span>
                <input required value={form.handle} onChange={(e)=>setForm({...form,handle:e.target.value})} placeholder="@yourhandle" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">primary platform</span>
                <select value={form.platform} onChange={(e)=>setForm({...form,platform:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none">
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                  <option value="x">X / Twitter</option>
                  <option value="substack">Substack</option>
                  <option value="podcast">Podcast</option>
                  <option value="clinic">Clinic / practice</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">audience size</span>
              <input value={form.followers} onChange={(e)=>setForm({...form,followers:e.target.value})} placeholder="rough is fine" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">why kyne?</span>
              <textarea rows={5} value={form.why} onChange={(e)=>setForm({...form,why:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
            </label>
            <button type="submit" className="rounded-full bg-[#d4a574] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">
              {sent ? "✓ application received" : "submit application"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Ambassador;
