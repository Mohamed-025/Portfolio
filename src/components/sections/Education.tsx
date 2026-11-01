import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section border-y border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Where I studied." />
        <Reveal>
          <Card className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent">
              <GraduationCap size={26} aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Cairo University</h3>
              <p className="mt-1 text-muted">Bachelor&rsquo;s degree</p>
            </div>
            <dl className="grid grid-cols-2 gap-6 text-sm sm:text-right">
              <div>
                <dt className="text-muted">Graduation</dt>
                <dd className="mt-1 font-semibold">2024</dd>
              </div>
              <div>
                <dt className="text-muted">GPA</dt>
                <dd className="mt-1 font-semibold">3 / 4</dd>
              </div>
            </dl>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
