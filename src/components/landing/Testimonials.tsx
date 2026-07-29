import { Quote, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marina A.",
    role: "Comprou studio em Higienópolis",
    text: "A Debora me explicou cada detalhe do investimento. Foi a primeira corretora que entendeu meu objetivo de locação. Super recomendo.",
  },
  {
    name: "Rafael e Bia",
    role: "Moram no Bem Moema",
    text: "Conseguimos condições que não achamos em outro lugar. Do tour à entrega das chaves, a Debora esteve presente em tudo.",
  },
  {
    name: "Carlos M.",
    role: "Investidor · Ária Higienópolis",
    text: "Atendimento atencioso e transparente. Fechei duas unidades com tranquilidade e confiança na construtora.",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Prova social
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Clientes satisfeitos com a experiência
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Depoimentos ilustrativos · substitua por clientes reais quando disponíveis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="relative flex flex-col gap-4 shadow-none">
              <CardContent className="flex flex-col gap-4 p-6">
                <Quote className="h-8 w-8 text-accent/60" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">“{t.text}”</p>
                <div className="mt-auto border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
