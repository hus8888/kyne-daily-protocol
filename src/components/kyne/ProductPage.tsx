import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/kyne/Footer";

type Ingredient = { name: string; dose: string; body: string };
type Step = { n: string; title: string; body: string };
type Benefit = { n: string; title: string; body: string };

export type ProductPageProps = {
  slug: "signal" | "shift" | "rhythm";
  name: string; // "kyne signal"
  short: string; // "signal"
  time: string; // "morning"
  tagline: string; // hero subline
  badge: string; // "Morning protocol · 01"
  metrics: { v: string; l: string }[];
  benefits: Benefit[];
  steps: Step[];
  ingredients: Ingredient[];
  experience: { time: string; label: string; body: string }[];
  cta: string; // "start your morning protocol"
  visual?: ReactNode; // optional custom hero visual
};

const ProductNav = ({ short }: { short: string }) => {
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
        <nav className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass shadow-soft" : "bg-background/40 backdrop-blur-sm"}`}>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tightest">KYNE</span>
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:inline">/ {short}</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</Link>
            <a href="#science" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Science</a>
            <a href="#ingredients" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Ingredients</a>
            <Link to="/quiz" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Quiz</Link>
          </div>
          <a href="#cta" className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background shadow-soft transition-transform hover:scale-[1.03]">
            Add to protocol
          </a>
        </nav>
      </div>
    </header>
  );
};

export const ProductPage = ({
  slug,
  name,
  short,
  time,
  tagline,
  badge,
  metrics,
  benefits,
  steps,
  ingredients,
  experience,
  cta,
  visual,
}: ProductPageProps) => {
  const tint = `hsl(var(--${slug}-soft))`;
  const glow = `hsl(var(--${slug}) / 0.5)`;
  const dot = `hsl(var(--${slug}))`;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* page-wide soft tinted ambience */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% -10%, ${glow}, transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 80% 30%, ${glow}, transparent 50%)`,
            opacity: 0.5,
          }}
        />
      </div>

      <ProductNav short={short} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-32 md:pt-52 md:pb-40">
        <div className="container relative">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-soft animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full animate-pulse-glow" style={{ backgroundColor: dot }} />
                {badge}
              </div>

              <h1 className="mt-8 font-display text-[44px] font-light leading-[1.02] tracking-tightest text-foreground md:text-7xl lg:text-[88px] animate-fade-up" style={{ animationDelay: "60ms" }}>
                {name.split(" ")[0]}<br />{name.split(" ")[1]}.
              </h1>

              <p className="mt-8 max-w-md text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "180ms" }}>
                {tagline}
              </p>

              <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: "320ms" }}>
                <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02]">
                  {cta}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a href="#science" className="text-sm text-muted-foreground transition-colors hover:text-foreground">how it works →</a>
              </div>

              <div className="mt-16 grid max-w-md grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.l} className="rounded-2xl border border-border bg-surface-elevated p-4 shadow-soft">
                    <div className="font-display text-xl font-light tracking-tight text-foreground">{m.v}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* product visual */}
            <div className="relative lg:col-span-6 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <div className="relative aspect-square w-full overflow-hidden rounded-[40px] border border-border shadow-soft" style={{ backgroundColor: tint }}>
                <div
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 60%, ${glow}, transparent 70%)` }}
                />
                {visual ?? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-40 w-60 rotate-[-4deg] rounded-3xl bg-white/85 shadow-soft md:h-52 md:w-80" />
                  </div>
                )}
                <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                  {time}
                </div>
                <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                  PEPI
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="font-display text-base font-medium tracking-tight text-foreground">{name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">30 strips</span>
                </div>
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
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
              gentle, daily,<br />actually felt.
            </h2>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3 md:gap-6">
            {benefits.map((b) => (
              <div key={b.n} className="rounded-3xl border border-border bg-surface-elevated p-10 shadow-soft transition-transform hover:-translate-y-0.5">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{b.n}</div>
                <h3 className="mt-6 font-display text-2xl font-light tracking-tight text-foreground">{b.title}</h3>
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
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
                designed for<br />the way it<br />actually works.
              </h2>
              <p className="mt-8 max-w-md text-muted-foreground md:text-lg">
                Pills wait in your gut. Strips don't. Sublingual delivery places each
                ingredient directly into circulation — gentle, fast, predictable.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-start gap-8 rounded-3xl border border-border bg-surface-elevated p-8 shadow-soft transition-transform hover:-translate-y-0.5 md:p-10">
                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.n}</div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-light tracking-tight text-foreground md:text-2xl">{s.title}</h3>
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
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">03 — what's inside</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
              simple,<br />considered.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
              Every input is calibrated to work with your body — not overpower it.
            </p>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {ingredients.map((ing) => (
              <div key={ing.name} className="rounded-3xl border border-border bg-surface-elevated p-7 shadow-soft transition-transform hover:-translate-y-0.5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-medium tracking-tight text-foreground">{ing.name}</h3>
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
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
              dissolve. settle.<br />feel it.
            </h2>
          </div>

          <div className="relative mt-20">
            <div className="pointer-events-none absolute left-0 right-0 top-[48px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {experience.map((e) => (
                <div key={e.label} className="relative text-center">
                  <div className="relative mx-auto flex h-[96px] w-[96px] items-center justify-center">
                    <div className="absolute inset-0 rounded-full blur-2xl opacity-60" style={{ backgroundColor: glow }} />
                    <div className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-surface-elevated shadow-soft">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{e.time}</span>
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-light tracking-tight text-foreground">{e.label}</h3>
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
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-border bg-surface-elevated p-12 text-center shadow-soft md:p-24">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: `radial-gradient(circle at center, ${glow}, transparent 60%)` }}
              />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">begin today</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-light leading-[1.02] tracking-tightest text-foreground md:text-7xl">
              {cta.split(" ").slice(0, 2).join(" ")}<br />{cta.split(" ").slice(2).join(" ")}.
            </h2>
            <p className="mx-auto mt-8 max-w-md text-muted-foreground md:text-lg">
              30 strips. One ritual. A daily protocol that fits your life.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.03]">
                {cta}
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

export default ProductPage;