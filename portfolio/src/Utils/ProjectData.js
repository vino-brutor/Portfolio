// src/projectsData.js

const projectsData = [
  {
    id: "enquadra", 
    title: "ENQUADRA",
    subtitle: "Galeria de Estudos",
    tags: ["SWIFT", "SWIFTUI", "IOS", "PRODUTIVIDADE"],
    cardDescription: "Ferramenta essencial para estudantes. Organize fotos do quadro e slides instantaneamente por matéria, separando os estudos do rolo da câmera.",
    coverImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop",
    
    fullDescription: "Estudar fica muito mais fácil quando as notas estão organizadas. O Enquadra resolve o problema da bagunça no rolo de câmera do celular. O aplicativo permite capturar fotos do quadro, de slides ou de páginas de livros e organizá-las instantaneamente em pastas por disciplina. Focado na performance e na usabilidade através do SwiftUI, o app oferece busca rápida e uma interface sem distrações para otimizar o tempo de estudo.",
    media: [
      { type: "image", url: "https://ufsb.edu.br/residenciapedagogica/imagens/1-galeria-de-imagens-01/detail/3-imagem-3-titulo-com-ate-45-caracteres?tmpl=component&phocadownload=1", alt: "Organização de notas no celular" }
    ],
    team: [
      { name: "Vitor Bruno", role: "iOS Developer & Creator" }
    ],
    liveLink: "https://apps.apple.com/br/app/enquadra-galeria-de-estudos/id6752781110",
    repoLink: ""
  },
  {
    id: "runicorn",
    title: "RUNICORN",
    subtitle: "Endless Runner Game",
    tags: ["SWIFT", "SPRITEKIT", "GAME CENTER", "IOS"],
    cardDescription: "Um endless runner hipnotizante. Guie seu unicórnio por um túnel brilhante na Aurora Boreal, coletando estrelas e evitando obstáculos cósmicos.",
    coverImage: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop",
    
    fullDescription: "Runicorn é uma experiência imersiva desenvolvida com SpriteKit. O jogador é desafiado a sobreviver o máximo possível dentro de uma Aurora Boreal, desviando de fragmentos de gelo e asteroides. O jogo conta com controles fluidos, suporte opcional a giroscópio, feedback háptico e integração total para disputas de pontuação.",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop", alt: "Gameplay imersiva em neon" }
    ],
    team: [
      { name: "Vinicius Cadore Castro", role: "Developer" },
      { name: "Vitor Bruno", role: "Developer" }
    ],
    liveLink: "https://apps.apple.com/br/app/runicorn/id6760668892",
    repoLink: ""
  },
  {
    id: "dopamine-news",
    title: "DOPAMINE NEWS",
    subtitle: "O Seu Jornal Diário",
    tags: ["SWIFT", "SWIFTUI", "GAMIFICAÇÃO", "UI DESIGN"],
    cardDescription: "Um ritual diário simples que reúne jogos de palavras estilo Termo, leituras reflexivas e insights astrológicos em um só lugar.",
    coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop",
    
    fullDescription: "O Dopamine transforma curiosidade e diversão em um hábito diário satisfatório de cinco minutos. Ele oferece notícias curadas sem excesso de informações, um caça-palavras para atenção plena e o 'Termo Brasileiro', um desafio de vocabulário inspirado no Wordle. O app possui um layout limpo, com suporte perfeito aos modos claro e escuro.",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1585241936939-bf853c07e2c9?q=80&w=1200&auto=format&fit=crop", alt: "Jogos de palavras e notícias" }
    ],
    team: [], 
    liveLink: "https://apps.apple.com/br/app/dopamine-news/id6755773697",
    repoLink: ""
  },
  {
    id: "completeness",
    title: "COMPLETENESS",
    subtitle: "Rastreador de Hábitos",
    tags: ["SWIFT", "SWIFTUI", "HEALTH", "IOS"],
    cardDescription: "App para quem deseja viver com mais clareza. Registre hábitos, acompanhe sua rotina e celebre pequenas vitórias sem a pressão de métricas frias.",
    coverImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop",
    
    fullDescription: "Construir novos hábitos não precisa ser algo estressante. O Completeness foi desenhado para ser uma ferramenta de progresso real, no ritmo do usuário. Ele conta com lembretes motivadores, visualização de progresso semanal por meio de gráficos customizados e uma interface que encoraja o usuário a focar no que realmente importa.",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1507925922893-ec9f1cb2ce47?q=80&w=1200&auto=format&fit=crop", alt: "Gráficos de progresso semanal" }
    ],
    team: [
      { name: "Gustavo Ferreira Bassani", role: "Developer" },
      { name: "Vitor Bruno", role: "Developer" }
    ],
    liveLink: "https://apps.apple.com/br/app/completeness/id6752423274",
    repoLink: ""
  },
  {
    id: "food-swap",
    title: "FOOD SWAP",
    subtitle: "Gastronomia & Bebidas",
    tags: ["SWIFT", "SWIFTUI", "IOS", "ACADEMY"],
    cardDescription: "Apresentado com sucesso em evento na Tecnopuc, um aplicativo com foco em inovação e experiência no ramo de gastronomia.",
    coverImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop",
    
    fullDescription: "Desenvolvido como parte da jornada na Developer Academy e apresentado em evento na Tecnopuc, o Food Swap é um aplicativo desenhado para facilitar a vida do usuário dentro da categoria de gastronomia. O projeto aplicou conceitos sólidos de design de interfaces e arquitetura de software para o ecossistema iOS.",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1498837167922-41c543bd83ea?q=80&w=1200&auto=format&fit=crop", alt: "Food Swap Interface" }
    ],
    team: [
      { name: "Guilherme Rossoni", role: "Developer" },
      { name: "Vitor Bruno", role: "Developer" }
    ],
    liveLink: "https://apps.apple.com/br/app/food-swap/id6747597054",
    repoLink: ""
  }
];

export default projectsData;