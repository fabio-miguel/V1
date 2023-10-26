import { PROJECTS_DATA } from "./ProjectsData";

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <div className="projects-content">
            <div className="projects-grid">
              {PROJECTS_DATA.map(({ id, name, img, url, projectType }) => {
                return (
                  <artcle key={id} className="project-card">
                    <div className="project-img">
                      <a href={url} target="_blank" rel="noreferrer">
                        <img src={img} alt={name} />
                        <div className="overlay"></div>
                      </a>
                    </div>
                    <div className="project-text">
                      <h3>{`${name}`}&nbsp;</h3>
                      <span>{`${projectType}`}</span>
                    </div>
                  </artcle>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
