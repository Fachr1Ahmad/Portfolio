import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Trophy, Award, ArrowUpRight, Star } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  year: string;
  issuer: string;
  value?: string;
  icon: React.ElementType;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "P2MW National Grant Awardee — Advanced Stage",
    year: "2024",
    issuer: "Kemendikbudristek RI",
    value: "Rp17 Juta",
    icon: Trophy,
  },
  {
    id: 2,
    title: "1st Place Best Entrepreneurship Grant",
    year: "2024",
    issuer: "Institut Teknologi Sumatera",
    icon: Award,
  },
  {
    id: 3,
    title: "P2MW National Grant Awardee — Early Stage",
    year: "2023",
    issuer: "Kemendikbudristek RI",
    value: "Rp14 Juta",
    icon: Star,
  },
  {
    id: 4,
    title: "IENTERA Entrepreneurship Awardee",
    year: "2021",
    issuer: "Institut Teknologi Sumatera",
    icon: Award,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 bg-white dark:bg-[#080808] text-black dark:text-white transition-colors duration-500 overflow-hidden border-t border-zinc-100 dark:border-zinc-900"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,currentColor 39px,currentColor 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,currentColor 39px,currentColor 40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8 md:px-16">
        <div className="mb-16 border-b border-zinc-100 dark:border-zinc-900 pb-10">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[9px] font-black uppercase tracking-[0.35em] text-black/30 dark:text-white/25 mb-4"
          >
            § 03.5 — Milestones
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.85] tracking-tighter uppercase"
            >
              AWARDS
              <span className="text-zinc-200 dark:text-zinc-800 italic ml-3 select-none">
                & GRANTS.
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="mt-6 h-px bg-black dark:bg-white w-24"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col"
        >
          {ACHIEVEMENTS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-zinc-100 dark:border-zinc-800 transition-all duration-500 cursor-default ${
                hoveredId && hoveredId !== item.id
                  ? "opacity-30 blur-[1px]"
                  : "opacity-100"
              }`}
            >
              <div className="flex items-start md:items-center gap-5">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-sm group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                  <item.icon size={18} className="shrink-0" />
                </div>
                <div>
                  <h3 className="font-black text-[clamp(14px,2vw,18px)] uppercase tracking-tight leading-snug group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {item.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:ml-auto ml-14">
                {item.value && (
                  <span className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 px-3 py-1.5 rounded-sm">
                    {item.value}
                  </span>
                )}
                <span className="font-mono text-[12px] text-zinc-300 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {item.year}
                </span>
                <ArrowUpRight
                  size={16}
                  className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black dark:text-white"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
