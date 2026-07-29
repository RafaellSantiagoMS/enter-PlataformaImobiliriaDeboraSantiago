# Landing Page — Debora Santiago (Corretora Tegra Vendas)

## Contexto
O projeto é o template padrão (Index.tsx só com hero genérico). O pedido é construir uma landing page completa de captura de leads para a corretora Debora Santiago, especialista em empreendimentos Tegra (alto padrão, SP), com 6 seções, catálogo de imóveis dinâmico (dados mockados no código, fáceis de editar), quiz de qualificação, pop-up de saída, e todos os CTAs apontando para WhatsApp com mensagem pré-preenchida por imóvel.

Não há necessidade de Enter Cloud/backend: não haverá persistência de leads em banco nem autenticação — o "CMS" pedido pelo usuário será substituído por um arquivo de dados TypeScript central (`src/data/properties.ts`) fácil de editar manualmente, e a captação de leads será 100% via redirecionamento para WhatsApp (`wa.me`) com texto pré-formatado. O formulário do hero também apenas monta o link do WhatsApp com os dados preenchidos (sem salvar em banco), já que não foi pedido banco de dados e mantém a solução simples/estática. Pixel do Meta/Google Ads: deixar apenas os placeholders/comentários prontos (IDs virão depois, sem serviço de backend necessário, apenas scripts no `index.html`).

WhatsApp definido: **+55 11 97626-4984** (formato p/ wa.me: `5511976264984`).

## Design System (index.css + tailwind.config.ts)
Adicionar tokens semânticos (paleta "Tegra Premium"):
- `--primary`: Verde Esmeralda Nobre (`#0F3227` → HSL)
- `--secondary` / superfícies escuras: Azul Marinho/Grafite (`#112131`)
- `--accent`: Dourado Champagne (`#C8A261`)
- `--background`: Off-White (`#F9F8F5`)
- Cores de foreground calculadas para contraste AA (branco sobre verde/marinho, marinho escuro sobre dourado/off-white)
- Fontes: `--font-display: 'Playfair Display'` (títulos), `--font-sans: 'Plus Jakarta Sans'` (corpo) — carregadas via Google Fonts `<link>` no `index.html`, referenciadas em `tailwind.config.ts` (`fontFamily.display`, `fontFamily.sans`)
- Gradientes/sombras: `--gradient-hero` (marinho→verde), `--shadow-gold` (glow dourado sutil para CTAs)
- Variante de botão nova em `button.tsx`: `variant="gold"` (dourado champagne, texto marinho, hover glow) para todos os CTAs de WhatsApp

## Estrutura de Arquivos
```
src/
  data/
    properties.ts        # array tipado de imóveis (Bem Moema, Ária 30m², Ária 53m²) — fácil de estender
  lib/
    whatsapp.ts           # helper buildWhatsappLink(phone, message)
  components/
    landing/
      Header.tsx           # logo/nome + CRECI + botão WhatsApp fixo
      Hero.tsx              # Seção 1: título, subtítulo, foto, mini-form
      CampaignBanner.tsx    # Seção 2: destaque "6 meses condomínio + IPTU grátis"
      PropertyFilter.tsx    # Seção 3: abas de filtro (estado local)
      PropertyCard.tsx      # card individual
      PropertyModal.tsx     # modal com detalhes + planta + CTA WhatsApp contextual
      WhyChooseMe.tsx       # Seção 4: diferenciais
      Testimonials.tsx      # Seção 5: prova social (dados ilustrativos)
      Footer.tsx            # Seção 6: institucional + CRECI + WhatsApp
      QuizModal.tsx          # micro-quiz 3 passos -> WhatsApp com resumo
      ExitIntentPopup.tsx   # popup de saída (desktop: mouseleave; mobile: scroll ao final)
      FloatingWhatsApp.tsx  # botão flutuante fixo mobile/desktop
  pages/
    Index.tsx              # compõe todas as seções acima
```

Usar as 4 imagens fornecidas diretamente pelas URLs públicas do CDN:
- Foto da Debora: `https://cdn.enter.pro/resources/uid_100400500/401af782-bb1d-47.jpeg`
- Card/planta Bem Moema: `https://cdn.enter.pro/resources/uid_100400500/5bbdca47-8941-46.jpeg`
- Card/planta Ária 30m²: `https://cdn.enter.pro/resources/uid_100400500/ac1471b5-d5af-40.jpeg`
- Card/planta Ária 53m²: `https://cdn.enter.pro/resources/uid_100400500/3027d8b9-e8af-41.jpeg`

## Dados dos Imóveis (`src/data/properties.ts`)
Cada imóvel: `id, empreendimento, bairro, categoria ("investimento"|"familia"), status ("planta"|"pronto"), area, quartos, unidades[], valorTabela, valorPromocional, validoAte, imagem, beneficios[], mensagemWhatsapp`.

- **Bem Moema**: 80,15m², 2 suítes + 1 vaga, Moema, pronto para morar, categoria família, R$1.811.760 → R$1.732.659, unidades 185/195/202
- **Ária Higienópolis 30m²**: studio 1 dorm, Higienópolis, na planta (lançamento/em obras — tratado como "planta" pois é foco investimento), categoria investimento, R$503.338 → R$481.490, unidades 1704/1804/1904/1712
- **Ária Higienópolis 53m²**: 1 suíte + 1 vaga, Higienópolis, categoria família/misto, R$954.295 → R$912.712, unidades 1014/1114/1214

Filtro por abas: Todos / Studios-Investimento / 2-3 Suítes-Família / Prontos para Morar / Na Planta — filtragem client-side simples por `categoria`/`status`.

## Seções detalhadas

**1. Header**: nome "Debora Santiago", subtítulo "Corretora Tegra Vendas · CRECI 93905", botão WhatsApp.

**2. Hero**: H1 + subtítulo do briefing, foto redonda da Debora, formulário (Nome, WhatsApp, Select "Morar/Investir") que ao submeter monta a mensagem e abre `wa.me` (sem POST/backend).

**3. CampaignBanner**: card de urgência dourado "6 Meses de Condomínio + IPTU Grátis · Válido até 31/07/2026".

**4. PropertyFilter + Cards**: abas + grid de `PropertyCard` (imagem, badge bairro, metragem, preço de/por, botão "Ver Detalhes" abre `PropertyModal`).

**5. PropertyModal**: imagem grande da planta, lista de benefícios, unidades disponíveis, preços, botão "Falar sobre este imóvel no WhatsApp" com mensagem contextual (`Olá! Estava navegando no seu site e gostei do [nome] ([metragem]) no [bairro]. Pode me enviar mais detalhes?`).

**6. WhyChooseMe**: 4 diferenciais em ícones (lucide-react: `HeartHandshake`, `Sparkles`, `ShieldCheck`, `BadgeCheck`), CRECI visível.

**7. Testimonials**: 3 cards ilustrativos com nome fictício + texto (marcados claramente como exemplo, fácil substituição depois — vou usar iniciais/nomes genéricos e avisar o usuário no resumo).

**8. QuizModal**: acionado por botão destacado no Hero "Encontre seu Imóvel em 3 Passos"; 3 perguntas com estado local (`objetivo`, `regiao`, `faixa`); resultado monta resumo e abre WhatsApp.

**9. ExitIntentPopup**: captura de e-book. Desktop: listener `mouseleave` (`clientY <= 0`). Mobile: listener de `scroll` ao atingir fim da página. Mostra 1x por sessão (`sessionStorage`). Form simples (WhatsApp) → monta link `wa.me` com pedido do e-book.

**10. FloatingWhatsApp**: botão fixo inferior-direito, ícone `MessageCircle` do lucide-react.

**11. Footer**: links, aviso legal Tegra (texto padrão de imagens meramente ilustrativas / sujeito a disponibilidade), CRECI, WhatsApp, telefone clicável.

## Meta/Google Ads
No `index.html`, adicionar comentários `<!-- TODO: Meta Pixel -->` e `<!-- TODO: Google Ads Tag -->` prontos para o usuário colar os IDs depois. Todos os botões de WhatsApp compartilham uma função central `buildWhatsappLink` em `src/lib/whatsapp.ts`, o que facilita futuramente disparar eventos de conversão (`fbq('track', 'Contact')` / `gtag('event', ...)`) em um único lugar quando os IDs estiverem disponíveis — deixar comentário indicando esse ponto de extensão dentro do helper.

## Implementation checklist
- [ ] Atualizar `index.css`: novos tokens de cor (primary verde, secondary marinho, accent dourado, background off-white) em HSL, gradientes e sombras customizadas
- [ ] Atualizar `tailwind.config.ts`: `fontFamily.display` (Playfair Display) e `fontFamily.sans` (Plus Jakarta Sans)
- [ ] Adicionar `<link>` do Google Fonts (Playfair Display + Plus Jakarta Sans) e placeholders comentados de Meta Pixel/Google Ads no `index.html`
- [ ] Adicionar variante `gold` em `src/components/ui/button.tsx`
- [ ] Criar `src/lib/whatsapp.ts` com `buildWhatsappLink(phone, message)` e ponto de extensão comentado para tracking de conversão
- [ ] Criar `src/data/properties.ts` com os 3 imóveis tipados (Bem Moema, Ária 30m², Ária 53m²)
- [ ] Criar `Header.tsx` com nome, CRECI e CTA WhatsApp
- [ ] Criar `Hero.tsx` com H1/subtítulo, foto da Debora, formulário rápido e botão do quiz
- [ ] Criar `QuizModal.tsx` com fluxo de 3 perguntas e envio para WhatsApp
- [ ] Criar `CampaignBanner.tsx` com destaque de urgência
- [ ] Criar `PropertyFilter.tsx` + `PropertyCard.tsx` com filtragem client-side por categoria/status
- [ ] Criar `PropertyModal.tsx` com detalhes, imagem, unidades e CTA contextual
- [ ] Criar `WhyChooseMe.tsx` com 4 diferenciais e CRECI
- [ ] Criar `Testimonials.tsx` com 3 depoimentos ilustrativos (avisar que são exemplos)
- [ ] Criar `ExitIntentPopup.tsx` com detecção desktop (mouseleave) e mobile (scroll fim) + `sessionStorage` para exibir 1x
- [ ] Criar `FloatingWhatsApp.tsx` fixo
- [ ] Criar `Footer.tsx` institucional com aviso legal Tegra e CRECI
- [ ] Reescrever `src/pages/Index.tsx` compondo todas as seções na ordem do briefing
- [ ] Garantir responsividade mobile em todas as seções (grid → coluna única, textos escaláveis)
- [ ] Remover strings de i18n do template padrão não utilizadas (`home.hero.*`) já que a página passa a ser conteúdo fixo em PT-BR

## Verification checklist
- [ ] Build/lint do projeto passam sem erros
- [ ] Todos os botões de WhatsApp abrem `https://wa.me/5511976264984?text=...` com mensagem correta e URL-encoded para cada contexto (hero, card, modal, quiz, popup, footer, flutuante)
- [ ] Filtro de imóveis: cada aba mostra o subconjunto correto (Todos = 3, Studios/Investimento = 1, Família = 2, Prontos = 1, Na Planta = 2)
- [ ] Modal abre com imagem/dados corretos do imóvel clicado e fecha corretamente
- [ ] Quiz percorre as 3 etapas e gera mensagem de resumo coerente no WhatsApp
- [ ] Popup de saída aparece apenas 1x por sessão e não interfere na navegação normal
- [ ] Contraste de texto verificado em fundos verde/marinho/dourado/off-white (AA)
- [ ] Layout responsivo verificado via `website_screenshot` em `http://localhost:3000` (desktop e simulando largura mobile)
