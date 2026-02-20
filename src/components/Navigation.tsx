import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "top-4 w-[90%] md:w-[60%] lg:w-[50%] rounded-full bg-background/70 border border-border/40 shadow-lg backdrop-blur-xl py-2"
            : "top-0 w-full rounded-none bg-background/95 border-b border-border/20 shadow-none py-3"
        }`}
    >
      <div className="px-6 md:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-bold tracking-tighter hover:opacity-70 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            FA.
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-xs lg:text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <div className="pl-4 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-full hover:bg-accent transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-3 md:hidden overflow-hidden bg-background/95 border border-border/30 shadow-2xl backdrop-blur-2xl
          ${
            isScrolled ? "rounded-3xl mx-4" : "rounded-none w-full border-x-0"
          }`}
        >
          <div className="flex flex-col items-center py-6 gap-5">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
