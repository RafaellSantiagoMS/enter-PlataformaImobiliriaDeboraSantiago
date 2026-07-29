import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { openWhatsapp, WHATSAPP_PHONE } from "@/lib/whatsapp";

const HEADER_MESSAGE =
  "Olá, Debora! Vim pelo site e gostaria de falar sobre os imóveis Tegra.";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <div className="flex flex-col leading-tight">
          <a href="#topo" className="font-display text-lg font-bold text-primary md:text-2xl">
            Debora Santiago
          </a>
          <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground md:text-xs">
            Corretora Tegra Vendas · CRECI 93905
          </span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#imoveis" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
            Imóveis
          </a>
          <a href="#diferenciais" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
            Diferenciais
          </a>
          <a href="#depoimentos" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
            Depoimentos
          </a>
        </div>

        <Button
          variant="gold"
          size="sm"
          className="gap-2"
          onClick={() => openWhatsapp(WHATSAPP_PHONE, HEADER_MESSAGE)}
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Falar agora</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </div>
    </header>
  );
};
