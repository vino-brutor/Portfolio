import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../Utils/projectsData";
import "./ProjectDetailPage.css";

const ProjectDetailPage = () => {
  const { id } = useParams();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="error-page">
        <h1>Projeto não encontrado</h1>
        <Link to="/" className="back-link">
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      {/* Botão de Voltar sutil (como em algumas refs) */}
      <Link to="/" className="back-button">
        ← Home
      </Link>

      <header className="detail-header">
        <h1 className="detail-title">{project.title}</h1>
        {project.subtitle && (
          <p className="detail-subtitle">{project.subtitle}</p>
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
          <h2>Sobre o Projeto</h2>
          <p>{project.fullDescription}</p>

          {/* Links Externos (se houver) */}
          <div className="project-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                Ver Demo
              </a>
            )}
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                Ver Código
              </a>
            )}
          </div>
        </section>
        
        <aside className="detail-sidebar">
          {project.team && project.team.length > 0 && (
            <section className="team-section">
              <h3>Equipe</h3>
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
        <h3>Galeria</h3>
        <div className="gallery-grid">
          {project.media &&
            project.media.map((item, index) => {              
              if (item.type === "image") {
                return (
                  <img
                    key={index}
                    src={item.src}
                    alt={item.alt}
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
