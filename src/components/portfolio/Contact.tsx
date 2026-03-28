import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => (
  <section id="contact" className="py-20 lg:py-28">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="max-w-2xl mx-auto">
        <ScrollReveal direction="up">
          <p className="text-muted-foreground text-center text-lg mb-10">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <ScrollReveal direction="left" delay={0}>
            <a
              href="mailto:mohitjoshi2903@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">mohitjoshi2903@gmail.com</p>
              </div>
            </a>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <a
              href="tel:+917879189411"
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">+91 7879189411</p>
              </div>
            </a>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border sm:col-span-2">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Indore, Madhya Pradesh, India</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="scale" delay={300}>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/mohit-joshi-2b0424224" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/mohitjoshi29" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="mailto:mohitjoshi2903@gmail.com" className="p-3 rounded-xl bg-card border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Contact;
