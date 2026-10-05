import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";

const PageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.page-dropdown')) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close dropdown when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const pages = [
    { name: "Home", path: "/" },
    { name: "Story", path: "/story" },
    { name: "Science", path: "/science" },
    { name: "Compare", path: "/compare" },
    { name: "Ingredients", path: "/ingredients" },
    { name: "Research", path: "/research" },
    { name: "Reviews", path: "/reviews" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="page-dropdown fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 bg-surface-2/95 backdrop-blur-sm border border-accent/20 rounded-full text-foreground/90 hover:text-accent hover:border-accent/40 transition-all duration-300 active:scale-95 shadow-lg"
        aria-expanded={isOpen}
        aria-label="Navigate to other pages"
      >
        <span className="font-medium">Explore Pages</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-surface-2/98 backdrop-blur-md border border-accent/20 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 max-h-[70vh] overflow-y-auto scrollbar-thin">
            {pages.map((page) => (
              <Link key={page.path} href={page.path}>
                <a
                  className={`block px-4 py-3 rounded-xl transition-all duration-200 ${
                    location === page.path
                      ? 'bg-accent/10 text-accent border border-accent/20'
                      : 'text-foreground/80 hover:bg-surface-3 hover:text-accent'
                  }`}
                >
                  {page.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageDropdown;
