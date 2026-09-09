/**
 * Contenido oficial de Ruta Verde S.A.S.
 * Fuente: catálogo de rutas 2026, requisitos por ruta, políticas de reserva y
 * cancelación, guía de temporadas y equipaje, y preguntas frecuentes.
 * Precios vigentes desde el 1 de febrero de 2026, por persona, en pesos
 * colombianos (COP).
 */

export type Difficulty = "Baja" | "Media" | "Alta" | "Muy alta";

export type RouteInfo = {
  id: string;
  name: string;
  duration: string;
  distance: string;
  altitude: string;
  difficulty: Difficulty;
  group: string;
  price: string;
  tagline: string;
};

export const ROUTES: RouteInfo[] = [
  {
    id: "cocora",
    name: "Valle de Cocora Clásica",
    duration: "1 día",
    distance: "12 km",
    altitude: "2.900 m",
    difficulty: "Baja",
    group: "4 a 15",
    price: "$180.000",
    tagline: "Palma de cera, bosque de niebla y colibríes.",
  },
  {
    id: "filandia",
    name: "Bosque de Niebla Filandia",
    duration: "1 día",
    distance: "8 km",
    altitude: "2.100 m",
    difficulty: "Baja",
    group: "4 a 12",
    price: "$145.000",
    tagline: "Nuestra ruta más económica, entre guaduales y miradores.",
  },
  {
    id: "cafe",
    name: "Ruta del Café Ancestral",
    duration: "2 días",
    distance: "15 km",
    altitude: "1.600 m",
    difficulty: "Media",
    group: "4 a 14",
    price: "$520.000",
    tagline: "Dos días con alojamiento en finca cafetera.",
  },
  {
    id: "santa-isabel",
    name: "Nevado Santa Isabel",
    duration: "2 días",
    distance: "22 km",
    altitude: "4.750 m",
    difficulty: "Alta",
    group: "6 a 10",
    price: "$890.000",
    tagline: "Glaciar y picos sobre los 4.000 m con aclimatación.",
  },
  {
    id: "travesia",
    name: "Travesía Los Nevados",
    duration: "4 días",
    distance: "48 km",
    altitude: "4.800 m",
    difficulty: "Muy alta",
    group: "6 a 8",
    price: "$1.980.000",
    tagline: "La más exigente: cuatro días consecutivos de marcha.",
  },
];

export const INCLUDED = [
  "Transporte terrestre de ida y regreso desde Armenia o Pereira hasta el punto de inicio.",
  "Guía certificado por el Ministerio de Comercio, Industria y Turismo.",
  "Entradas a parques, reservas y senderos privados.",
  "Refrigerio y almuerzo en rutas de un día; todas las comidas en rutas de dos o más días.",
  "Alojamiento en finca u hospedaje de montaña en las rutas de dos y cuatro días.",
  "Seguro de asistencia médica en ruta.",
];

export const NOT_INCLUDED = [
  "Transporte hasta las ciudades de Armenia o Pereira.",
  "Equipo personal de montaña: botas, chaqueta, saco de dormir.",
  "Bebidas alcohólicas, souvenirs y propinas.",
  "Gastos derivados de una evacuación médica fuera del sendero.",
];

export const NOT_OFFERED = [
  "Rutas nocturnas ni caminatas después de las 6:00 p. m.",
  "Escalada en roca, parapente, rafting ni ciclomontañismo: operamos exclusivamente senderismo.",
  "Guías en inglés ni en otros idiomas: la guianza se presta únicamente en español.",
  "Mascotas en ninguna de nuestras rutas.",
  "Transporte desde Bogotá ni desde Medellín: el punto de encuentro más lejano es Armenia o Pereira.",
  "Menores de 8 años, con o sin acompañante.",
];

export type RequirementInfo = {
  route: string;
  age: string;
  condition: string;
  restrictions: string;
  gear: string;
};

export const REQUIREMENTS: RequirementInfo[] = [
  {
    route: "Valle de Cocora Clásica",
    age: "8 a 75 años",
    condition: "Básica: caminar 3 horas en terreno irregular",
    restrictions: "Ninguna en particular",
    gear: "Calzado de trekking e impermeable",
  },
  {
    route: "Bosque de Niebla Filandia",
    age: "8 a 80 años",
    condition: "Básica: caminar 2 horas",
    restrictions: "Ninguna en particular",
    gear: "Calzado cerrado e impermeable",
  },
  {
    route: "Ruta del Café Ancestral",
    age: "10 a 75 años",
    condition: "Media: caminar 4 horas con desnivel",
    restrictions: "Ninguna en particular",
    gear: "Calzado de trekking, linterna e impermeable",
  },
  {
    route: "Nevado Santa Isabel",
    age: "16 a 65 años",
    condition: "Alta: caminar 6 horas sobre 4.000 m",
    restrictions:
      "No apta para hipertensión no controlada, asma severa, cardiopatía o embarazo",
    gear: "Botas de montaña, chaqueta cortaviento, guantes y gafas de sol categoría 4",
  },
  {
    route: "Travesía Los Nevados",
    age: "18 a 60 años",
    condition: "Muy alta: 4 días consecutivos de marcha",
    restrictions: "Certificado médico con prueba de esfuerzo",
    gear: "Equipo completo de alta montaña y saco de dormir para -5 °C",
  },
];

export const MEDICAL_CERTIFICATE = [
  "Solo la Travesía Los Nevados exige certificado médico obligatorio.",
  "Debe tener menos de 30 días calendario al momento de la salida e incluir prueba de esfuerzo.",
  "Debe enviarse a reservas@rutaverde.co con al menos 8 días de anticipación.",
  "Sin certificado no se permite el ingreso y aplica la política de cancelación del viajero.",
];

export const ACCLIMATIZATION = [
  "Para Nevado Santa Isabel y Travesía Los Nevados exigimos pernoctar al menos una noche por encima de 2.500 m antes de la salida.",
  "Recomendamos llegar a Salento o Manizales con un día de anticipación.",
  "No recomendamos estas rutas a personas que hayan viajado en avión el mismo día.",
];

export const MINORS = [
  "Los menores de 18 años deben ir acompañados por un adulto responsable durante toda la ruta.",
  "No recibimos menores de 8 años en ninguna ruta.",
  "Los menores de 16 años no pueden participar en Nevado Santa Isabel ni en la Travesía Los Nevados.",
];

export type SeasonInfo = {
  period: string;
  climate: string;
  note: string;
};

export const SEASONS: SeasonInfo[] = [
  {
    period: "Diciembre a febrero",
    climate: "Temporada seca, cielos despejados",
    note: "La mejor época para rutas de alta montaña",
  },
  {
    period: "Marzo",
    climate: "Transición, lluvias ocasionales",
    note: "Buena para rutas de uno y dos días",
  },
  {
    period: "Abril y mayo",
    climate: "Temporada de lluvias fuertes",
    note: "Senderos resbalosos; no recomendamos alta montaña",
  },
  {
    period: "Junio",
    climate: "Transición, mejora progresiva",
    note: "Buena para todas las rutas",
  },
  {
    period: "Julio y agosto",
    climate: "Temporada seca, vientos fuertes",
    note: "Excelente visibilidad; abrigo adicional en nevados",
  },
  {
    period: "Septiembre",
    climate: "Transición",
    note: "Buena para rutas de uno y dos días",
  },
  {
    period: "Octubre y noviembre",
    climate: "Temporada de lluvias fuertes",
    note: "Mayor probabilidad de cancelación por clima",
  },
];

export const LUGGAGE_OBLIGATORY = [
  "Calzado de trekking con suela antideslizante, ya usado (no se admite calzado nuevo sin ablandar ni zapatillas de calle).",
  "Chaqueta impermeable con capucha.",
  "Documento de identidad original.",
  "Botella o termo reutilizable de mínimo un litro (no entregamos botellas plásticas de un solo uso).",
  "Protector solar y repelente.",
];

export const LUGGAGE_RECOMMENDED = [
  "Bastones de trekking, especialmente en descensos largos.",
  "Ropa en capas: camiseta técnica, polar y cortaviento.",
  "Gorro o sombrero, y guantes en rutas de alta montaña.",
  "Batería externa: no hay puntos de carga en los refugios de montaña.",
  "Efectivo en billetes pequeños para compras en tiendas locales.",
];

export const LUGGAGE_FORBIDDEN = [
  "Maletas de ruedas o equipaje rígido: solo mochila.",
  "Parlantes o equipos de sonido: prohibidos en áreas protegidas.",
  "Drones, salvo permiso escrito de la autoridad ambiental.",
  "Mascotas.",
];

export const LUGGAGE_WEIGHTS = [
  {
    route: "Rutas de un día",
    limit: "Sin límite (recomendamos no exceder 6 kg)",
  },
  {
    route: "Ruta del Café Ancestral y Nevado Santa Isabel",
    limit: "10 kg por persona",
  },
  {
    route: "Travesía Los Nevados",
    limit: "12 kg por persona",
  },
];

export const BOOKING_POLICIES = [
  "La reserva se confirma con un anticipo del 30% del valor total.",
  "El saldo debe pagarse máximo 5 días calendario antes de la fecha de salida.",
  "Si el saldo no se paga a tiempo, la reserva se cancela y el anticipo se pierde.",
  "Medios de pago: transferencia bancaria, PSE y tarjeta de crédito. No aceptamos pagos en efectivo el día de la salida.",
];

export const REFUND_TIERS = [
  { notice: "Más de 30 días antes de la salida", refund: "100%" },
  { notice: "Entre 15 y 30 días antes", refund: "70%" },
  { notice: "Entre 7 y 14 días antes", refund: "40%" },
  { notice: "Menos de 7 días antes", refund: "Sin reembolso" },
];

export const DATE_CHANGE = [
  "Un cambio de fecha sin costo si se solicita con más de 10 días calendario de anticipación.",
  "Con 10 días o menos, el cambio tiene un costo de $60.000 por persona.",
  "El cambio queda sujeto a disponibilidad de cupo en la nueva fecha.",
  "No se permite más de un cambio por reserva.",
];

export const RV_CANCELLATION = [
  "Avisamos con al menos 4 días calendario de anticipación, salvo cierres imprevistos por clima.",
  "El viajero elige entre reembolso del 100% o reprogramación sin costo.",
  "No cubrimos gastos de transporte, alojamiento ni tiquetes que el viajero haya contratado por su cuenta.",
];

export const HIGH_SEASON = {
  text: "Se aplica un recargo del 15% sobre el precio de la ruta del 15 de diciembre al 15 de enero y durante la Semana Santa.",
  detail:
    "El recargo se informa al momento de cotizar y ya viene incluido en el valor de la reserva. Fuera de esas fechas no hay recargo.",
};

export type FaqCategory = "Antes de reservar" | "Durante la ruta" | "Pagos, seguros y documentos";

export type FaqInfo = {
  category: FaqCategory;
  question: string;
  answer: string;
};

export const FAQS: FaqInfo[] = [
  {
    category: "Antes de reservar",
    question: "¿Desde dónde sale el transporte incluido?",
    answer:
      "El transporte incluido sale de Armenia o Pereira, según la ruta. No prestamos transporte desde Bogotá ni desde Medellín; el viajero debe llegar por su cuenta a una de esas dos ciudades.",
  },
  {
    category: "Antes de reservar",
    question: "¿Tienen guías que hablen inglés?",
    answer:
      "No. Toda nuestra guianza se presta únicamente en español. No contamos con guías en inglés ni en ningún otro idioma.",
  },
  {
    category: "Antes de reservar",
    question: "¿Puedo llevar a mi perro?",
    answer:
      "No. No se admiten mascotas en ninguna de nuestras rutas, incluidas las de un día. Es una restricción de las áreas protegidas donde operamos.",
  },
  {
    category: "Antes de reservar",
    question: "¿Organizan grupos privados?",
    answer:
      "Sí. Un grupo privado requiere mínimo 6 personas y tiene un recargo del 25% sobre el precio por persona. Se solicita con al menos 15 días de anticipación.",
  },
  {
    category: "Antes de reservar",
    question: "¿Puedo ir solo?",
    answer:
      "Sí. Los viajeros individuales se unen a una salida programada. Si la salida no alcanza el cupo mínimo, avisamos con 4 días de anticipación y ofrecemos reprogramación o reembolso completo.",
  },
  {
    category: "Durante la ruta",
    question: "¿Qué pasa si llueve el día de la salida?",
    answer:
      "Las rutas de uno y dos días se realizan con lluvia moderada; por eso el impermeable es obligatorio. Si la autoridad ambiental cierra el sendero o el clima es inseguro, cancelamos y aplicamos la política de cancelación por parte de Ruta Verde: reembolso del 100% o reprogramación sin costo.",
  },
  {
    category: "Durante la ruta",
    question: "¿Manejan alimentación vegetariana o vegana?",
    answer:
      "Sí, sin costo adicional. Debe informarse al momento de reservar y con mínimo 5 días de anticipación. No manejamos menús sin gluten certificados.",
  },
  {
    category: "Durante la ruta",
    question: "¿Hay señal de celular en las rutas?",
    answer:
      "Hay señal intermitente en Cocora y Filandia. No hay señal ni wifi en el Nevado Santa Isabel ni en la Travesía Los Nevados, y tampoco hay puntos de carga eléctrica en los refugios.",
  },
  {
    category: "Durante la ruta",
    question: "¿Qué es el soroche y cómo lo prevengo?",
    answer:
      "Es el mal de altura, común por encima de los 3.500 m. Se previene con la aclimatación obligatoria que exigimos: pernoctar al menos una noche sobre 2.500 m antes de la salida, hidratarse y ascender despacio. Si un participante presenta síntomas severos, el guía ordena el descenso inmediato.",
  },
  {
    category: "Pagos, seguros y documentos",
    question: "¿El seguro está incluido?",
    answer:
      "Sí, todas las rutas incluyen seguro de asistencia médica en ruta. No cubre gastos de evacuación fuera del sendero ni tratamientos posteriores.",
  },
  {
    category: "Pagos, seguros y documentos",
    question: "¿Puedo pagar en efectivo el día de la salida?",
    answer:
      "No. No aceptamos pagos en efectivo el día de la salida. Los medios habilitados son transferencia bancaria, PSE y tarjeta de crédito, y el saldo debe estar pagado máximo 5 días calendario antes.",
  },
  {
    category: "Pagos, seguros y documentos",
    question: "¿Emiten factura electrónica?",
    answer:
      "Sí. Se solicita al momento de reservar indicando razón social y NIT. No emitimos facturas después de 30 días calendario de finalizada la ruta.",
  },
];

export const CONTACT = {
  email: "reservas@rutaverde.co",
  phone: "+57 606 555 0187",
  whatsapp: "+57 310 555 0187",
  city: "Salento, Quindío · Colombia",
  rnt: "RNT 78945",
  nit: "NIT 901.887.334-2",
  web: "www.rutaverde.co",
};

/** Temas sobre los que el asistente virtual puede orientar al viajero. */
export const ASSISTANT_TOPICS = [
  "Rutas disponibles",
  "Precios",
  "Duración",
  "Dificultad",
  "Requisitos",
  "Rangos de edad",
  "Condición física",
  "Restricciones",
  "Días disponibles",
  "Presupuesto",
  "Temporadas",
  "Equipaje",
  "Políticas",
  "Cancelaciones",
  "Preguntas frecuentes",
];
