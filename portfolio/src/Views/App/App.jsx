import React from 'react';
import './App.css'; // Importando o arquivo de estilos

const App = () => {
  const renderGlitcheWord = (word) => {
    return word.split('').map((char, index) => (  
        <span key={index} className={"glitch-char glitch-char-" + (index + 1)}>
          {char}
        </span>      
    ))
  }

  return (
    <div className="portfolio-container">
      {/* Navegação */}
      <nav className="navbar">
        <div className="logo">
          VB<span>_PORTFOLIO</span>
        </div>
        
        <div className="nav-links">
          <a href="#projetos">PROJETOS</a>
          <a href="#habilidades">HABILIDADES</a>
          <a href="#contato">CONTATO</a>
        </div>

        <button className="resume-btn">
          CURRÍCULO
        </button>
      </nav>

      <main className="hero">
        <div className="hero-text">
          <p className="subtitle">
            Desenvolvedor & Estudante de Informática Biomédica
          </p>
          
          <h1 className="title">
            {renderGlitcheWord("VíTOR")}
            <br />
            <span className="neon-text">
              {renderGlitcheWord("BRUNO")}
            </span>
          </h1>
        </div>        
      </main>
    </div>
  );
};

export default App;