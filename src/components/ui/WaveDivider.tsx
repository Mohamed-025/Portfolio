/** Decorative wave used to separate the hero from the About section. */
export function WaveDivider() {
  return (
    <div className="pointer-events-none relative" aria-hidden>
      <svg viewBox="0 0 1440 170" preserveAspectRatio="none" className="h-24 w-full sm:h-36">
        <defs>
          <linearGradient id="wva" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgb(var(--accent))" stopOpacity="0.16" />
            <stop offset="0.5" stopColor="rgb(var(--accent2))" stopOpacity="0.26" />
            <stop offset="1" stopColor="rgb(var(--violet))" stopOpacity="0.20" />
          </linearGradient>
          <linearGradient id="wvb" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgb(var(--violet))" stopOpacity="0.14" />
            <stop offset="0.5" stopColor="rgb(var(--accent2))" stopOpacity="0.10" />
            <stop offset="1" stopColor="rgb(var(--accent))" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="wvfade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.45" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="wvmask">
            <rect x="0" y="0" width="1440" height="170" fill="url(#wvfade)" />
          </mask>
        </defs>
        <g mask="url(#wvmask)">
          <path d="M0,120 C340,10 1100,10 1440,115 L1440,170 L0,170 Z" fill="url(#wvb)" />
          <path d="M0,85 C420,180 1000,0 1440,85 L1440,170 L0,170 Z" fill="url(#wva)" />
        </g>
      </svg>
    </div>
  );
}
