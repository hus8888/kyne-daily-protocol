import { useState } from "react";
import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Refer = () => {
  useScrollReveal();
  const [copied, setCopied] = useState(false);
  const link = "https://kyne.health/r/your-name";

  const copy = async () => {
    try { await navigator.clipboard.writeText(link); setCopied(true); setTimeout(()=>setCopied(false), 2500); } catch {}
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Community</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">refer a friend</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Give $20. Get $20. The protocol works better when the people around you are on it too.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-4xl grid gap-6 md:grid-cols-3" data-reveal>
          {[
            {n:"01", t:"share your link", d:"Every account gets a unique referral link. Send it however you want — text, email, Instagram DM."},
            {n:"02", t:"they save $20", d:"Your friend gets $20 off their first KYNE order over $50. No code to remember, the discount applies automatically."},
            {n:"03", t:"you get $20", d:"As soon as their order ships, you get a $20 credit applied to your next subscription renewal or one-time order."},
          ].map((s)=>(
            <div key={s.n} className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">{s.n}</div>
              <div className="mt-3 font-display text-lg font-light tracking-tight text-foreground">{s.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-3xl">
          <div className="rounded-3xl border border-[#d4a574]/60 bg-gradient-to-br from-[#d4a574]/[0.18] to-[#d4a574]/[0.04] p-8" data-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">your link</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input readOnly value={link} className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground" />
              <button onClick={copy} className="rounded-full bg-[#d4a574] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">
                {copied ? "✓ copied" : "copy link"}
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Sign in to your account for your real referral link.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:?subject=Try%20KYNE&body=I've%20been%20on%20this%20protocol%20—%20worth%20a%20look.%20Use%20my%20link%20for%20%2420%20off%3A%20${encodeURIComponent(link)}`} className="rounded-full border border-border bg-background px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">email</a>
              <a href={`sms:?&body=${encodeURIComponent("Try this — $20 off: " + link)}`} className="rounded-full border border-border bg-background px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">text</a>
              <a target="_blank" rel="noopener" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("the supplement format that finally absorbs. " + link)}`} className="rounded-full border border-border bg-background px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">x / twitter</a>
              <a target="_blank" rel="noopener" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`} className="rounded-full border border-border bg-background px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">facebook</a>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-sm text-muted-foreground" data-reveal>
            <h2 className="font-display text-xl font-light tracking-tight text-foreground">fine print</h2>
            <ul className="space-y-2">
              <li>• Referral credit applies only to a friend's first order of $50 or more.</li>
              <li>• Self-referrals are caught and declined automatically.</li>
              <li>• Credit posts to your account within 24 hours of your friend's order shipping.</li>
              <li>• Credits stack across friends — no cap on how many people you can refer.</li>
              <li>• Credits expire 12 months after issue if unused.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Refer;
