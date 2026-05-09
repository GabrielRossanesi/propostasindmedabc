export const navItems = [
  { label: "Desafio", href: "#desafio" },
  { label: "Solução", href: "#solucao" },
  { label: "Fluxo", href: "#fluxo" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Investimento", href: "#investimento" },
];

export const challengeCards = [
  {
    icon: "messages",
    title: "Pedidos espalhados",
    text: "Conversas, e-mails e planilhas geram versões conflitantes.",
  },
  {
    icon: "lock",
    title: "Acesso sem controle",
    text: "Nem sempre fica claro quem pode comprar ou quais itens são autorizados.",
  },
  {
    icon: "package",
    title: "Produção em risco",
    text: "Pedidos podem avançar sem aprovação formal ou validação financeira.",
  },
  {
    icon: "credit",
    title: "Pagamento desconectado",
    text: "Cobrança e aprovação ficam separadas, abrindo espaço para falhas.",
  },
  {
    icon: "history",
    title: "Histórico fragmentado",
    text: "A rastreabilidade se perde entre solicitação, aprovação e produção.",
  },
  {
    icon: "users",
    title: "Múltiplas franquias",
    text: "A Bloom precisa manter padrão e velocidade em várias unidades.",
  },
];

export const solutionHighlights = [
  "Ambiente fechado com login e senha",
  "Catálogo exclusivo para franquias",
  "Aprovação gerencial antes do pagamento",
  "Pagamento liberado somente após aprovação",
  "Produção liberada somente após pagamento confirmado",
  "Histórico centralizado",
];

export const flowSteps = [
  {
    title: "Bloom cadastra os produtos",
    text: "A Bloom organiza os brindes disponíveis, preços, descrições e regras do catálogo.",
  },
  {
    title: "Franquia acessa o catálogo",
    text: "Cada unidade entra no portal privado com login e visualiza apenas produtos autorizados.",
  },
  {
    title: "Franquia monta o pedido",
    text: "A unidade seleciona itens, quantidades e informações necessárias para personalização.",
  },
  {
    title: "Gerente geral aprova",
    text: "O responsável da marca revisa, aprova, reprova ou solicita ajustes no pedido.",
  },
  {
    title: "Pagamento é liberado",
    text: "Depois da aprovação, a plataforma destrava o meio de pagamento para a franquia.",
  },
  {
    title: "Pagamento é confirmado",
    text: "A confirmação financeira acontece automaticamente por integração com o gateway.",
  },
  {
    title: "Bloom inicia a produção",
    text: "Somente pedidos aprovados e pagos ficam autorizados para entrar em produção.",
  },
  {
    title: "Pedido é acompanhado",
    text: "A Bloom atualiza o status e a franquia acompanha o andamento até a conclusão.",
  },
];

export const platformPanels = [
  {
    id: "bloom",
    label: "Painel Bloom",
    eyebrow: "Operação central",
    title: "Visão de pedidos aprovados, pagos e prontos para produção.",
    stats: [
      { label: "Pedidos pagos", value: "18" },
      { label: "Em produção", value: "07" },
      { label: "Franquias ativas", value: "42" },
    ],
    features: ["Cadastro de produtos", "Status de produção", "Histórico", "Pedidos pagos"],
  },
  {
    id: "franchise",
    label: "Área da Franquia",
    eyebrow: "Compra privada",
    title: "Catálogo fechado, carrinho e acompanhamento em uma experiência simples.",
    stats: [
      { label: "Itens no carrinho", value: "12" },
      { label: "Pedido atual", value: "R$ 4,8k" },
      { label: "Status", value: "Aprovado" },
    ],
    features: ["Catálogo fechado", "Carrinho", "Pagamento após aprovação", "Acompanhamento"],
  },
  {
    id: "manager",
    label: "Gerente Geral",
    eyebrow: "Aprovação da marca",
    title: "Pedidos pendentes, decisões rápidas e histórico geral da rede.",
    stats: [
      { label: "Pendentes", value: "05" },
      { label: "Aprovados", value: "31" },
      { label: "Ajustes", value: "02" },
    ],
    features: ["Aprovar/reprovar", "Solicitar ajuste", "Pedidos pendentes", "Histórico da rede"],
  },
];

export const orderStatuses = [
  "Aguardando aprovação",
  "Aprovado — aguardando pagamento",
  "Pagamento aprovado",
  "Pedido recebido pela Bloom",
  "Em produção",
  "Produção finalizada",
  "Enviado",
  "Concluído",
  "Reprovado",
  "Cancelado",
];

export const featureGroups = [
  {
    title: "Acesso e usuários",
    icon: "key",
    items: ["Login seguro", "Gestão de usuários", "Gestão de franquias", "Perfis de acesso"],
  },
  {
    title: "Catálogo e pedidos",
    icon: "cart",
    items: ["Cadastro de produtos pela Bloom", "Catálogo privado", "Carrinho", "Histórico de pedidos"],
  },
  {
    title: "Aprovação e pagamento",
    icon: "payment",
    items: [
      "Aprovação gerencial",
      "Liberação de pagamento após aprovação",
      "Integração com meio de pagamento",
      "Confirmação automática de pagamento",
    ],
  },
  {
    title: "Gestão operacional",
    icon: "dashboard",
    items: ["Painel Bloom", "Painel Gerente Geral", "Área da Franquia", "Atualização de status", "Notificações por e-mail"],
  },
  {
    title: "Entrega",
    icon: "rocket",
    items: ["Layout responsivo", "Publicação em domínio/subdomínio", "Treinamento básico", "Suporte inicial"],
  },
];

export const securityCards = [
  {
    title: "Pagamento só libera após aprovação",
    text: "A franquia não paga antes da validação do gerente geral da marca.",
  },
  {
    title: "Produção só inicia após pagamento confirmado",
    text: "A Bloom evita produzir pedidos sem confirmação financeira.",
  },
  {
    title: "Histórico centralizado para auditoria",
    text: "Cada etapa fica registrada para consulta e rastreabilidade.",
  },
];

export const implementationPhases = [
  {
    phase: "Fase 1",
    title: "Mapeamento e arquitetura",
    bullets: ["Fluxo operacional", "Perfis de acesso", "Status do pedido", "Gateway de pagamento"],
  },
  {
    phase: "Fase 2",
    title: "Base da plataforma",
    bullets: ["Login", "Usuários", "Franquias", "Produtos e catálogo"],
  },
  {
    phase: "Fase 3",
    title: "Pedido, aprovação e pagamento",
    bullets: ["Carrinho", "Aprovação", "Pagamento", "Confirmação automática"],
  },
  {
    phase: "Fase 4",
    title: "Gestão operacional dos pedidos",
    bullets: ["Painel Bloom", "Status", "Histórico", "Notificações"],
  },
  {
    phase: "Fase 5",
    title: "Testes, publicação e treinamento",
    bullets: ["Testes completos", "Ajustes finais", "Publicação", "Suporte inicial"],
  },
];

export const investmentIncludes = [
  "Plataforma fechada com perfis de acesso",
  "Catálogo privado e carrinho",
  "Aprovação gerencial antes do pagamento",
  "Integração com meio de pagamento",
  "Confirmação automática de pagamento",
  "Painéis Bloom, gerente geral e franquia",
  "Testes, publicação e suporte inicial",
];

export const maintenanceItems = [
  "Monitoramento básico",
  "Correções técnicas",
  "Suporte operacional",
  "Pequenos ajustes evolutivos",
  "Atualizações preventivas",
  "Acompanhamento de estabilidade",
  "Apoio em dúvidas de uso",
];

export const optionalItems = [
  { icon: "receipt", label: "Emissão automática de nota fiscal" },
  { icon: "database", label: "Integração com ERP" },
  { icon: "boxes", label: "Controle avançado de estoque" },
  { icon: "chart", label: "Relatórios financeiros avançados" },
  { icon: "layers", label: "Aprovação por múltiplos níveis" },
  { icon: "messages", label: "WhatsApp automático" },
  { icon: "tags", label: "Cupons ou regras comerciais" },
  { icon: "upload", label: "Upload de arte personalizada" },
  { icon: "calendar", label: "Campanhas por data comemorativa" },
  { icon: "dashboard", label: "Dashboard analítico avançado" },
];

export const moralesPoints = [
  "Desenvolvimento sob medida",
  "Visão de negócio",
  "Interface profissional",
  "Processo organizado",
  "Solução escalável",
  "Suporte próximo",
];
