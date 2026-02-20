import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navItems = [
    { name: "ABOUT", id: "about", icon: <BarChart3 size={16} /> },
    { name: "SKILLS", id: "skills", icon: <PieChart size={16} /> },
    { name: "PROJECTS", id: "projects", icon: <TrendingUp size={16} /> },
    { name: "CONTACT", id: "contact", icon: <ArrowUpRight size={16} /> },
  ];

  return (
    <>
      {/* 1. FLOATING TOGGLE BUTTON */}
      <div className="fixed top-6 right-6 z-[60] flex items-center gap-4">
        <div
          className={`p-1 rounded-full backdrop-blur-md border transition-all ${
            isScrolled
              ? "bg-white/50 dark:bg-black/50 border-black/10 dark:border-white/10"
              : "bg-transparent border-transparent"
          }`}
        >
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90"
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 transition-all duration-300 absolute ${
                isOpen
                  ? "rotate-45 bg-white dark:bg-black"
                  : "-translate-y-1.5 bg-white dark:bg-black"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isOpen
                  ? "opacity-0 bg-white dark:bg-black"
                  : "opacity-100 bg-white dark:bg-black"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 absolute ${
                isOpen
                  ? "-rotate-45 bg-white dark:bg-black"
                  : "translate-y-1.5 bg-white dark:bg-black"
              }`}
            />
          </div>
        </button>
      </div>

      {/* 2. OVERLAY MENU PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-white dark:bg-black border-l border-black/5 dark:border-white/10 z-[55] shadow-2xl p-12 flex flex-col items-center"
          >
            {/* Background Branding Overlay (Fachri) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.03] pointer-events-none select-none overflow-hidden">
              <h2 className="text-[180px] font-black uppercase text-black dark:text-white -rotate-90">
                Fachri
              </h2>
            </div>

            {/* Top Section: Header Label */}
            <div className="w-full flex flex-col items-center mb-auto">
              <div className="w-8 h-[1px] bg-black/10 dark:bg-white/20 mt-4" />
            </div>

            {/* MIDDLE SECTION: Navigation Items (Focused Center) */}
            <div className="flex-1 flex flex-col justify-center w-full relative z-10">
              <nav className="flex flex-col items-center gap-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="group flex flex-col items-center gap-1"
                    >
                      <span className="text-zinc-300 dark:text-zinc-700 font-mono text-[10px] tabular-nums italic tracking-widest">
                        / 0{index + 1}
                      </span>
                      <div className="relative">
                        <span className="text-4xl md:text-5xl font-black text-zinc-300 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-all duration-500 uppercase tracking-tighter italic leading-none">
                          {item.name}
                        </span>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-black dark:bg-white transition-all duration-500 group-hover:w-full" />
                      </div>
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Section: Centered Footer */}
            <div className="w-full flex flex-col items-center mt-auto gap-6 pt-12 border-t border-black/5 dark:border-white/10">
              <div className="text-center">
                <p className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-tight mb-1">
                  © 2026 Fachri Ahmad
                </p>
              </div>

              <div className="flex gap-6 text-zinc-400 dark:text-zinc-500">
                <a
                  href="https://github.com/Fachr1Ahmad"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/fachriahmad"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. DIM OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-sm z-50 transition-opacity"
          />
        )}
      </AnimatePresence>
    </>
  );
}
