import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { Briefcase, FolderKanban, Award, Coffee } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 2, suffix: "+", label: "Years Experience" },
  { icon: FolderKanban, value: 5, suffix: "+", label: "Projects Completed" },
  { icon: Award, value: 5, suffix: "", label: "Certifications" },
  { icon: Coffee, value: 1000, suffix: "+", label: "Cups of Coffee" },
];

const StatItem = ({ icon: Icon, value, suffix, label, isVisible, delay }: {
  icon: typeof Briefcase; value: number; suffix: string; label: string; isVisible: boolean; delay: number;
}) => {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div
      className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
      style={{ transitionDelay: `${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
    >
      <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
        <Icon size={28} />
      </div>
      <div className="text-3xl sm:text-4xl font-black text-primary mb-1 font-mono">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-16 lg:py-20" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
