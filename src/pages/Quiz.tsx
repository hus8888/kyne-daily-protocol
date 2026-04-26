import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type OptionValue = "low" | "med" | "high";

type Question = {
  id: "energy" | "stress" | "sleep" | "focus" | "goals";
  label: string;
  prompt: string;
  helper: string;
  options: { value: string; label: string; sub?: string }[];
  multi?: boolean;
};

const questions: Question[] = [
  {
    id: "energy",
    label: "energy",
    prompt: "how's your energy on a typical day?",
    helper: "Tell us where you usually start.",
    options: [
      { value: "low", label: "running low", sub: "I crash by mid-morning" },
      { value: "med", label: "uneven", sub: "Good days, flat days" },
      { value: "high", label: "consistent", sub: "Generally strong" },
    ],
  },
  {
    id: "stress",
    label: "stress",
    prompt: "how would you describe your stress?",
    helper: "Be honest — this calibrates dosing.",
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
    prompt: "how is your focus during work?",
    helper: "Sustained attention, not just bursts.",
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

const computeProtocol = (a: Answers) => {
  const score = { signal: 0, shift: 0, rhythm: 0 };
  const w = (v?: string | string[]) => (v === "low" ? 3 : v === "med" ? 2 : v === "high" ? 1 : 0);

  // energy → signal (morning)
  score.signal += w(a.energy as string) + 1;
  // focus → shift (day)
  score.shift += w(a.focus as string) + 1;
  // sleep → rhythm (night)
  score.rhythm += w(a.sleep as string) + 1;
  // stress nudges shift + rhythm
  const stress = w(a.stress as string);
  score.shift += stress * 0.5;
  score.rhythm += stress * 0.5;

  // goals
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
  return {
    scores: score,
    percent: {
      signal: Math.round((score.signal / max) * 100),
      shift: Math.round((score.shift / max) * 100),
      rhythm: Math.round((score.rhythm / max) * 100),
    },
  };
};

const products = [
  {
    id: "signal" as const,
    name: "kyne signal",
    time: "morning",
    desc: "Clean, sustained focus and energy to open the day.",
    accent: "from-[hsl(40_100%_70%)] to-[hsl(20_100%_60%)]",
    glow: "hsl(40 100% 60% / 0.35)",
  },
  {
    id: "shift" as const,
    name: "kyne shift",
    time: "day",
    desc: "Cognitive endurance and recovery between demands.",
    accent: "from-[hsl(195_100%_70%)] to-[hsl(220_100%_60%)]",
    glow: "hsl(195 100% 60% / 0.4)",
  },
  {
    id: "rhythm" as const,
    name: "kyne rhythm",
    time: "night",
    desc: "Deep recovery, repair and sleep architecture.",
    accent: "from-[hsl(260_80%_70%)] to-[hsl(220_80%_50%)]",
    glow: "hsl(260 80% 60% / 0.35)",
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0); // 0..questions.length (last = result)
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
      }, 220);
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

  const progress = isResult ? 100 : ((step) / totalSteps) * 100;

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-background text-foreground">
      {/* ambient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.18),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-base font-semibold tracking-tightest">KYNE</span>
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              / protocol quiz
            </span>
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {isResult ? "complete" : `0${step + 1} / 0${totalSteps}`}
          </div>
        </div>
        {/* progress */}
        <div className="h-px w-full bg-border/60">
          <div
            className="h-px bg-foreground transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100dvh-57px)] max-w-xl flex-col px-5 pb-8 pt-10">
        {!isResult && current && (
          <section
            key={current.id}
            className={`flex flex-1 flex-col ${
              direction === 1 ? "animate-fade-up" : "animate-fade-in"
            }`}
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {current.label}
              </div>
              <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-gradient md:text-4xl">
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
                    className={`group relative flex w-full items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      selected
                        ? "border-foreground/40 bg-surface shadow-elevated"
                        : "border-border bg-surface/40 hover:border-foreground/20 hover:bg-surface"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-base font-medium tracking-tight">
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

            {/* sticky footer actions */}
            <div className="sticky bottom-4 mt-auto pt-10">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="rounded-full border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← back
                </button>
                {current.multi ? (
                  <button
                    onClick={next}
                    disabled={!isAnswered(current)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-elevated transition-all disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    {step === totalSteps - 1 ? "see protocol" : "continue"}
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

        {isResult && result && (
          <section className="flex flex-1 flex-col animate-fade-up">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                calibrated for you
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient md:text-5xl">
                your kyne<br />protocol.
              </h1>
              <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
                Based on your answers, this is the daily system we recommend.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {products.map((p, i) => {
                const pct = result.percent[p.id];
                const primary = pct >= 90;
                return (
                  <article
                    key={p.id}
                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 ${
                      primary
                        ? "border-foreground/30 bg-surface shadow-elevated"
                        : "border-border bg-surface/40"
                    } animate-fade-up`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      {/* mini visual */}
                      <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-background">
                        <div
                          className="absolute inset-0 opacity-70"
                          style={{
                            background: `radial-gradient(circle at 50% 60%, ${p.glow}, transparent 65%)`,
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={`h-7 w-12 rounded-md bg-gradient-to-br ${p.accent} opacity-90 shadow-lg`}
                          />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-display text-base font-medium tracking-tight">
                            {p.name}
                          </h3>
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            {p.time}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                          {p.desc}
                        </p>
                        {/* match bar */}
                        <div className="mt-3 flex items-center gap-3">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                            <div
                              className="h-full rounded-full bg-foreground transition-all duration-1000 ease-out"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="font-mono text-[10px] tabular-nums tracking-[0.15em] text-muted-foreground">
                            {pct}% match
                          </span>
                        </div>
                      </div>
                    </div>

                    {primary && (
                      <div className="absolute right-3 top-3 rounded-full border border-border bg-background/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground backdrop-blur">
                        primary
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="sticky bottom-4 mt-auto pt-10">
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background shadow-elevated transition-transform hover:scale-[1.02]"
                >
                  start your protocol
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
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