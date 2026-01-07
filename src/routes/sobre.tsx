import { createFileRoute } from '@tanstack/react-router';
import { Section } from '@/components/shared/section';
import { PageHeader } from '@/components/shared/page-header';
import { ContentProse } from '@/components/shared/content-prose';
import { pages } from '@/content';

export const Route = createFileRoute('/sobre')({
  component: SobrePage,
});

function SobrePage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Sobre Nós"
          description="Conheça nossa história, missão e valores."
          className="mb-8"
        />
        <ContentProse content={pages.sobre} />
      </div>
    </Section>
  );
}

