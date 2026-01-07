import { createFileRoute } from '@tanstack/react-router';
import { Calendar } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { PageHeader } from '@/components/shared/page-header';
import { EventCard } from '@/components/cards/event-card';
import { EmptyState } from '@/components/shared/empty-state';
import { events } from '@/content';

export const Route = createFileRoute('/programacao/')({
  component: ProgramacaoPage,
});

function ProgramacaoPage() {
  // Sort events by date for now (upcoming first
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Section>
      <div className="space-y-8">
        <PageHeader
          title="Programação"
          description="Confira nossa agenda de eventos, cultos e atividades."
        />

        {sortedEvents.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Calendar}
            title="Nenhum evento disponível"
            description="No momento não há eventos programados. Volte em breve para conferir nossa agenda."
          />
        )}
      </div>
    </Section>
  );
}

