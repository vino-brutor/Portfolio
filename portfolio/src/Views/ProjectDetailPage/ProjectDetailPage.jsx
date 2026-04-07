import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../Utils/ProjectData';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
    const { id } = useParams()

    const project = projectsData.find(p => p.id === id)

    if(!project) {
        return (
            <div className="error-page">
                <h1>Projeto não encontrado</h1>
                <Link to="/" className="back-link">Voltar para Home</Link>
            </div>
        )
    }

    return (
        <div className="project-detail-container">
      {/* Botão de Voltar sutil (como em algumas refs) */}
      <Link to="/" className="back-button">← Home</Link>

      <header className="detail-header">
        <h1 className="detail-title">{project.title}</h1>
        {project.subtitle && <p className="detail-subtitle">{project.subtitle}</p>}
        
        <div className="detail-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag-badge">{tag}</span>
          ))}
        </div>
      </header>

      {/* Capa Principal da Página (pode ser a mesma do card, ou maior) */}
      <img src={project.coverImage} alt={project.title} className="detail-main-image" />

      <main className="detail-main-content">
        <section className="description-section">
          <h2>Sobre o Projeto</h2>
          <p>{project.fullDescription}</p>
          
          {/* Links Externos (se houver) */}
          <div className="project-links">
            {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">Ver Demo</a>}
            {project.repoLink && <a href={project.repoLink} target="_blank" rel="noreferrer">Ver Código</a>}
          </div>
        </section>

        {/* Barra Lateral: Equipe e Galeria (Inspirado na 'image_7.png') */}
        <aside className="detail-sidebar">
          
          {/* Seção da Equipe (condicional) */}
          {project.team && project.team.length > 0 && (
            <section className="team-section">
              <h3>Equipe</h3>
              <ul>
                {project.team.map((member, index) => (
                  <li key={index}>
                    <strong>{member.name}</strong> - {member.role}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Galeria de Mídia (Imagens/Vídeos Extras) */}
          <section className="gallery-section">
            <h3>Galeria</h3>
            <div className="gallery-grid">
              {project.media.map((item, index) => (
                item.type === 'image' && (
                  <img key={index} src={item.url} alt={item.alt} className="gallery-item" />
                )
                // Se tivesse vídeo, trataria aqui
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
    )
}

export default ProjectDetailPage;