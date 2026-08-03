# Plataforma Imobiliária — Debora Santiago

Landing page para captação de leads da corretora **Debora Santiago**, especialista em empreendimentos Tegra em São Paulo. Reúne catálogo de imóveis, quiz de qualificação e botões de contato direto via WhatsApp.

## O que é

Site de página única (single page) com:

- Catálogo de imóveis com filtro (investimento, família, prontos, na planta)
- Quiz de 3 passos para qualificar o visitante
- Formulário rápido no topo e modal de detalhes por imóvel
- Popup de saída (exit intent) com oferta de e-book
- Botão flutuante e demais CTAs, todos abrindo conversa no WhatsApp

## Tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [i18next](https://www.i18next.com/) (internacionalização)

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) e [pnpm](https://pnpm.io/).

```bash
# 1. Clone o repositório
git clone https://github.com/RafaellSantiagoMS/enter-PlataformaImobiliriaDeboraSantiago.git

# 2. Entre na pasta
cd enter-PlataformaImobiliriaDeboraSantiago

# 3. Instale as dependências
pnpm install

# 4. Suba o servidor de desenvolvimento
pnpm dev
```

Outros comandos úteis:

```bash
pnpm build:prod   # build de produção
pnpm preview      # visualiza o build localmente
pnpm lint         # checa o código com ESLint
```

## Configuração

O número de WhatsApp usado em todos os botões do site fica em um único lugar:

```
src/lib/whatsapp.ts
```

Para trocar o número, basta editar a constante `WHATSAPP_PHONE` nesse arquivo.

O catálogo de imóveis (cards, filtro e modal) é alimentado por:

```
src/data/properties.ts
```

Basta editar, adicionar ou remover itens desse arquivo para atualizar o site — sem precisar de backend.

## Estrutura do projeto

```
src/
  components/
    landing/     # Seções da página (Header, Hero, Footer, etc.)
    ui/          # Componentes de interface reutilizáveis (shadcn/ui)
  data/          # Catálogo de imóveis
  lib/           # Utilitários (ex: integração com WhatsApp)
  i18n/          # Configuração de idiomas
  pages/         # Páginas da aplicação
```

## Deploy

Este projeto está conectado ao [enter.pro](https://enter.pro). Alterações enviadas a este repositório são sincronizadas automaticamente com o workspace lá.

## Créditos

Este projeto foi desenvolvido com apoio de inteligências artificiais: a base do código foi gerada na plataforma [Enter.pro](https://enter.pro), e ajustes, limpeza e revisão foram feitos com o [Claude](https://claude.com), da Anthropic.
