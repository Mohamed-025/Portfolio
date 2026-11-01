import { Briefcase, Code2, LineChart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { asset } from "@/lib/utils";

const pillars = [
  { n: "01", title: "Analytical Thinking", icon: LineChart, text: "I like digging into messy information until the useful pattern shows up, then turning it into reports people can act on." },
  { n: "02", title: "Technical Development", icon: Code2, text: "I build modern, fast web interfaces and applications, the kind I would enjoy using myself." },
  { n: "03", title: "Business Understanding", icon: Briefcase, text: "Running my own business taught me to ask what a problem is really worth before reaching for a technical solution." },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="More Than Just Numbers or Code." />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/portrait-v2.jpg")}
                alt={`Portrait of ${profile.name}`}
                width={512}
                height={640}
                className="mb-8 aspect-[4/5] w-full rounded-3xl border border-line object-cover shadow-glow"
              />
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              <p className="text-fg">For me, technology only matters when it makes someone&apos;s work or life a little easier.</p>
              <p>
                So far that has meant building reports from production data at an export company, evaluating AI driving scenarios, and taking my own web projects from an empty folder to a live site.
              </p>
              <p>I&apos;m the kind of person who keeps asking why until something makes sense. Then I build the fix.</p>
            </div>
          </Reveal>
          <ul className="grid content-start gap-4">
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
