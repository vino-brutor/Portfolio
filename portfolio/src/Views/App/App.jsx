import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css'; // Importando o arquivo de estilos
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import linkedinIcon from '../../assets/iconLinkedin.png';
import githubIcon from '../../assets/githubIcon.png';

const App = () => {

  const [isEnglish, setIsEnglish] = useState(false)

  const toogleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {      
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
        
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="portfolio-container">
      {/* Navegação */}
      <nav className="navbar">
        <div className="logo">
          VB<span>_PORTFOLIO</span>

          <button onClick={toogleLanguage} className="lang-btn">
            {isEnglish ? '🇺🇸 EN' : '🇧🇷 PT'}
          </button>
        </div>
        
        <div className="nav-links">
          <a href="#projects">{isEnglish ? 'PROJECTS' : 'PROJETOS'}</a>
          <a href="#skills">{isEnglish ? 'SKILLS' : 'HABILIDADES'}</a>
          <a href="#contact">{isEnglish ? 'CONTACT' : 'CONTATO'}</a>
        </div>

        <div className='nav-buttons'>          
          <button className="resume-btn">
            {isEnglish ? 'RESUME' : 'CURRÍCULO'}
          </button>

          <a href="https://www.linkedin.com/in/vitor-bruno-243975258/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="Linkedin" className='linkedin-icon'/>
          </a>

          <a href="https://github.com/vino-brutor" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github" className='github-icon'/>
          </a>
        </div>        
      </nav>

      <Routes>
        <Route path="/" element={<HomePage isEnglish={isEnglish} />} />
        <Route path="/projects/:id" element={<ProjectDetailPage isEnglish={isEnglish}/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
};

export default App;