import type { ReactNode } from "react";

/**
 * Sticky monospaced chapter label. Wraps a normal section label and pins it
 * just under the nav as the user scrolls past, like book chapters.
 * Pure CSS — uses position: sticky on a sentinel wrapper.
 */
const ChapterLabel = ({
  children,
  align = "center",
}: {
  children: ReactNode;
  align?: "center" | "left";
}) => {
  return (
    <div
      className={`pointer-events-none sticky top-20 z-10 flex ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground shadow-soft backdrop-blur">
        <span className="h-1 w-1 rounded-full bg-foreground/40" />
        {children}
      </span>
    </div>
  );
};

export default ChapterLabel;