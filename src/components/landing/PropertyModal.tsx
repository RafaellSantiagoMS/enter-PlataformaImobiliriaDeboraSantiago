import { MapPin, Maximize, BedDouble, CheckCircle2, Send, CalendarClock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/data/properties";
import { openWhatsapp, WHATSAPP_PHONE } from "@/lib/whatsapp";

interface PropertyModalProps {
  property: Property | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PropertyModal = ({ property, open, onOpenChange }: PropertyModalProps) => {
  if (!property) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 p-0">
        <div className="grid max-h-[85vh] overflow-y-auto md:grid-cols-2">
          <div className="relative bg-muted">
            <img
              src={property.imagem}
              alt={`Planta — ${property.empreendimento}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4">
              <Badge className="bg-secondary text-secondary-foreground shadow-md">
                <MapPin className="mr-1 h-3 w-3" />
                {property.bairro}
              </Badge>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-6 md:p-8">
            <DialogHeader className="space-y-2 text-left">
              <DialogTitle className="font-display text-2xl font-bold text-foreground">
                {property.empreendimento}
              </DialogTitle>
              <DialogDescription className="flex flex-wrap gap-x-4 gap-y-1 text-foreground/80">
                <span className="inline-flex items-center gap-1">
                  <Maximize className="h-4 w-4" />
                  {property.area}
                </span>
                <span className="inline-flex items-center gap-1">
                  <BedDouble className="h-4 w-4" />
                  {property.quartos}
                </span>
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground line-through">
                De {property.valorTabela}
              </p>
              <p className="font-display text-2xl font-bold text-primary">
                Por {property.valorPromocional}
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <CalendarClock className="h-3.5 w-3.5" />
                Campanha válida até {property.validoAte}
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-foreground">Benefícios</p>
              <ul className="space-y-2">
                {property.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-foreground">Unidades disponíveis</p>
              <div className="flex flex-wrap gap-2">
                {property.unidades.map((u) => (
                  <Badge key={u.number} variant="outline" className="border-accent/40 text-foreground">
                    {u.note ? `${u.note} · Unid. ${u.number}` : `Unid. ${u.number}`}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              variant="gold"
              size="lg"
              className="mt-auto w-full gap-2"
              onClick={() => {
                openWhatsapp(WHATSAPP_PHONE, property.mensagemWhatsapp);
                onOpenChange(false);
              }}
            >
              <Send className="h-4 w-4" />
              Falar sobre este imóvel no WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
