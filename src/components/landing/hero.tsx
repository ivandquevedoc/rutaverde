import { CalendarDays, MapPin, MessageCircle, Mountain, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG_HERO } from "./media";
import { SECTIONS, scrollToId } from "./scroll-to";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Guía certificado y seguro incluido" },
  { icon: CalendarDays, label: "Salidas todo el año" },
  { icon: MapPin, label: "Salento, Quindío · Eje Cafetero" },
];

const MountainBackdrop = () => (
  <svg
    className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-primary/10 sm:h-56"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,208C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L0,320Z"
    />
  </svg>
);

export const Hero = () => {
  return (
    <section
      id={SECTIONS.inicio}
      className="bg-gradient-cream texture-grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <MountainBackdrop />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Salento, Quindío · RNT 78945
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Caminá entre palmas de cera y{" "}
            <em className="font-display italic text-primary">páramos de Los Nevados</em>
          </h1>

          <p className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Somos un operador de turismo de naturaleza con base en Salento.
            Senderismo guiado por el Eje Cafetero y el Parque Nacional Natural
            Los Nevados, con guías certificados y seguro de asistencia en ruta.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() => scrollToId(SECTIONS.rutas)}
              className="h-12 rounded-full px-7 text-base shadow-elegant"
            >
              <Mountain className="h-4 w-4" aria-hidden="true" />
              Explorar rutas
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToId(SECTIONS.asistente)}
              className="h-12 rounded-full border-primary/30 bg-background/60 px-7 text-base hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Habla con nuestro asistente
            </Button>
          </div>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -top-8 -right-6 hidden h-40 w-40 rounded-full bg-accent/25 blur-2xl sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -left-8 hidden h-44 w-44 rounded-full bg-primary/20 blur-2xl sm:block"
            aria-hidden="true"
          />
          <div className="animate-float relative">
            <div className="overflow-hidden rounded-[42%_58%_60%_40%/45%_38%_62%_55%] border-8 border-card shadow-elegant">
              <img
                src={IMG_HERO}
                alt="Valle de Cocora con palma de cera y senderistas caminando"
                crossOrigin="anonymous"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-elegant backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mountain className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Altitud máxima</p>
                <p className="text-muted-foreground">4.800 m · Los Nevados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
