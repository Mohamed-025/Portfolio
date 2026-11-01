"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectLinks } from "@/components/ui/ProjectLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories, projects } from "@/data/projects";
import { asset, cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const shown = useMemo(() => projects.filter((p) => filter === "All" || p.category === filter), [filter]);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Featured Projects" title="Work I can show.">
          Everything here is real: real data, real code, and honest status notes. If a project has no public link, you won&apos;t find a fake one.
        </SectionHeading>

        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition",
                filter === c ? "border-accent bg-accent/15 text-accent" : "border-line text-muted hover:text-fg",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="grid gap-6 md:grid-cols-2" aria-live="polite">
          {shown.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="card group flex h-full flex-col overflow-hidden transition hover:border-accent/50">
                  <Link href={`/projects/${p.slug}/`} className="block overflow-hidden border-b border-line bg-elevated" tabIndex={-1} aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(p.thumbnail)}
                      alt=""
                      width={1120}
                      height={632}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <span className="text-accent2">{p.categoryDetail}</span>
                      <span className={cn("rounded-full border px-2 py-0.5", p.status === "Completed" ? "border-accent2/40 text-accent2" : "border-violet/40 text-violet")}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{p.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {p.technologies.map((t) => (
                        <li key={t} className="rounded-md bg-elevated px-2 py-1 text-xs text-muted">{t}</li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <Link
                        href={`/projects/${p.slug}/`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-bg transition hover:brightness-110"
                      >
                        View Project <ArrowUpRight size={15} aria-hidden />
                      </Link>
                      <ProjectLinks project={p} />
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
