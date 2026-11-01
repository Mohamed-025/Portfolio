import { ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-12">
      <div className="container-x flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <ul className="flex gap-3">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition hover:text-fg">
                <Github size={18} aria-hidden />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition hover:text-fg">
                <Linkedin size={18} aria-hidden />
              </a>
            </li>
          </ul>
          <a href="#home" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
            <ArrowUp size={16} aria-hidden /> Back to top
          </a>
        </div>
      </div>
      <p className="container-x mt-10 text-xs text-muted">
        &copy; {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
