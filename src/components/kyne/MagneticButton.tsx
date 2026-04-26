import { forwardRef, useRef, type ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  /** Max pull distance in px. */
  strength?: number;
  /** Activation radius (mouse must be within this, in px) outside the element bounds. */
  radius?: number;
  children: ReactNode;
};

/**
 * Wraps a CTA in a subtle magnetic hover — the element gently leans toward the
 * cursor when nearby. Desktop only (pointer:fine via @media check inline).
 * Honors prefers-reduced-motion.
 */
const MagneticButton = forwardRef<HTMLAnchorElement, Props>(
  ({ href = "#", onClick, className, strength = 10, radius = 60, children }, _ref) => {
    const localRef = useRef<HTMLAnchorElement | null>(null);

    const handleMove = (e: React.MouseEvent) => {
      const el = localRef.current;
      if (!el) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const max = Math.max(rect.width, rect.height) / 2 + radius;
      if (dist > max) {
        el.style.transform = "translate(0,0)";
        return;
      }
      const pull = (1 - dist / max) * strength;
      const angle = Math.atan2(dy, dx);
      const tx = Math.cos(angle) * pull;
      const ty = Math.sin(angle) * pull;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    };

    const reset = () => {
      const el = localRef.current;
      if (el) el.style.transform = "translate(0,0)";
    };

    return (
      <a
        ref={localRef}
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={className}
        style={{ transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {children}
      </a>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

export default MagneticButton;