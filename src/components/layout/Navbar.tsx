"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { asset, cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ home = "" }: { home?: string }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (home) return;
    const els = links.map((l) => document.getElementById(l.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [home]);

  const href = (id: string) => (home ? `${home}#${id}` : `#${id}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition",
        scrolled || open ? "border-line bg-bg/85 backdrop-blur" : "border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href={href("home")} className="flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-violet text-sm font-bold text-bg">
            {profile.monogram}
          </span>
          <span className="hidden font-semibold tracking-tight sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={href(l.id)}
                  aria-current={active === l.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition",
                    active === l.id ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {l.label}
                  {active === l.id ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-accent" aria-hidden />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {profile.cvPath ? (
            <a
              href={asset(profile.cvPath)}
              download
              className="hidden items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold transition hover:border-accent/60 md:inline-flex"
            >
              <Download size={16} aria-hidden /> Download CV
            </a>
          ) : null}
          <a
            href={href("contact")}
            className="hidden rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={href(l.id)}
                  onClick={() => setOpen(false)}
                  className={cn("block rounded-lg px-2 py-3 text-base", active === l.id ? "text-accent" : "text-fg")}
                >
                  {l.label}
                </a>
              </li>
            ))}
            {profile.cvPath ? (
              <li>
                <a href={asset(profile.cvPath)} download className="block rounded-lg px-2 py-3 text-base">
                  Download CV
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
