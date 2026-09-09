import {
  FileCheck2,
  HeartPulse,
  ShieldAlert,
  UsersRound,
} from "lucide-react";
import {
  ACCLIMATIZATION,
  MEDICAL_CERTIFICATE,
  MINORS,
  REQUIREMENTS,
} from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const REQUISITE_BLOCKS = [
  {
    icon: FileCheck2,
    title: "Certificado médico",
    items: MEDICAL_CERTIFICATE,
  },
  {
    icon: ShieldAlert,
    title: "Aclimatación en alta montaña",
    items: ACCLIMATIZATION,
  },
  {
    icon: UsersRound,
    title: "Menores de edad",
    items: MINORS,
  },
];

export const RequirementsSection = () => {
  return (
    <section id="requisitos" className="bg-gradient-sage texture-grain relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Requisitos por ruta"
          title="Edad, condición física y salud"
          description="Requisitos de obligatorio cumplimiento. El guía puede impedir el ingreso al sendero de cualquier participante que no los cumpla, sin derecho a reembolso."
        />

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-5 py-4 font-semibold">Ruta</th>
                    <th className="px-5 py-4 font-semibold">Edad</th>
                    <th className="px-5 py-4 font-semibold">Condición física</th>
                    <th className="px-5 py-4 font-semibold">Restricciones médicas</th>
                    <th className="px-5 py-4 font-semibold">Equipo obligatorio</th>
                  </tr>
                </thead>
                <tbody>
                  {REQUIREMENTS.map((row, index) => (
                    <tr
                      key={row.route}
                      className={index % 2 === 0 ? "bg-card" : "bg-muted/40"}
                    >
                      <td className="px-5 py-4 font-semibold text-foreground">
                        {row.route}
                      </td>
                      <td className="px-5 py-4 text-foreground/85">{row.age}</td>
                      <td className="px-5 py-4 text-foreground/85">{row.condition}</td>
                      <td className="px-5 py-4 text-foreground/85">{row.restrictions}</td>
                      <td className="px-5 py-4 text-foreground/85">{row.gear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {REQUISITE_BLOCKS.map(({ icon: Icon, title, items }, index) => (
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
                      <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" aria-hidden="true" />
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
