import {
  CalendarDays,
  Check,
  Clock,
  Footprints,
  Mountain,
  MountainSnow,
  Route,
  Users,
  X,
  XCircle,
} from "lucide-react";
import {
  INCLUDED,
  NOT_INCLUDED,
  NOT_OFFERED,
  ROUTES,
  type Difficulty,
} from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Baja: "bg-secondary text-secondary-foreground",
  Media: "bg-accent/20 text-accent-foreground",
  Alta: "bg-primary/15 text-primary",
  "Muy alta": "bg-destructive/10 text-destructive",
};

const DIFFICULTY_ICONS: Record<Difficulty, typeof Mountain> = {
  Baja: Mountain,
  Media: Route,
  Alta: MountainSnow,
  "Muy alta": MountainSnow,
};

export const RoutesSection = () => {
  return (
    <section id="rutas" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Catálogo 2026"
          title="Rutas de senderismo guiado"
          description="Precios vigentes desde el 1 de febrero de 2026, por persona, en pesos colombianos. Todas las rutas incluyen transporte desde Armenia o Pereira, guía certificado y seguro de asistencia médica."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route, index) => {
            const DifficultyIcon = DIFFICULTY_ICONS[route.difficulty];
            const meta = [
              { icon: Clock, label: "Duración", value: route.duration },
              { icon: Footprints, label: "Distancia", value: route.distance },
              { icon: Mountain, label: "Altitud máx.", value: route.altitude },
              { icon: Users, label: "Grupo", value: `${route.group} pers.` },
            ];
            return (
              <Reveal
                key={route.id}
                delay={index * 90}
                className={
                  route.id === "travesia"
                    ? "sm:col-span-2 lg:col-span-1 lg:row-span-1"
                    : ""
                }
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-primary opacity-80"
                    aria-hidden="true"
                  />
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <DifficultyIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${DIFFICULTY_STYLES[route.difficulty]}`}
                    >
                      Dificultad {route.difficulty.toLowerCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-foreground">
                    {route.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {route.tagline}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                    {meta.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 shrink-0 text-primary/70" aria-hidden="true" />
                        <div className="leading-tight">
                          <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                            {label}
                          </p>
                          <p className="text-sm font-medium text-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-baseline justify-between pt-6">
                    <p className="text-xs text-muted-foreground">Desde</p>
                    <p className="font-display text-2xl font-bold text-primary">
                      {route.price}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-secondary/40 p-7 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                ¿Qué incluye cada ruta?
              </h3>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border bg-card p-7 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <XCircle className="h-4 w-4" aria-hidden="true" />
                </span>
                ¿Qué no incluye?
              </h3>
              <ul className="space-y-3">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-7 sm:p-8">
            <h3 className="mb-4 flex items-center gap-2.5 text-lg font-semibold">
              <XCircle className="h-5 w-5" aria-hidden="true" />
              Servicios que no prestamos
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {NOT_OFFERED.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
