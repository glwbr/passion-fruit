import { Link } from "@tanstack/react-router";
import {
  Cross,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
                  <Cross className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-lg">
                  Atraídos Pela Cruz
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Uma igreja comprometida com a proclamação do evangelho e a
                edificação dos santos.
              </p>

              <div className="flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Links Rápidos</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre Nós
                </Link>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Programação
                </Link>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sermões
                </Link>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ministérios
                </Link>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contribuir
                </Link>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Horários dos Cultos</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Domingo</p>
                    <p>Culto de Celebração: 10h</p>
                    <p>Culto da Noite: 19h</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Quarta-feira</p>
                    <p>Estudo Bíblico: 19h30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contato</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <p>
                    Rua da Esperança, 123
                    <br />
                    Centro, São Paulo - SP
                    <br />
                    CEP: 01234-567
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a
                    href="tel:+551199999999"
                    className="hover:text-foreground transition-colors"
                  >
                    (11) 9999-9999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a
                    href="mailto:contato@atraidospelacruz.com.br"
                    className="hover:text-foreground transition-colors"
                  >
                    contato@atraidospelacruz.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Atraídos Pela Cruz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
