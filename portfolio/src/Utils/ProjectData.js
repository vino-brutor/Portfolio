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
    subtitle: {
      PT: "Galeria de Estudos",
      EN: "Study Gallery"
    },
    tags: ["SWIFT", "SWIFTUI", "IOS", "CÂMERA", "SWIFT DATA"],
    cardDescription: {
      PT: "Ferramenta essencial para estudantes. Organize fotos do quadro e slides instantaneamente por matéria, separando os estudos do rolo da câmera.",
      EN: "Essential tool for students. Instantly organize whiteboard and slide photos by subject, keeping your studies separate from your camera roll."
    },
    coverImage: enquadraCover,
    
    fullDescription: {
      PT: "Estudar fica muito mais fácil quando as notas estão organizadas. O Enquadra resolve o problema da bagunça no rolo de câmera do celular. O aplicativo permite capturar fotos do quadro, de slides ou de páginas de livros e organizá-las instantaneamente em pastas por disciplina. Focado na performance e na usabilidade através do SwiftUI, o app oferece busca rápida e uma interface sem distrações para otimizar o tempo de estudo.",
      EN: "Studying becomes much easier when your notes are organized. Enquadra solves the problem of a cluttered camera roll. The app allows you to capture photos of whiteboards, slides, or book pages and instantly organize them into subject folders. Focused on performance and usability using SwiftUI, the app offers quick search and a distraction-free interface to optimize your study time."
    },
    media: [
      { type: "image", src: enquadra1, alt: { PT: "Organização de notas no celular", EN: "Note organization on mobile" } },
      { type: "image", src: enquadra2, alt: { PT: "Organização de notas no celular", EN: "Note organization on mobile" } },
      { type: "image", src: enquadra3, alt: { PT: "Organização de notas no celular", EN: "Note organization on mobile" } },
      { type: "image", src: enquadra4, alt: { PT: "Organização de notas no celular", EN: "Note organization on mobile" } },
      { type: "image", src: enquadra5, alt: { PT: "Organização de notas no celular", EN: "Note organization on mobile" } }
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
    subtitle: {
      PT: "Endless Runner Game",
      EN: "Endless Runner Game"
    },
    tags: ["SWIFT", "SWIFTUI", "SPRITEKIT", "GAME CENTER", "ADS", "IOS"],
    cardDescription: {
      PT: "Um endless runner hipnotizante. Guie seu unicórnio por um túnel brilhante na Aurora Boreal, coletando estrelas e evitando obstáculos cósmicos.",
      EN: "A mesmerizing endless runner. Guide your unicorn through a glowing tunnel in the Northern Lights, collecting stars and avoiding cosmic obstacles."
    },
    coverImage: runicornCover,
    
    fullDescription: {
      PT: "Runicorn é uma experiência imersiva desenvolvida com SpriteKit. O jogador é desafiado a sobreviver o máximo possível dentro de uma Aurora Boreal, desviando de fragmentos de gelo e asteroides. O jogo conta com controles fluidos, suporte opcional a giroscópio, feedback háptico e integração total para disputas de pontuação.",
      EN: "Runicorn is an immersive experience developed with SpriteKit. The player is challenged to survive as long as possible inside the Northern Lights, dodging ice fragments and asteroids. The game features fluid controls, optional gyroscope support, haptic feedback, and full Game Center integration for high-score competitions."
    },
    media: [
      { type: "image", src: runicorn4, alt: { PT: "Gameplay imersiva em neon", EN: "Immersive neon gameplay" } },
      { type: "image", src: runicorn2, alt: { PT: "Gameplay imersiva em neon", EN: "Immersive neon gameplay" } },
      { type: "image", src: runicorn1, alt: { PT: "Gameplay imersiva em neon", EN: "Immersive neon gameplay" } },
      { type: "image", src: runicorn3, alt: { PT: "Gameplay imersiva em neon", EN: "Immersive neon gameplay" } }
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
    subtitle: {
      PT: "O Seu Jornal Diário",
      EN: "Your Daily Newspaper"
    },
    tags: ["SWIFT", "SWIFTUI", "NODEJS", "MONGODB", "SCENEKIT", "SWIFT DATA", "API", "IOS"],
    cardDescription: {
      PT: "Um ritual diário simples que reúne jogos de palavras estilo Termo, leituras reflexivas e insights astrológicos em um só lugar.",
      EN: "A simple daily ritual that brings together Wordle-style word games, reflective readings, and astrological insights in one place."
    },
    coverImage: dopamineCover,
    
    fullDescription: {
      PT: "O Dopamine transforma curiosidade e diversão em um hábito diário satisfatório de cinco minutos. Ele oferece notícias curadas sem excesso de informações, um caça-palavras para atenção plena e o 'Termo Brasileiro', um desafio de vocabulário inspirado no Wordle. O app possui um layout limpo, com suporte perfeito aos modos claro e escuro.",
      EN: "Dopamine turns curiosity and fun into a satisfying five-minute daily habit. It offers curated news without information overload, a word search for mindfulness, and a vocabulary challenge inspired by Wordle. The app features a clean layout with seamless support for both light and dark modes."
    },
    media: [
      { type: "image", src: dopamine1, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } },
      { type: "image", src: dopamine2, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } },
      { type: "image", src: dopamine3, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } },
      { type: "image", src: dopamine4, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } },
      { type: "image", src: dopamine5, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } },
      { type: "image", src: dopamine9, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } },
      { type: "image", src: dopamine7, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } },
      { type: "image", src: dopamine8, alt: { PT: "Jogos de palavras e notícias", EN: "Word games and news" } }
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
    subtitle: {
      PT: "Rastreador de Hábitos",
      EN: "Habit Tracker"
    },
    tags: ["SWIFT", "SWIFTUI", "WATCHOS", "IOS", "WIDGETS", "LIVE ACTIVITIES", "SWIFT DATA"],
    cardDescription: {
      PT: "App para quem deseja viver com mais clareza. Registre hábitos, acompanhe sua rotina e celebre pequenas vitórias sem a pressão de métricas frias.",
      EN: "App for those who want to live with more clarity. Log habits, track your routine, and celebrate small victories without the pressure of cold metrics."
    },
    coverImage: completenessCover,
    
    fullDescription: {
      PT: "Construir novos hábitos não precisa ser algo estressante. O Completeness foi desenhado para ser uma ferramenta de progresso real, no ritmo do usuário. Ele conta com lembretes motivadores, visualização de progresso semanal por meio de gráficos customizados e uma interface que encoraja o usuário a focar no que realmente importa.",
      EN: "Building new habits doesn't have to be stressful. Completeness was designed to be a tool for real progress, at the user's pace. It features motivating reminders, weekly progress visualization through customized charts, and an interface that encourages the user to focus on what truly matters."
    },
    media: [
      { type: "image", src: completeness6, alt: { PT: "Gráficos de progresso semanal", EN: "Weekly progress charts" } },
      { type: "image", src: completeness2, alt: { PT: "Gráficos de progresso semanal", EN: "Weekly progress charts" } },        
      { type: "image", src: completeness3, alt: { PT: "Gráficos de progresso semanal", EN: "Weekly progress charts" } },        
      { type: "image", src: completeness7, alt: { PT: "Gráficos de progresso semanal", EN: "Weekly progress charts" } },        
      { type: "image", src: completeness8, alt: { PT: "Gráficos de progresso semanal", EN: "Weekly progress charts" } },        
      { type: "image", src: completeness4, alt: { PT: "Gráficos de progresso semanal", EN: "Weekly progress charts" } },        
      { type: "image", src: completeness5, alt: { PT: "Gráficos de progresso semanal", EN: "Weekly progress charts" } }
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
    subtitle: {
      PT: "Gastronomia & Bebidas",
      EN: "Food & Drink"
    },
    tags: ["SWIFT", "UIKIT", "MAPKIT", "IOS"],
    cardDescription: {
      PT: "Apresentado com sucesso em evento na Tecnopuc, um aplicativo com foco em inovação e experiência no ramo de gastronomia.",
      EN: "Successfully presented at a Tecnopuc event, an application focused on innovation and user experience in the gastronomy sector."
    },
    coverImage: foodSwapCover,
    
    fullDescription: {
      PT: "Desenvolvido como parte da jornada na Developer Academy e apresentado em evento na Tecnopuc, o Food Swap é um aplicativo desenhado para facilitar a vida do usuário dentro da categoria de gastronomia. O projeto aplicou conceitos sólidos de design de interfaces e arquitetura de software para o ecossistema iOS.",
      EN: "Developed as part of the Apple Developer Academy journey and presented at a Tecnopuc event, Food Swap is an application designed to make the user's life easier within the gastronomy category. The project applied solid concepts of interface design and software architecture for the iOS ecosystem."
    },
    media: [
      { type: "image", src: foodSwap1, alt: { PT: "Food Swap Interface", EN: "Food Swap Interface" } },
      { type: "image", src: foodSwap2, alt: { PT: "Food Swap Interface", EN: "Food Swap Interface" } },
      { type: "image", src: foodSwap3, alt: { PT: "Food Swap Interface", EN: "Food Swap Interface" } },
      { type: "image", src: foodSwap4, alt: { PT: "Food Swap Interface", EN: "Food Swap Interface" } },
      { type: "image", src: foodSwap5, alt: { PT: "Food Swap Interface", EN: "Food Swap Interface" } },
      { type: "image", src: foodSwap6, alt: { PT: "Food Swap Interface", EN: "Food Swap Interface" } }
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
    subtitle: {
      PT: "Visão Computacional na Saúde",
      EN: "Computer Vision in Healthcare"
    },
    tags: ["REACT", "PYTHON", "API REST", "MACHINE LEARNING", "NODEJS", "PRISMA", "TENSORFLOW"],
    cardDescription: {
      PT: "Sistema inteligente para identificação de protozoários em amostras biológicas. Uma ponte entre a análise laboratorial e a visão computacional.",
      EN: "Intelligent system for the identification of protozoa in biological samples. A bridge between laboratory analysis and computer vision."
    },
    coverImage: protozoaCover,
    
    fullDescription: {
      PT: "Nascido da intersecção entre biologia e tecnologia, o Protozoa Identifier é uma ferramenta construída para auxiliar no diagnóstico parasitológico. O projeto possui uma arquitetura dividida: um backend robusto responsável por processar as imagens e rodar os algoritmos de identificação, e um frontend moderno que oferece uma interface intuitiva para o usuário final fazer o upload das amostras. É a aplicação prática da Informática Biomédica para otimizar fluxos de trabalho em laboratórios.",
      EN: "Born from the intersection of biology and technology, Protozoa Identifier is a tool built to assist in parasitological diagnosis. The project features a split architecture: a robust backend responsible for processing images and running identification algorithms, and a modern frontend that offers an intuitive interface for the end-user to upload samples. It is the practical application of Biomedical Informatics to optimize laboratory workflows."
    },
    media: [
      { type: "image", src: protozoa1, alt: { PT: "Interface de upload de amostras", EN: "Sample upload interface" } },
      { type: "image", src: protozoa2, alt: { PT: "Resultados da análise computacional", EN: "Computational analysis results" } },
      { type: "image", src: protozoa3, alt: { PT: "Resultados da análise computacional", EN: "Computational analysis results" } },
      { type: "image", src: protozoa4, alt: { PT: "Resultados da análise computacional", EN: "Computational analysis results" } },
      { type: "image", src: protozoa5, alt: { PT: "Resultados da análise computacional", EN: "Computational analysis results" } }
    ],
    team: [
      { name: "Vitor Bruno", role: "Fullstack Developer", link: "https://www.linkedin.com/in/vitor-bruno-243975258" }
    ],
    liveLink: "",
    repoLink: "https://github.com/vino-brutor/ProtozoaIdentifier-Front"
  }
];

export default projectsData;