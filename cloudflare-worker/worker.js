/**
 * Cloudflare Worker — Telegram Notification Proxy
 *
 * Questo worker riceve una richiesta POST dal sito e invia
 * la notifica a Telegram usando il token salvato come secret
 * su Cloudflare (mai esposto nel bundle del sito).
 *
 * DEPLOY:
 * 1. Vai su https://workers.cloudflare.com e crea un account gratuito
 * 2. Crea un nuovo Worker e incolla questo codice
 * 3. Vai in Settings > Variables > Secret Variables e aggiungi:
 *      TELEGRAM_BOT_TOKEN  = il token del tuo bot
 *      TELEGRAM_CHAT_ID    = il tuo chat ID
 * 4. Copia l'URL del worker (es. https://notify.tuonome.workers.dev)
 * 5. Aggiungilo al tuo .env.local come:
 *      NEXT_PUBLIC_NOTIFICATION_WORKER_URL=https://notify.tuonome.workers.dev
 * 6. Aggiungilo anche ai GitHub Actions secrets se usi CI/CD
 */

const ALLOWED_ORIGIN = "https://sblaker.github.io";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    // Gestisci preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // Permetti solo POST
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders(origin),
      });
    }

    // CORS: permetti solo il tuo dominio
    if (origin !== ALLOWED_ORIGIN) {
      return new Response("Forbidden", {
        status: 403,
        headers: corsHeaders(origin),
      });
    }

    const token = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return new Response("Worker not configured", {
        status: 500,
        headers: corsHeaders(origin),
      });
    }

    const message = `🚀 *Nuova visita su GitHub Pages!*`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      return new Response("Telegram error", {
        status: 502,
        headers: corsHeaders(origin),
      });
    }

    return new Response("OK", {
      status: 200,
      headers: corsHeaders(origin),
    });
  },
};
