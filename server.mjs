/**
 * Servidor estático mínimo para la landing de Ruta Verde S.A.S.
 * Sin dependencias externas: solo módulos nativos de Node.
 *
 * - Sirve el bundle de producción de Vite (carpeta ./dist).
 * - Fallback SPA: cualquier ruta no encontrada devuelve index.html.
 * - /healthz para los health checks de Cloud Run.
 * - Escucha en 0.0.0.0:$PORT (Cloud Run inyecta PORT).
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("./dist/", import.meta.url));
const PORT = Number(process.env.PORT ?? 8080);
const HOST = "0.0.0.0";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

const isHashedAsset = (pathname) => pathname.startsWith("/assets/");

const server = createServer(async (req, res) => {
  const { method, url } = req;

  // Health check para Cloud Run
  if (url === "/healthz") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "ok", service: "ruta-verde" }));
    return;
  }

  if (method !== "GET" && method !== "HEAD") {
    res.writeHead(405, { allow: "GET, HEAD" });
    res.end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  } catch {
    res.writeHead(400);
    res.end();
    return;
  }

  if (pathname === "/") pathname = "/index.html";

  // Rechaza separadores alternativos (p. ej. \ en intentos de traversal codificados)
  if (pathname.includes("\\")) {
    res.writeHead(403);
    res.end();
    return;
  }

  // Prevención de path traversal
  const filePath = normalize(join(ROOT, pathname));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end();
    return;
  }

  const send = (status, data, headers = {}) => {
    res.writeHead(status, headers);
    if (method === "HEAD") res.end();
    else res.end(data);
  };

  try {
    const content = await readFile(filePath);
    const headers = {
      "content-type": MIME_TYPES[extname(filePath)] ?? "application/octet-stream",
      "x-content-type-options": "nosniff",
    };
    // Los assets con hash de Vite se cachean de forma inmutable
    headers["cache-control"] = isHashedAsset(pathname)
      ? "public, max-age=31536000, immutable"
      : "no-cache";
    send(200, content, headers);
  } catch {
    // Fallback SPA: las rutas de la landing devuelven el index.html
    try {
      const indexHtml = await readFile(join(ROOT, "index.html"));
      send(200, indexHtml, {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache",
      });
    } catch {
      send(500, "index.html no encontrado");
    }
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Ruta Verde static server escuchando en http://${HOST}:${PORT}`);
});
