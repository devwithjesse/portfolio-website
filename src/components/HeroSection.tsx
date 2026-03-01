import { Github, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            {"// Hello, I'm"}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            Jesse{" "}
            <span className="text-gradient">Mokolo</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            Software Engineer & AI Enthusiast
          </p>
          <p className="text-muted-foreground/70 text-base md:text-lg max-w-lg mx-auto mb-10 font-light">
            Building intelligent systems, one line of code at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:200ms] opacity-0">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 mt-8 animate-fade-up [animation-delay:400ms] opacity-0">
          <a
            href="https://linkedin.com/in/jessemokolo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/devwithjesse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-float"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
