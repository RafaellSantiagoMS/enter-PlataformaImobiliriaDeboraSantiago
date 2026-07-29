import { Gift, Clock } from "lucide-react";

export const CampaignBanner = () => {
  return (
    <section className="bg-background">
      <div className="container py-8 md:py-10">
        <div className="relative overflow-hidden rounded-2xl bg-gold-gradient px-6 py-7 shadow-gold md:px-10 md:py-8">
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-foreground/10">
                <Gift className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-accent-foreground md:text-2xl">
                  Oportunidades com 6 Meses de Condomínio + IPTU Grátis
                </p>
                <p className="mt-1 text-sm text-accent-foreground/80">
                  Destaques da semana em empreendimentos Tegra selecionados. Vagas limitadas.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full bg-accent-foreground/10 px-4 py-2 text-sm font-semibold text-accent-foreground md:self-auto">
              <Clock className="h-4 w-4" />
              Válido até 31/07/2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
