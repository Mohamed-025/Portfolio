/** Decorative wave used to separate the hero from the About section. */
export function WaveDivider() {
  return (
    <div className="pointer-events-none relative" aria-hidden>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-20 w-full sm:h-28">
        <defs>
          <linearGradient id="wv" x1="0" x2="1">
            <stop offset="0" stopColor="rgb(var(--accent))" />
            <stop offset="0.5" stopColor="rgb(var(--accent2))" />
            <stop offset="1" stopColor="rgb(var(--violet))" />
          </linearGradient>
          <linearGradient id="wvfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgb(var(--accent2))" stopOpacity="0.14" />
            <stop offset="1" stopColor="rgb(var(--accent2))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,64 C240,104 480,18 720,52 C960,86 1200,28 1440,64 L1440,120 L0,120 Z" fill="url(#wvfill)" stroke="none" />
        <path d="M0,58 C240,98 480,14 720,48 C960,82 1200,24 1440,58" fill="none" stroke="url(#wv)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M0,80 C240,114 480,42 720,72 C960,100 1200,48 1440,80" fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
        <path d="M0,44 C240,84 480,6 720,38 C960,70 1200,14 1440,44" fill="none" stroke="rgb(var(--violet))" strokeWidth="1.2" strokeDasharray="2 7" strokeLinecap="round" opacity="0.4" />
      </svg>
    </div>
  );
}
