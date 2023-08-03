import aboutFabioImg1 from "../images/about/fabio-img-1.png";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="about__header">
            <h2>
              ABOUT ME <span>In a Nutshell</span>
            </h2>
          </div>
          <div className="about__content">
            <div className="about__img__left">
              <img src={aboutFabioImg1} alt="Fabio Miguel" />
            </div>
            <div className="about-text-right">
              <p>
                Hello! My name is Fabio & I enjoy creating things that inhabit
                the internet. I am a practical & effective developer completing
                projects on schedule. I excel in creating & maintaining
                responsive websites that offer a smooth user experience. My
                speciality lies in building dynamic, interactive interfaces
                through writing clean & optimized code. Simply, I'll take a
                concept & code it into creation.
              </p>
              <div className="links-container">
                <div className="about-social-links">
                  <a
                    href="https://github.com/Fabio-miguel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-square-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fabio-miguel-fernandes-38073327b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
