import {
  CalendarClock,
  CreditCard,
  FileWarning,
  Percent,
  ShieldCheck,
} from "lucide-react";
import {
  BOOKING_POLICIES,
  DATE_CHANGE,
  HIGH_SEASON,
  REFUND_TIERS,
  RV_CANCELLATION,
} from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const POLICY_BLOCKS = [
  {
    icon: CreditCard,
    title: "Reserva y pago",
    items: BOOKING_POLICIES,
  },
  {
    icon: CalendarClock,
    title: "Cambio de fecha",
    items: DATE_CHANGE,
  },
  {
    icon: ShieldCheck,
    title: "Cancelación por Ruta Verde",
    items: RV_CANCELLATION,
  },
];

export const PoliciesSection = () => {
  return (
    <section
      id="politicas"
      className="bg-gradient-sage texture-grain relative py-20 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Políticas comerciales"
          title="Reservas, cancelaciones y reembolsos"
          description="Versión 3.1, vigente desde el 1 de febrero de 2026. Aplica a todas las reservas realizadas directamente con Ruta Verde S.A.S."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
              <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Percent className="h-4 w-4" aria-hidden="true" />
                </span>
                Reembolso por cancelación del viajero
              </h3>
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="px-4 py-3 font-semibold">
                        Anticipación de la solicitud
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Reembolso sobre lo pagado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFUND_TIERS.map((tier, index) => (
                      <tr
                        key={tier.notice}
                        className={index % 2 === 0 ? "bg-card" : "bg-muted/40"}
                      >
                        <td className="px-4 py-3 text-foreground/85">{tier.notice}</td>
                        <td className="px-4 py-3 font-semibold text-primary">
                          {tier.refund}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Los reembolsos se pagan en un plazo máximo de 15 días hábiles a la
                misma cuenta de origen.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={80}>
              <div className="rounded-3xl bg-accent/15 p-7 sm:p-8">
                <h3 className="mb-4 flex items-center gap-2.5 text-lg font-semibold text-foreground">
                  <FileWarning className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
                  Recargo de temporada alta
                </h3>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {HIGH_SEASON.text}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {HIGH_SEASON.detail}
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  ¿Por qué se cancela una salida?
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Cancelamos una salida cuando las condiciones climáticas son
                  inseguras, cuando la autoridad ambiental cierra el sendero o
                  cuando no se alcanza el cupo mínimo del grupo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {POLICY_BLOCKS.map(({ icon: Icon, title, items }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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
      </div>
    </section>
  );
};
