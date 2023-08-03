import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <div className="hero-content__text__title">
                <h3>Hi, I'm...</h3>
                <h1>
                  Fabio Miguel <span>and I</span>
                </h1>
              </div>

              <span className="hero-content__text__roles">
                <i class="fa-solid fa-code"></i>
                <TypewriterComponent
                  className="typewriter-text"
                  options={{
                    strings: [
                      "am a Web Developer.",
                      "turn concepts into Web Apps.",
                      "help startups launch their products.",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                  }}
                />
                <i class="fa-solid fa-code"></i>
              </span>
              <div className="hero-content__text__location">
                <i class="fa-solid fa-location-dot"></i>
                <h4>London</h4>
              </div>
            </div>
            <div className="hero-content__tech">
              <h4>Tech | </h4>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-sass"></i>
              <i class="fa-brands fa-shopify"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
