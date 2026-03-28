import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import profileImg from "@/assets/mohit-profile.jpeg";

const Hero = () => {
  const { displayed: name, done: nameDone } = useTypewriter("Mohit Joshi", 100, 400);
  const { displayed: role } = useTypewriter("Frontend Web Developer", 60, 1800);

  return (
    <section className="min-h-screen flex items-center pt-16" id="hero">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in-up">
            <p className="text-primary font-mono text-sm tracking-wider">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight min-h-[1.2em]">
              {name.split("").map((char, i) => (
                <span
                  key={i}
                  className={i >= 6 ? "text-gradient" : ""}
                >
                  {char}
                </span>
              ))}
              <span className="animate-pulse text-primary">|</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light min-h-[1.5em]">
              {role}
            </p>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              2+ years of experience building responsive, user-friendly, and visually engaging web applications with React.js & Next.js.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail size={18} /> Get In Touch
              </a>
              <a
                href="/Mohit_Joshi_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://www.linkedin.com/in/mohit-joshi-2b0424224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/mohitjoshi29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:mohitjoshi2903@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                <img
                  src={profileImg}
                  alt="Mohit Joshi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 font-mono text-sm text-primary">
                2+ Years Exp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
