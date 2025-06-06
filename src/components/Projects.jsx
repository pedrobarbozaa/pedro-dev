import { useState } from 'react';
import {IconChevronLeft, IconChevronRight} from '@tabler/icons-react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Uma plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades avançadas de organização e colaboração em equipe.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      link: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Dashboard interativo para visualização de dados complexos com gráficos dinâmicos e relatórios personalizados.",
      technologies: ["React", "D3.js", "Python", "Flask"],
      link: "#"
    },
    {
      title: "Mobile Weather App",
      description: "Aplicativo móvel para previsão do tempo com localização automática e notificações personalizadas.",
      technologies: ["React Native", "API REST", "Firebase", "Redux"],
      link: "#"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <h2 className="section-title">Meus Projetos</h2>
        
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevProject}>
            <IconChevronLeft size={24} />
          </button>
          
          <div className="project-card">
            <h3 className="project-title">{projects[currentProject].title}</h3>
            <p className="project-description">{projects[currentProject].description}</p>
            <div className="project-tech">
              {projects[currentProject].technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={projects[currentProject].link} className="project-link">Ver Projeto →</a>
          </div>
          
          <button className="carousel-button next" onClick={nextProject}>
            <IconChevronRight size={24} />
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects
