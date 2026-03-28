import ScrollReveal from "./ScrollReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Styling",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Redux Toolkit", level: 85 },
      { name: "Git & GitHub", level: 80 },
      { name: "Postman / Swagger", level: 80 },
      { name: "Firebase", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, isVisible, delay }: { name: string; level: number; isVisible: boolean; delay: number }) => (
  <div>
    <div className="flex justify-between mb-1.5 text-sm">
      <span>{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  </div>
);

const SkillCard = ({ cat, index }: { cat: typeof skillCategories[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <ScrollReveal direction="scale" delay={index * 200}>
      <div ref={ref} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
        <h3 className="text-lg font-semibold mb-6 text-primary">{cat.title}</h3>
        <div className="space-y-5">
          {cat.skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} isVisible={isVisible} delay={i * 200} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

const Skills = () => (
  <section id="skills" className="py-20 lg:py-28">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.title} cat={cat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
