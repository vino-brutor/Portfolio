import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../Utils/ProjectData";
import "./ProjectDetailPage.css";

const ProjectDetailPage = ({ isEnglish }) => {
  const { id } = useParams();
  
  const lang = isEnglish ? 'EN' : 'PT';

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="error-page">
        <h1>{isEnglish ? "Project not found" : "Projeto não encontrado"}</h1>
        <Link to="/" className="back-link">
          {isEnglish ? "Back to Home" : "Voltar para Home"}
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <Link to="/" className="back-button">
        ← Home
      </Link>

      <header className="detail-header">
        <h1 className="detail-title">{project.title}</h1>
        {project.subtitle && (          
          <p className="detail-subtitle">{project.subtitle[lang]}</p>
        )}

        <div className="detail-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag-badge">
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <img
        src={project.coverImage}
        alt={project.title}
        className="detail-main-image"
      />

      <main className="detail-main-content">
        <section className="description-section">          
          <h2>{isEnglish ? "About the Project" : "Sobre o Projeto"}</h2>
                    
          <p>{project.fullDescription[lang]}</p>

          <div className="project-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                {isEnglish ? "Live Demo" : "Ver Demo"}
              </a>
            )}
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                {isEnglish ? "View Code" : "Ver Código"}
              </a>
            )}
          </div>
        </section>
        
        <aside className="detail-sidebar">
          {project.team && project.team.length > 0 && (
            <section className="team-section">
              {/* Traduzindo os títulos fixos */}
              <h3>{isEnglish ? "Team" : "Equipe"}</h3>
              <ul>
                {project.team.map((member, index) => (
                  <li key={index}>
                    <a href={member.link} target="_blank" rel="noreferrer">
                      <strong>{member.name}</strong> - {member.role}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </main>
      
      <section className="gallery-section">
        {/* Traduzindo os títulos fixos */}
        <h3>{isEnglish ? "Gallery" : "Galeria"}</h3>
        <div className="gallery-grid">
          {project.media &&
            project.media.map((item, index) => {              
              if (item.type === "image") {
                return (
                  <img
                    key={index}
                    src={item.src}
                    // Lendo a tag alt de acessibilidade dinamicamente
                    alt={item.alt[lang]}
                    className="gallery-item"
                  />
                );
              }
              return null;
            })}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;