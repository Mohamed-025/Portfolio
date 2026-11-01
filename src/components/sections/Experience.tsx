import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Professional Journey." />
        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((e, i) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[2.45rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:-left-[2.95rem]" aria-hidden />
              <Reveal delay={i * 0.05}>
                <article className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-xl font-semibold">
                      {e.title} <span className="font-normal text-muted">&middot; {e.org}</span>
                    </h3>
                    <p className="font-mono text-xs text-accent">{e.period} &middot; {e.duration}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted">{e.context}</p>
                  <ul className="mt-5 grid gap-2 text-[0.95rem] leading-relaxed text-fg/90">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
