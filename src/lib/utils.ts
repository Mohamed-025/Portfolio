export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Prefix a public asset path with the configured base path. */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Portfolio";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
