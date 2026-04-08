import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectsData  from "../../Utils/ProjectData"
import meImage from "../../Assets/me.png"

const HomePage = () => {
    const renderGlitcheWord = (word) => {
      return word.split('').map((char, index) => (  
          <span key={index} className={"glitch-char glitch-char-" + (index + 1)}>
            {char}
          </span>      
      ))
    }

    return (
      <>
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

        <img src={meImage} alt="Vítor Bruno" className="myself-image"/>          
      </main>

      <section id="projetos" className="projects-grid-section">
          <h2 className="section-title">PROJETOS</h2>
        
          {/* Bento Grid (Grid responsiva) */}
          <div className="projects-grid">
            {projectsData.map((project) => (
              // Passa os dados de cada projeto para o componente ProjectCard
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </>        
    )
}

export default HomePage;