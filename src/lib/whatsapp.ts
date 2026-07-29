/**
 * Numero de WhatsApp da corretora Debora Santiago (formato internacional p/ wa.me,
 * apenas dígitos, sem +). Atualize aqui em um único lugar se mudar.
 */
export const WHATSAPP_PHONE = "5511976264984";

/**
 * Monta um link de WhatsApp (wa.me) a partir do telefone e da mensagem,
 * com a mensagem codificada para URL (incluindo quebras de linha).
 */
export function buildWhatsappLink(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/**
 * Abre o WhatsApp em uma nova aba com a mensagem informada.
 *
 * PONTO DE EXTENSÃO PARA RASTREAMENTO DE CONVERSÃO:
 * Quando os IDs do Meta Pixel / Google Ads estiverem disponíveis (ver placeholders
 * no index.html), dispare os eventos de conversão aqui — centralizar neste único
 * ponto faz com que TODOS os CTAs de WhatsApp (hero, card, modal, quiz, popup,
 * footer, botão flutuante) reportem a conversão automaticamente.
 *
 * Exemplo:
 *   if (typeof window.fbq === "function") window.fbq("track", "Contact");
 *   if (typeof window.gtag === "function") window.gtag("event", "contact", { ... });
 */
export function openWhatsapp(phone: string, message: string): void {
  const link = buildWhatsappLink(phone, message);

  // TODO(conversion-tracking): disparar fbq('track', 'Contact') / gtag('event', ...) aqui.

  if (typeof window !== "undefined") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}
