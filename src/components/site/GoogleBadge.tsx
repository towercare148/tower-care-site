import { Star } from "lucide-react";
import { googleRating } from "@/data/site";
import { cn } from "@/lib/utils";

/** Small clickable Google rating badge — links out to the real profile. */
export function GoogleBadge({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <a
      href={googleRating.profileUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
        tone === "dark"
          ? "border-background/25 bg-background/10 text-background hover:bg-background/15"
          : "border-border bg-card text-foreground hover:border-brand/50",
        className,
      )}
    >
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-brand text-brand" strokeWidth={1.5} />
        ))}
      </span>
      <span>{googleRating.score.toFixed(1)} ב-Google</span>
    </a>
  );
}
