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

export default {
  async fetch(request, env) {
    // Permetti solo POST
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // CORS: permetti solo il tuo dominio
    const origin = request.headers.get("Origin") || "";
    const allowed = ["https://sblaker.github.io"];
    if (!allowed.includes(origin)) {
      return new Response("Forbidden", { status: 403 });
    }

    const token = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return new Response("Worker not configured", { status: 500 });
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
      return new Response("Telegram error", { status: 502 });
    }

    return new Response("OK", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": origin },
    });
  },
};
