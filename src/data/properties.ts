/**
 * Catálogo de imóveis Tegra — Debora Santiago.
 *
 * Este arquivo é o "CMS" da landing page: edite/adicione objetos abaixo para
 * atualizar os cards, o filtro e o modal automaticamente. Sem backend.
 */

export type PropertyCategory = "investimento" | "familia";
export type PropertyStatus = "planta" | "pronto";

export interface PropertyUnit {
  number: string;
  note?: string;
}

export interface Property {
  id: string;
  empreendimento: string;
  bairro: string;
  categoria: PropertyCategory;
  status: PropertyStatus;
  area: string;
  quartos: string;
  unidades: PropertyUnit[];
  valorTabela: string;
  valorPromocional: string;
  validoAte: string;
  imagem: string;
  beneficios: string[];
  mensagemWhatsapp: string;
}

export const properties: Property[] = [
  {
    id: "bem-moema",
    empreendimento: "Bem Moema",
    bairro: "Moema, São Paulo",
    categoria: "familia",
    status: "pronto",
    area: "80,15m²",
    quartos: "2 suítes + 1 vaga",
    unidades: [
      { number: "185" },
      { number: "195" },
      { number: "202" },
    ],
    valorTabela: "R$ 1.811.760",
    valorPromocional: "R$ 1.732.659",
    validoAte: "31/07/2026",
    imagem: "https://cdn.enter.pro/resources/uid_100400500/515bc1ce-6a9c-43.jpeg",
    beneficios: [
      "Pronto para morar — entrega das chaves imediata",
      "2 suítes + 1 vaga de garagem coberta",
      "Living integrado e terraços amplos",
      "Localização nobre em Moema, próximo a parques e shoppings",
    ],
    mensagemWhatsapp:
      "Olá! Estava navegando no seu site e gostei do apartamento de 80m² no Bem Moema. Pode me enviar mais detalhes?",
  },
  {
    id: "aria-higienopolis-30",
    empreendimento: "Ária Higienópolis — Studio 30m²",
    bairro: "Higienópolis, São Paulo",
    categoria: "investimento",
    status: "planta",
    area: "30m²",
    quartos: "Studio · 1 dorm.",
    unidades: [
      { number: "1704" },
      { number: "1804" },
      { number: "1904" },
      { number: "1712" },
    ],
    valorTabela: "R$ 503.338",
    valorPromocional: "R$ 481.490",
    validoAte: "31/07/2026",
    imagem: "https://cdn.enter.pro/resources/uid_100400500/9aac41a6-b098-44.jpeg",
    beneficios: [
      "Lançamento em obras — excelente para investimento e locação",
      "Studio compacto com alto potencial de valorização",
      "Higienópolis: bairro clássico, metrô próximo",
      "Lazer completo e espaços funcionais",
    ],
    mensagemWhatsapp:
      "Olá! Estava navegando no seu site e gostei do Ária Higienópolis Studio 30m² em Higienópolis. Pode me enviar mais detalhes?",
  },
  {
    id: "aria-higienopolis-53",
    empreendimento: "Ária Higienópolis — 53m²",
    bairro: "Higienópolis, São Paulo",
    categoria: "familia",
    status: "planta",
    area: "53m²",
    quartos: "1 suíte + 1 vaga",
    unidades: [
      { number: "1014" },
      { number: "1114" },
      { number: "1214" },
    ],
    valorTabela: "R$ 954.295",
    valorPromocional: "R$ 912.712",
    validoAte: "31/07/2026",
    imagem: "https://cdn.enter.pro/resources/uid_100400500/757f151b-1f6f-42.jpeg",
    beneficios: [
      "1 suíte + 1 vaga de garagem — ideal para morar ou investir",
      "Planta otimizada com 53m² de alto padrão",
      "Higienópolis: localização clássica e valorizada",
      "Arquitetura moderna e sofisticada",
    ],
    mensagemWhatsapp:
      "Olá! Estava navegando no seu site e gostei do Ária Higienópolis 53m² em Higienópolis. Pode me enviar mais detalhes?",
  },
];

export type PropertyFilterId =
  | "todos"
  | "investimento"
  | "familia"
  | "pronto"
  | "planta";

export interface PropertyFilterOption {
  id: PropertyFilterId;
  label: string;
}

export const propertyFilterOptions: PropertyFilterOption[] = [
  { id: "todos", label: "Todos" },
  { id: "investimento", label: "Studios · Investimento" },
  { id: "familia", label: "2-3 Suítes · Família" },
  { id: "pronto", label: "Prontos para Morar" },
  { id: "planta", label: "Na Planta" },
];

export function filterProperties(
  list: Property[],
  filter: PropertyFilterId,
): Property[] {
  switch (filter) {
    case "investimento":
      return list.filter((p) => p.categoria === "investimento");
    case "familia":
      return list.filter((p) => p.categoria === "familia");
    case "pronto":
      return list.filter((p) => p.status === "pronto");
    case "planta":
      return list.filter((p) => p.status === "planta");
    case "todos":
    default:
      return list;
  }
}
