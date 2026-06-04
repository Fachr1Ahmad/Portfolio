import { motion, useInView, cubicBezier } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Trophy,
  Briefcase,
} from "lucide-react";
import { useRef } from "react";

const profile = new URL("../assets/profile.png", import.meta.url).href;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

interface Experience {
  company: string;
  role: string;
  period: string;
  active: boolean;
  tag?: string;
}

const experiences: Experience[] = [
  {
    company: "Bank Rakyat Indonesia",
    role: "Data Analyst Intern — Micro Sales Management",
    period: "Dec 2025 — May 2026",
    active: true,
    tag: "Banking",
  },
  {
    company: "Perguruan Diniyyah Puteri",
    role: "Full-Stack Developer",
    period: "Dec 2025 — Feb 2026",
    active: false,
    tag: "Web Dev",
  },
  {
    company: "Institut Teknologi Sumatera",
    role: "Teaching Assistant — Informatics Entrepreneurship",
    period: "Oct 2023 — Dec 2023",
    active: false,
    tag: "Academic",
  },
  {
    company: "Bappeda Kota Padang Panjang",
    role: "Frontend Developer Intern",
    period: "Jul 2023 — Aug 2023",
    active: false,
    tag: "Gov",
  },
];

const recognitions = [
  {
    title: "1st Place Best Entrepreneurship Grant",
    year: "2024",
    issuer: "Institut Teknologi Sumatera",
  },
  {
    title: "P2MW National Grant Awardee — Advanced Stage",
    year: "2024",
    issuer: "Kemendikbudristek RI · Rp17 Juta",
  },
  {
    title: "P2MW National Grant Awardee — Early Stage",
    year: "2023",
    issuer: "Kemendikbudristek RI · Rp14 Juta",
  },
  {
    title: "IENTERA Entrepreneurship Awardee",
    year: "2021",
    issuer: "Institut Teknologi Sumatera",
  },
];

const stats = [
  { val: "2.5M+", label: "Data rows processed" },
  { val: "4×", label: "Industry roles" },
  { val: "2×", label: "National grant awardee" },
  { val: "18", label: "Regional offices served" },
];

const skills = [
  "Python",
  "VBA Macro",
  "SQL Server",
  "R (RStudio)",
  "React.js",
  "Laravel",
  "Excel Advanced",
  "Data Analysis",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/30 dark:text-white/25 mb-4">
      {children}
    </p>
  );
}

function ExperienceItem({ company, role, period, active, tag }: Experience) {
  return (
    <motion.div variants={itemVariants} className="group relative pl-5">
      <span
        className={`absolute left-0 top-[6px] bottom-0 w-px ${
          active ? "bg-black dark:bg-white" : "bg-zinc-200 dark:bg-zinc-800"
        }`}
      />
      <span
        className={`absolute left-[-4px] top-[6px] w-[9px] h-[9px] rounded-full border-2 transition-colors ${
          active
            ? "border-black dark:border-white bg-black dark:bg-white"
            : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-black"
        }`}
      />
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-bold text-[12px] uppercase tracking-tight leading-tight group-hover:opacity-60 transition-opacity duration-300">
          {company}
        </h4>
        {tag && (
          <span className="shrink-0 text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 rounded-sm">
            {tag}
          </span>
        )}
      </div>
      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
        {role}
      </p>
      <p className="text-[10px] mt-1.5 font-mono text-zinc-400 dark:text-zinc-600 uppercase">
        {period}
      </p>
    </motion.div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-white dark:bg-[#080808] text-black dark:text-white transition-colors duration-500 overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,currentColor 39px,currentColor 40px)," +
            "repeating-linear-gradient(90deg,transparent,transparent 39px,currentColor 39px,currentColor 40px)",
        }}
      />

      <div
        ref={ref}
        className="relative container mx-auto px-6 sm:px-10 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24 border-b border-zinc-100 dark:border-zinc-900 pb-10"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter uppercase"
            >
              ABOUT
              <span className="text-zinc-200 dark:text-zinc-800 italic ml-2 md:ml-5 select-none">
                ME.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="mt-6 h-px bg-black dark:bg-white w-24"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-start"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-10"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-full mx-auto">
              <div className="absolute -inset-2 border border-zinc-100 dark:border-zinc-900 rounded-sm pointer-events-none" />
              <div className="absolute -inset-4 border border-zinc-50 dark:border-zinc-950 rounded-sm pointer-events-none" />

              <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-zinc-100 dark:bg-zinc-900">
                <motion.img
                  src={profile}
                  alt="Fachri Ahmad"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000 ease-out"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-4 -right-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.25em]">
                  Fachri Ahmad
                </p>
                <p className="text-[9px] opacity-50 font-mono uppercase mt-0.5 flex items-center gap-1">
                  <MapPin size={8} />
                  Padang Panjang, Indonesia
                </p>
              </motion.div>
            </div>

            <div className="space-y-4 pt-6">
              <SectionLabel>Academic Background</SectionLabel>
              <motion.div
                variants={itemVariants}
                className="group border border-zinc-100 dark:border-zinc-900 hover:border-black dark:hover:border-white p-5 transition-all duration-300 rounded-sm"
              >
                <div className="flex items-center gap-2 mb-3 text-zinc-400">
                  <GraduationCap size={13} />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                    2020 — 2025
                  </span>
                </div>
                <h4 className="font-bold text-[13px] uppercase leading-snug group-hover:opacity-60 transition-opacity duration-300">
                  Bachelor of Computer Science
                </h4>
                <p className="text-[11px] text-zinc-500 mt-1 uppercase tracking-wide">
                  Institut Teknologi Sumatera
                </p>
                <p className="text-[10px] text-zinc-400 mt-2 font-mono">
                  GPA 3.20 / 4.00
                </p>
              </motion.div>
            </div>

            <div className="space-y-4">
              <SectionLabel>Core Technologies</SectionLabel>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200 rounded-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-12"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <p className="text-[1.35rem] md:text-[1.5rem] leading-[1.25] font-bold tracking-tight">
                  Fachri Ahmad
                </p>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-black dark:bg-white text-white dark:text-black rounded-sm">
                  Available
                </span>
              </div>

              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-[13px]">
                Fresh graduate in Computer Science with hands-on experience
                across{" "}
                <strong className="text-black dark:text-white">
                  banking, government, and education sectors
                </strong>
                . Processed and automated large-scale datasets exceeding{" "}
                <strong className="text-black dark:text-white">
                  2.5 million rows
                </strong>{" "}
                during internship at{" "}
                <strong className="text-black dark:text-white">
                  PT Bank Rakyat Indonesia
                </strong>
                , utilizing Python, VBA Macro, SQL Server, and R across{" "}
                <strong className="text-black dark:text-white">
                  18 Regional Offices nationwide
                </strong>
                . Two-time national{" "}
                <strong className="text-black dark:text-white">
                  P2MW grant awardee
                </strong>{" "}
                with a proven track record in micro business development and
                financial inclusion.
              </p>

              <blockquote className="relative pl-5 border-l-2 border-black dark:border-white mt-6">
                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                  "I focus on automating complex workflows and ensuring every
                  system is intentional, efficient, and scalable."
                </p>
              </blockquote>
            </div>

            <div className="space-y-4">
              <SectionLabel>Key Recognitions</SectionLabel>
              <div className="divide-y divide-zinc-50 dark:divide-zinc-900">
                {recognitions.map((r) => (
                  <motion.div
                    key={r.title}
                    variants={itemVariants}
                    className="group flex justify-between items-start py-3.5 hover:pl-2 transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-start gap-2.5">
                      <Trophy
                        size={11}
                        className="shrink-0 mt-0.5 text-zinc-300 dark:text-zinc-700 group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
                      />
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 block leading-snug">
                          {r.title}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600 mt-0.5 block">
                          {r.issuer}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-[9px] font-mono text-zinc-400">
                        {r.year}
                      </span>
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <SectionLabel>Professional Experience</SectionLabel>
              </div>
              <motion.div variants={containerVariants} className="space-y-8">
                {experiences.map((e) => (
                  <ExperienceItem key={`${e.company}-${e.period}`} {...e} />
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 overflow-hidden rounded-sm"
            >
              {stats.map(({ val, label }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-[#080808] p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-300"
                >
                  <p className="text-2xl font-black tracking-tighter">{val}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wide mt-0.5 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-zinc-100 dark:border-zinc-900 space-y-4"
            >
              <SectionLabel>Get in Touch</SectionLabel>
              <div className="space-y-3">
                <a
                  href="mailto:fachri.120140124@student.itera.ac.id"
                  className="group inline-flex flex-col gap-1 w-full"
                >
                  <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-tight border-b border-black/10 dark:border-white/10 pb-2 group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                    <Mail
                      size={12}
                      className="shrink-0 group-hover:text-zinc-500 transition-colors duration-300"
                    />
                    fachri.120140124@student.itera.ac.id
                  </span>
                </a>
                <a
                  href="https://fachr1ahmad.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-tight text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  <Briefcase size={12} className="shrink-0" />
                  fachr1ahmad.vercel.app
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
