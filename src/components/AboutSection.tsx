import AnimatedSection from "./AnimatedSection";
import { GraduationCap, MapPin, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-primary mb-2">{"// About Me"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Get to know <span className="text-gradient">me</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={100}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Software Engineering graduate from Babcock University, 
              bagging a <span className="text-foreground font-medium">First Class standing (GPA 4.51)</span>. 
              I'm passionate about backend development, Python, and AI/ML systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I recently completed a 6-month industrial training at New Horizons, Lagos, 
              where I gained hands-on experience in software development, databases, 
              and practical problem-solving. I'm driven by the mission to build intelligent 
              systems that make a real impact.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-4">
              {[
                { icon: GraduationCap, label: "Education", value: "B.Sc Software Engineering, Babcock University" },
                { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
                { icon: Code, label: "Focus", value: "Backend Development, Python & AI/ML" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
