import React from "react";
import { motion, Variants } from "framer-motion"; // Tambahkan Variants di sini
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Path image profil
const profile = new URL("../assets/profile.png", import.meta.url).href;

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Perbaikan TypeScript: Menambahkan tipe : Variants untuk menghilangkan garis merah
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
    >
      {/* 1. BACKGROUND MOVING TEXT (Dibuat Sangat Rapat) */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none overflow-hidden space-y-0">
        {/* Baris Pertama */}
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-[25vw] md:text-[22vw] font-black tracking-tighter italic mr-20 uppercase">
            FACHRI FACHRI FACHRI FACHRI
          </h1>
        </motion.div>

        {/* Baris Kedua: Menggunakan Negative Margin Tinggi agar menempel/rapat */}
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
        {/* 2. MAIN CAPSULE IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
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

          <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full shadow-2xl rotate-90 origin-center text-[10px] font-black tracking-[0.4em] uppercase whitespace-nowrap">
            Fachri Ahmad
          </div>
        </motion.div>

        {/* 3. CONTENT AREA */}
        <div className="flex flex-col items-center text-center max-w-xl space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-medium tracking-wide"
          >
            Membangun sistem informasi modern dengan estetika bersih, struktur
            terorganisir, dan performa maksimal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
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
                  href="https://github.com/FachriAhmad"
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
                className="rounded-full text-[10px] font-black uppercase tracking-widest px-6 h-10 hover:bg-white dark:hover:bg-zinc-800"
                onClick={() => window.open("/cv-fachri.pdf", "_blank")}
              >
                CV <Download className="ml-2 w-3 h-3" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
