// TODO: these cards are similar, we can normalize the content / properties and apply composition to them
import { cn } from "@/lib/cn";
import type { TMinistry } from "@/types/content";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MinistryCardProps {
  ministry: TMinistry;
  className?: string;
}

export function MinistryCard({ ministry, className }: MinistryCardProps) {
  const IconComponent =
    (Icons[ministry.icon as keyof typeof Icons] as LucideIcon) || Icons.Users;

  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20",
        className,
      )}
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{ministry.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {ministry.description}
          </p>
        </div>

        {ministry.leader && (
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              Líder:
              <span className="font-medium text-foreground">
                {ministry.leader}
              </span>
            </p>
          </div>
        )}

        {ministry.schedule && (
          <p className="text-xs text-muted-foreground">{ministry.schedule}</p>
        )}
      </div>
    </div>
  );
}
