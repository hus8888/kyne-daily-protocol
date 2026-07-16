import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/kyne/Footer";

const RhythmNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container">
        <nav className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tightest">KYNE</span>
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:inline">/ night</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</Link>
            <a href="#science" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Science</a>
            <a href="#ingredients" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Ingredients</a>
            <a href="#cta" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Buy</a>
          </div>
          <a href="#cta" className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]">
            Add to protocol
          </a>
        </nav>
      </div>
    </header>
  );
};

const benefits = [
  { n: "01", title: "fall asleep faster", body: "Onset within minutes — not the slow drift of pills and powders." },
  { n: "02", title: "support circadian rhythm", body: "Microdosed signals work with your body's natural night architecture." },
  { n: "03", title: "no heavy doses", body: "Calibrated, sub-clinical inputs. Wake clear, never sedated." },
];

const howSteps = [
  { n: "01", title: "dissolves in mouth", body: "One thin strip on the tongue. Gone in seconds, no water, no ritual." },
  { n: "02", title: "bypasses digestion", body: "Sublingual delivery routes actives directly into circulation." },
  { n: "03", title: "faster onset", body: "Effects begin in minutes — not the 45+ of capsules and gummies." },
];

const ingredients = [
  { name: "Magnesium Glycinate", dose: "200 mg compound", body: "Strip-feasible form of magnesium. 200mg compound delivers ~28mg elemental magnesium — a sleep-support dose backed by RCTs showing reduced sleep onset latency. Glycinate chelation avoids GI distress common with other forms." },
  { name: "Apigenin", dose: "50 mg", body: "Chamomile-derived flavonoid. Binds gently to benzodiazepine receptors for calming without sedation hangover. Low mass, high buccal compatibility." },
  { name: "L-Theanine", dose: "100 mg", body: "Quiets the over-active mind. Promotes alpha-wave states associated with calm wakefulness sliding into rest. Works synergistically with magnesium for deeper relaxation." },
  { name: "Glycine", dose: "100 mg", body: "Inhibitory amino acid that lowers core body temperature — the physiological signal your body uses to initiate deep sleep. Supportive dose in strip format." },
];

const experience = [
  { time: "T + 0:00", label: "dissolve", body: "Strip placed. Cool sensation on the tongue." },
  { time: "T + 0:04", label: "relax", body: "Shoulders drop. Mind slows. The transition begins." },
  { time: "T + 0:20", label: "sleep", body: "Onset — soft, complete. Full architecture restored by morning." },
];

const Rhythm = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* page-wide deep purple/navy ambience */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,hsl(260_60%_30%/0.45),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,hsl(240_70%_25%/0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,hsl(270_60%_25%/0.3),transparent_55%)]" />
      </div>

      <RhythmNav />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-32 md:pt-52 md:pb-44">
        <div className="container relative">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(260_80%_70%)] animate-pulse-glow" />
                Night protocol · 03
              </div>

              <h1 className="mt-8 font-display text-[44px] font-semibold leading-[1.02] tracking-tightest text-gradient md:text-7xl lg:text-[88px] animate-fade-up" style={{ animationDelay: "60ms" }}>
                kyne<br />night.
              </h1>

              <p className="mt-8 max-w-md text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "180ms" }}>
                sleep in minutes, not hours.
              </p>

              <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: "320ms" }}>
                <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-elevated transition-transform hover:scale-[1.02]">
                  start your night protocol
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a href="#science" className="text-sm text-muted-foreground transition-colors hover:text-foreground">how it works</a>
              </div>

              <div className="mt-16 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {[
                  { v: "0.3 mg", l: "melatonin" },
                  { v: "20s", l: "dissolve" },
                  { v: "~20m", l: "onset" },
                ].map((m) => (
                  <div key={m.l} className="bg-background/60 p-4 backdrop-blur">
                    <div className="font-display text-xl font-semibold tracking-tight">{m.v}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* product visual */}
            <div className="relative lg:col-span-6 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,hsl(260_80%_55%/0.4),transparent_65%)] blur-3xl" />
                {/* moon/orb */}
                <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(260_70%_60%)] via-[hsl(240_60%_30%)] to-[hsl(230_70%_15%)] opacity-90 shadow-[0_0_120px_hsl(260_80%_55%/0.5)]" />
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,hsl(280_100%_85%/0.6),transparent_45%)]" />
                  <div className="absolute inset-[8%] rounded-full border border-white/5" />
                </div>
                {/* strip */}
                <div className="absolute left-1/2 top-1/2 z-10 h-32 w-56 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.02] backdrop-blur-2xl shadow-2xl md:h-40 md:w-72">
                  <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(115deg,transparent_30%,hsl(260_80%_70%/0.25)_50%,transparent_70%)] [background-size:200%_100%] animate-shimmer" />
                  <div className="absolute inset-x-0 bottom-3 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    KYNE · NIGHT
                  </div>
                </div>
                {/* tiny stars */}
                {[
                  { t: "12%", l: "18%" },
                  { t: "22%", l: "78%" },
                  { t: "78%", l: "12%" },
                  { t: "85%", l: "82%" },
                  { t: "55%", l: "92%" },
                ].map((s, i) => (
                  <span key={i} className="absolute h-1 w-1 rounded-full bg-white/70 animate-pulse-glow" style={{ top: s.t, left: s.l, animationDelay: `${i * 0.6}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="relative py-32 md:py-40">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — what it does</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
              quiet the system.<br />invite the night.
            </h2>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.n} className="group bg-background/60 p-10 backdrop-blur transition-colors hover:bg-surface">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{b.n}</div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{b.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="science" className="relative py-32 md:py-40">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — how it works</p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
                designed for<br />the way sleep<br />actually arrives.
              </h2>
              <p className="mt-8 max-w-md text-muted-foreground md:text-lg">
                Pills wait in your gut. Strips don't. PEPI delivery places each
                active directly into your bloodstream — so onset matches intent.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-px overflow-hidden rounded-3xl border border-border">
                {howSteps.map((s) => (
                  <div key={s.n} className="flex items-start gap-8 bg-surface/40 p-8 backdrop-blur transition-colors hover:bg-surface md:p-10">
                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.n}</div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">{s.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section id="ingredients" className="relative py-32 md:py-40">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">03 — ingredients</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
              microdosed.<br />intentional.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
              Every input is calibrated to signal — not sedate. Sleep, restored
              by working with your body, not overpowering it.
            </p>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {ingredients.map((ing) => (
              <div key={ing.name} className="group bg-background/60 p-8 backdrop-blur transition-colors hover:bg-surface">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-medium tracking-tight">{ing.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{ing.dose}</span>
                </div>
                <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">{ing.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative py-32 md:py-40">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">04 — the experience</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-6xl">
              dissolve. relax.<br />sleep.
            </h2>
          </div>

          <div className="relative mt-20">
            <div className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {experience.map((e) => (
                <div key={e.label} className="relative text-center">
                  <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[hsl(260_80%_55%/0.18)] blur-2xl" />
                    <div className="glass relative flex h-full w-full items-center justify-center rounded-full">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{e.time}</span>
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">{e.label}</h3>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-32 md:py-44">
        <div className="container">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-border bg-surface/60 p-12 text-center md:p-24">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(260_80%_55%/0.35),transparent_60%)] blur-3xl" />
              <div className="absolute inset-0 grid-pattern opacity-30" />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">engage protocol</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tightest text-gradient md:text-7xl">
              start your<br />night protocol.
            </h2>
            <p className="mx-auto mt-8 max-w-md text-muted-foreground md:text-lg">
              30 strips. One ritual. Sleep, restored.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background shadow-elevated transition-transform hover:scale-[1.03]">
                start your night protocol
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                see the full system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Rhythm;