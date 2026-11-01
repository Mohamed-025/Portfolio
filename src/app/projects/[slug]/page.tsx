import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectLinks } from "@/components/ui/ProjectLinks";
import { getProject, projects } from "@/data/projects";
import { asset } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <>
      <Navbar home="/" />
      <main id="main" className="pt-28 pb-20">
        <article className="container-x max-w-4xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
            <ArrowLeft size={16} aria-hidden /> All projects
          </Link>
          <p className="eyebrow mt-8">{p.categoryDetail}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-line px-3 py-1 text-sm">
              {p.status}
              {p.statusNote ? <span className="text-muted"> &middot; {p.statusNote}</span> : null}
            </span>
            <ProjectLinks project={p} />
          </div>

          <a href={asset(p.thumbnail)} target="_blank" rel="noopener noreferrer" className="mt-10 block" aria-label="Open the full-size image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(p.thumbnail)} alt={p.thumbnailAlt} width={1120} height={1068} className="card w-full object-cover" />
          </a>
          {p.thumbnailCaption ? <p className="mt-2 text-sm text-muted">{p.thumbnailCaption}</p> : null}
          {p.gallery?.map((g) => (
            <figure key={g.src} className="mt-6">
              <a href={asset(g.src)} target="_blank" rel="noopener noreferrer" className="block" aria-label="Open the full-size image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(g.src)} alt={g.alt} width={1120} height={1068} className="card w-full object-cover" />
              </a>
              {g.caption ? <figcaption className="mt-2 text-sm text-muted">{g.caption}</figcaption> : null}
            </figure>
          ))}

          <section className="mt-12">
            <h2 className="text-xl font-semibold">About this project</h2>
            <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
          </section>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {p.features.map((f) => (
              <section key={f.label} className="card p-6">
                <h2 className="text-lg font-semibold">{f.label}</h2>
                <ul className="mt-4 grid gap-2 text-[0.95rem] text-fg/90">
                  {f.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-lg font-semibold">Technologies</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <li key={t} className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
          </section>

          {p.note ? <p className="mt-10 rounded-xl border border-line bg-surface p-4 text-sm text-muted">{p.note}</p> : null}
        </article>
      </main>
      <Footer />
    </>
  );
}
