import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@Fachr1Ahmad",
    href: "https://github.com/Fachr1Ahmad",
    desc: "Projects & open source",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "fachriahmad",
    href: "https://linkedin.com/in/fachriahmad",
    desc: "Professional network",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "fachri.120140124@student.itera.ac.id",
    href: "mailto:fachri.120140124@student.itera.ac.id",
    desc: "Direct message",
  },
  {
    icon: Globe,
    label: "Portfolio",
    handle: "fachr1ahmad.vercel.app",
    href: "https://fachr1ahmad.vercel.app",
    desc: "Live projects",
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Server error. Please try again.");
      }
    } catch {
      alert("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 bg-white dark:bg-[#080808] text-black dark:text-white transition-colors duration-500 overflow-hidden"
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
            § 04 — Get In Touch
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.85] tracking-tighter uppercase"
            >
              CONTACT
              <span className="text-zinc-200 dark:text-zinc-800 italic ml-3 select-none">
                ME.
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/30 dark:text-white/25 mb-6">
              Find me online
            </p>

            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="group flex items-center gap-4 p-4 border border-zinc-100 dark:border-zinc-800 hover:border-black dark:hover:border-white bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300 rounded-sm"
              >
                <div className="p-2.5 bg-zinc-50 dark:bg-zinc-800 group-hover:bg-black dark:group-hover:bg-white rounded-sm transition-colors duration-300">
                  <link.icon
                    size={16}
                    className="text-zinc-500 group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[12px] uppercase tracking-tight text-black dark:text-white">
                    {link.label}
                  </p>
                  <p className="text-[10px] font-mono text-zinc-400 truncate mt-0.5">
                    {link.handle}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[9px] font-mono uppercase tracking-wide text-zinc-400">
                    {link.desc}
                  </p>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black dark:text-white"
                  />
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 p-4 border border-zinc-100 dark:border-zinc-800 rounded-sm"
            >
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/30 dark:text-white/25 mb-3">
                Location
              </p>
              <p className="font-bold text-[13px] text-black dark:text-white">
                Padang Panjang, West Sumatera
              </p>
              <p className="text-[11px] font-mono text-zinc-400 mt-1">
                Available for remote collaboration worldwide
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/30 dark:text-white/25 mb-6">
              Send a message
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 rounded-sm flex items-center gap-3"
              >
                <CheckCircle2
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400 shrink-0"
                />
                <p className="text-[12px] font-semibold text-emerald-700 dark:text-emerald-400">
                  Message sent successfully!
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", placeholder: "Your Name", type: "text" },
                { key: "email", placeholder: "Your Email", type: "email" },
              ].map((field) => (
                <input
                  key={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.key]: e.target.value })
                  }
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-black dark:text-white placeholder:text-zinc-400 font-mono text-[12px] rounded-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200 disabled:opacity-50"
                />
              ))}

              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                disabled={loading}
                className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-black dark:text-white placeholder:text-zinc-400 font-mono text-[12px] rounded-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200 resize-none disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-2 h-12 bg-black dark:bg-white text-white dark:text-black font-black text-[11px] uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send
                      size={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
