import hollywoodRockGif from "../images/services/hollywood_rock.gif";

const CallToAction = () => {
  return (
    <>
      <section id="call-to-action" className="call-to-action">
        <div className="container">
          <div className="call-to-action__content">
            <h1>WRITE ME A LETTER</h1>
            <h4>CODING VIBES...</h4>

            {/* <img
              className="services-gif-icon"
              src={hollywoodRockGif}
              alt="hollywood_rock"
            /> */}
            <div className="vibe-contaier">
              <a
                href="https://www.youtube.com/watch?v=yhFpy9p_30o&ab_channel=WWECenaManiaTV"
                target="_blank"
                rel="noreferrer"
              >
                <h2>FABIO MIGUEL</h2>
              </a>
            </div>

            <div className="description">
              <p>Let's take this to your inbox...</p>
            </div>

            <a className="work-with-me" href="mailto:info@fabiomiguel.com">
              WORK WITH ME
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default CallToAction;
