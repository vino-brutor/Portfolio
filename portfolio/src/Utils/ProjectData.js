import runicornCover from '../assets/covers/runicornIcon.svg'
import enquadraCover from '../assets/covers/enquadraCover.svg'
import dopamineCover from '../assets/covers/dopamineCover.svg'
import completenessCover from '../assets/covers/completenessCover.svg'
import foodSwapCover from '../assets/covers/foodSwapCover.svg'
import enquadra1 from '../assets/enquadra/enquadra1.jpg'
import enquadra2 from '../assets/enquadra/enquadra2.svg'
import enquadra3 from '../assets/enquadra/enquadra3.svg'
import enquadra4 from '../assets/enquadra/enquadra4.svg'
import enquadra5 from '../assets/enquadra/enquadra5.svg'
import runicorn1 from '../assets/runicorn/runicorn1.svg'
import runicorn2 from '../assets/runicorn/runicorn2.svg'
import runicorn3 from '../assets/runicorn/runicorn3.svg'
import runicorn4 from '../assets/runicorn/runicorn4.svg'
import dopamine1 from '../assets/dopamine/dopamine1.svg'
import dopamine2 from '../assets/dopamine/dopamine2.svg'
import dopamine3 from '../assets/dopamine/dopamine3.svg'
import dopamine4 from '../assets/dopamine/dopamine4.svg'
import dopamine5 from '../assets/dopamine/dopamine5.svg'
import dopamine9 from '../assets/dopamine/dopamine9.svg'
import dopamine7 from '../assets/dopamine/dopamine7.svg'
import dopamine8 from '../assets/dopamine/dopamine8.svg'
import completeness2 from '../assets/completeness/completness2.svg' 
import completeness3 from '../assets/completeness/completness3.svg'
import completeness4 from '../assets/completeness/completness4.svg'
import completeness5 from '../assets/completeness/completness5.svg'
import completeness6 from '../assets/completeness/completness6.svg'
import completeness7 from '../assets/completeness/completness7.svg'
import completeness8 from '../assets/completeness/completness8.svg'
import foodSwap1 from '../assets/foodswap/foodswap1.PNG'
import foodSwap2 from '../assets/foodswap/foodswap2.PNG'
import foodSwap3 from '../assets/foodswap/foodswap3.PNG'
import foodSwap4 from '../assets/foodswap/foodswap4.PNG'
import foodSwap5 from '../assets/foodswap/foodswap5.PNG'
import foodSwap6 from '../assets/foodswap/foodswap6.PNG'
import protozoaCover from '../assets/protozoaIdentifier/protozoaCover.jpeg'
import protozoa1 from '../assets/protozoaIdentifier/protozoa1.jpeg'
import protozoa2 from '../assets/protozoaIdentifier/protozoa2.jpeg'
import protozoa3 from '../assets/protozoaIdentifier/protozoa3.jpeg'
import protozoa4 from '../assets/protozoaIdentifier/protozoa4.jpeg'
import protozoa5 from '../assets/protozoaIdentifier/protozoa5.jpeg'


const projectsData = [
  {
    id: "enquadra", 
    title: "ENQUADRA",
    subtitle: "Galeria de Estudos",
    tags: ["SWIFT", "SWIFTUI", "IOS", "CÂMERA", "SWIFT DATA"],
    cardDescription: "Ferramenta essencial para estudantes. Organize fotos do quadro e slides instantaneamente por matéria, separando os estudos do rolo da câmera.",
    coverImage: enquadraCover,
    
    fullDescription: "Estudar fica muito mais fácil quando as notas estão organizadas. O Enquadra resolve o problema da bagunça no rolo de câmera do celular. O aplicativo permite capturar fotos do quadro, de slides ou de páginas de livros e organizá-las instantaneamente em pastas por disciplina. Focado na performance e na usabilidade através do SwiftUI, o app oferece busca rápida e uma interface sem distrações para otimizar o tempo de estudo.",
    media: [
      { type: "image", src: enquadra1, alt: "Organização de notas no celular" },
      { type: "image", src: enquadra2, alt: "Organização de notas no celular" },
      { type: "image", src: enquadra3, alt: "Organização de notas no celular" },
      { type: "image", src: enquadra4, alt: "Organização de notas no celular" },
      { type: "image", src: enquadra5, alt: "Organização de notas no celular" }
    ],
    team: [
      { name: "Vitor Bruno", role: "iOS Developer & Creator", link: "https://www.linkedin.com/in/vitor-bruno-243975258"}
    ],
    liveLink: "https://apps.apple.com/br/app/enquadra-galeria-de-estudos/id6752781110",
    repoLink: "https://github.com/vino-brutor/Enquadra"
  },
  {
    id: "runicorn",
    title: "RUNICORN",
    subtitle: "Endless Runner Game",
    tags: ["SWIFT", "SWIFTUI", "SPRITEKIT", "GAME CENTER", "ADS", "IOS"],
    cardDescription: "Um endless runner hipnotizante. Guie seu unicórnio por um túnel brilhante na Aurora Boreal, coletando estrelas e evitando obstáculos cósmicos.",
    coverImage: runicornCover,
    
    fullDescription: "Runicorn é uma experiência imersiva desenvolvida com SpriteKit. O jogador é desafiado a sobreviver o máximo possível dentro de uma Aurora Boreal, desviando de fragmentos de gelo e asteroides. O jogo conta com controles fluidos, suporte opcional a giroscópio, feedback háptico e integração total para disputas de pontuação.",
    media: [
      { type: "image", src: runicorn4, alt: "Gameplay imersiva em neon" },
      { type: "image", src: runicorn2, alt: "Gameplay imersiva em neon" },
      { type: "image", src: runicorn1, alt: "Gameplay imersiva em neon" },
      { type: "image", src: runicorn3, alt: "Gameplay imersiva em neon" }
    ],
    team: [
      { name: "Vinicius Cadore", role: "Designer", link: "https://www.linkedin.com/in/cadoreee/"},
      { name: "Giulia Stefainski", role: "Developer", link: "https://www.linkedin.com/in/giulia-cs/" },
      { name: "Isadora Guerra", role: "Developer", link: "https://www.linkedin.com/in/isadoraferreiraguerra/"},
      { name: "Agatha Schneider", role: "Developer", link: "https://www.linkedin.com/in/agatha-schneider-68400b172/"},
      { name: "Vitor Bruno", role: "Developer", link: "https://www.linkedin.com/in/vitor-bruno-243975258" }
    ],
    liveLink: "https://apps.apple.com/br/app/runicorn/id6760668892",
    repoLink: "https://github.com/vino-brutor/Runicorn"
  },
  {
    id: "dopamine-news",
    title: "DOPAMINE NEWS",
    subtitle: "O Seu Jornal Diário",
    tags: ["SWIFT", "SWIFTUI", "NODEJS", "MONGODB", "SCENEKIT", "SWIFT DATA", "API", "IOS"],
    cardDescription: "Um ritual diário simples que reúne jogos de palavras estilo Termo, leituras reflexivas e insights astrológicos em um só lugar.",
    coverImage: dopamineCover,
    
    fullDescription: "O Dopamine transforma curiosidade e diversão em um hábito diário satisfatório de cinco minutos. Ele oferece notícias curadas sem excesso de informações, um caça-palavras para atenção plena e o 'Termo Brasileiro', um desafio de vocabulário inspirado no Wordle. O app possui um layout limpo, com suporte perfeito aos modos claro e escuro.",
    media: [
      { type: "image", src: dopamine1, alt: "Jogos de palavras e notícias" },
      { type: "image", src: dopamine2, alt: "Jogos de palavras e notícias" },
      { type: "image", src: dopamine3, alt: "Jogos de palavras e notícias" },
      { type: "image", src: dopamine4, alt: "Jogos de palavras e notícias" },
      { type: "image", src: dopamine5, alt: "Jogos de palavras e notícias" },
      { type: "image", src: dopamine9, alt: "Jogos de palavras e notícias" },
      { type: "image", src: dopamine7, alt: "Jogos de palavras e notícias" },
      { type: "image", src: dopamine8, alt: "Jogos de palavras e notícias" }    
    ],
    team: [
      { name: "Rafaela Julianotte", role: "Designer", link: "https://www.linkedin.com/in/rafajulianotte/"},
      { name: "Adriel de Souza", role: "Developer", link: "https://www.linkedin.com/in/dsadriel/"},
      { name: "Antonio Costa jr", role: "Developer", link: "https://www.linkedin.com/in/antoniocosta001/"},
      { name: "Gabriel Kowaleski", role: "Developer", link: "https://www.linkedin.com/in/gabriel-kowaleski/"},
      { name: "Vítor Bruno", role: "Developer", link: "https://www.linkedin.com/in/vitor-bruno-243975258" },
    ], 
    liveLink: "https://apps.apple.com/br/app/dopamine-news/id6755773697",
    repoLink: "https://github.com/orgs/VerbeteApp/repositories"
  },
  {
    id: "completeness",
    title: "COMPLETENESS",
    subtitle: "Rastreador de Hábitos",
    tags: ["SWIFT", "SWIFTUI", "WATCHOS", "IOS", "WIDGETS", "LIVE ACTIVITIES", "SWIFT DATA"],
    cardDescription: "App para quem deseja viver com mais clareza. Registre hábitos, acompanhe sua rotina e celebre pequenas vitórias sem a pressão de métricas frias.",
    coverImage: completenessCover,
    
    fullDescription: "Construir novos hábitos não precisa ser algo estressante. O Completeness foi desenhado para ser uma ferramenta de progresso real, no ritmo do usuário. Ele conta com lembretes motivadores, visualização de progresso semanal por meio de gráficos customizados e uma interface que encoraja o usuário a focar no que realmente importa.",
    media: [
      { type: "image", src: completeness6, alt: "Gráficos de progresso semanal" },
      { type: "image", src: completeness2, alt: "Gráficos de progresso semanal" },        
      { type: "image", src: completeness3, alt: "Gráficos de progresso semanal" },        
      { type: "image", src: completeness7, alt: "Gráficos de progresso semanal" },        
      { type: "image", src: completeness8, alt: "Gráficos de progresso semanal" },        
      { type: "image", src: completeness4, alt: "Gráficos de progresso semanal" },        
      { type: "image", src: completeness5, alt: "Gráficos de progresso semanal" },                
    ],
    team: [
      { name: "Vitor Martins", role: "Designer", link: "https://www.linkedin.com/in/vítor-martins-940576207/" },
      { name: "Pablo Garcia", role: "Developer", link: "https://www.linkedin.com/in/pablogarciadev/"},
      { name: "Gustavo Melleu", role: "Developer", link: "https://www.linkedin.com/in/gustavo-melleu-218533231/"},
      { name: "Gustavo Bassani", role: "Developer", link: "https://www.linkedin.com/in/gustavofbassani/"},
      { name: "Vitor Bruno", role: "Developer", link: "https://www.linkedin.com/in/vitor-bruno-243975258" }
    ],
    liveLink: "https://apps.apple.com/br/app/completeness/id6752423274",
    repoLink: "https://github.com/GustavoFBassani/Completeness"
  },
  {
    id: "food-swap",
    title: "FOOD SWAP",
    subtitle: "Gastronomia & Bebidas",
    tags: ["SWIFT", "UIKIT", "MAPKIT", "IOS"],
    cardDescription: "Apresentado com sucesso em evento na Tecnopuc, um aplicativo com foco em inovação e experiência no ramo de gastronomia.",
    coverImage: foodSwapCover,
    
    fullDescription: "Desenvolvido como parte da jornada na Developer Academy e apresentado em evento na Tecnopuc, o Food Swap é um aplicativo desenhado para facilitar a vida do usuário dentro da categoria de gastronomia. O projeto aplicou conceitos sólidos de design de interfaces e arquitetura de software para o ecossistema iOS.",
    media: [
      { type: "image", src: foodSwap1, alt: "Food Swap Interface" },
      { type: "image", src: foodSwap2, alt: "Food Swap Interface" },
      { type: "image", src: foodSwap3, alt: "Food Swap Interface" },
      { type: "image", src: foodSwap4, alt: "Food Swap Interface" },
      { type: "image", src: foodSwap5, alt: "Food Swap Interface" },
      { type: "image", src: foodSwap6, alt: "Food Swap Interface" }
    ],
    team: [
      { name: "Luísa Cecília da Silva", role: "Designer", link: "https://www.linkedin.com/in/lucecyl/" },
      { name: "Guilherme Rossoni", role: "Developer", link: "https://www.linkedin.com/in/guilhermeghise/"},
      { name: "Richard Rodrigues", role: "Developer", link: "https://www.linkedin.com/in/richardsros/" },
      { name: "Bruna Marschner", role: "Developer", link: "https://www.linkedin.com/in/brunamarschner/" },
      { name: "Vitor Bruno", role: "Developer", link: "https://www.linkedin.com/in/vitor-bruno-243975258" }
    ],
    liveLink: "https://apps.apple.com/br/app/food-swap/id6747597054",
    repoLink: "https://github.com/vino-brutor/Food-Swap"
  },

  {
    id: "protozoa-identifier",
    title: "PROTOZOA IDENTIFIER",
    subtitle: "Visão Computacional na Saúde",
    tags: ["REACT", "PYTHON", "API REST", "MACHINE LEARNING", "NODEJS", "PRISMA", "TENSORFLOW"],
    cardDescription: "Sistema inteligente para identificação de protozoários em amostras biológicas. Uma ponte entre a análise laboratorial e a visão computacional.",
    coverImage: protozoaCover,
    
    fullDescription: "Nascido da intersecção entre biologia e tecnologia, o Protozoa Identifier é uma ferramenta construída para auxiliar no diagnóstico parasitológico. O projeto possui uma arquitetura dividida: um backend robusto responsável por processar as imagens e rodar os algoritmos de identificação, e um frontend moderno que oferece uma interface intuitiva para o usuário final fazer o upload das amostras. É a aplicação prática da Informática Biomédica para otimizar fluxos de trabalho em laboratórios.",
    media: [
      { type: "image", src: protozoa1, alt: "Interface de upload de amostras" },
      { type: "image", src: protozoa2, alt: "Resultados da análise computacional" },
      { type: "image", src: protozoa3, alt: "Resultados da análise computacional" },
      { type: "image", src: protozoa4, alt: "Resultados da análise computacional" },
      { type: "image", src: protozoa5, alt: "Resultados da análise computacional" }
    ],
    team: [
      { name: "Vitor Bruno", role: "Fullstack Developer", link: "https://www.linkedin.com/in/vitor-bruno-243975258" }
    ],
    liveLink: "", // Se você tiver o front hospedado (na Vercel, por ex), coloque o link aqui. Se não, deixe vazio.
    repoLink: "https://github.com/vino-brutor/ProtozoaIdentifier-Front" // Link do front como principal
  }
];

export default projectsData;