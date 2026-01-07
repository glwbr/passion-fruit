import { createFileRoute } from '@tanstack/react-router';
import { BookOpen } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { PageHeader } from '@/components/shared/page-header';
import { SermonCard } from '@/components/cards/sermon-card';
import { EmptyState } from '@/components/shared/empty-state';
import { getRecentSermons } from '@/content';

export const Route = createFileRoute('/sermoes/')({
  component: SermoesPage,
});

function SermoesPage() {
  const sermons = getRecentSermons();

  return (
    <Section>
      <div className="space-y-8">
        <PageHeader
          title="Sermões"
          description="Ouça e assista às mensagens pregadas em nossa igreja."
        />

        {sermons.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon, index) => (
              <div
                key={sermon.slug}
                className="animate-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SermonCard sermon={sermon} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={BookOpen}
            title="Nenhum sermão disponível"
            description="No momento não há sermões publicados. Volte em breve para conferir nossas mensagens."
          />
        )}
      </div>
    </Section>
  );
}

