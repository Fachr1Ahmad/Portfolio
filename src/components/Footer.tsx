import React, { useEffect, useState } from "react";
import { Github, Linkedin, Globe } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState<string>("...");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setLocation(data.country_name);
      } catch {
        setLocation("Indonesia");
      }
    };
    fetchLocation();
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const year = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/Fachr1Ahmad", icon: Github, label: "GitHub" },
    {
      href: "https://linkedin.com/in/fachriahmad",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://fachr1ahmad.vercel.app", icon: Globe, label: "Portfolio" },
  ];

  return (
    <footer
      className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-[#080808] h-20 flex items-center text-[11px] text-zinc-400 dark:text-zinc-600 transition-colors duration-500"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
        <div className="flex flex-col leading-tight font-mono">
          <span className="text-black dark:text-white font-semibold text-[12px]">
            {formattedTime}
          </span>
          <span className="text-[10px]">{formattedDate}</span>
          <span className="text-[10px]">{location}</span>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-end leading-tight">
          <span className="text-black dark:text-white font-semibold">
            © {year} Fachri Ahmad
          </span>
          <span className="text-[10px]">Informatics Engineering · ITERA</span>
          <span className="text-[10px] text-zinc-300 dark:text-zinc-700">
            Built with React + TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
