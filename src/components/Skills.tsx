import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython,
  SiR,
  SiReact,
  SiTypescript,
  SiLaravel,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGit,
} from "react-icons/si";
import { Database, Table, Server } from "lucide-react";

interface Tool {
  label: string;
  sublabel: string;
  Icon: React.ElementType;
}

const tools: Tool[] = [
  { label: "Python", sublabel: "Automation", Icon: SiPython },
  { label: "SQL Server", sublabel: "Database", Icon: Server },
  { label: "R / RStudio", sublabel: "Statistics", Icon: SiR },
  { label: "Excel", sublabel: "VBA & Macro", Icon: Table },
  { label: "React.js", sublabel: "Frontend", Icon: SiReact },
  { label: "Laravel", sublabel: "Backend", Icon: SiLaravel },
  { label: "TypeScript", sublabel: "Type-Safe", Icon: SiTypescript },
  { label: "JavaScript", sublabel: "Logic", Icon: SiJavascript },
  { label: "HTML5", sublabel: "Markup", Icon: SiHtml5 },
  { label: "CSS3", sublabel: "Styling", Icon: SiCss3 },
  { label: "Bootstrap", sublabel: "UI", Icon: SiBootstrap },
  { label: "Git", sublabel: "Version Control", Icon: SiGit },
];

// Membagi array menjadi dua baris untuk efek gulir yang berlawanan arah
const row1 = tools.slice(0, 6);
const row2 = tools.slice(6, 12);

// Komponen Reusable untuk Baris Marquee
function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Tool[];
  reverse?: boolean;
}) {
  // Menggandakan item beberapa kali agar loop terlihat mulus tanpa putus
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden w-full group py-2">
      <motion.div
        className="flex gap-4 w-max"
        // Jika reverse true, animasi dari -50% ke 0%. Jika false, dari 0% ke -50%.
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 25, // Sesuaikan durasi untuk mengatur kecepatan
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((tool, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-[#080808] border border-zinc-200 dark:border-zinc-800 rounded-sm min-w-max hover:border-black dark:hover:border-white transition-colors duration-300"
          >
            <tool.Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            <div className="flex flex-col">
              <span className="font-bold text-[12px] uppercase tracking-tight text-black dark:text-white leading-none mb-1">
                {tool.label}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest leading-none">
                {tool.sublabel}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 bg-zinc-50 dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500 overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,currentColor 39px,currentColor 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,currentColor 39px,currentColor 40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8 md:px-16">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[9px] font-black uppercase tracking-[0.35em] text-black/30 dark:text-white/25 mb-4"
            >
              § 03 — Capabilities
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.85] tracking-tighter uppercase"
              >
                SKILLS
                <span className="text-zinc-200 dark:text-zinc-800 italic ml-3 select-none">
                  & TOOLS
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-left md:text-right max-w-xs"
          >
            Technologies I use to build scalable data pipelines and robust web
            applications.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-2 relative"
        >
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50 dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a] w-full" />

          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>


      </div>
    </section>
  );
}
