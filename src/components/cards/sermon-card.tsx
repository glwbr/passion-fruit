// TODO: these cards are similar, we can normalize the content / properties and apply composition to them
import { Link } from "@tanstack/react-router";
import { Play, User, Clock } from "lucide-react";
import { formatDate, formatDuration } from "@/lib/date";
import { cn } from "@/lib/cn";
import type { TSermon } from "@/types/content";

interface SermonCardProps {
  sermon: TSermon;
  className?: string;
}

export function SermonCard({ sermon, className }: SermonCardProps) {
  return (
    <Link
      to="/sermoes/$slug"
      params={{ slug: sermon.slug }}
      className={cn(
        "group block rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20",
        className,
      )}
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
            {sermon.title}
          </h3>
          {sermon.series && (
            <p className="text-sm text-primary/80 font-medium">
              {sermon.series}
            </p>
          )}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 shrink-0" />
            <span>{sermon.speaker}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>{formatDate(sermon.date)}</span>
            {sermon.duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatDuration(sermon.duration)}</span>
              </div>
            )}
          </div>
        </div>

        {sermon.videoURL && (
          <div className="flex items-center gap-1.5 text-sm text-primary font-medium pt-1">
            <Play className="h-4 w-4" />
            <span>Assistir</span>
          </div>
        )}

        {sermon.tags && sermon.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {sermon.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
