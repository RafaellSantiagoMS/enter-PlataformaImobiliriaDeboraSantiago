import { MapPin, Maximize, BedDouble, Tag, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  onVerDetalhes: (property: Property) => void;
}

export const PropertyCard = ({ property, onVerDetalhes }: PropertyCardProps) => {
  return (
    <Card className="group flex flex-col overflow-hidden p-0 transition-all duration-300 hover:shadow-elegant">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={property.imagem}
          alt={`Planta — ${property.empreendimento}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge className="bg-secondary text-secondary-foreground shadow-sm">
            <MapPin className="mr-1 h-3 w-3" />
            {property.bairro}
          </Badge>
        </div>
        <div className="absolute right-3 top-3">
          <Badge
            variant="outline"
            className={
              property.status === "pronto"
                ? "border-accent bg-accent/15 text-accent-foreground"
                : "border-primary bg-primary/15 text-primary"
            }
          >
            {property.status === "pronto" ? "Pronto p/ morar" : "Na planta"}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">
            {property.empreendimento}
          </h3>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Maximize className="h-3.5 w-3.5" />
              {property.area}
            </span>
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" />
              {property.quartos}
            </span>
          </div>
        </div>

        <div className="mt-auto space-y-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Tag className="h-3.5 w-3.5" />
            <span className="line-through">{property.valorTabela}</span>
          </div>
          <p className="font-display text-xl font-bold text-primary">
            {property.valorPromocional}
          </p>
        </div>

        <Button variant="gold" className="w-full gap-2" onClick={() => onVerDetalhes(property)}>
          Ver detalhes
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
