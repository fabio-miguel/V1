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
            <div className="about-text-right">
              <p>
                I create things that live on the internet. I excel in creating &
                maintaining responsive websites that offer a smooth user
                experience. Simply, I'll take a concept & code it into creation.
                I'm specialisised in developing creative ecommerce stores with a
                focus on building brand identity and leveraging my knowledge of
                ecommerce prinicples.
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
