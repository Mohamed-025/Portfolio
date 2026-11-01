import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:brightness-110 shadow-glow",
  secondary: "border border-line bg-surface text-fg hover:border-accent/60",
  ghost: "text-muted hover:text-fg",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode };

export function ButtonLink({ variant = "secondary", className, children, ...rest }: Props) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition",
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
