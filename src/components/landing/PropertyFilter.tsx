import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  filterProperties,
  properties,
  propertyFilterOptions,
  type Property,
  type PropertyFilterId,
} from "@/data/properties";
import { PropertyCard } from "./PropertyCard";
import { PropertyModal } from "./PropertyModal";

export const PropertyFilter = () => {
  const [filter, setFilter] = useState<PropertyFilterId>("todos");
  const [selected, setSelected] = useState<Property | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const visible = filterProperties(properties, filter);

  const handleVerDetalhes = (property: Property) => {
    setSelected(property);
    setModalOpen(true);
  };

  return (
    <section id="imoveis" className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Catálogo Tegra
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Imóveis em destaque
          </h2>
          <p className="mt-3 text-muted-foreground">
            Encontre o imóvel ideal de acordo com o seu perfil.
          </p>
        </div>

        <Tabs value={filter} onValueChange={(v) => setFilter(v as PropertyFilterId)} className="w-full">
          <div className="flex justify-center">
            <TabsList className="h-auto flex-wrap justify-center gap-1 bg-muted/60 p-1.5">
              {propertyFilterOptions.map((opt) => (
                <TabsTrigger
                  key={opt.id}
                  value={opt.id}
                  className="rounded-md px-3 py-2 text-xs data-[state=active]:bg-accent data-[state=active]:text-accent-foreground md:text-sm"
                >
                  {opt.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((property) => (
            <PropertyCard key={property.id} property={property} onVerDetalhes={handleVerDetalhes} />
          ))}
        </div>
      </div>

      <PropertyModal property={selected} open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};
