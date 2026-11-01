import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";

/** Buttons render only for links that really exist. */
export function ProjectLinks({ project }: { project: Project }) {
  const base = "inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-sm font-medium transition hover:border-accent/60 hover:text-accent";
  if (!project.github && !project.demo) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {project.github ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={base}>
          <Github size={15} aria-hidden /> GitHub
        </a>
      ) : null}
      {project.demo ? (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={base}>
          <ExternalLink size={15} aria-hidden /> Live Demo
        </a>
      ) : null}
    </div>
  );
}
