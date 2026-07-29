import { Phone, MessageCircle, MapPin } from "lucide-react";

import { openWhatsapp, WHATSAPP_PHONE } from "@/lib/whatsapp";

const FOOTER_MESSAGE =
  "Olá, Debora! Vim pelo site e gostaria de falar sobre os imóveis Tegra.";

const PHONE_DISPLAY = "+55 11 97626-4984";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">Debora Santiago</p>
            <p className="mt-1 text-sm text-secondary-foreground/70">
              Corretora Tegra Vendas · CRECI 93905
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Especialista em médio e alto padrão em São Paulo — para morar ou investir.
              18 anos de experiência no mercado imobiliário.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Navegação</p>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#topo" className="transition-colors hover:text-accent">Início</a></li>
              <li><a href="#imoveis" className="transition-colors hover:text-accent">Imóveis</a></li>
              <li><a href="#diferenciais" className="transition-colors hover:text-accent">Diferenciais</a></li>
              <li><a href="#depoimentos" className="transition-colors hover:text-accent">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Contato</p>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li>
                <a href={`tel:${WHATSAPP_PHONE}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openWhatsapp(WHATSAPP_PHONE, FOOTER_MESSAGE)}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" />
                  Conversar no WhatsApp
                </button>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-6">
          <p className="text-xs leading-relaxed text-secondary-foreground/60">
            Imagens meramente ilustrativas. As informações dos empreendimentos da Tegra
            Incorporadora estão sujeitas a alterações e disponibilidade sem aviso prévio.
            Valores, condições e prazos de campanha são confirmados no momento do
            atendimento. Tegra é uma marca pertencente aos seus respectivos titulares;
            esta página é independente e tem caráter exclusivamente de captação de contatos
            com a corretora Debora Santiago (CRECI 93905).
          </p>
          <p className="mt-4 text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Debora Santiago · Corretora Tegra Vendas · CRECI 93905
          </p>
        </div>
      </div>
    </footer>
  );
};
