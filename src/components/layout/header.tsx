import { Link } from "@tanstack/react-router";
import { Menu, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ContributeDialog } from "@/components/contribute-dialog";
import { MobileNav } from "./mobile-nav";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Programação", href: "/programacao" },
  { label: "Sermões", href: "/sermoes" },
  { label: "Ministérios", href: "/ministerios" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
              <Cross className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">
              Atraídos Pela Cruz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                activeProps={{
                  className: "text-foreground bg-accent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Desktop Contribute Button */}
            <ContributeDialog>
              <Button className="hidden sm:inline-flex">Contribuir</Button>
            </ContributeDialog>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileNavOpen}
        onOpenChange={setMobileNavOpen}
        navItems={navItems}
      />
    </header>
  );
}
