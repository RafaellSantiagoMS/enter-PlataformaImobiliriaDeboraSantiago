import { useState } from "react";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { openWhatsapp, WHATSAPP_PHONE } from "@/lib/whatsapp";

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const steps = [
  {
    key: "objetivo" as const,
    title: "Qual o seu objetivo?",
    options: [
      { value: "Morar", label: "Morar" },
      { value: "Investir", label: "Investir" },
    ],
  },
  {
    key: "regiao" as const,
    title: "Qual região você prefere?",
    options: [
      { value: "Higienópolis", label: "Higienópolis" },
      { value: "Moema", label: "Moema" },
      { value: "Outros Tegra", label: "Outros Tegra" },
    ],
  },
  {
    key: "faixa" as const,
    title: "Qual sua faixa de valor?",
    options: [
      { value: "Até R$ 600 mil", label: "Até R$ 600 mil" },
      { value: "R$ 600 mil a R$ 1,2 mi", label: "R$ 600 mil a R$ 1,2 mi" },
      { value: "Acima de R$ 1,5 mi", label: "Acima de R$ 1,5 mi" },
    ],
  },
];

export const QuizModal = ({ open, onOpenChange }: QuizModalProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const reset = () => {
    setStepIndex(0);
    setAnswers({});
    setDone(false);
  };

  const handleClose = (value: boolean) => {
    onOpenChange(value);
    if (!value) setTimeout(reset, 150);
  };

  const current = steps[stepIndex];
  const currentAnswer = answers[current.key];
  const isLast = stepIndex === steps.length - 1;

  const next = () => {
    if (isLast) {
      setDone(true);
      return;
    }
    setStepIndex((i) => i + 1);
  };

  const back = () => {
    if (stepIndex === 0) return;
    setStepIndex((i) => i - 1);
  };

  const selectOption = (value: string) =>
    setAnswers((prev) => ({ ...prev, [current.key]: value }));

  const handleSend = () => {
    const message = `Olá, Debora! Fiz o quiz no seu site. Segue meu perfil:
• Objetivo: ${answers.objetivo ?? "-"}
• Região: ${answers.regiao ?? "-"}
• Faixa de valor: ${answers.faixa ?? "-"}
Pode me indicar o melhor imóvel Tegra?`;
    openWhatsapp(WHATSAPP_PHONE, message);
    handleClose(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        {!done ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Encontre seu imóvel em 3 passos
              </DialogTitle>
              <DialogDescription>
                Passo {stepIndex + 1} de {steps.length} · respondendo você recebe uma indicação sob medida.
              </DialogDescription>
            </DialogHeader>

            <p className="pt-2 text-lg font-semibold text-foreground">{current.title}</p>

            <div className="grid gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => selectOption(opt.value)}
                  className={cn(
                    "flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all",
                    currentAnswer === opt.value
                      ? "border-accent bg-accent/10 text-foreground shadow-gold"
                      : "border-border bg-background hover:border-accent/50 hover:bg-accent/5",
                  )}
                >
                  {opt.label}
                  <span
                    className={cn(
                      "h-4 w-4 rounded-full border-2",
                      currentAnswer === opt.value ? "border-accent bg-accent" : "border-muted-foreground/40",
                    )}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <Button variant="ghost" size="sm" onClick={back} disabled={stepIndex === 0} className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
              <Button variant="gold" size="sm" onClick={next} disabled={!currentAnswer} className="gap-1">
                {isLast ? "Ver resultado" : "Próximo"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Pronto, a Debora vai te ajudar!</DialogTitle>
              <DialogDescription>
                Com base nas suas respostas, ela vai preparar a melhor indicação Tegra para você.
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-foreground">
              <p className="mb-2 font-semibold">Resumo do seu perfil:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Objetivo: {answers.objetivo}</li>
                <li>• Região: {answers.regiao}</li>
                <li>• Faixa: {answers.faixa}</li>
              </ul>
            </div>

            <Button variant="gold" size="lg" className="w-full gap-2" onClick={handleSend}>
              <Send className="h-4 w-4" />
              Enviar resumo no WhatsApp
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
