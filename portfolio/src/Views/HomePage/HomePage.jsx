import React from "react"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import projectsData from "../../Utils/ProjectData"
import meImage from "../../assets/me.png"
import gitHubIconSkill from "../../assets/githubSkillsIcon-com.svg"
import powerbiIcon from "../../assets/power-bi-icon.svg"

const HomePage = ({ isEnglish }) => {
  const mySkills = [
    {
      name: "Swift | SwiftUI | UIKit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "GitHub",
      icon: gitHubIconSkill,
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
    {
      name: "Power BI",
      icon: powerbiIcon,
    },

  ];

  const renderGlitcheWord = (word) => {
    return word.split("").map((char, index) => (
      <span key={index} className={"glitch-char glitch-char-" + (index + 1)}>
        {char}
      </span>
    ));
  };

  return (
    <>
      <main id="hero" className="hero">
        <div className="hero-text">
          <p className="subtitle">
            {isEnglish
              ? "Developer & Biomedical Informatics Student"
              : "Desenvolvedor & Estudante de Informática Biomédica"}
          </p>

          <h1 className="title">
            {renderGlitcheWord("VíTOR")}
            <br />
            <span className="neon-text">{renderGlitcheWord("BRUNO")}</span>
          </h1>
        </div>

        <img src={meImage} alt="Vítor Bruno" className="myself-image" />
      </main>

      <section id="projects" className="projects-grid-section">
        <h2 className="section-title">{isEnglish ? "PROJECTS" : "PROJETOS"}</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard project={project} isEnglish={isEnglish} />
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2 className="section-title">
          {isEnglish ? "SKILLS" : "HABILIDADES"}
        </h2>

        <div className="skills-large-card">
          <div className="skills-grid">
            {mySkills.map((skill) => (
              <div className="skill-mini-card" key={skill.name}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="big-footer-section">
        <div className="footer-container"> 
          <div className="contact-content">
          <h2 className="massive-title">
            {isEnglish ? "CONTACT ME" : "ENTRE EM"} <br />            
            <span className="purple-text">{isEnglish ? "LETS'S WORK." : "CONTATO."}</span><br />             
          </h2>
          
          <div className="footer-links">
              <a 
                href={ isEnglish ? 
                  "https://mail.google.com/mail/?view=cm&fs=1&to=viktorbruno2006@gmail.com&su=Hi!%20I%20saw%20your%20portfolio" :
                  "https://mail.google.com/mail/?view=cm&fs=1&to=viktorbruno2006@gmail.com&su=Olá!%20Vi%20seu%20portfólio" }
                target="_blank" 
                rel="noreferrer" 
                className="big-footer-link email-link"
              >
                {isEnglish ? "EMAIL ME" : "MEU EMAIL"} ↗
              </a>

              <a 
                href="https://www.linkedin.com/in/vitor-bruno-243975258" 
                target="_blank" 
                rel="noreferrer" 
                className="big-footer-link linkedin-link"
              >
                LINKEDIN ↗
              </a>

              <a 
                href="https://github.com/vino-brutor" 
                target="_blank" 
                rel="noreferrer" 
                className="big-footer-link github-link"
              >
                GITHUB ↗
              </a>
            </div>
          </div>         

          <div className="footer-bottom">
            <p className="footer-subtitle">
              {isEnglish
                ? "I'm always open to discussing new projects, ideas or opportunities."
                : "Estou sempre aberto a discutir novos projetos, ideias ou oportunidades."}
            </p>

            <a href="#hero">
              <button className="resume-btn">{isEnglish ? "BACK TO TOP" : "VOLTAR AO TOPO"}</button>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default HomePage;
