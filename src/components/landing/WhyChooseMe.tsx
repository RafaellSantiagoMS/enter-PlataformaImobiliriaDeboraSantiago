import { HeartHandshake, Sparkles, ShieldCheck, BadgeCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: HeartHandshake,
    title: "Atendimento sem pressão",
    description:
      "Atendimento 100% personalizado, do primeiro contato à assinatura. Você decide no seu tempo.",
  },
  {
    icon: Sparkles,
    title: "Acesso antecipado",
    description:
      "Acesso antecipado aos lançamentos Tegra e às tabelas promocionais antes do plantão geral.",
  },
  {
    icon: ShieldCheck,
    title: "Assessoria completa",
    description:
      "Assessoria completa na negociação e na aprovação de crédito, com transparência total.",
  },
  {
    icon: BadgeCheck,
    title: "18 anos de mercado",
    description:
      "CRECI 93905 visível, 18 anos de experiência e histórico de clientes atendidos com sucesso.",
  },
];

export const WhyChooseMe = () => {
  return (
    <section id="diferenciais" className="bg-secondary text-secondary-foreground">
      <div className="container py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Por que comprar comigo
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Uma corretora dedicada ao seu projeto de vida
          </h2>
          <p className="mt-3 text-secondary-foreground/70">
            Mais do que vender imóveis, eu ajudo você a tomar a melhor decisão.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <Card
              key={item.title}
              className="border-secondary-foreground/10 bg-secondary-foreground/5 text-secondary-foreground shadow-none transition-colors hover:bg-secondary-foreground/10"
            >
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-secondary-foreground/60">
          Debora Santiago · Corretora Tegra Vendas · CRECI 93905 · 18 anos no mercado imobiliário
        </p>
      </div>
    </section>
  );
};
