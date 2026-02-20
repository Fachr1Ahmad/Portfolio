import {
  SiHtml5,
  SiCss3,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export function Skills() {
  const tools = [
    { icon: SiHtml5, label: "HTML" },
    { icon: SiCss3, label: "CSS" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiBootstrap, label: "Bootstrap" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiPhp, label: "PHP" },
    { icon: SiLaravel, label: "Laravel" },
    { icon: SiGit, label: "Git" },
    { icon: SiFigma, label: "Figma" },
  ];

  // buat efek posisi acak sedikit biar gak terlalu grid banget
  const randomOffset = () => ({
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
  });

  return (
    <section
      id="skills"
      className="py-24 bg-white text-black dark:bg-black dark:text-white transition-colors duration-700"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Tools & Tech I Use
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-12">
          {tools.map((tool, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <motion.div
                initial={randomOffset()}
                whileHover={{ scale: 1.15, y: -6 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="relative">
                  <tool.icon className="w-12 h-12 text-black dark:text-white opacity-80 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-25 group-hover:bg-black dark:group-hover:bg-white transition-all duration-500"></div>
                </div>
                <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                  {tool.label}
                </span>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
