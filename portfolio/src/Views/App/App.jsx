import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css'; // Importando o arquivo de estilos
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import linkedinIcon from '../../assets/iconLinkedin.png';
import githubIcon from '../../assets/githubIcon.png';

const App = () => {

  const [isEnglish, setIsEnglish] = useState(false)

  const toogleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  const handleLegacySectionLink = (event) => {
    const link = event.target.closest('a[href^="#"]');

    if (!link) return;

    event.preventDefault();
    window.location.assign(`/#${link.getAttribute('href').slice(1)}`);
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
      <nav className="navbar" onClick={handleLegacySectionLink}>
        <div className="logo">          
            VB<span>PORTFOLIO</span>                    
        </div>
        
        <div className="nav-links">
          <Link to="/#projects">{isEnglish ? 'PROJECTS' : 'PROJETOS'}</Link>
          <a href="#experience">{isEnglish ? 'EXPERIENCE' : 'EXPERIÊNCIA'}</a>
          <Link to="/#skills">{isEnglish ? 'SKILLS' : 'HABILIDADES'}</Link>
          <Link to="/#contact">{isEnglish ? 'CONTACT' : 'CONTATO'}</Link>
        </div>

        <div className='nav-buttons'>  
          <button onClick={toogleLanguage} className="lang-btn">
            {isEnglish ? '🇺🇸 EN' : '🇧🇷 PT'}
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
