import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const CHANNELS = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "Reservas, certificados médicos y facturación.",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    note: "Línea fija en el Eje Cafetero.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: `https://wa.me/${CONTACT.whatsapp.replace(/[^\d]/g, "")}`,
    note: "Respuesta rápida para tus consultas.",
  },
];

export const ContactSection = () => {
  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próxima ruta"
          description="Nuestro equipo de reservas te acompaña para elegir la experiencia adecuada."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, value, href, note }, index) => (
            <Reveal key={label} delay={index * 90}>
              <a
                href={href}
                className="group flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </h3>
                  <p className="mt-1 font-display text-lg font-bold text-foreground">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-primary p-7 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold">{CONTACT.city}</h3>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Operador de turismo de naturaleza con registro nacional de
                  turismo {CONTACT.rnt}. Punto de encuentro: Armenia o Pereira.
                </p>
              </div>
            </div>
            <p className="shrink-0 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-medium">
              {CONTACT.nit}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
