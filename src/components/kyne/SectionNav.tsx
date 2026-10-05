import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "pepi", label: "PEPI" },
  { id: "system", label: "System" },
  { id: "how-it-works", label: "How It Works" },
  { id: "ingredients", label: "Ingredients" },
  { id: "comparables", label: "Compare" },
  { id: "testimonials", label: "Testimonials" },
  { id: "pricing", label: "Pricing" },
];

export const SectionNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-24 right-6 z-40 hidden xl:block">
      <div className="flex flex-col gap-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 p-3 shadow-lg">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative flex items-center justify-end gap-3 transition-all ${
              activeSection === id ? "scale-110" : "hover:scale-105"
            }`}
            aria-label={`Scroll to ${label}`}
          >
            <span
              className={`absolute right-full mr-3 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 ${
                activeSection === id
                  ? "bg-foreground text-background"
                  : "bg-background/90 text-foreground"
              }`}
            >
              {label}
            </span>
            <div
              className={`h-2 w-2 rounded-full transition-all ${
                activeSection === id
                  ? "bg-foreground scale-150"
                  : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SectionNav;
