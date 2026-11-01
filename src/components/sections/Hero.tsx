import { ArrowRight, BarChart3, Braces, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { asset } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-14">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {profile.availability.show ? (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent2 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
              </span>
              {profile.availability.text}
            </p>
          ) : null}
          <p className="eyebrow">Hello, I&apos;m Mohamed Eid</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Data Analyst <span className="text-muted">&amp;</span>{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-accent via-accent2 to-violet bg-clip-text text-transparent">Front-end</span>{" "}<span className="bg-gradient-to-r from-violet to-violet bg-clip-text text-transparent">Developer.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/90">
            I&apos;m a data analyst and front-end developer based in Cairo. I spend my days turning raw numbers into clear answers, and my free time building websites people actually enjoy using.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            For three years during university I ran my own small business, so I&apos;ve sat on the other side of the desk. I know what it means to need real answers from your own numbers.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="primary">
              Explore My Work <ArrowRight size={16} aria-hidden />
            </ButtonLink>
            <ButtonLink href="#contact">Let&apos;s Connect</ButtonLink>
            {profile.cvPath ? (
              <ButtonLink href={asset(profile.cvPath)} download variant="ghost">
                <Download size={16} aria-hidden /> Download CV
              </ButtonLink>
            ) : null}
          </div>
          <p className="mt-6 text-sm text-muted">Data by day, code by night - and I genuinely enjoy both.</p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

/** Two domains, one composition: a KPI/chart panel on the left, a code panel on the right. */
function HeroVisual() {
  const bars = [38, 62, 48, 80, 58, 92, 70];
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="card relative overflow-hidden p-5 shadow-glow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent2/15 text-accent2"><BarChart3 size={14} /></span>
            Dashboard
          </div>
          <span className="flex gap-1.5">
            <i className="h-2 w-2 rounded-full bg-line" /><i className="h-2 w-2 rounded-full bg-line" /><i className="h-2 w-2 rounded-full bg-line" />
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-line bg-elevated p-3">
            <p className="text-[10px] uppercase tracking-wider text-muted">KPI</p>
            <div className="mt-2 h-2 w-16 rounded bg-accent2/70" />
            <div className="mt-3 flex h-16 items-end gap-1">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-accent2/30 to-accent2" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-line bg-elevated p-3 font-mono text-[10px] leading-5 text-muted">
            <p className="flex items-center gap-1 text-[10px] uppercase tracking-wider"><Braces size={11} /> component</p>
            <p className="mt-2"><span className="text-violet">const</span> <span className="text-accent">Insight</span> = () =&gt;</p>
            <p className="pl-3">&lt;<span className="text-accent2">Chart</span> data=&#123;kpis&#125; /&gt;</p>
            <p className="pl-3">&lt;<span className="text-accent2">Story</span> /&gt;</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-line bg-elevated p-3">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted">
            <span>Weekly trend</span>
            <span className="flex items-center gap-3 normal-case tracking-normal">
              <span className="flex items-center gap-1"><i className="h-1.5 w-3 rounded-full bg-gradient-to-r from-accent2 to-violet" /> This week</span>
              <span className="flex items-center gap-1"><i className="h-0.5 w-3 rounded-full bg-accent/60" /> Last week</span>
            </span>
          </div>
          <svg viewBox="0 0 300 92" className="h-24 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hl" x1="0" x2="1"><stop offset="0" stopColor="rgb(var(--accent2))" /><stop offset="1" stopColor="rgb(var(--violet))" /></linearGradient>
              <linearGradient id="hlfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgb(var(--accent2))" stopOpacity="0.28" /><stop offset="1" stopColor="rgb(var(--accent2))" stopOpacity="0" /></linearGradient>
            </defs>
            {[18, 38, 58, 78].map((y) => (
              <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgb(var(--line))" strokeWidth="0.6" strokeDasharray="3 5" />
            ))}
            <path d="M0 62 C 30 50, 45 66, 75 52 S 120 24, 150 30 S 205 58, 235 44 S 280 18, 300 12 L 300 92 L 0 92 Z" fill="url(#hlfill)" stroke="none" />
            <path d="M0 70 C 35 66, 55 74, 85 66 S 130 48, 160 54 S 215 68, 245 60 S 285 40, 300 36" fill="none" stroke="rgb(var(--accent))" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
            <path d="M0 62 C 30 50, 45 66, 75 52 S 120 24, 150 30 S 205 58, 235 44 S 280 18, 300 12" fill="none" stroke="url(#hl)" strokeWidth="2.5" strokeLinecap="round" />
            {[[4, 62], [75, 52], [150, 30], [235, 44], [296, 12]].map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="3" fill="rgb(var(--bg))" stroke="url(#hl)" strokeWidth="2" />
            ))}
          </svg>
          <div className="mt-1 flex justify-between text-[9px] text-muted/70">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>
      <div className="floaty absolute -right-3 -top-5 hidden rounded-xl border border-line bg-surface px-3 py-2 text-xs shadow-lg sm:flex sm:items-center sm:gap-2">
        <Sparkles size={14} className="text-violet" /> Power BI &middot; React
      </div>
      <div className="floaty absolute -left-3 top-[58%] hidden rounded-xl border border-line bg-surface px-3 py-2 text-xs shadow-lg sm:block" style={{ animationDelay: "1.5s" }}>
        SQL &middot; Next.js
      </div>
      <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-lg">
        <span className="shrink-0 rounded-2xl bg-gradient-to-br from-accent2 via-accent to-violet p-[2px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/portrait-avatar-v2.jpg")}
            alt={`Portrait of ${profile.name}`}
            width={80}
            height={80}
            className="h-20 w-20 rounded-[14px] object-cover"
          />
        </span>
        <div className="min-w-0">
          <p className="font-semibold">{profile.name}</p>
          <p className="truncate text-sm text-fg/80">{profile.role}</p>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted">
            <MapPin size={13} className="text-accent2" aria-hidden /> {profile.location}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Power BI", "SQL", "Next.js"].map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-elevated px-2 py-0.5 text-[10px] text-muted">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
