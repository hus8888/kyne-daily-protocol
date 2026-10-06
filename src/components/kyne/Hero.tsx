import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import MagneticButton from "./MagneticButton";

/**
 * Returns hero ambient gradient hues with warm peach/apricot tones.
 * Morning → warm peach/apricot. Day → soft amber. Evening → muted peach. Night → warm taupe.
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
      // Morning — warm peach and apricot
      return { center: "25 75% 85%", left: "30 70% 88%", right: "20 65% 90%", label: "morning" };
    }
    if (hour >= 11 && hour < 16) {
      // Midday — soft amber and warm sand
      return { center: "35 65% 88%", left: "28 60% 90%", right: "40 55% 92%", label: "midday" };
    }
    if (hour >= 16 && hour < 20) {
      // Afternoon — golden apricot
      return { center: "30 70% 86%", left: "25 65% 89%", right: "35 60% 91%", label: "afternoon" };
    }
    if (hour >= 20 && hour < 23) {
      // Evening — muted peach
      return { center: "20 55% 88%", left: "25 50% 90%", right: "15 50% 92%", label: "evening" };
    }
    // Night — warm taupe
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
        {/* Two-column layout: text left, product right on desktop */}
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          
          {/* Left column: Hero copy */}
          <div className="flex flex-col">
            <div
              className="mb-10 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur animate-fade-in"
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
              className="mt-8 max-w-lg text-balance text-base text-muted-foreground md:text-lg animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Sublingual strips that work in 90 seconds. No water, no pills, no waiting.
              Bypass your gut. Enter your bloodstream directly.
            </p>

            <div
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row animate-fade-up"
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

          {/* Right column: Approved packaging image */}
          <div
            className="relative flex items-center justify-center animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <div className="relative w-full max-w-md">
              {/* Soft glow behind product */}
              <div
                className="absolute inset-0 translate-y-8 rounded-full blur-3xl opacity-60"
                style={{
                  background: "radial-gradient(circle, hsl(25 75% 85% / 0.7), transparent 70%)",
                }}
              />
              
              {/* Product image */}
              <img
                src="/packaging-hero.jpg"
                alt="KYNE Morning Protocol - Tube, Box, and Sachet"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
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
    </section>
  );
};

export default Hero;
