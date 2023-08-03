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
                      <a href={url} target="_blank">
                        <img src={img} alt={name} />
                      </a>
                    </div>
                    <div className="project-text">
                      <h3>{`${name} ${projectType}`}</h3>
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
