import { Copy, QrCode, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import type { ReactNode } from "react";

interface ContributeDialogProps {
  children: ReactNode;
}

const PIX_KEY = "pix@test.com.br";
const PIX_NAME = "Igreja Atraídos Pela Cruz";
const PIX_CITY = "Feira de Santana";

export function ContributeDialog({ children }: ContributeDialogProps) {
  const { toast } = useToast();

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      toast({
        title: "Chave Pix copiada!",
        description: "A chave foi copiada para sua área de transferência.",
      });
    } catch {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar a chave. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Contribuir
          </DialogTitle>
          <DialogDescription>
            Sua contribuição  a manter e expandir o ministério da igreja.
            Deus abençoe sua generosidade!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center w-48 h-48 bg-muted rounded-xl border-2 border-dashed border-border">
              <div className="text-center">
                <QrCode className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-xs text-muted-foreground">QR Code Pix</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Escaneie o QR Code acima ou copie a chave Pix abaixo
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex-1 rounded-lg bg-muted px-4 py-3">
                <p className="text-xs text-muted-foreground mb-1">
                  Chave Pix (e-mail)
                </p>
                <p className="font-mono text-sm break-all">{PIX_KEY}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopyPix}
                aria-label="Copiar chave Pix"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <span className="font-medium">Favorecido:</span> {PIX_NAME}
              </p>
              <p>
                <span className="font-medium">Cidade:</span> {PIX_CITY}
              </p>
            </div>
          </div>

          <Separator />

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              "Cada um contribua segundo propôs no seu coração, não com tristeza
              ou por necessidade; porque Deus ama ao que dá com alegria."
            </p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              2 Coríntios 9:7
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
