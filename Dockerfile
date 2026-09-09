# ============================================================
# Ruta Verde S.A.S. — Landing estática (Vite + React)
# Multi-stage build optimizado para Google Cloud Run.
#
# Build local:    docker build -t ruta-verde .
# Subir imagen:   gcloud builds submit --tag gcr.io/<PROJECT>/ruta-verde
# Desplegar:      gcloud run deploy ruta-verde --image gcr.io/<PROJECT>/ruta-verde \
#                   --platform managed --region <REGION> --allow-unauthenticated
# ============================================================

# ---------- Etapa 1: construcción del bundle de producción ----------
FROM node:22-alpine AS build

WORKDIR /app

# Instalar dependencias con el lockfile congelado.
# .npmrc es imprescindible: define el registry privado de los paquetes @enter-pro.
COPY package.json pnpm-lock.yaml .npmrc ./
RUN corepack enable && pnpm install --frozen-lockfile

# Copiar el código fuente y compilar
COPY . .
RUN pnpm build:prod

# ---------- Etapa 2: runtime (imagen mínima, solo estáticos) ----------
FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

# Solo el bundle generado y el servidor estático mínimo
COPY --from=build /app/dist ./dist
COPY server.mjs ./server.mjs

# Cloud Run inyecta la variable PORT (por defecto 8080)
ENV PORT=8080
EXPOSE 8080

USER node

CMD ["node", "server.mjs"]
