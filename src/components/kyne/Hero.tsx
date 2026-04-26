import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-52 md:pb-48">
      {/* soft, light ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,hsl(30_60%_88%/0.7),transparent_60%)] blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,hsl(260_50%_92%/0.5),transparent_60%)] blur-3xl" />
        <div className="absolute left-[8%] top-[40%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,hsl(130_30%_92%/0.5),transparent_60%)] blur-3xl" />
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
                className="group relative flex min-h-[188px] flex-col overflow-hidden rounded-[20px] border border-border shadow-soft transition-transform duration-500 hover:-translate-y-1 md:min-h-[220px]"
                style={{ backgroundColor: p.tint, animationDelay: `${i * 120}ms` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 65%, ${p.glow}, transparent 65%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pb-6">
                  {/* stack of dissolvable strips — long, thin, oral-strip proportions */}
                  <div
                    className="relative transition-transform duration-700 group-hover:-translate-y-1"
                    style={{ transform: "perspective(800px) rotateX(52deg) rotateZ(-10deg)" }}
                  >
                    {/* back strip */}
                    <div className="absolute -left-3 -top-2 h-[34px] w-[128px] rounded-[7px] border border-white/45 bg-gradient-to-br from-white/75 to-white/45 shadow-[0_8px_18px_-8px_rgba(0,0,0,0.16)] backdrop-blur-sm" />
                    {/* middle strip */}
                    <div className="absolute -left-1.5 -top-1 h-[34px] w-[128px] rounded-[7px] border border-white/55 bg-gradient-to-br from-white/88 to-white/62 shadow-[0_8px_18px_-8px_rgba(0,0,0,0.16)] backdrop-blur-sm" />
                    {/* front strip */}
                    <div className="relative h-[34px] w-[128px] overflow-hidden rounded-[7px] border border-white/70 bg-gradient-to-br from-white via-white/92 to-white/72 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md">
                      {/* fine grain texture */}
                      <div
                        className="absolute inset-0 opacity-50"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(90deg, transparent 0 4px, rgba(255,255,255,0.48) 4px 5px), repeating-linear-gradient(0deg, transparent 0 3px, rgba(0,0,0,0.02) 3px 4px)",
                        }}
                      />
                      {/* sheen */}
                      <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white/70 to-transparent" />
                      {/* subtle center mark */}
                      <div className="absolute inset-0 flex items-center justify-center font-display text-[10px] font-light tracking-[0.2em] text-foreground/22">
                        kyne
                      </div>
                      {/* perforation hint */}
                      <div className="absolute inset-y-1.5 right-2 w-px bg-foreground/10" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-foreground/8 blur-[6px]" />
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