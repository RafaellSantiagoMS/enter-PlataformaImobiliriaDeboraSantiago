import { useState } from "react";
import { ArrowRight, Sparkles, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { openWhatsapp, WHATSAPP_PHONE } from "@/lib/whatsapp";
import { QuizModal } from "./QuizModal";

const DEBORA_PHOTO =
  "https://cdn.enter.pro/resources/uid_100400500/cdd4c20f-6796-40.jpeg";

export const Hero = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [objetivo, setObjetivo] = useState("Morar");
  const [quizOpen, setQuizOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, Debora! Me chamo ${nome || "(nome)"}.
Meu WhatsApp: ${whatsapp || "(whatsapp)"}.
Meu objetivo: ${objetivo} em um imóvel Tegra. Quero receber opções!`;
    openWhatsapp(WHATSAPP_PHONE, message);
  };

  return (
    <section id="topo" className="relative overflow-hidden bg-hero-gradient">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative grid items-center gap-12 py-16 md:grid-cols-2 md:py-24 lg:gap-8">
        <div className="flex flex-col gap-6 text-secondary-foreground animate-float-in">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-secondary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Imóveis Tegra · Alto Padrão em São Paulo
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
            Encontre o seu Tegra ideal nas melhores localizações de São Paulo
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            Consultoria imobiliária exclusiva com acesso direto às tabelas promocionais,
            plantas e condições especiais de lançamento. Sou a{" "}
            <strong className="font-semibold text-accent">Debora Santiago</strong>, especialista
            nos empreendimentos Tegra.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="lg" className="gap-2" onClick={() => setQuizOpen(true)}>
              <Sparkles className="h-4 w-4" />
              Encontre seu imóvel em 3 passos
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full gap-2 border-accent/40 bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-accent sm:w-auto">
              <a href="#imoveis" className="flex items-center gap-2">
                Ver imóveis
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" />
            <img
              src={DEBORA_PHOTO}
              alt="Debora Santiago, corretora Tegra Vendas"
              className="relative h-56 w-56 rounded-full border-4 border-accent/40 object-cover object-top shadow-elegant md:h-72 md:w-72"
            />
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-6 shadow-elegant">
            <p className="mb-4 font-display text-xl font-semibold text-foreground">
              Atendimento rápido
            </p>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="nome" className="text-foreground">Seu nome</Label>
                <Input id="nome" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="whatsapp" className="text-foreground">Seu WhatsApp</Label>
                <Input id="whatsapp" type="tel" placeholder="(11) 9 9999-9999" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="objetivo" className="text-foreground">O que procura?</Label>
                <Select value={objetivo} onValueChange={setObjetivo}>
                  <SelectTrigger id="objetivo">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Morar">Morar</SelectItem>
                    <SelectItem value="Investir">Investir</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" variant="gold" size="lg" className="mt-5 w-full gap-2">
              <Send className="h-4 w-4" />
              Quero receber opções
            </Button>
          </form>
        </div>
      </div>

      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} />
    </section>
  );
};
