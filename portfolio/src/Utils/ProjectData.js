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
import theLoveCode1 from '../assets/TheLoveCode/Simulator Screenshot - iPad Pro 13-inch (M4) - 2026-02-27 at 17.16.31.png'
import theLoveCode2 from '../assets/TheLoveCode/Simulator Screenshot - iPad Pro 13-inch (M4) - 2026-04-06 at 15.13.36.png'
import theLoveCode5 from '../assets/TheLoveCode/the love code rnaP.png'
import theLoveCode3 from '../assets/TheLoveCode/the love code gameplay.png'
import theLoveCode4 from '../assets/TheLoveCode/the love code ribossome.png'
import theLoveCodeCover from '../assets/covers/theLoveCodeCover.png'

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
      PT: "Estudar fica muito mais fácil quando as notas estão organizadas. O Enquadra resolve o problema da bagunça no rolo de câmera do celular, permitindo capturar e categorizar fotos por disciplina. O aplicativo foi construído nativamente usando **Swift** e **SwiftUI** para garantir uma interface fluida. A manipulação de imagens e o acesso customizado à câmera são gerenciados com frameworks nativos, enquanto a persistência estruturada das pastas e fotos é feita localmente utilizando o **SwiftData**.",
      EN: "Studying becomes much easier when your notes are organized. Enquadra solves the problem of a cluttered camera roll by allowing you to capture and categorize photos by subject. The app was built natively using **Swift** and **SwiftUI** to ensure a fluid interface. Image manipulation and custom camera access are managed with native frameworks, while the structured persistence of folders and photos is handled locally using **SwiftData**."
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
      PT: "Runicorn é uma experiência imersiva arcade para iOS. O jogador é desafiado a sobreviver dentro de uma Aurora Boreal, desviando de obstáculos e coletando itens. O jogo foi inteiramente desenvolvido utilizando o motor **SpriteKit** da Apple para renderização gráfica e física de colisões em 2D. A arquitetura engloba a mecânica de controles fluidos, feedback háptico dinâmico, menus em **SwiftUI** e integração total com o **Game Center** (GameKit) para o placar de líderes global.",
      EN: "Runicorn is an immersive arcade experience for iOS. The player is challenged to survive inside the Northern Lights, dodging obstacles and collecting items. The game was entirely developed using Apple's **SpriteKit** engine for graphical rendering and 2D collision physics. The architecture encompasses fluid control mechanics, dynamic haptic feedback, **SwiftUI** menus, and full integration with **Game Center** (GameKit) for the global leaderboard."
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
      PT: "O Dopamine transforma leitura e jogos em um hábito diário. O app oferece notícias curadas e minigames para atenção plena. O projeto possui uma arquitetura robusta: o backend funciona via **Node.js** com banco de dados **MongoDB**, consumindo APIs externas de notícias para popular a base. O frontend foi desenvolvido em **SwiftUI** e consome a nossa própria **API REST**. O armazenamento local usa **SwiftData**, e partes da interface gamificada contam com o poder gráfico do **SceneKit**.",
      EN: "Dopamine turns reading and gaming into a daily habit. The app offers curated news and minigames for mindfulness. The project features a robust architecture: the backend runs on **Node.js** with a **MongoDB** database, consuming external news APIs to populate our data. The frontend was developed in **SwiftUI** and consumes our custom **REST API**. Local caching relies on **SwiftData**, and parts of the gamified interface leverage the graphical power of **SceneKit**."
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
      PT: "Desenhado para ser uma ferramenta de progresso real, o Completeness foca em lembretes e métricas customizadas de hábitos. O ecossistema da aplicação é extenso, feito majoritariamente em **SwiftUI**. A persistência de dados é estruturada via **SwiftData**. O maior desafio técnico da aplicação foi construir suporte multitelas com um app independente em **watchOS** e expandir as interações ativas para a Dynamic Island e Lock Screen usando o **WidgetKit** e **Live Activities**.",
      EN: "Designed to be a tool for real progress, Completeness focuses on custom reminders and habit metrics. The application's ecosystem is extensive, built predominantly with **SwiftUI**. Data persistence is structured via **SwiftData**. The greatest technical challenge was building multi-device support with an independent **watchOS** app and expanding active interactions to the Dynamic Island and Lock Screen using **WidgetKit** and **Live Activities**."
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
      PT: "Desenvolvido durante a Apple Developer Academy e apresentado na Tecnopuc, o Food Swap é um aplicativo desenhado para guiar o usuário na categoria de gastronomia. O projeto aplicou conceitos de design de interface e arquitetura de software para o iOS. A camada visual da aplicação foi construída com o clássico framework **UIKit**, enquanto toda a manipulação de coordenadas e pontos de interesse no mapa utiliza os recursos nativos do **MapKit** e **CoreLocation**.",
      EN: "Developed during the Apple Developer Academy and presented at Tecnopuc, Food Swap is an application designed to guide the user in the gastronomy category. The project applied concepts of interface design and software architecture for iOS. The visual layer of the application was built with the classic **UIKit** framework, while all manipulation of coordinates and points of interest on the map utilizes the native features of **MapKit** and **CoreLocation**."
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
      PT: "Nascido da aplicação direta de Informática Biomédica, o Protozoa Identifier é uma ferramenta para diagnóstico parasitológico. A arquitetura engloba múltiplas tecnologias: o frontend intuitivo web foi orquestrado em **React**. Os dados e a **API REST** fluem via **Node.js** e gerencimento de banco com o **Prisma ORM**. O coração da aplicação é um modelo de **Machine Learning** de Visão Computacional, treinado em **Python** utilizando **TensorFlow** para processar e classificar as imagens das amostras.",
      EN: "Born from the direct application of Biomedical Informatics, Protozoa Identifier is a tool for parasitological diagnosis. The architecture encompasses multiple technologies: the intuitive web frontend was orchestrated in **React**. Data and the **REST API** flow via **Node.js** with database management using **Prisma ORM**. The heart of the application is a Computer Vision **Machine Learning** model, trained in **Python** using **TensorFlow** to process and classify sample images."
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
  },
{
    id: "the-love-code",
    title: "THE LOVE CODE",
    subtitle: {
      PT: "Swift Student Challenge 26",
      EN: "Swift Student Challenge 26"
    },
    tags: ["SWIFT", "SWIFTUI", "SPRITEKIT", "AVFOUNDATION", "GAME DESIGN", "SSC 26"],
    cardDescription: {
      PT: "Jogo educacional baseado em ritmo criado para o Swift Student Challenge 2026. Uma experiência imersiva com elementos de storytelling e mecânicas musicais.",
      EN: "Rhythm-based educational game created for the 2026 Swift Student Challenge. An immersive experience featuring storytelling elements and musical mechanics."
    },
    coverImage: theLoveCodeCover,
    
    fullDescription: {
      PT: "Desenvolvido como minha submissão oficial para o **Swift Student Challenge de 2026**, o **The Love Code** é um jogo educacional inovador que mistura mecânicas de jogos de ritmo com um forte elemento de storytelling. O projeto foi totalmente construído com **Swift**, **SwiftUI** e SpriteKit para as interfaces dinâmicas, utilizando processamento de áudio e animações complexas para sincronizar a gameplay nativa com a trilha sonora. O objetivo principal do app é engajar o jogador através de uma narrativa interativa enquanto ensina conceitos lógicos de forma imersiva e emocionalmente ressonante.",
      EN: "Developed as my official submission for the **2026 Swift Student Challenge**, *The Love Code* is an innovative educational game that blends rhythm mechanics with strong storytelling elements. The project was built entirely with **Swift**, **SwiftUI** and SpriteKit for the dynamic interfaces, utilizing audio processing and complex animations to synchronize native gameplay with the soundtrack. The main goal of the app is to engage the player through an interactive narrative while teaching logical concepts in an immersive and emotionally resonant way."
    },
    media: [
      { type: "image", src: theLoveCode2, alt: { PT: "Elementos de storytelling", EN: "Storytelling elements" } },
      { type: "image", src: theLoveCode5, alt: { PT: "Interface do jogo", EN: "Game interface" } },
      { type: "image", src: theLoveCode1, alt: { PT: "Gameplay de ritmo do The Love Code", EN: "The Love Code rhythm gameplay" } },
      { type: "image", src: theLoveCode3, alt: { PT: "Interface do jogo", EN: "Game interface" } },
      { type: "image", src: theLoveCode4, alt: { PT: "Interface do jogo", EN: "Game interface" } }
    ],
    team: [
      { name: "Vítor Bruno", role: "iOS Developer", link: "https://www.linkedin.com/in/vitor-bruno-243975258" }
    ],
    liveLink: "", 
    repoLink: "https://github.com/vino-brutor/The-Love-Code"
  }
];

export default projectsData;