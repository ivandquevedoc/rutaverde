import { useEffect, useState } from "react";
import { Leaf, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SECTIONS, scrollToId } from "./scroll-to";

const NAV_LINKS = [
  { id: SECTIONS.rutas, label: "Rutas" },
  { id: SECTIONS.requisitos, label: "Requisitos" },
  { id: SECTIONS.temporadas, label: "Temporadas y equipaje" },
  { id: SECTIONS.politicas, label: "Políticas" },
  { id: SECTIONS.faq, label: "FAQ" },
  { id: SECTIONS.contacto, label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    // Pequeño retardo para que el menú móvil se cierre antes del scroll.
    window.setTimeout(() => scrollToId(id), 80);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => go(SECTIONS.inicio)}
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-primary"
          aria-label="Ruta Verde S.A.S. — inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          Ruta Verde
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={() => go(SECTIONS.asistente)}
            className="h-10 rounded-full bg-primary px-5 text-primary-foreground shadow-elegant hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hablar con el asistente
          </Button>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="z-[1000] w-[300px] bg-background sm:max-w-[320px]"
          >
            <SheetHeader className="mb-4 text-left">
              <SheetTitle className="flex items-center gap-2 font-display text-xl text-primary">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                Ruta Verde
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => go(link.id)}
                  className="rounded-lg px-3 py-3 text-left text-base font-medium text-foreground/85 transition-colors hover:bg-secondary"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => go(SECTIONS.asistente)}
                className="mt-4 h-11 rounded-full bg-primary text-primary-foreground shadow-elegant"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Hablar con el asistente
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
