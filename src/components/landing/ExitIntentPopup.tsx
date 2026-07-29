import { useEffect, useState } from "react";
import { BookOpen, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { openWhatsapp, WHATSAPP_PHONE } from "@/lib/whatsapp";

const STORAGE_KEY = "tegra_exit_popup_shown";
const SCROLL_THRESHOLD = 120;

export const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
      removeListeners();
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const total = document.documentElement.scrollHeight;
      if (total - (innerHeight + scrollY) <= SCROLL_THRESHOLD) trigger();
    };

    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (isDesktop) {
      document.addEventListener("mouseleave", handleMouseLeave);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    function removeListeners() {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    }

    return removeListeners;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, Debora! Vi no seu site o e-book com as plantas dos lançamentos Tegra e quero receber em PDF. Meu WhatsApp: ${whatsapp || "(whatsapp)"}.`;
    openWhatsapp(WHATSAPP_PHONE, message);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <BookOpen className="h-7 w-7 text-accent" />
          </div>
          <DialogTitle className="font-display text-2xl font-bold">
            E-book com as plantas dos lançamentos Tegra
          </DialogTitle>
          <DialogDescription className="max-w-sm">
            Quer receber o e-book completo com as plantas dos lançamentos Tegra em PDF?
            Deixe seu WhatsApp e envio para você.
          </DialogDescription>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <div className="grid gap-1.5 text-left">
            <Label htmlFor="popup-whatsapp" className="text-foreground">Seu WhatsApp</Label>
            <Input
              id="popup-whatsapp"
              type="tel"
              placeholder="(11) 9 9999-9999"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>
          <Button type="submit" variant="gold" size="lg" className="w-full gap-2">
            <Send className="h-4 w-4" />
            Quero receber o e-book
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
