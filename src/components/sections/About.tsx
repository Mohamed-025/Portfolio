import { Briefcase, Code2, LineChart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  { n: "01", title: "Analytical Thinking", icon: LineChart, text: "Transform raw information into meaningful insights, monitor performance, identify patterns, and support better decisions." },
  { n: "02", title: "Technical Development", icon: Code2, text: "Build modern web interfaces and interactive applications using contemporary front-end technologies." },
  { n: "03", title: "Business Understanding", icon: Briefcase, text: "Understand the business context behind technical problems, prioritize meaningful outcomes, and approach challenges with an ownership mindset." },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="More Than Just Numbers or Code." />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              <p className="text-fg">I believe technology becomes valuable when it solves real problems.</p>
              <p>
                My experience combines analytical thinking, business understanding, and technical development. I have worked with
                operational data, developed reporting solutions, evaluated AI-generated outputs, and built digital projects across
                different domains.
              </p>
              <p>I enjoy understanding how things work, identifying opportunities for improvement, and building practical solutions.</p>
            </div>
          </Reveal>
          <ul className="grid gap-4">
            {pillars.map((p, i) => (
              <li key={p.n}>
                <Reveal delay={i * 0.08}>
                  <Card className="flex gap-5 p-6 transition hover:border-accent/50">
                    <span className="font-mono text-sm text-accent">{p.n}</span>
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <p.icon size={18} className="text-accent2" aria-hidden /> {p.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                    </div>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
