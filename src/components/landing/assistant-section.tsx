import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSISTANT_TOPICS } from "./data";
import { IMG_ASSISTANT } from "./media";
import { Reveal } from "./reveal";
import { SECTIONS, scrollToId } from "./scroll-to";

export const AssistantSection = () => {
  return (
    <section
      id={SECTIONS.asistente}
      className="bg-gradient-cream texture-grain relative overflow-hidden py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[48%_52%_40%_60%/55%_45%_60%_40%] border-2 border-dashed border-primary/25" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[42%_58%_60%_40%/45%_38%_62%_55%] border-8 border-card shadow-elegant">
              <img
                src={IMG_ASSISTANT}
                alt="Ilustración de un viajero conversando con el asistente virtual rodeado de montañas"
                crossOrigin="anonymous"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col items-start gap-5">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Asistente virtual
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              ¿No sabes qué ruta elegir?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nuestro asistente virtual puede ayudarte a explorar las rutas de
              Ruta Verde teniendo en cuenta aspectos como tu edad, condición
              física, días disponibles y presupuesto.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              También puedes preguntarle por requisitos, temporadas, equipaje,
              precios y políticas de nuestras rutas.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-2">
              {ASSISTANT_TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-primary/15 bg-card px-3 py-1.5 text-xs font-medium text-foreground/75"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-2 flex flex-col gap-3">
              <Button
                onClick={() => scrollToId(SECTIONS.asistente)}
                className="h-12 rounded-full px-7 text-base shadow-glow"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Hablar con el asistente
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Toca el botón flotante en la esquina inferior derecha para
                iniciar la conversación. El asistente complementa la información
                de esta página: no realiza reservas, pagos ni confirma
                disponibilidad.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
