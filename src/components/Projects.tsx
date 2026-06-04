import { useState, useRef } from "react";
import {
  ArrowUpRight,
  Github,
  Globe,
  Code2,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github_link?: string | null;
  demo_link?: string | null;
  year: string;
  type: string;
  highlights: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "POS System — Diniyyah Puteri",
    description:
      "Web-based Point of Sale system for Perguruan Diniyyah Puteri Restaurant, replacing manual transaction recording that caused up to 3-day delays in financial reporting.",
    longDescription:
      "Designed and developed a full-stack web-based POS system to modernize restaurant operations. The system eliminates manual transaction recording that previously caused up to 3-day delays in financial reporting. Built using the Waterfall methodology with complete requirements analysis, system design, implementation, and testing phases.",
    tags: ["Laravel", "MySQL", "PHP", "Bootstrap", "Waterfall"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    github_link: "https://github.com/Fachr1Ahmad/restoDiniyyah",
    demo_link: null,
    year: "2025",
    type: "Full-Stack",
    highlights: [
      "SUS Score 88/100 — Grade B (Excellent)",
      "30 respondents usability testing",
      "100% functional requirements passed Black-Box Testing",
      "Eliminated 3-day financial reporting delay",
    ],
  },
  {
    id: 2,
    title: "CMS Profile — Diniyyah Puteri",
    description:
      "Institutional profile website with content management system for Perguruan Diniyyah Puteri Padang Panjang, built with React and Laravel.",
    longDescription:
      "Developed a complete CMS-based institutional profile website as a remote Full-Stack Developer. Coordinated with the IT Head to gather functional and non-functional requirements, produced wireframes, and built the entire system solo. The platform enables non-technical staff to manage institutional content independently.",
    tags: ["React", "TypeScript", "Laravel", "MySQL", "REST API"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github_link: null,
    demo_link: null,
    year: "2025",
    type: "Full-Stack · Remote",
    highlights: [
      "Content management, authentication system",
      "Institutional profile, news & achievement pages",
      "SQL database schema designed from scratch",
      "Requirements doc & wireframe produced",
    ],
  },
  {
    id: 3,
    title: "Sensor Data System — BMKG",
    description:
      "Real-time sensor data monitoring system for BMKG Geophysics Station Padang Panjang, integrating data from the national central website and filtering by operational area.",
    longDescription:
      "Built as Frontend Developer in a 7-member team for Stasiun BMKG Geofisika Padang Panjang. The system parses real-time sensor data from the national BMKG central website, filters it by the station's operational area, and displays it in an organized dashboard. Replaces the previous workflow of manually browsing multiple web pages.",
    tags: ["React.js", "Python", "Waterfall", "REST API", "Data Parsing"],
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    github_link: "https://github.com/riyanks/PTI_TUBES",
    demo_link: null,
    year: "2023",
    type: "Frontend · Team Project",
    highlights: [
      "SUS Score 91.59 — Excellent",
      "Real-time data parsing from national BMKG website",
      "3 sensor types: Sismon WRS, Accelerograph, Intensitymeter",
      "Export to PDF & Excel supported",
    ],
  },
  {
    id: 4,
    title: "Musrenbang Pokir — Bappeda",
    description:
      "Web-based analysis application for local government regional planning sessions in Kota Padang Panjang, featuring Excel data upload and automated PDF report generation.",
    longDescription:
      "Developed as Frontend Developer Intern at Badan Perencanaan Penelitian dan Pengembangan Daerah Kota Padang Panjang. Built responsive UI components for the Musrenbang Pokir analysis application, collaborating with a backend developer to ensure seamless integration. Supported local government data-driven planning and decision-making.",
    tags: ["Laravel Blade", "Bootstrap", "JavaScript", "Black Box Testing"],
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    github_link: null,
    demo_link: null,
    year: "2023",
    type: "Frontend · Gov Project",
    highlights: [
      "Excel data upload & dashboard filtering UI",
      "Automated PDF & Excel report generation",
      "100% functional requirements validated",
      "Responsive across all government devices",
    ],
  },
  {
    id: 5,
    title: "BRI Data Pipeline Automation",
    description:
      "Large-scale data consolidation pipeline for PT Bank Rakyat Indonesia's Micro Sales Management division, processing 2.5M+ rows from 18 Regional Offices nationwide.",
    longDescription:
      "Developed during internship at BRI's Micro Sales Management division. Built automated data pipelines using VBA Macro (simpleXlsMerger) and Python to consolidate daily loan reports, micro awareness reports, and DPK data from 18 Regional Offices nationwide. Also implemented regional filtering via R (RStudio) and applied Microsoft SQL Server for debtor database segmentation.",
    tags: [
      "Python",
      "VBA Macro",
      "R (RStudio)",
      "SQL Server",
      "Excel Advanced",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github_link: null,
    demo_link: null,
    year: "2025",
    type: "Data Engineering · Banking",
    highlights: [
      "2.5M+ rows processed across Dec 2025 – Apr 2026",
      "18 Regional Offices consolidated daily",
      "SEKDA data: 34 provinces, 68 documents/month",
      "BRISIM & BRISPOT Web integration",
    ],
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description:
      "Minimalist personal portfolio website built with TypeScript and deployed on Vercel, showcasing projects and professional experience.",
    longDescription:
      "Designed and developed a personal portfolio website from scratch using TypeScript. Features smooth animations, dark/light mode, and a clean minimalist aesthetic. Deployed on Vercel for fast global delivery. Built to serve as a live showcase of technical skills and project experience.",
    tags: ["TypeScript", "React", "Framer Motion", "TailwindCSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    github_link: "https://github.com/Fachr1Ahmad/Portfolio",
    demo_link: "https://fachr1ahmad.vercel.app",
    year: "2025",
    type: "Frontend · Personal",
    highlights: [
      "TypeScript 98.2% codebase",
      "Deployed live on Vercel",
      "Framer Motion animations",
      "Dark & light mode support",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const typeIcon = (type: string) => {
  if (type.includes("Data")) return <Database size={10} />;
  return <Code2 size={10} />;
};

export function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount =
        window.innerWidth < 768 ? window.innerWidth * 0.85 : 400;
      const { scrollLeft } = carouselRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-[#060606] text-black dark:text-white overflow-hidden border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16">
        <div className="mb-10 border-b border-zinc-100 dark:border-zinc-900 pb-10">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[9px] font-black uppercase tracking-[0.35em] text-black/30 dark:text-white/25 mb-4"
          >
            § 02 — Selected Work
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-[clamp(3rem,8vw,6rem)] leading-[0.85] tracking-tight uppercase"
            >
              Projects
              <span className="text-zinc-200 dark:text-zinc-800 italic ml-3 select-none">
                Me.
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="mt-6 h-px bg-black dark:bg-white w-24"
          />
        </div>

        <div className="-mx-8 px-8 md:-mx-16 md:px-16 overflow-hidden">
          <motion.div
            ref={carouselRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-4 pb-12 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="w-[85vw] sm:w-[340px] md:w-[380px] shrink-0 snap-center bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-850 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 relative group"
              >
                <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1 font-mono text-[8px] tracking-[0.15em] uppercase text-black/50 dark:text-white/40 bg-white/80 dark:bg-black/70 border border-black/5 dark:border-white/10 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                    {typeIcon(project.type)}
                    {project.type}
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-[9px] tracking-wider text-black/40 dark:text-white/30 bg-white/80 dark:bg-black/70 px-1.5 py-0.5 border border-black/5 dark:border-white/10 rounded-sm backdrop-blur-sm">
                    {project.year}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold uppercase tracking-tight text-[14px] text-black dark:text-white leading-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5 mb-6">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] tracking-[0.1em] uppercase text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-900 mt-auto">
                    <div className="flex gap-4">
                      {project.demo_link && (
                        <a
                          href={project.demo_link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black dark:text-white hover:opacity-60 transition-opacity"
                        >
                          Live <Globe size={12} />
                        </a>
                      )}
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                          Code <Github size={12} />
                        </a>
                      )}
                    </div>
                    {!project.demo_link && !project.github_link && (
                      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400/60 dark:text-zinc-600">
                        Internal System
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 flex-1">
            <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-600 tracking-[0.22em] uppercase whitespace-nowrap">
              {PROJECTS.length} Selected Projects
            </span>
            <div className="h-px w-full bg-gradient-to-r from-zinc-100 dark:from-zinc-900 to-transparent" />
          </div>

          <div className="flex gap-1.5 shrink-0 items-center pl-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-full bg-white dark:bg-[#060606] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white hover:scale-105 transition-all duration-300 text-zinc-400 dark:text-zinc-500 shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={14} />
            </button>

            <motion.button
              onClick={() => scroll("right")}
              animate={{
                boxShadow: [
                  "0px 0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 0px 6px rgba(0,0,0,0.04)",
                  "0px 0px 0px 0px rgba(0,0,0,0)",
                ],
              }}
              className="dark:animate-none w-8 h-8 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-full bg-zinc-50 dark:bg-zinc-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white hover:scale-105 transition-all duration-300 text-black dark:text-white font-bold shadow-sm relative group"
              style={{
                animation: "pulse 2s infinite ease-in-out",
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={14} />

              <style>{`
                @keyframes pulse {
                  0% { box-shadow: 0 0 0 0 rgba(120, 120, 120, 0.2); }
                  70% { box-shadow: 0 0 0 6px rgba(120, 120, 120, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(120, 120, 120, 0); }
                }
              `}</style>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
