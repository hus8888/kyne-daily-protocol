import { useEffect, useState } from "react";

const EASINGS = [
  { label: "ease-out", value: "ease-out" },
  { label: "ease-in-out", value: "ease-in-out" },
  { label: "linear", value: "linear" },
  { label: "expo-out", value: "cubic-bezier(0.22, 1, 0.36, 1)" },
  { label: "back-out", value: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
  { label: "soft-in", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
];

/**
 * Floating dev panel for tuning the dissolve animation CSS variables live.
 * Writes --dissolve-duration and --dissolve-easing onto every hero strip card
 * (.group inside the hero product grid) so changes are immediate.
 */
const DissolveDebugPanel = () => {
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(3.4);
  const [easing, setEasing] = useState(EASINGS[3].value);

  // Apply variables to all hero strip cards live.
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-dissolve-target]"
    );
    targets.forEach((el) => {
      el.style.setProperty("--dissolve-duration", `${duration}s`);
      el.style.setProperty("--dissolve-easing", easing);
    });
  }, [duration, easing]);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono text-[11px]">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-border bg-surface-elevated/90 px-3 py-2 uppercase tracking-[0.2em] text-foreground/70 shadow-soft backdrop-blur transition-colors hover:text-foreground"
        >
          dissolve ⚙
        </button>
      ) : (
        <div className="w-64 rounded-2xl border border-border bg-surface-elevated/95 p-4 shadow-elevated backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="uppercase tracking-[0.2em] text-foreground/70">
              dissolve
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-foreground/50 hover:text-foreground"
              aria-label="close"
            >
              ×
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-foreground/70">
              <span>duration</span>
              <span>{duration.toFixed(2)}s</span>
            </div>
            <input
              type="range"
              min={0.4}
              max={8}
              step={0.1}
              value={duration}
              onChange={(e) => setDuration(parseFloat(e.target.value))}
              className="mt-2 w-full accent-foreground"
            />
          </div>

          <div className="mt-4">
            <div className="text-foreground/70">easing</div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {EASINGS.map((e) => (
                <button
                  key={e.label}
                  onClick={() => setEasing(e.value)}
                  className={`rounded-md border px-2 py-1.5 text-left transition-colors ${
                    easing === e.value
                      ? "border-foreground/40 bg-accent text-foreground"
                      : "border-border bg-transparent text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>
            <div className="mt-2 truncate text-[10px] text-foreground/50">
              {easing}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DissolveDebugPanel;