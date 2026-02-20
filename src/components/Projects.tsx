import { useState, useEffect } from "react";
import { Loader2, ExternalLink, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

// Pastikan port ini sesuai dengan backend Laravel kamu (biasanya 8000)
const BACKEND_URL = "http://127.0.0.1:8000";

// Interface untuk data yang digunakan di dalam komponen
interface Project {
  id?: number;
  title: string;
  description: string;
  tags: string | string[] | null;
  image: string;
  github_link?: string | null;
  demo_link?: string | null;
  figma_link?: string | null;
}

// Interface untuk data mentah dari API Laravel
type ApiProject = {
  id?: number;
  title: string;
  description: string;
  tags: string | string[] | null;
  image?: string;
  image_url?: string; // Field baru dari Accessor Laravel
  github_link?: string | null;
  demo_link?: string | null;
  figma_link?: string | null;
  // Support untuk format key lama (jika ada)
  github?: string | null;
  demo?: string | null;
  figma?: string | null;
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/projects`);
        if (!response.ok) throw new Error("Gagal mengambil data");

        const data: ApiProject[] = await response.json();

        // Normalisasi data dari API ke format komponen
        const normalized: Project[] = (Array.isArray(data) ? data : []).map(
          (p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            tags: p.tags ?? null,
            // LOGIKA PENTING: Prioritaskan image_url (full link), fallback ke image (nama file)
            image: p.image_url ?? p.image ?? "",
            github_link: p.github_link ?? p.github ?? null,
            demo_link: p.demo_link ?? p.demo ?? null,
            figma_link: p.figma_link ?? p.figma ?? null,
          })
        );

        setProjects(normalized);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Helper untuk parsing tags JSON dari database
  const parseTags = (tagsInput: string | string[] | null): string[] => {
    if (Array.isArray(tagsInput)) return tagsInput;
    if (typeof tagsInput === "string") {
      try {
        const parsed = JSON.parse(tagsInput);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  };

  // Helper untuk generate URL gambar yang valid
  const getImageUrl = (path: string | null | undefined) => {
    if (!path) return "https://placehold.co/600x400?text=No+Image";

    // Jika path sudah berupa URL lengkap (http...), pakai langsung
    if (/^https?:\/\//i.test(path)) return path;

    // Jika masih path relatif, gabungkan dengan BACKEND_URL
    return `${BACKEND_URL}/storage/${path.replace(/^public\//, "")}`;
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#050505]">
      <div className="container mx-auto px-6">
        {/* Header Section Minimalis */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tighter uppercase italic opacity-90">
            Selected Work
          </h2>
          <p className="text-sm text-zinc-500 font-medium italic">
            Koleksi proyek pengembangan web (Minimalist View).
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
          </div>
        ) : (
          /* Grid Layout: 3 Kolom di layar besar (lg) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                /* Ukuran Card: Lebih pendek (280px - 320px) */
                className="group relative h-[280px] md:h-[320px] cursor-pointer"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  {/* Gambar Project */}
                  <img
                    src={getImageUrl(project.image)}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/600x400?text=No+Image";
                    }}
                  />

                  {/* Gradient Overlay Ringan */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Konten Text dalam Card */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase italic tracking-tight leading-none mb-3">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                      {parseTags(project.tags)
                        .slice(0, 3)
                        .map((tag, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-bold text-white/90 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Icon Maximize (Hover Only) */}
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="h-4 w-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Dialog / Popup Detail Project */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 p-0 overflow-hidden rounded-[40px] shadow-2xl outline-none">
          {selectedProject && (
            <div className="max-h-[85vh] overflow-y-auto">
              <div className="relative w-full aspect-video">
                <img
                  src={getImageUrl(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/1280x720?text=File+Not+Found";
                  }}
                />
              </div>

              <div className="p-8 md:p-10">
                <DialogTitle className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">
                  {selectedProject.title}
                </DialogTitle>

                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {selectedProject.demo_link && (
                  <Button
                    size="default"
                    className="rounded-full px-8 bg-black text-white dark:bg-white dark:text-black font-bold uppercase text-xs tracking-widest hover:opacity-80"
                    asChild
                  >
                    <a
                      href={selectedProject.demo_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
