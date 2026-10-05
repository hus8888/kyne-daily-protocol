import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#pepi", label: "PEPI" },
  { href: "#system", label: "System" },
  { href: "/science", label: "Science", isRoute: true },
  { href: "/compare", label: "Compare", isRoute: true },
  { href: "/story", label: "Our Story", isRoute: true },
  { href: "/blog", label: "Journal", isRoute: true },
  { href: "/faq", label: "FAQ", isRoute: true },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allPages = [
    { href: "/", label: "Home" },
    { href: "/story", label: "Our Story" },
    { href: "/science", label: "Science" },
    { href: "/compare", label: "Compare" },
    { href: "/ingredients", label: "Ingredients" },
    { href: "/research", label: "Research" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Journal" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/quiz", label: "Quiz" },
  ];

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
            scrolled ? "glass shadow-soft" : "bg-background/40 backdrop-blur-sm"
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tightest">KYNE</span>
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              / protocol
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              )
            )}
            <Link
              to="/quiz"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Quiz
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full p-2 text-foreground hover:bg-surface-2 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link
              to="/quiz"
              className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background shadow-soft transition-transform hover:scale-[1.03]"
            >
              Find your protocol
            </Link>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl glass shadow-soft animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">All Pages</div>
            <div className="grid grid-cols-2 gap-2">
              {allPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-surface-3 hover:text-accent transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;