import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/FachriAhmad", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:fachri@example.com", label: "Email" },
  ];

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
        alert("Terjadi kesalahan pada server.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Gagal terhubung ke server backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Gunakan formulir di bawah ini untuk mengirimkan pesan atau
            pertanyaan.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-border bg-card">
              <h3 className="text-xl font-semibold mb-6">Kirim Pesan</h3>
              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-3 text-primary animate-in fade-in">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="text-sm font-medium">Pesan berhasil dikirim!</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={loading}
                />
                <Input
                  type="email"
                  placeholder="Alamat Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={loading}
                />
                <Textarea
                  placeholder="Isi Pesan"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  disabled={loading}
                />
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Kirim Pesan"
                  )}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Media Sosial</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="gap-2 justify-start"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-4 w-4" /> {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Lokasi</h3>
                <p className="text-muted-foreground">
                  Berdasarkan di Padang Panjang, Sumatera Barat. Tersedia untuk
                  kolaborasi jarak jauh.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
