import { useEffect, useState } from "react";

/**
 * Floating scroll hint - appears at bottom of viewport when user is at the very top.
 * Fades out as user starts scrolling. Mobile-friendly tap target.
 */
export const ScrollHint = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Hide after scrolling down 100px
      setVisible(window.scrollY < 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className={`fixed bottom-8 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll down to explore"
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground active:text-foreground">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
        <div className="flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border border-border bg-surface/80 backdrop-blur-md shadow-soft transition-all hover:border-foreground/30 active:border-foreground/30 hover:bg-surface">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/60 hover:bg-foreground active:bg-foreground animate-scroll-down" />
        </div>
      </div>
    </button>
  );
};

export default ScrollHint;
