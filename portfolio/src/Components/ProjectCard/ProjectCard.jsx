import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    <Link to={`/projetos/${project.id}`}>
        <div className='project-card'>
            <div className='card-image-wrapper'>
                <img src={project.imagePath} alt={project.title} className='card-image'/>
                <div className="card-overlay"></div>
            </div>

            <div className='card-content'>
                <div className='card-header'>
                    {project.subtitle && <span className='card-subtitle'>{project.subtitle}</span>}
                    <h3>{project.title}</h3>
                </div>

                <p className="card-description">{project.cardDescription}</p>
            </div>

            <div className='div-tags'>
                {
                    project.tags.map((tag, index) => {
                        <span key={index} className="tag-badge">{tag}</span>
                    })                    
                }
            </div>
        </div>
    </Link>
}

export default ProjectCard;