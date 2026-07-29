import { MessageCircle } from "lucide-react";

import { openWhatsapp, WHATSAPP_PHONE } from "@/lib/whatsapp";

const FLOATING_MESSAGE =
  "Olá, Debora! Vim pelo site e gostaria de falar sobre os imóveis Tegra.";

export const FloatingWhatsApp = () => {
  return (
    <button
      type="button"
      aria-label="Falar no WhatsApp"
      onClick={() => openWhatsapp(WHATSAPP_PHONE, FLOATING_MESSAGE)}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-gold transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" aria-hidden />
    </button>
  );
};
