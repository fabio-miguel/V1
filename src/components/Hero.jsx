const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content-cols">
            <div className="hero-content">
              <div className="hero-content__text">
                <div className="hero-content__text__title">
                  <h1>FABIO MIGUEL</h1>
                  <h2>Creative Web Engineer</h2>
                  <h2>
                    Specialising in Javascript, React, RemixJS, Shopify & API
                    CMS systems
                  </h2>
                  <h2 className="current-availability">
                    Currently accepting 1 project starting Early Q4
                  </h2>
                </div>
              </div>
            </div>

            <div className="hero-content-right">
              <div className="quotes">
                <div className="quotes-single quote-cyan">
                  <p>
                    would code for a lifetime supply of chocolate{" "}
                    <span>
                      <i class="fa-solid fa-cookie"></i>
                    </span>
                  </p>
                </div>
                <div className="quotes-single quote-purple">
                  <p>
                    legend has it that I invented the internet{" "}
                    <span>
                      <i class="fa-solid fa-hat-wizard"></i>
                    </span>
                  </p>
                </div>
                <div className="quotes-single quote-green">
                  <p>
                    would give your dog all my attention{" "}
                    <span>
                      <i class="fa-solid fa-dog"></i>
                    </span>
                  </p>
                </div>
                <div className="quotes-single quote-orange">
                  <p>
                    my obsession with organisation is out of hand{" "}
                    <span>
                      <i class="fa-solid fa-folder"></i>
                    </span>
                  </p>
                </div>
                <div className="quotes-single quote-pink">
                  <p>
                    fantasy premier league is taken very seriosly{" "}
                    <span>
                      <i class="fa-solid fa-futbol"></i>
                    </span>
                  </p>
                </div>
                <div className="quotes-single quote-yellow">
                  <p>
                    i've got a jar of dirt... because I have so many plants{" "}
                    <span>
                      <i class="fa-solid fa-jar"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
