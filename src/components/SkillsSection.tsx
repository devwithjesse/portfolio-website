import AnimatedSection from "./AnimatedSection";
import { Braces, GitBranch, Terminal, Cpu, Server, Bot } from "lucide-react";

const skills = [
  { name: "Python Development", icon: Terminal },
  { name: "Data Structures & Algorithms", icon: Braces },
  { name: "Version Control", icon: GitBranch },
  { name: "Automation & Scripting", icon: Cpu },
  { name: "Backend Development", icon: Server },
  { name: "AI & RAG Systems", icon: Bot },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-primary mb-2">{"// Skills"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            What I <span className="text-gradient">work with</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 80}>
              <div className="group p-5 rounded-xl glass hover:border-primary/30 transition-all duration-300 hover:glow-sm cursor-default">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={20} />
                </div>
                <p className="text-sm font-medium text-foreground">{skill.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
