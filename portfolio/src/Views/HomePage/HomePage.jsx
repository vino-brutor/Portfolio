import React, { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import ShutterText from "../../Components/common/ShutterText/ShutterText"
import projectsData from "../../Utils/ProjectData"
import meImage from "../../assets/me.png"
import gitHubIconSkill from "../../assets/githubSkillsIcon-com.svg"
import powerbiIcon from "../../assets/power-bi-icon.svg"
import experiencesData from "../../Utils/ExperienceData"

const HomePage = ({ isEnglish }) => {
  const location = useLocation();
  const contactSectionRef = useRef(null);
  const skillPointerStartRef = useRef(null);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isSkillsFocused, setIsSkillsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (!location.hash) return;

    const section = document.getElementById(location.hash.slice(1));

    if (section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  useEffect(() => {
    const contactSection = contactSectionRef.current;

    if (!contactSection) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContactVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);

    return () => motionPreference.removeEventListener("change", syncMotionPreference);
  }, []);

  const skillCategories = [
    {
      id: "mobile",
      title: isEnglish ? "MOBILE" : "MOBILE",
      skills: [
        {
          name: "Swift | SwiftUI | UIKit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg",
        },
      ],
    },
    {
      id: "web",
      title: "WEB",
      skills: [
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
      ],
    },
    {
      id: "data-ai",
      title: isEnglish ? "DATA & AI" : "DADOS E IA",
      skills: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
        },
        {
          name: "Power BI",
          icon: powerbiIcon,
        },
      ],
    },
    {
      id: "design-tools",
      title: isEnglish ? "DESIGN & TOOLS" : "DESIGN E FERRAMENTAS",
      skills: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        },
        {
          name: "GitHub",
          icon: gitHubIconSkill,
        },
      ],
    },
  ];

  const skillItems = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.title,
    })),
  );

  useEffect(() => {
    if (isSkillsHovered || isSkillsFocused || prefersReducedMotion) return undefined;

    const autoAdvance = window.setInterval(() => {
      setActiveSkillIndex((currentIndex) => (currentIndex + 1) % skillItems.length);
    }, 2200);

    return () => window.clearInterval(autoAdvance);
  }, [isSkillsHovered, isSkillsFocused, prefersReducedMotion, skillItems.length]);

  const moveSkillsCarousel = (direction) => {
    setActiveSkillIndex((currentIndex) =>
      (currentIndex + direction + skillItems.length) % skillItems.length,
    );
  };

  const getSkillOffset = (index) => {
    let offset = index - activeSkillIndex;
    const half = skillItems.length / 2;

    if (offset > half) offset -= skillItems.length;
    if (offset < -half) offset += skillItems.length;

    return offset;
  };

  const handleSkillPointerDown = (event) => {
    skillPointerStartRef.current = event.clientX;
  };

  const handleSkillPointerUp = (event) => {
    if (skillPointerStartRef.current === null) return;

    const dragDistance = event.clientX - skillPointerStartRef.current;
    skillPointerStartRef.current = null;

    if (Math.abs(dragDistance) < 36) return;
    moveSkillsCarousel(dragDistance > 0 ? -1 : 1);
  };

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
            <ProjectCard key={project.id} project={project} isEnglish={isEnglish} />
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2 className="section-title">
          {isEnglish ? "EXPERIENCE" : "EXPERIÊNCIA"}
        </h2>

        <div className="timeline-container">
          {experiencesData.map((exp, index) => (
            <div className="timeline-item" key={index}>
              {/* A bolinha neon na linha do tempo */}
              <div className="timeline-dot"></div>
                            
              <div className="timeline-card">
                <p className="exp-date">{exp.date[isEnglish ? 'EN' : 'PT']}</p>
                <h3 className="exp-title">{exp.title[isEnglish ? 'EN' : 'PT']}</h3>
                <p className="exp-company">{exp.company}</p>
                
                <ul className="exp-bullets">
                  {exp.bullets[isEnglish ? 'EN' : 'PT'].map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2 className="section-title">
          {isEnglish ? "SKILLS" : "HABILIDADES"}
        </h2>

        <div
          className="skills-carousel"
          onMouseEnter={() => setIsSkillsHovered(true)}
          onMouseLeave={() => setIsSkillsHovered(false)}
          onFocusCapture={() => setIsSkillsFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsSkillsFocused(false);
            }
          }}
        >
          <div
            className="skills-coverflow"
            role="region"
            aria-roledescription="carousel"
            aria-label={isEnglish ? "Technology skills" : "Habilidades em tecnologia"}
            tabIndex="0"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") moveSkillsCarousel(-1);
              if (event.key === "ArrowRight") moveSkillsCarousel(1);
            }}
            onPointerDown={handleSkillPointerDown}
            onPointerUp={handleSkillPointerUp}
            onPointerCancel={() => {
              skillPointerStartRef.current = null;
            }}
          >
            {skillItems.map((skill, index) => {
              const offset = getSkillOffset(index);
              const distance = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible = distance <= 4;

              return (
                <button
                  type="button"
                  className={`skill-cover ${isActive ? "is-active" : ""}`}
                  key={skill.name}
                  style={{
                    "--skill-offset": offset,
                    "--skill-distance": distance,
                    "--skill-rotation": `${offset === 0 ? 0 : offset > 0 ? -48 : 48}deg`,
                    zIndex: skillItems.length - distance,
                  }}
                  aria-label={`${skill.name} — ${skill.category}`}
                  aria-current={isActive ? "true" : undefined}
                  aria-hidden={!isVisible}
                  tabIndex={isVisible ? 0 : -1}
                  onClick={() => setActiveSkillIndex(index)}
                >
                  <img src={skill.icon} alt="" className="skill-cover-icon" />
                  <span className="skill-cover-name">{skill.name}</span>
                </button>
              );
            })}
          </div>

          <div className="skill-caption" aria-live="polite">
            <span>{skillItems[activeSkillIndex].category}</span>
            <strong>{skillItems[activeSkillIndex].name}</strong>
          </div>

          <div className="skills-carousel-controls">
            <button type="button" onClick={() => moveSkillsCarousel(-1)}>
              {isEnglish ? "PREVIOUS" : "ANTERIOR"}
            </button>
            <span aria-hidden="true">
              {String(activeSkillIndex + 1).padStart(2, "0")} / {String(skillItems.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={() => moveSkillsCarousel(1)}>
              {isEnglish ? "NEXT" : "PRÓXIMA"}
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactSectionRef}
        className={`big-footer-section ${isContactVisible ? "is-visible" : ""}`}
      >
        <div className="footer-container"> 
          <div className="contact-content">
          <h2 className="massive-title">
            <ShutterText text={isEnglish ? "CONTACT ME" : "ENTRE EM"} />
            <ShutterText
              text={isEnglish ? "LETS'S WORK." : "CONTATO."}
              variant="accent"
            />
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
