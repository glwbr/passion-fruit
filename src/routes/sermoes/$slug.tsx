import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, User, Calendar, Clock, Play, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/shared/section';
import { ContentProse } from '@/components/shared/content-prose';
import { getSermonBySlug } from '@/content';
import { formatDate, formatDuration } from '@/lib/date';


export const Route = createFileRoute('/sermoes/$slug')({
  component: SermonDetailPage,
  loader: ({ params }) => {
    const sermon = getSermonBySlug(params.slug);
    if (!sermon) throw notFound();

    return sermon;
  },
  notFoundComponent: SermonNotFound,
});

function SermonDetailPage() {
  const sermon = Route.useLoaderData();

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/sermoes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para sermões
          </Link>
        </Button>

        <article className="space-y-8">
          <header className="space-y-4">
            {sermon.series && (
              <div className="flex items-center gap-2">
                <Tag className="text-primary h-4 w-4" />
                <span className="text-primary text-sm font-medium">{sermon.series}</span>
              </div>
            )}

            <h1 className="text-3xl font-bold sm:text-4xl">{sermon.title}</h1>

            {sermon.description && <p className="text-muted-foreground text-lg">{sermon.description}</p>}

            <div className="text-muted-foreground flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{sermon.speaker}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(sermon.date)}</span>
              </div>

              {sermon.duration && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{formatDuration(sermon.duration)}</span>
                </div>
              )}
            </div>

            {sermon.videoURL && (
              <div className="pt-2">
                <Button asChild size="lg">
                  <a href={sermon.videoURL} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-5 w-5" />
                    Assistir no YouTube
                  </a>
                </Button>
              </div>
            )}
          </header>

          {sermon.tags && sermon.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {sermon.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {sermon.content && (
            <div className="border-t pt-8">
              <ContentProse content={sermon.content} />
            </div>
          )}
        </article>
      </div>
    </Section>
  );
}

function SermonNotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl py-12 text-center">
        <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Play className="text-muted-foreground/50 h-8 w-8" />
        </div>
        <h1 className="mb-2 text-2xl font-bold">Sermão não encontrado</h1>
        <p className="text-muted-foreground mb-6">O sermão que você está procurando não existe ou foi removido.</p>
        <Button asChild>
          <Link to="/sermoes">Ver sermões</Link>
        </Button>
      </div>
    </Section>
  );
}
