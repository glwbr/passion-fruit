import { createFileRoute } from '@tanstack/react-router';
import { Section } from '@/components/shared/section';
import { PageHeader } from '@/components/shared/page-header';
import { MinistryCard } from '@/components/cards/ministry-card';
import { ministries } from '@/content';

export const Route = createFileRoute('/ministerios')({
  component: MinisteriosPage,
});

function MinisteriosPage() {
  return (
    <Section>
      <div className="space-y-8">
        <PageHeader
          title="Ministérios"
          description="Conheça os ministérios da nossa igreja e descubra como você pode servir."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ministries.map((ministry, index) => (
            <div
              key={ministry.id}
              className="animate-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MinistryCard ministry={ministry} />
            </div>
          ))}
        </div>

        <div className="rounded-2xl border bg-card p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Quer fazer parte de um ministério?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para saber mais sobre como você pode usar
            seus dons e talentos para servir a Deus e à Sua igreja.
          </p>
        </div>
      </div>
    </Section>
  );
}

