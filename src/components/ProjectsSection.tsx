import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "UniPal",
    tag: "Final Year Project · 2026",
    description:
      "A RAG-driven chatbot designed to assist Babcock University students with quick access to academic information, campus resources, and student services.",
    tech: ["Python", "RAG", "AI/ML"],
  },
  {
    title: "JesseBot",
    tag: "Personal Project",
    description:
      "A RAG-based Telegram chatbot that represents Jesse's identity, skills, and background — a digital twin accessible to anyone on Telegram.",
    tech: ["Python", "Telegram API", "RAG"],
    link: "https://t.me/jessemokolobot",
  },
  {
    title: "Campus Exit Management System",
    tag: "Academic Project",
    description:
      "A digital platform that streamlines the student exeat (exit) request and approval workflow at Babcock University, replacing manual processes.",
    tech: ["Web Development", "Database", "UI/UX"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-primary mb-2">{"// Projects"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 120}>
              <div className="group h-full flex flex-col p-6 rounded-xl glass hover:border-primary/30 transition-all duration-300 hover:glow-sm">
                <p className="font-mono text-xs text-primary mb-2">{project.tag}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
