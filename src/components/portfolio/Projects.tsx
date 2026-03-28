import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Delivery Management Platform",
    period: "Apr 2025 – Present",
    url: "https://admin.kayodtechnologies.com/en/login",
    tech: ["Next.js", "Tailwind CSS", "Google Maps API", "Firebase"],
    description: "A next-generation delivery management platform offering food and courier services with real-time tracking and an admin control panel.",
  },
  {
    title: "Cloud Kitchen Web Application",
    period: "Nov 2024 – Mar 2025",
    tech: ["React.js", "Bootstrap", "Material UI", "Google Maps API"],
    description: "A food delivery platform enabling users to order meals from multiple kitchens, track real-time deliveries, and manage orders through an interactive admin dashboard.",
  },
  {
    title: "Independicare Web Application",
    period: "Jun 2024 – Oct 2024",
    url: "https://dev.independicare.com/",
    tech: ["React.js", "Bootstrap", "Material UI", "React Hook Form"],
    description: "A healthcare platform connecting caregivers and independents for scheduling, monitoring, and real-time communication.",
  },
  {
    title: "Doctor Does Product",
    tech: ["React.js", "Bootstrap", "Material UI"],
    description: "A healthcare management platform enabling users to schedule, track, and manage care activities efficiently.",
  },
  {
    title: "Employee Payroll System",
    tech: ["JavaScript", "Bootstrap", "Material UI"],
    description: "A web-based solution for automating employee salary processing, record management, and payslip generation.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 lg:py-28">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={i} direction="scale" delay={i * 100}>
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-border flex flex-col h-full">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-2"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              {project.period && (
                <p className="text-xs text-muted-foreground font-mono mb-3">{project.period}</p>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
