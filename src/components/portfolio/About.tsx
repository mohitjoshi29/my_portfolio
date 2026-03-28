import { Code2, Layout, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing efficient and scalable code" },
  { icon: Layout, title: "UI/UX Focus", desc: "Creating intuitive user experiences" },
  { icon: Smartphone, title: "Responsive", desc: "Pixel-perfect on every device" },
];

const About = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ScrollReveal direction="left">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Passionate and detail-oriented Frontend Web Developer with 2 years of experience in building responsive, user-friendly, and visually engaging web applications. Skilled in HTML, CSS, JavaScript, React.js, and Next.js, with a strong focus on creating clean, efficient, and scalable code. Adept at collaborating with teams to deliver high-quality solutions and enhance overall user experience.
          </p>
        </ScrollReveal>

        <div className="grid gap-4">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} direction="right" delay={i * 150}>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
