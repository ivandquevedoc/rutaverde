import { Leaf } from "lucide-react";
import { CONTACT } from "./data";
import { SECTIONS, scrollToId } from "./scroll-to";

const FOOTER_LINKS = [
  { id: SECTIONS.rutas, label: "Rutas" },
  { id: SECTIONS.requisitos, label: "Requisitos" },
  { id: SECTIONS.temporadas, label: "Temporadas y equipaje" },
  { id: SECTIONS.politicas, label: "Políticas" },
  { id: SECTIONS.faq, label: "Preguntas frecuentes" },
  { id: SECTIONS.asistente, label: "Asistente virtual" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-primary">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              Ruta Verde
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Turismo de naturaleza y senderismo guiado en el Eje Cafetero y el
              Parque Nacional Natural Los Nevados. Salento, Quindío ·{" "}
              {CONTACT.rnt} · {CONTACT.nit}
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
              Explora
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(link.id)}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.phone}</li>
              <li>WhatsApp {CONTACT.whatsapp}</li>
              <li>{CONTACT.city}</li>
              <li>{CONTACT.web}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs leading-relaxed text-primary-foreground/60">
          <p>
            Catálogo de rutas 2026 (CAT-RV-2026-01) · Requisitos por ruta
            (REQ-RV-2026-02) · Políticas comerciales v3.1 (POL-RV-3.1-2026) ·
            Temporadas y equipaje (GUI-RV-2026-04) · Preguntas frecuentes
            (FAQ-RV-2026-05). Precios por persona, vigentes desde el 1 de febrero
            de 2026.
          </p>
          <p className="mt-2">
            El asistente virtual de esta página complementa la información del
            sitio y no realiza reservas, pagos ni confirma disponibilidad.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Ruta Verde S.A.S. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
