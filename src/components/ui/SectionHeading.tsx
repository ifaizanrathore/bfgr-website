import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {(number || label) && (
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            align === "center" && "justify-center"
          )}
        >
          {number && (
            <span className="section-number text-lg md:text-xl font-serif">
              {number}
            </span>
          )}
          {number && label && (
            <span
              className={cn(
                "h-px w-8 bg-gold inline-block",
                light ? "bg-gold/60" : "bg-gold"
              )}
            />
          )}
          {label && (
            <span
              className={cn(
                "text-xs tracking-widest uppercase font-sans font-medium",
                light ? "text-gold/80" : "text-gold"
              )}
            >
              {label}
            </span>
          )}
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-balance wrap-break-word",
          light ? "text-cream" : "text-forest-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-cream/70" : "text-slate"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-0.5 w-14 bg-gold",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
