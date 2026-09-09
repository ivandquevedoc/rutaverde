import {
  Backpack,
  Ban,
  Check,
  CloudRain,
  Layers,
  Sun,
  Wind,
} from "lucide-react";
import {
  LUGGAGE_FORBIDDEN,
  LUGGAGE_OBLIGATORY,
  LUGGAGE_RECOMMENDED,
  LUGGAGE_WEIGHTS,
  SEASONS,
} from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const CLIMATE_ICONS = [
  Sun,
  CloudRain,
  CloudRain,
  Sun,
  Wind,
  Sun,
  CloudRain,
];

const LUGGAGE_BLOCKS = [
  {
    icon: Check,
    title: "Equipaje obligatorio",
    items: LUGGAGE_OBLIGATORY,
    tone: "bg-primary text-primary-foreground",
  },
  {
    icon: Layers,
    title: "Equipaje recomendado",
    items: LUGGAGE_RECOMMENDED,
    tone: "bg-accent text-accent-foreground",
  },
  {
    icon: Ban,
    title: "Qué no llevar",
    items: LUGGAGE_FORBIDDEN,
    tone: "bg-muted text-muted-foreground",
  },
];

export const SeasonsSection = () => {
  return (
    <section id="temporadas" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Temporadas y equipaje"
          title="La mejor fecha y lo que no puede faltar"
          description="El Eje Cafetero tiene dos temporadas secas y dos de lluvias al año. Esta guía ayuda a escoger la mejor fecha y a empacar lo necesario."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SEASONS.map((season, index) => {
            const Icon = CLIMATE_ICONS[index % CLIMATE_ICONS.length];
            const isDry = season.climate.toLowerCase().includes("seca");
            const isRainy = season.climate.toLowerCase().includes("lluvias fuertes");
            return (
              <Reveal key={season.period} delay={index * 60}>
                <div
                  className={`h-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    isRainy
                      ? "border-destructive/20 bg-destructive/5"
                      : isDry
                        ? "border-primary/20 bg-primary/5"
                        : "border-border bg-card"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {season.period}
                    </h3>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        isRainy
                          ? "bg-destructive/10 text-destructive"
                          : isDry
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground/85">
                    {season.climate}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {season.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {LUGGAGE_BLOCKS.map(({ icon: Icon, title, items, tone }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${tone}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-secondary/50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Backpack className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Peso máximo de mochila
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  No prestamos servicio de porteadores ni de mulas para carga personal.
                </p>
              </div>
            </div>
            <dl className="grid w-full gap-3 sm:max-w-md sm:grid-cols-1">
              {LUGGAGE_WEIGHTS.map(({ route, limit }) => (
                <div
                  key={route}
                  className="flex items-baseline justify-between gap-4 rounded-xl bg-card px-4 py-3"
                >
                  <dt className="text-sm text-muted-foreground">{route}</dt>
                  <dd className="text-right text-sm font-semibold text-primary">{limit}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
