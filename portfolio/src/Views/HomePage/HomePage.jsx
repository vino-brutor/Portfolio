import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectsData from "../../Utils/ProjectData";
import meImage from "../../assets/me.png";

const HomePage = ({ isEnglish }) => {
  const mySkills = [
    {name: "Swift\nSwiftUI\nUIKit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"},    
    {name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg"},
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"},    
    {name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
    {name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},    
    {name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"}
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
      <main className="hero">
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
    </>
  );
};

export default HomePage;
