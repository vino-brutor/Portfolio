import React from 'react';
import './App.css'; // Importando o arquivo de estilos
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import linkedinIcon from '../../assets/iconLinkedin.png';

const App = () => {
  return (
    <BrowserRouter>
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

        <div className='nav-buttons'>
          <button className="resume-btn">
          CURRÍCULO
          </button>

          <a href="https://www.linkedin.com/in/vitor-bruno-243975258/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </div>        
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
};

export default App;