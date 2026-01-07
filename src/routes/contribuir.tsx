import { createFileRoute } from "@tanstack/react-router";
import { Heart, Gift, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { PageHeader } from "@/components/shared/page-header";
import { ContributeDialog } from "@/components/contribute-dialog";

export const Route = createFileRoute("/contribuir")({
  component: ContribuirPage,
});

function ContribuirPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto space-y-12">
        <PageHeader
          title="Contribuir"
          description="Sua generosidade faz a diferença no avanço do Reino de Deus."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold">Adoração</h3>
            <p className="text-sm text-muted-foreground">
              Ofertar é um ato de adoração e gratidão a Deus por tudo que Ele
              nos dá.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
              <Gift className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold">Obediência</h3>
            <p className="text-sm text-muted-foreground">
              A Bíblia nos ensina sobre a importância de contribuir com alegria
              e fidelidade.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
              <Sprout className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold">Impacto</h3>
            <p className="text-sm text-muted-foreground">
              Sua contribuição ajuda a manter e expandir o ministério da igreja.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Faça sua contribuição</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Contribua via Pix de forma rápida e segura. Clique no botão abaixo
              para ver as informações de pagamento.
            </p>
          </div>

          <ContributeDialog>
            <Button size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Contribuir via Pix
            </Button>
          </ContributeDialog>
        </div>

        <div className="prose-content text-center">
          <blockquote className="border-none pl-0 text-lg italic text-muted-foreground">
            "Cada um contribua segundo propôs no seu coração, não com tristeza
            ou por necessidade; porque Deus ama ao que dá com alegria."
          </blockquote>
          <p className="text-sm font-medium text-primary">— 2 Coríntios 9:7</p>
        </div>

        <div className="rounded-2xl bg-muted/50 p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            Para que são destinadas as contribuições?
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2" />
              <span>
                <strong className="text-foreground">
                  Manutenção do templo:
                </strong>{" "}
                despesas com aluguel, energia, água e infraestrutura.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2" />
              <span>
                <strong className="text-foreground">Ministérios:</strong>{" "}
                suporte aos diversos ministérios da igreja.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2" />
              <span>
                <strong className="text-foreground">Missões:</strong> apoio a
                missionários e projetos evangelísticos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2" />
              <span>
                <strong className="text-foreground">Ação social:</strong>{" "}
                projetos de assistência à comunidade.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
