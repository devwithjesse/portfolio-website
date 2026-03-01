import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-primary mb-2">{"// Experience & Education"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            My <span className="text-gradient">journey</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {/* Experience */}
            <AnimatedSection delay={100}>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 md:left-2 top-1 p-2 rounded-full bg-primary/10 text-primary border border-border">
                  <Briefcase size={16} />
                </div>
                <div className="p-5 rounded-xl glass">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-semibold text-foreground">Software Developer Trainee</h3>
                    <span className="font-mono text-xs text-muted-foreground">Jan 2025 — Jun 2025</span>
                  </div>
                  <p className="text-sm text-primary mb-2">New Horizons, Lagos</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    6-month industrial training in software development, gaining hands-on experience 
                    with programming fundamentals, databases, and practical problem-solving.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Education - Babcock */}
            <AnimatedSection delay={200}>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 md:left-2 top-1 p-2 rounded-full bg-primary/10 text-primary border border-border">
                  <GraduationCap size={16} />
                </div>
                <div className="p-5 rounded-xl glass">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-semibold text-foreground">B.Sc Software Engineering</h3>
                    <span className="font-mono text-xs text-muted-foreground">2022 — 2026</span>
                  </div>
                  <p className="text-sm text-primary mb-2">Babcock University, Ogun</p>
                  <p className="text-sm text-muted-foreground">First Class · GPA 4.52</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Education - High School */}
            <AnimatedSection delay={300}>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 md:left-2 top-1 p-2 rounded-full bg-primary/10 text-primary border border-border">
                  <Award size={16} />
                </div>
                <div className="p-5 rounded-xl glass">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-semibold text-foreground">WASSCE / WAEC / NECO / JAMB</h3>
                    <span className="font-mono text-xs text-muted-foreground">2016 — 2022</span>
                  </div>
                  <p className="text-sm text-primary mb-2">S-tee High School, Lagos</p>
                  <p className="text-sm text-muted-foreground">Best Graduating Science Student 2022</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection delay={400}>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 md:left-2 top-1 p-2 rounded-full bg-accent/10 text-accent border border-border">
                  <Award size={16} />
                </div>
                <div className="p-5 rounded-xl glass">
                  <h3 className="font-semibold text-foreground mb-3">Certifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">Fundamentals of Deep Learning</span>
                      <span className="text-muted-foreground font-mono text-xs">Nvidia</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">Python Web Development</span>
                      <span className="text-muted-foreground font-mono text-xs">New Horizons</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
