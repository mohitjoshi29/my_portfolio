import { GraduationCap, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "MCA (Masters in Computer Applications)",
    institution: "Medi-Caps University, Indore",
    period: "2020 – 2022",
    score: "7.97 CGPA",
  },
  {
    degree: "B.Sc. (Computer Science)",
    institution: "Devi Ahilya Vishwavidyalaya, Indore",
    period: "2017 – 2020",
    score: "66.54%",
  },
];

const certifications = [
  "CSS - The Complete CSS Mastery (Udemy)",
  "HTML5 Ultimate Course (Udemy, BitDegree)",
  "Mastering JavaScript Essentials (Udemy)",
  "Front End Web Development Ultimate Guide (Udemy)",
  "Bootstrap Ultimate Guide (Udemy)",
];

const Education = () => (
  <section id="education" className="py-20 lg:py-28">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-10">
        <ScrollReveal direction="left">
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <GraduationCap size={22} className="text-primary" /> Education
            </h3>
            {education.map((edu) => (
              <div key={edu.degree} className="p-5 rounded-xl bg-card border border-border">
                <h4 className="font-semibold mb-1">{edu.degree}</h4>
                <p className="text-primary text-sm mb-1">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  <span className="font-mono">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Award size={22} className="text-primary" /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={cert} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Education;
