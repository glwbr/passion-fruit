// TODO: these cards are similar, we can normalize the content / properties and apply composition to them
import { Link } from "@tanstack/react-router";
import { Calendar, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatDateTime } from "@/lib/date";
import type { TEvent } from "@/types/content";

interface EventCardProps {
  event: TEvent;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  return (
    <Link
      to="/programacao/$eventId"
      params={{ eventId: event.id }}
      className={cn(
        "group block rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20",
        className,
      )}
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          {event.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {event.description}
            </p>
          )}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{formatDateTime(event.date)}</span>
          </div>

          {event.time && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>{event.time}</span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{event.location}</span>
            </div>
          )}
        </div>

        {event.category && (
          <div className="pt-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {event.category}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
