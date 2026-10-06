import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import MagneticButton from "./MagneticButton";

/**
 * Returns hero ambient gradient hues with warm peach/apricot tones.
 */
function useTimeOfDayAmbience() {
  const [hour, setHour] = useState(() => new Date().getHours());

  useEffect(() => {
    const id = window.setInterval(
      () => setHour(new Date().getHours()),
      10 * 60 * 1000
    );
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    if (hour >= 5 && hour < 11) {
      return { center: "25 75% 85%", left: "30 70% 88%", right: "20 65% 90%", label: "morning" };
    }
    if (hour >= 11 && hour < 16) {
      return { center: "35 65% 88%", left: "28 60% 90%", right: "40 55% 92%", label: "midday" };
    }
    if (hour >= 16 && hour < 20) {
      return { center: "30 70% 86%", left: "25 65% 89%", right: "35 60% 91%", label: "afternoon" };
    }
    if (hour >= 20 && hour < 23) {
      return { center: "20 55% 88%", left: "25 50% 90%", right: "15 50% 92%", label: "evening" };
    }
    return { center: "30 45% 90%", left: "25 40% 92%", right: "35 40% 92%", label: "night" };
  }, [hour]);
}

const Hero = () => {
  const ambience = useTimeOfDayAmbience();

  return (
    <section
      className="relative overflow-hidden pt-40 pb-20 md:pt-52 md:pb-32"
      data-tod={ambience.label}
    >
      {/* Warm peach/apricot gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[900px] w-[1400px] -translate-x-1/2 -translate-y-1/4 rounded-full blur-3xl transition-[background] duration-[2000ms] ease-out"
          style={{
            background: `radial-gradient(circle at center, hsl(${ambience.center} / 0.8), transparent 65%)`,
          }}
        />
        <div
          className="absolute right-[5%] top-[15%] h-[500px] w-[500px] rounded-full blur-3xl transition-[background] duration-[2000ms] ease-out"
          style={{
            background: `radial-gradient(circle at center, hsl(${ambience.right} / 0.6), transparent 65%)`,
          }}
        />
        <div
          className="absolute left-[5%] top-[35%] h-[500px] w-[500px] rounded-full blur-3xl transition-[background] duration-[2000ms] ease-out"
          style={{
            background: `radial-gradient(circle at center, hsl(${ambience.left} / 0.6), transparent 65%)`,
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          {/* Badge and headline - centered */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur animate-fade-in"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70 animate-pulse-glow" />
              A daily protocol, redesigned
            </div>

            <h1
              className="text-balance font-display text-[44px] font-light leading-[1.02] tracking-tightest text-foreground md:text-6xl lg:text-7xl animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              your daily<br />protocol.
            </h1>

            <p
              className="mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Sublingual strips that work in 90 seconds. No water, no pills, no waiting.
              Bypass your gut. Enter your bloodstream directly.
            </p>

            <div
              className="mt-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <MagneticButton
                href="#pricing"
                strength={10}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-soft"
              >
                build your protocol
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </MagneticButton>
              <a
                href="#system"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                explore the system →
              </a>
            </div>
          </div>

          {/* Product showcase - integrated with design system */}
          <div
            className="relative mx-auto mt-20 max-w-4xl animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            {/* Rounded card container matching site aesthetic */}
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-white/90 via-white/80 to-surface/70 p-8 shadow-elevated backdrop-blur-sm md:p-12">
              
              {/* Subtle peach glow behind product - integrated with card */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `radial-gradient(ellipse at 50% 40%, hsl(25 75% 85% / 0.6), transparent 70%)`,
                }}
              />

              {/* Product image - naturally positioned */}
              <div className="relative z-10 mx-auto flex max-w-2xl items-center justify-center">
                <img
                  src="/packaging-hero.jpg"
                  alt="KYNE Morning Protocol - Tube, Box, and Sachet"
                  className="w-full h-auto drop-shadow-xl"
                  loading="eager"
                />
              </div>

              {/* Subtle label in corner matching design system */}
              <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                01 — morning
              </div>
              
              {/* Info footer matching product cards */}
              <div className="relative z-10 mx-auto mt-8 max-w-md rounded-xl border border-border/60 bg-white/85 px-4 py-3 backdrop-blur-md md:mt-10">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <div className="font-display text-sm font-medium tracking-tight text-foreground">
                      kyne morning
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      clean morning energy · 30 strips
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-sm font-medium text-foreground">
                      $48
                    </div>
                    <div className="mt-0.5 text-[10px] text-muted-foreground">
                      per month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-16 md:mt-20 flex justify-center animate-fade-up"
            style={{ animationDelay: "540ms" }}
          >
            <a
              href="#system"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
              aria-label="Scroll to product system"
            >
              <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
              <div className="flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border border-border bg-surface/60 backdrop-blur-sm transition-all group-hover:border-foreground/30 group-active:border-foreground/30">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/60 group-hover:bg-foreground group-active:bg-foreground animate-scroll-down" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
