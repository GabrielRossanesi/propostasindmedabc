export const navItems = [
  { label: "Desafio", href: "#desafio" },
  { label: "Solução", href: "#solucao" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Investimento", href: "#investimento" },
];

export const challengeCards = [
  {
    icon: "messages",
    title: "Comunicação dispersa",
    text: "Notícias e informações do sindicato espalhadas sem um canal digital central e profissional.",
  },
  {
    icon: "userPlus",
    title: "Associação manual",
    text: "Processo de associação sem formulário digital, dependendo de contato direto.",
  },
  {
    icon: "shieldAlert",
    title: "Denúncias sem canal formal",
    text: "Sem espaço estruturado e sigiloso para denúncias dos médicos associados.",
  },
  {
    icon: "palette",
    title: "Identidade visual fragmentada",
    text: "Presença digital que não reflete a força institucional do sindicato.",
  },
  {
    icon: "newspaper",
    title: "Conteúdo estático",
    text: "Dificuldade para manter associados atualizados sobre campanha salarial, convenções e benefícios.",
  },
  {
    icon: "instagram",
    title: "Instagram desconectado do site",
    text: "Publicações nas redes sociais sem integração com o site oficial.",
  },
];

export const solutionHighlights = [
  "Site institucional completo com identidade visual do Sindmed ABC",
  "Canal de denúncias com opção de sigilo (anônima ou identificada)",
  "Formulário de associação digital, com envio direto por e-mail",
  "Painel administrativo para publicar notícias com texto, foto e vídeo",
  "Integração visual com posts do Instagram",
  "Totalmente responsivo (mobile e desktop)",
];

export const flowSteps = [
  {
    title: "Visitante acessa o site",
    text: "O médico ou visitante chega ao site institucional do Sindmed ABC por busca, redes sociais ou indicação.",
  },
  {
    title: "Conhece a entidade",
    text: "As seções Quem Somos e História apresentam a diretoria, a trajetória e a atuação do sindicato.",
  },
  {
    title: "Consulta as novidades",
    text: "Notícias, campanha salarial e benefícios dos associados ficam sempre atualizados e acessíveis.",
  },
  {
    title: "Tira dúvidas no FAQ",
    text: "A seção de Perguntas Frequentes responde às dúvidas mais comuns antes do primeiro contato.",
  },
  {
    title: "Preenche a associação",
    text: "O médico solicita a associação diretamente pelo site, sem precisar ligar ou ir até a sede.",
  },
  {
    title: "Sindicato recebe os dados",
    text: "As informações chegam por e-mail para a equipe, que dá andamento à associação.",
  },
  {
    title: "Registra uma denúncia",
    text: "Se necessário, o médico preenche o formulário de denúncia escolhendo se identifica ou permanece anônimo.",
  },
  {
    title: "Equipe publica novidades",
    text: "A administração do sindicato publica notícias, fotos e vídeos pelo painel, sem depender de desenvolvedor.",
  },
];

export const platformPanels = [
  {
    id: "publico",
    label: "Área Pública",
    eyebrow: "Site institucional",
    title: "Experiência completa para associados e visitantes conhecerem o sindicato, se associarem e acompanharem novidades.",
    features: [
      "Notícias e blog",
      "Quem somos",
      "FAQ",
      "Benefícios dos associados",
      "Campanha salarial",
      "Canal de denúncias",
      "Como se associar",
    ],
  },
  {
    id: "admin",
    label: "Painel Administrativo",
    eyebrow: "Gestão de conteúdo",
    title: "Equipe do sindicato publica notícias, fotos e vídeos sem depender de desenvolvedor.",
    features: [
      "Publicação de notícias",
      "Upload de fotos e vídeos",
      "Gestão de PDFs (convenções)",
      "Atualização de conteúdo institucional",
    ],
  },
];

export const featureGroups = [
  {
    title: "Institucional",
    icon: "landmark",
    items: [
      "Quem Somos com fotos e nomes da Diretoria Executiva",
      "História do Sindmed",
      "Perguntas Frequentes em formato pergunta e resposta (abre/fecha)",
      "Benefícios dos Associados, incluindo convênios",
    ],
  },
  {
    title: "Comunicação",
    icon: "newspaper",
    items: [
      "Notícias com texto, foto e vídeo",
      "Campanha salarial com textos atualizados e PDFs das convenções em formato de passar páginas",
      "Miniaturas de posts do Instagram na home, clicáveis, direcionando ao post original",
    ],
  },
  {
    title: "Associação e Contato",
    icon: "userPlus",
    items: [
      "Formulário de associação",
      "Canal de denúncias (anônimo ou identificado)",
      "Fale Conosco com dados institucionais (endereço, telefone, e-mail) e formulário de contato",
      "Botão fixo de WhatsApp",
    ],
  },
  {
    title: "Entrega",
    icon: "rocket",
    items: ["Layout responsivo", "Publicação em domínio", "Treinamento básico", "Suporte inicial"],
  },
];

export const securityCards = [
  {
    title: "Sigilo nas denúncias",
    text: "O médico associado escolhe se identifica ou permanece anônimo ao registrar uma denúncia.",
  },
  {
    title: "Dados protegidos no formulário de associação",
    text: "As informações preenchidas seguem direto para o e-mail do sindicato, sem exposição pública.",
  },
  {
    title: "Conteúdo sob controle da diretoria",
    text: "Apenas a equipe autorizada publica notícias e atualizações pelo painel administrativo.",
  },
];

export const implementationPhases = [
  {
    phase: "Fase 1",
    title: "Mapeamento e identidade visual",
    bullets: ["Levantamento de conteúdo", "Identidade visual do Sindmed", "Arquitetura das seções", "Aprovação do layout"],
  },
  {
    phase: "Fase 2",
    title: "Estrutura das páginas institucionais",
    bullets: ["Quem Somos e História", "Benefícios e campanha salarial", "Perguntas Frequentes", "Fale Conosco"],
  },
  {
    phase: "Fase 3",
    title: "Formulários de associação e denúncias",
    bullets: ["Formulário de associação", "Canal de denúncias com sigilo", "Envio automático por e-mail", "Botão fixo de WhatsApp"],
  },
  {
    phase: "Fase 4",
    title: "Painel administrativo de notícias",
    bullets: ["Publicação de notícias", "Upload de fotos e vídeos", "Gestão de PDFs das convenções", "Integração com Instagram"],
  },
  {
    phase: "Fase 5",
    title: "Testes, publicação e treinamento",
    bullets: ["Testes em mobile e desktop", "Ajustes finais", "Publicação em domínio", "Treinamento e suporte inicial"],
  },
];

export const investmentIncludes = [
  "Site institucional completo com identidade visual do Sindmed ABC",
  "Quem Somos com Diretoria Executiva e História do sindicato",
  "Notícias e blog com texto, foto e vídeo",
  "Campanha salarial com PDFs em formato de passar páginas",
  "Benefícios dos associados e Perguntas Frequentes",
  "Formulário de associação com envio por e-mail",
  "Canal de denúncias com opção de sigilo",
  "Fale Conosco e botão fixo de WhatsApp",
  "Integração visual com posts do Instagram",
  "Painel administrativo para publicação de conteúdo",
  "Layout responsivo para mobile e desktop",
  "Testes, publicação em domínio e suporte inicial",
];

export const maintenanceItems = [
  "Monitoramento básico",
  "Correções técnicas",
  "Suporte operacional",
  "Pequenos ajustes de conteúdo",
  "Atualizações preventivas",
  "Acompanhamento de estabilidade",
  "Apoio em dúvidas de uso do painel",
];

export const optionalItems = [
  { icon: "credit", label: "Pagamento online da associação via Pix ou cartão" },
  { icon: "key", label: "Área exclusiva do associado com login" },
  { icon: "dashboard", label: "Sistema de gestão interna do sindicato" },
  { icon: "messages", label: "Aplicativo mobile para associados" },
  { icon: "calendar", label: "Agenda de eventos e assembleias" },
  { icon: "mail", label: "Newsletter automática para associados" },
  { icon: "database", label: "Área de documentos e convenções por categoria" },
  { icon: "chart", label: "Relatórios de acesso e engajamento" },
  { icon: "globe", label: "Versão do site em outros idiomas" },
  { icon: "messages", label: "Atendimento automatizado por WhatsApp" },
];

export const moralesPoints = [
  "Desenvolvimento sob medida",
  "Visão de negócio",
  "Interface profissional",
  "Processo organizado",
  "Solução escalável",
  "Suporte próximo",
];
