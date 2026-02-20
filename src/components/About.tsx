import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Sparkles, User } from "lucide-react";
import Shuffle from "./ui/Shuffle";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Judul dengan Shuffle Effect */}
        <div className="flex justify-center mb-16">
          <Shuffle
            text="Discovery"
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-2">
          {/* 1. Kapsul Utama (Bio) - Spans 2 cols & 2 rows */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 p-8 md:p-12 rounded-[50px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
                <User className="text-white dark:text-black w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                Seorang Web Developer yang fokus pada{" "}
                <span className="text-zinc-400">fungsionalitas</span> dan{" "}
                <span className="italic font-serif">estetika.</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Lulusan Teknik Informatika ITERA yang berdedikasi menciptakan
                sistem informasi yang tidak hanya berjalan dengan baik, tapi
                juga memberikan pengalaman pengguna yang luar biasa.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex gap-4">
              <div className="px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold uppercase tracking-widest">
                Based in West Sumatra
              </div>
            </div>
          </motion.div>

          {/* 2. Kapsul Tech Stack (Bergerak) */}
          <div className="md:col-span-2 p-8 rounded-[50px] bg-zinc-900 dark:bg-white text-white dark:text-black overflow-hidden relative group">
            <div className="relative z-10">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-70">
                Core Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Laravel",
                  "Tailwind",
                  "TypeScript",
                  "MySQL",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 rounded-full border border-white/20 dark:border-black/10 text-xs font-bold transition-all hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {/* Background Decor */}
            <Cpu className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>

          {/* 3. Kapsul Status (Interaktif) */}
          <div className="md:col-span-1 p-8 rounded-[50px] border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center space-y-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <Globe className="text-green-500 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">Remote</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest">
                Available Anywhere
              </div>
            </div>
          </div>

          {/* 4. Kapsul Magic/Vision */}
          <div className="md:col-span-1 p-8 rounded-[50px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-center space-y-2 group">
            <Sparkles
              className="text-zinc-400 group-hover:text-yellow-500 transition-colors"
              size={24}
            />
            <h4 className="font-bold">Vision</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Memajukan teknologi melalui baris kode yang bersih.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
