import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

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
        setLocation(`${data.country_name}`);
      } catch {
        setLocation("Unknown");
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

  return (
    <footer className="border-t border-border bg-background h-20 flex items-center text-[11px] text-muted-foreground">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Time, Date & Location (Vertical) */}
        <div className="flex flex-col leading-tight font-mono">
          <span className="text-foreground font-semibold">{formattedTime}</span>
          <span>{formattedDate}</span>
          <span>{location}</span>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-transform hover:scale-110"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-transform hover:scale-110"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-transform hover:scale-110"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="flex flex-col items-end leading-tight">
          <span>© {year} Fachri Ahmad</span>
          <span className="text-muted-foreground/70">Built with React</span>
        </div>
      </div>
    </footer>
  );
}
