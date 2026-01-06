import { Link } from "@tanstack/react-router";
import { Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ContributeDialog } from "@/components/contribute-dialog";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navItems: NavItem[];
}

export function MobileNav({ open, onOpenChange, navItems }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Cross className="h-4 w-4 text-primary-foreground" />
            </div>
            Atraídos Pela Cruz
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => onOpenChange(false)}
              className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              activeProps={{
                className: "text-foreground bg-accent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 px-4">
          <ContributeDialog>
            <Button className="w-full" onClick={() => onOpenChange(false)}>
              Contribuir
            </Button>
          </ContributeDialog>
        </div>
      </SheetContent>
    </Sheet>
  );
}
