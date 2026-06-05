import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Database,
  Code2,
  Trophy,
  Loader2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const profile = new URL("../assets/profile.png", import.meta.url).href;

const tags = [
  { icon: Database, label: "Data Analyst @ BRI" },
  { icon: Code2, label: "Full-Stack Developer" },
  { icon: Trophy, label: "2× P2MW Awardee" },
];

export function Hero() {
  const [downloadState, setDownloadState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    if (downloadState !== "idle") return;

    setDownloadState("loading");

    // Simulasikan progress download selama 1.5 detik
    setTimeout(() => {
      setDownloadState("success");

      // Buka link Google Drive CV Anda
      window.open(
        "https://drive.google.com/file/d/1N2TZg7pk8-MGw4gLhzdCM21_gX_HoitX/view?usp=sharing",
        "_blank",
      );

      // Kembalikan ke state awal setelah 2 detik sukses
      setTimeout(() => {
        setDownloadState("idle");
      }, 2000);
    }, 1500);
  };

  const marqueeVariants: Variants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
    animateReverse: {
      x: [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full bg-white dark:bg-[#050505] flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-[25vw] md:text-[22vw] font-black tracking-tighter italic mr-20 uppercase">
            FACHRI FACHRI FACHRI FACHRI
          </h1>
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap -mt-[12vw] md:-mt-[15vw]"
          variants={marqueeVariants}
          animate="animateReverse"
        >
          <h1 className="text-[25vw] md:text-[22vw] font-black tracking-tighter mr-20 uppercase">
            AHMAD AHMAD AHMAD AHMAD
          </h1>
        </motion.div>
      </div>

      <div className="container relative z-10 flex flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative group mb-10"
        >
          <div className="absolute -inset-4 border border-zinc-100 dark:border-zinc-900 rounded-[200px] scale-95 group-hover:scale-100 transition-transform duration-1000" />

          <div className="w-[260px] h-[380px] md:w-[320px] md:h-[440px] rounded-full overflow-hidden border-[8px] border-white dark:border-zinc-900 shadow-2xl bg-zinc-100 dark:bg-zinc-800">
            <img
              src={profile}
              alt="Fachri Ahmad"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full shadow-2xl rotate-90 origin-center text-[10px] font-black tracking-[0.4em] uppercase whitespace-nowrap"
          >
            Fachri Ahmad
          </motion.div>

          
        </motion.div>

        <div className="flex flex-col items-center text-center max-w-2xl space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {tags.map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 rounded-full text-[10px] font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400"
              >
                <tag.icon size={10} />
                {tag.label}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15, // Jeda waktu antar teks muncul
                  delayChildren: 0.7, // Menunggu elemen di atasnya selesai dulu
                },
              },
            }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-[15px] leading-relaxed font-medium tracking-wide text-zinc-500 dark:text-zinc-400 max-w-3xl"
          >
            {[
              {
                text: "Fresh Graduate in",
                highlight: "Informatics Engineering",
              },
              {
                text: "Micro Sales Management Intern at",
                highlight: "BRI",
              },
              {
                text: "",
                highlight: "Web Developer",
              },
              {
                text: "2× National P2MW Awardee from",
                highlight: "Kemendikbudristek RI",
              },
            ].map((item, index, array) => (
              <React.Fragment key={index}>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  className="flex items-center gap-x-1"
                >
                  {item.text && <span>{item.text}</span>}
                  <span className="text-black dark:text-white font-bold">
                    {item.highlight}
                  </span>
                </motion.span>

                {index < array.length - 1 && (
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    className="hidden md:inline-block text-zinc-300 dark:text-zinc-700 mx-1 text-[10px]"
                  >
                    ◆
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <Button
              onClick={scrollToProjects}
              className="rounded-full h-14 px-12 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl"
            >
              See Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <div className="flex items-center bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 p-2 rounded-full shadow-lg">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 hover:bg-white dark:hover:bg-zinc-800"
                asChild
              >
                <a
                  href="https://github.com/Fachr1Ahmad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 hover:bg-white dark:hover:bg-zinc-800"
                asChild
              >
                <a
                  href="https://linkedin.com/in/fachriahmad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              </Button>
              <div className="w-[1px] h-5 bg-zinc-300 dark:bg-zinc-700 mx-2" />

              
              <Button
                variant="ghost"
                className={`rounded-full text-[10px] font-black uppercase tracking-widest px-6 h-10 transition-all duration-300 overflow-hidden relative ${
                  downloadState === "success"
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white dark:text-white"
                    : "hover:bg-white dark:hover:bg-zinc-800"
                }`}
                onClick={handleDownloadCV}
                disabled={downloadState === "loading"}
              >
                <motion.div
                  className="flex items-center"
                  animate={{
                    y:
                      downloadState === "idle"
                        ? 0
                        : downloadState === "loading"
                          ? -40
                          : -40,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  CV <Download className="ml-2 w-3 h-3" />
                </motion.div>

                {downloadState === "loading" && (
                  <motion.div
                    initial={{ y: 40 }}
                    animate={{ y: 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-1.5 text-zinc-400 font-mono text-[9px]"
                  >
                    <Loader2 size={11} className="animate-spin" /> Fetching...
                  </motion.div>
                )}

                {downloadState === "success" && (
                  <motion.div
                    initial={{ y: 40 }}
                    animate={{ y: 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-1 text-white font-bold"
                  >
                    Done <Check size={12} strokeWidth={3} />
                  </motion.div>
                )}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col items-center gap-2 pt-4"
          >
            <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">
              Scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[1px] h-8 bg-gradient-to-b from-zinc-400 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
