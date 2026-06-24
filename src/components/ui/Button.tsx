import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Variant = "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-sm cursor-pointer";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-forest-dark hover:bg-gold-light shadow-md hover:shadow-lg active:scale-[0.98]",
  outline:
    "border border-gold text-gold hover:bg-gold hover:text-forest-dark active:scale-[0.98]",
  ghost: "text-gold hover:text-gold-light underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "gold",
  size = "md",
  href,
  children,
  className,
  external,
  onClick,
  ...props
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cls}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
