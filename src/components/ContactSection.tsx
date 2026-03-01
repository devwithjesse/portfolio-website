import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jessemokolo@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-primary mb-2">{"// Contact"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Get in <span className="text-gradient">touch</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={100}>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, opportunities, or just having a chat 
              about technology and AI. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "jessemokolo@gmail.com", href: "mailto:jessemokolo@gmail.com" },
                { icon: Phone, label: "+234 (0) 904 896 0319", href: "tel:+2349048960319" },
                { icon: Linkedin, label: "linkedin.com/in/jessemokolo", href: "https://linkedin.com/in/jessemokolo" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <item.icon size={16} />
                  {item.label}
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              />
              <textarea
                placeholder="Your message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow text-sm"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
