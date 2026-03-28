import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Junior Software Developer",
    company: "MINDIII Systems Pvt. Ltd., Indore",
    period: "May 2024 – Present",
    current: true,
  },
  {
    role: "ReactJS Developer",
    company: "BridgeFix Technology Pvt. Ltd., Indore",
    period: "Jul 2023 – May 2024",
  },
  {
    role: "Web Development Intern",
    company: "Kshrija Edutech Pvt. Ltd., Mhow (Indore)",
    period: "4 Months Internship",
  },
  {
    role: "Angular Development Intern",
    company: "CodeBetter Software Training Institute, Indore",
    period: "4 Months Internship",
  },
];

const Experience = () => (
  <section id="experience" className="py-20 lg:py-28">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} direction="left" delay={i * 150}>
              <div className="relative pl-14">
                <div className={`absolute left-3 top-1 w-5 h-5 rounded-full border-2 ${exp.current ? "bg-primary border-primary" : "bg-card border-border"}`} />
                <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary text-sm mb-1 flex items-center gap-1.5">
                    <Briefcase size={14} /> {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
