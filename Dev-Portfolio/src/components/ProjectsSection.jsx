import "../styles/Projects.css";

/**
 * Array of project objects representing portfolio projects.
 * @type {Array<{id: number, title: string, description: string, imageUrl: string, liveUrl: string, githubUrl: string, tech: string[]}>}
 */
const projects = [
  {
    id: 1,
    title: "Kanban Board App",
    description:
      "A fully interactive Kanban board task tracking and workflow organization.",
    imageUrl: "/src/assets/kanban.png",
    liveUrl: "https://kanbanboardcareer.netlify.app/",
    githubUrl:
      "https://github.com/Davidaniekan/DAVANI25160_PTO2503_A_David-Aniekan_JSLPP",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
  {
    id: 2,
    title: "Podcast Stream App",
    description:
      "A clean and modern podcast streaming platform with category filtering and smooth UI animations.",
    imageUrl: "/src/assets/podcastApp.png",
    liveUrl: "https://podcastappstream.netlify.app/",
    githubUrl:
      "https://github.com/Davidaniekan/DAVANI25160_PTO2503_A_David-Aniekan_DJS01",
    tech: ["HTML", "CSS", "JavaScript", "React", "Responsive UI"],
  },
];

/**
 * Card component to display a single project.
 *
 * @param {Object} props
 * @param {{id: number, title: string, description: string, imageUrl: string, liveUrl: string, githubUrl: string, tech: string[]}} props.project
 * @returns {JSX.Element} Project card UI element
 */
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="live-link"
          >
            Live View
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * ProjectsSection component displays a portfolio of projects in a grid layout.
 *
 * @component
 * @example
 * return (
 *   <ProjectsSection />
 * )
 * @returns {JSX.Element} Projects section with all project cards
 */
const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
