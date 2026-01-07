import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/shared/section';
import { getEventById } from '@/content';
import { formatDateTime } from '@/lib/date';

export const Route = createFileRoute('/programacao/$eventId')({
  component: EventDetailPage,
  loader: ({ params }) => {
    const event = getEventById(params.eventId);
    if (!event) throw notFound();

    return { event };
  },
  notFoundComponent: EventNotFound,
});

function EventDetailPage() {
  const { event } = Route.useLoaderData();

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/programacao">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para programação
          </Link>
        </Button>

        <article className="space-y-6">
          <header className="space-y-4">
            {event.category && (
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {event.category}
                </span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold">{event.title}</h1>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDateTime(event.date)}</span>
              </div>

              {event.time && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{event.time}</span>
                </div>
              )}

              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </header>

          {event.description && (
            <div className="prose-content">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {event.description}
              </p>
            </div>
          )}

          {event.endDate && (
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold mb-2">Período do Evento</h3>
              <p className="text-muted-foreground">
                De {formatDateTime(event.date)} até {formatDateTime(event.endDate)}
              </p>
            </div>
          )}
        </article>
      </div>
    </Section>
  );
}

function EventNotFound() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center py-12">
        <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
        <h1 className="text-2xl font-bold mb-2">Evento não encontrado</h1>
        <p className="text-muted-foreground mb-6">
          O evento que você está procurando não existe ou foi removido.
        </p>
        <Button asChild>
          <Link to="/programacao">Ver programação</Link>
        </Button>
      </div>
    </Section>
  );
}

