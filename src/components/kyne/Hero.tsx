import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

/**
 * Returns hero ambient gradient hues based on local time of day.
 * Morning → warm amber. Day → fresh green. Evening → soft violet. Night → indigo.
 * All HSL strings; transitions are CSS-driven for smoothness.
 */
function useTimeOfDayAmbience() {
  const [hour, setHour] = useState(() => new Date().getHours());

  useEffect(() => {
    // Refresh every 10 min — cheap and avoids stale tones over a long session.
    const id = window.setInterval(
      () => setHour(new Date().getHours()),
      10 * 60 * 1000
    );
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    // [centerHue, leftHue, rightHue] — kept very pale (high lightness).
    if (hour >= 5 && hour < 11) {
      // Morning — warm amber, soft peach, gentle sage
      return { center: "30 70% 88%", left: "20 60% 90%", right: "130 40% 92%", label: "morning" };
    }
    if (hour >= 11 && hour < 16) {
      // Midday — fresh, bright sand + green + sky
      return { center: "45 55% 90%", left: "130 35% 92%", right: "200 45% 92%", label: "midday" };
    }
    if (hour >= 16 && hour < 20) {
      // Late afternoon → golden hour
      return { center: "25 65% 88%", left: "12 55% 90%", right: "280 35% 92%", label: "afternoon" };
    }
    if (hour >= 20 && hour < 23) {
      // Evening — soft violet
      return { center: "275 45% 90%", left: "300 35% 92%", right: "240 40% 92%", label: "evening" };
    }
    // Night — calm indigo
    return { center: "245 40% 90%", left: "260 35% 92%", right: "220 35% 92%", label: "night" };
  }, [hour]);
}

const Hero = () => {
  const ambience = useTimeOfDayAmbience();

  return (
    <section
      className="relative overflow-hidden pt-40 pb-32 md:pt-52 md:pb-48"
      data-tod={ambience.label}
    >
      {/* soft, time-of-day ambience — hues transition smoothly via CSS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl transition-[background] duration-[2000ms] ease-out"
          style={{
            background: `radial-gradient(circle at center, hsl(${ambience.center} / 0.7), transparent 60%)`,
          }}
        />
        <div
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full blur-3xl transition-[background] duration-[2000ms] ease-out"
          style={{
            background: `radial-gradient(circle at center, hsl(${ambience.right} / 0.55), transparent 60%)`,
          }}
        />
        <div
          className="absolute left-[8%] top-[40%] h-[400px] w-[400px] rounded-full blur-3xl transition-[background] duration-[2000ms] ease-out"
          style={{
            background: `radial-gradient(circle at center, hsl(${ambience.left} / 0.55), transparent 60%)`,
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur animate-fade-in"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70 animate-pulse-glow" />
            A daily protocol, redesigned
          </div>

          <h1
            className="text-balance font-display text-[44px] font-light leading-[1.02] tracking-tightest text-foreground md:text-7xl lg:text-[88px] animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            your daily<br />protocol.
          </h1>

          <p
            className="mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            Dissolvable strips designed for how your body actually absorbs.
            Calm, calibrated, daily.
          </p>

          <div
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02]"
            >
              build your protocol
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#system"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              explore the system →
            </a>
          </div>
        </div>

        {/* hero product visual — three soft tinted orbs */}
        <div
          className="relative mx-auto mt-28 max-w-5xl animate-fade-up"
          style={{ animationDelay: "480ms" }}
        >
          <div className="relative mt-20 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-24 md:gap-5">
            {[
              { name: "signal", time: "morning", price: 38, tagline: "clean morning energy", to: "/signal", tint: "hsl(var(--signal-soft))", glow: "hsl(var(--signal) / 0.55)" },
              { name: "shift", time: "day", price: 38, tagline: "calm daytime focus", to: "/shift", tint: "hsl(var(--shift-soft))", glow: "hsl(var(--shift) / 0.5)" },
              { name: "rhythm", time: "night", price: 38, tagline: "fall asleep faster", to: "/rhythm", tint: "hsl(var(--rhythm-soft))", glow: "hsl(var(--rhythm) / 0.55)" },
            ].map((p, i) => (
              <Link
                key={p.name}
                to={p.to}
                data-dissolve-target
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  el.style.setProperty("--mx", `${x}%`);
                  el.style.setProperty("--my", `${y}%`);
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.setProperty("--mx", `50%`);
                  el.style.setProperty("--my", `65%`);
                }}
                className="group relative flex min-h-[188px] flex-col overflow-hidden rounded-[20px] border border-border shadow-soft transition-transform duration-500 hover:-translate-y-1 md:min-h-[220px]"
                style={{
                  backgroundColor: p.tint,
                  animationDelay: `${i * 120}ms`,
                  // shared timing for dissolve-edge + particle drift
                  ["--dissolve-duration" as string]: `${3.4 + i * 0.4}s`,
                  // shared easing curve for dissolve-edge + particle drift
                  ["--dissolve-easing" as string]:
                    "cubic-bezier(0.22, 1, 0.36, 1)",
                  // cursor-aware glow position (defaults centered/below)
                  ["--mx" as string]: "50%",
                  ["--my" as string]: "65%",
                }}
              >
                {/* base ambient tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 65%, ${p.glow}, transparent 65%)`,
                  }}
                />
                {/* cursor-following highlight (desktop) */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(220px circle at var(--mx) var(--my), ${p.glow}, transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pb-6">
                  {/* stack of dissolvable oral strips — pill-form geometry */}
                  <div
                    className="relative transition-transform duration-700 group-hover:-translate-y-1"
                    style={{ transform: "perspective(900px) rotateX(58deg) rotateZ(-10deg)" }}
                  >
                    {/* back strip — fully rounded ends, very thin */}
                    <div className="absolute -left-3 -top-1.5 h-[18px] w-[120px] rounded-full border border-white/45 bg-gradient-to-br from-white/75 to-white/45 shadow-[0_6px_14px_-6px_rgba(0,0,0,0.16)] backdrop-blur-sm" />
                    {/* middle strip */}
                    <div className="absolute -left-1.5 -top-[3px] h-[18px] w-[120px] rounded-full border border-white/55 bg-gradient-to-br from-white/88 to-white/62 shadow-[0_6px_14px_-6px_rgba(0,0,0,0.16)] backdrop-blur-sm" />
                    {/* front strip */}
                    <div className="relative h-[18px] w-[120px] overflow-hidden rounded-full border border-white/70 bg-gradient-to-br from-white via-white/92 to-white/72 shadow-[0_10px_22px_-10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md animate-dissolve-edge">
                      {/* fine grain texture */}
                      <div
                        className="absolute inset-0 opacity-45"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(90deg, transparent 0 4px, rgba(255,255,255,0.45) 4px 5px), repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,0.02) 2px 3px)",
                        }}
                      />
                      {/* sheen */}
                      <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white/65 to-transparent" />
                      {/* perforation holes — micro dots */}
                      <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between">
                        {Array.from({ length: 9 }).map((_, idx) => (
                          <span
                            key={idx}
                            className="h-[2px] w-[2px] rounded-full bg-foreground/22"
                          />
                        ))}
                      </div>
                      {/* tiny brand mark */}
                      <div className="absolute inset-0 flex items-center justify-center font-display text-[8px] font-light tracking-[0.25em] text-foreground/30">
                        kyne
                      </div>
                    </div>
                    {/* contact shadow */}
                    <div className="absolute -bottom-2 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-foreground/10 blur-[6px]" />
                    {/* dissolving particles — masked to strip edges */}
                    <div
                      className="pointer-events-none absolute inset-x-0 -top-3 h-10"
                      style={{
                        WebkitMaskImage:
                          "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 14%, rgba(0,0,0,0) 32%, rgba(0,0,0,0) 68%, rgba(0,0,0,0.6) 86%, rgba(0,0,0,0.95) 100%)",
                        maskImage:
                          "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 14%, rgba(0,0,0,0) 32%, rgba(0,0,0,0) 68%, rgba(0,0,0,0.6) 86%, rgba(0,0,0,0.95) 100%)",
                      }}
                    >
                      {[
                        { left: "4%", delay: "0s", dx: "-5px", size: 2 },
                        { left: "10%", delay: "0.7s", dx: "-3px", size: 1.5 },
                        { left: "16%", delay: "1.3s", dx: "-6px", size: 2 },
                        { left: "22%", delay: "0.4s", dx: "-2px", size: 1.5 },
                        { left: "82%", delay: "0.2s", dx: "3px", size: 1.5 },
                        { left: "88%", delay: "1.0s", dx: "5px", size: 2 },
                        { left: "94%", delay: "1.6s", dx: "2px", size: 1.5 },
                        { left: "98%", delay: "0.5s", dx: "6px", size: 2 },
                      ].map((p, idx) => (
                        <span
                          key={idx}
                          className="absolute bottom-0 rounded-full bg-white/90 shadow-[0_0_4px_rgba(255,255,255,0.7)] animate-dissolve"
                          style={{
                            left: p.left,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDelay: p.delay,
                            // @ts-expect-error css var
                            "--dx": p.dx,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                  {p.time}
                </div>
                <div className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                  0{i + 1}
                </div>

                {/* info footer with price */}
                <div className="absolute inset-x-2.5 bottom-2.5 rounded-xl border border-white/60 bg-white/78 px-3 py-2.5 backdrop-blur-md">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-sm font-medium tracking-tight text-foreground">
                      kyne {p.name}
                    </span>
                    <span className="font-display text-sm font-medium text-foreground">
                      ${p.price}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <span className="truncate text-[10px] text-muted-foreground">
                      {p.tagline}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/70 transition-transform group-hover:translate-x-0.5">
                      shop →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;