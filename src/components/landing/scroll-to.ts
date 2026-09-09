export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/** Anchors usados por la navegación y los CTAs de la landing. */
export const SECTIONS = {
  inicio: "inicio",
  rutas: "rutas",
  requisitos: "requisitos",
  temporadas: "temporadas",
  politicas: "politicas",
  faq: "faq",
  asistente: "asistente",
  contacto: "contacto",
} as const;
