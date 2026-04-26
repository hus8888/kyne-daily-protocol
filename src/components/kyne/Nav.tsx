import { useEffect, useState } from "react";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#system", label: "System" },
  { href: "#science", label: "Science" },
  { href: "#pricing", label: "Pricing" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tightest">KYNE</span>
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              / protocol
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#pricing"
            className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Build protocol
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;