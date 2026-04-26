import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type ProductId = "signal" | "shift" | "rhythm";

type Question = {
  id: "energy" | "stress" | "sleep" | "focus" | "goals";
  label: string;
  prompt: string;
  helper: string;
  multi?: boolean;
  options: { value: string; label: string; sub?: string }[];
};

const questions: Question[] = [
  {
    id: "energy",
    label: "energy",
    prompt: "how does your energy usually feel?",
    helper: "Think about a typical weekday morning.",
    options: [
      { value: "low", label: "running low", sub: "I crash by mid-morning" },
      { value: "med", label: "uneven", sub: "Some good days, some flat" },
      { value: "high", label: "consistent", sub: "Generally strong" },
    ],
  },
  {
    id: "stress",
    label: "stress",
    prompt: "how is your stress lately?",
    helper: "Be honest — this calibrates your protocol.",
    options: [
      { value: "low", label: "manageable", sub: "I feel in control" },
      { value: "med", label: "elevated", sub: "Frequent tension" },
      { value: "high", label: "high", sub: "Always switched on" },
    ],
  },
  {
    id: "sleep",
    label: "sleep",
    prompt: "how is your sleep quality?",
    helper: "Think about the last two weeks.",
    options: [
      { value: "high", label: "restorative", sub: "I wake refreshed" },
      { value: "med", label: "inconsistent", sub: "Some nights are rough" },
      { value: "low", label: "poor", sub: "Trouble falling or staying asleep" },
    ],
  },
  {
    id: "focus",
    label: "focus",
    prompt: "how is your focus during the day?",
    helper: "Sustained attention, not short bursts.",
    options: [
      { value: "low", label: "scattered", sub: "Hard to lock in" },
      { value: "med", label: "okay", sub: "Comes and goes" },
      { value: "high", label: "sharp", sub: "I can hold deep work" },
    ],
  },
  {
    id: "goals",
    label: "goals",
    prompt: "what matters most right now?",
    helper: "Choose all that apply.",
    multi: true,
    options: [
      { value: "energy", label: "more energy" },
      { value: "focus", label: "deeper focus" },
      { value: "calm", label: "lower stress" },
      { value: "sleep", label: "better sleep" },
      { value: "recovery", label: "faster recovery" },
    ],
  },
];

type Answers = Partial<Record<Question["id"], string | string[]>>;

const products: Record<
  ProductId,
  { name: string; time: string; tagline: string; route: string; tint: string; soft: string; glow: string; benefits: string[] }
> = {
  signal: {
    name: "kyne signal",
    time: "morning",
    tagline: "Clean, sustained energy and clarity to begin the day with intention.",
    route: "/signal",
    tint: "hsl(var(--signal))",
    soft: "hsl(var(--signal-soft))",
    glow: "hsl(var(--signal) / 0.55)",
    benefits: ["Steady morning energy", "Calm focus, no jitters", "Replaces the second coffee"],
  },
  shift: {
    name: "kyne shift",
    time: "day",
    tagline: "Even focus and gentle recovery to carry you through what the day asks.",
    route: "/shift",
    tint: "hsl(var(--shift))",
    soft: "hsl(var(--shift-soft))",
    glow: "hsl(var(--shift) / 0.5)",
    benefits: ["Sustained afternoon focus", "Lower stress under load", "Gentle daytime recovery"],
  },
  rhythm: {
    name: "kyne rhythm",
    time: "night",
    tagline: "Quiet the system, restore the night, and wake feeling fully yours again.",
    route: "/rhythm",
    tint: "hsl(var(--rhythm))",
    soft: "hsl(var(--rhythm-soft))",
    glow: "hsl(var(--rhythm) / 0.55)",
    benefits: ["Fall asleep faster", "Restorative sleep cycles", "Wake clear, not groggy"],
  },
};

const computeProtocol = (a: Answers) => {
  const score = { signal: 0, shift: 0, rhythm: 0 };
  const w = (v?: string | string[]) => (v === "low" ? 3 : v === "med" ? 2 : v === "high" ? 1 : 0);

  score.signal += w(a.energy as string) + 1;
  score.shift += w(a.focus as string) + 1;
  score.rhythm += w(a.sleep as string) + 1;
  const stress = w(a.stress as string);
  score.shift += stress * 0.5;
  score.rhythm += stress * 0.5;

  const goals = (a.goals as string[]) ?? [];
  if (goals.includes("energy")) score.signal += 2;
  if (goals.includes("focus")) score.shift += 2;
  if (goals.includes("calm")) score.rhythm += 1.5;
  if (goals.includes("sleep")) score.rhythm += 2;
  if (goals.includes("recovery")) {
    score.rhythm += 1;
    score.shift += 0.5;
  }

  const max = Math.max(score.signal, score.shift, score.rhythm);
  const ranked = (Object.entries(score) as [ProductId, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([id, v]) => ({ id, percent: Math.round((v / max) * 100) }));

  return { primary: ranked[0], rest: ranked.slice(1) };
};

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [direction, setDirection] = useState<1 | -1>(1);

  const totalSteps = questions.length;
  const isResult = step === totalSteps;
  const current = !isResult ? questions[step] : null;

  const result = useMemo(() => (isResult ? computeProtocol(answers) : null), [isResult, answers]);

  const select = (q: Question, value: string) => {
    setAnswers((prev) => {
      if (q.multi) {
        const arr = (prev[q.id] as string[] | undefined) ?? [];
        const next = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
        return { ...prev, [q.id]: next };
      }
      return { ...prev, [q.id]: value };
    });

    if (!q.multi) {
      setTimeout(() => {
        setDirection(1);
        setStep((s) => s + 1);
      }, 240);
    }
  };

  const next = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, totalSteps));
  };
  const back = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };
  const restart = () => {
    setAnswers({});
    setDirection(-1);
    setStep(0);
  };

  const isAnswered = (q: Question) => {
    const v = answers[q.id];
    if (q.multi) return Array.isArray(v) && v.length > 0;
    return typeof v === "string" && v.length > 0;
  };

  const progress = isResult ? 100 : (step / totalSteps) * 100;
  const primaryProduct = result ? products[result.primary.id] : null;

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-background text-foreground">
      {/* light, calm ambience */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,hsl(30_60%_88%/0.6),transparent_60%)] blur-3xl" />
        {isResult && primaryProduct && (
          <div
            className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl transition-all duration-700"
            style={{
              background: `radial-gradient(circle at center, ${primaryProduct.glow}, transparent 65%)`,
            }}
          />
        )}
      </div>

      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-base font-semibold tracking-tightest">KYNE</span>
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              / find your protocol
            </span>
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {isResult ? "complete" : `0${step + 1} / 0${totalSteps}`}
          </div>
        </div>
        <div className="h-px w-full bg-border/60">
          <div
            className="h-px bg-foreground transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100dvh-57px)] max-w-xl flex-col px-5 pb-8 pt-12">
        {!isResult && current && (
          <section
            key={current.id}
            className={`flex flex-1 flex-col ${direction === 1 ? "animate-fade-up" : "animate-fade-in"}`}
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {current.label}
              </div>
              <h1 className="mt-4 font-display text-3xl font-light leading-[1.1] tracking-tightest text-foreground md:text-4xl">
                {current.prompt}
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">{current.helper}</p>
            </div>

            <div className="mt-10 space-y-3">
              {current.options.map((opt) => {
                const isMulti = !!current.multi;
                const selected = isMulti
                  ? ((answers[current.id] as string[] | undefined) ?? []).includes(opt.value)
                  : answers[current.id] === opt.value;

                return (
                  <button
                    key={opt.value}
                    onClick={() => select(current, opt.value)}
                    className={`group relative flex w-full items-center justify-between gap-4 rounded-2xl border p-5 text-left shadow-soft transition-all duration-300 ${
                      selected
                        ? "border-foreground/40 bg-surface-elevated shadow-elevated"
                        : "border-border bg-surface-elevated/80 hover:-translate-y-0.5 hover:border-foreground/20"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-base font-medium tracking-tight text-foreground">
                        {opt.label}
                      </div>
                      {opt.sub && (
                        <div className="mt-1 text-xs text-muted-foreground">{opt.sub}</div>
                      )}
                    </div>
                    <span
                      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-all ${
                        selected
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-transparent group-hover:border-foreground/40"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="sticky bottom-4 mt-auto pt-10">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="rounded-full border border-border bg-surface-elevated px-5 py-3 text-sm text-muted-foreground shadow-soft transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← back
                </button>
                {current.multi ? (
                  <button
                    onClick={next}
                    disabled={!isAnswered(current)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-soft transition-all disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    {step === totalSteps - 1 ? "see my protocol" : "continue"}
                    <span>→</span>
                  </button>
                ) : (
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    tap to continue
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {isResult && result && primaryProduct && (
          <section className="flex flex-1 flex-col animate-fade-up">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-soft">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: primaryProduct.tint }}
                />
                calibrated for you
              </div>
              <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-5xl">
                we recommend<br />
                <span className="text-foreground">{primaryProduct.name}.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
                Based on your answers, this is the best place to begin your daily ritual.
              </p>
            </div>

            {/* Hero recommendation card */}
            <Link
              to={primaryProduct.route}
              className="group mt-10 block overflow-hidden rounded-[28px] border border-border bg-surface-elevated p-2 shadow-elevated transition-transform duration-500 hover:-translate-y-1"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-[22px]"
                style={{ backgroundColor: primaryProduct.soft }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 65%, ${primaryProduct.glow}, transparent 65%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-36 rounded-2xl bg-white/85 shadow-soft backdrop-blur-sm transition-transform duration-700 group-hover:rotate-[-3deg] group-hover:scale-105" />
                </div>
                <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                  {primaryProduct.time}
                </div>
                <div className="absolute right-5 top-5 rounded-full bg-white/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
                  {result.primary.percent}% match
                </div>
              </div>

              <div className="px-6 py-6">
                <h2 className="font-display text-2xl font-light tracking-tight text-foreground">
                  {primaryProduct.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {primaryProduct.tagline}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {primaryProduct.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: primaryProduct.tint }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>

            {/* Secondary recommendations */}
            <div className="mt-6 space-y-3">
              <div className="px-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                also a fit for you
              </div>
              {result.rest.map((r) => {
                const p = products[r.id];
                return (
                  <Link
                    key={r.id}
                    to={p.route}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-elevated/80 p-3 shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    <div
                      className="relative h-14 w-16 flex-shrink-0 overflow-hidden rounded-xl"
                      style={{ backgroundColor: p.soft }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(circle at 50% 65%, ${p.glow}, transparent 65%)`,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-6 w-10 rounded-md bg-white/85 shadow-soft" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-display text-sm font-medium text-foreground">
                          {p.name}
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {r.percent}%
                        </span>
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {p.time} · explore →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="sticky bottom-4 mt-auto pt-10">
              <div className="flex flex-col gap-3">
                <Link
                  to={primaryProduct.route}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02]"
                >
                  explore {primaryProduct.name}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <button
                  onClick={restart}
                  className="text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  retake quiz
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Quiz;