import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, type FaqCategory } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SECTIONS, scrollToId } from "./scroll-to";

const CATEGORIES: FaqCategory[] = [
  "Antes de reservar",
  "Durante la ruta",
  "Pagos, seguros y documentos",
];

export const FaqSection = () => {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas antes de caminar"
          description="Si tu pregunta no está aquí, escríbenos a reservas@rutaverde.co o consúltala con nuestro asistente virtual."
        />

        <div className="space-y-10">
          {CATEGORIES.map((category, categoryIndex) => (
            <Reveal key={category} delay={categoryIndex * 60}>
              <div>
                <h3 className="mb-3 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
                  {category}
                </h3>
                <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6 shadow-sm">
                  {FAQS.filter((faq) => faq.category === category).map((faq, index) => (
                    <AccordionItem key={faq.question} value={`${category}-${index}`}>
                      <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                ¿No encuentras tu respuesta?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Nuestro asistente virtual puede orientarte en minutos.
              </p>
            </div>
            <Button
              onClick={() => scrollToId(SECTIONS.asistente)}
              className="h-11 shrink-0 rounded-full px-6 shadow-elegant"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Consulta con nuestro asistente
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
