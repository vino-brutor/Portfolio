import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCardStyle.css'

const ProjectCard = ({ project, isEnglish }) => {
    const lang = isEnglish ? 'EN' : 'PT';

    return (
    <Link to={`/projects/${project.id}`} className='card-link'>
        <div className='project-card'>
            <div className='card-image-wrapper'>
                <img src={project.coverImage} alt={project.title} className='card-image'/>
                <div className="card-overlay"></div>
            </div>

            <div className='card-content'>
                <div className='card-header'>
                    {project.subtitle && <span className='card-subtitle'>{project.subtitle[lang]}</span>}
                    <h3>{project.title}</h3>
                </div>
                
                <p className="card-description">{project.cardDescription[lang]}</p>

                <div className='div-tags'>
                {
                    project.tags.map((tag, index) => (
                        <span key={index} className="tag-badge">{tag}</span>
                    ))                    
                }
                </div>
            </div>            
        </div>
    </Link>
    )
}

export default ProjectCard;