import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

const dot = { accent: "bg-accent", accent2: "bg-accent2", violet: "bg-violet" } as const;
const chip = {
  accent: "hover:border-accent/60 hover:text-accent",
  accent2: "hover:border-accent2/60 hover:text-accent2",
  violet: "hover:border-violet/60 hover:text-violet",
} as const;

export function Skills() {
  const [main, ...rest] = skillGroups;
  return (
    <section id="skills" className="section border-y border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading eyebrow="Skills & Technologies" title="Tools I work with.">
          Grouped by how I use them. No proficiency bars, because a percentage says little about real work.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Card className="h-full p-6 sm:p-8">
              <GroupBody group={main} />
            </Card>
          </Reveal>
          <div className="grid gap-5 lg:col-span-2">
            {rest.map((g, i) => (
              <Reveal key={g.id} delay={0.08 * (i + 1)}>
                <Card className="h-full p-6">
                  <GroupBody group={g} />
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupBody({ group }: { group: (typeof skillGroups)[number] }) {
  return (
    <>
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <span className={cn("h-2.5 w-2.5 rounded-full", dot[group.accent])} aria-hidden /> {group.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{group.blurb}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((s) => (
          <li key={s} className={cn("rounded-lg border border-line bg-elevated px-3 py-1.5 text-sm text-fg transition", chip[group.accent])}>
            {s}
          </li>
        ))}
      </ul>
    </>
  );
}
