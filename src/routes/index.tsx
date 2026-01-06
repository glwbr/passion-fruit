import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Calendar, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/shared/section';
import { ContributeDialog } from '@/components/contribute-dialog';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,75,106,0.08),transparent_50%)]" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Atraídos{' '}
              <span className="text-primary">Pela Cruz</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma igreja comprometida com a proclamação do evangelho de Cristo
              crucificado, ressuscitado e glorificado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link to="/">
                  Ver Programação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <ContributeDialog>
                <Button variant="outline" size="lg">
                  Contribuir
                </Button>
              </ContributeDialog>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-muted/30">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Programação
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Próximos Eventos</h2>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Nenhum evento programado no momento.</p>
            </div>

          <div className="sm:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link to="/">
                Ver toda programação
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Sermões
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Últimos Sermões</h2>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="sm:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link to="/">
                Ver todos os sermões
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Ministérios
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Sirva Conosco
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra como você pode usar seus dons para servir a Deus e à Sua igreja.
            </p>
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/">
                Ver todos os ministérios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Venha nos visitar!
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/90">
            Será uma alegria recebê-lo em nossos cultos. Venha fazer parte desta
            família e crescer conosco na fé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/">
                Entre em contato
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/">
                Conheça nossa história
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

