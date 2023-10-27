import hollywoodRockGif from "../images/services/hollywood_rock.gif";

const CallToAction = () => {
  return (
    <>
      <section id="call-to-action" className="call-to-action">
        <div className="container">
          <div className="call-to-action__content">
            <h1>WRITE ME A LETTER</h1>
            <h4>CODING VIBES...</h4>

            <img
              className="services-gif-icon"
              src={hollywoodRockGif}
              alt="hollywood_rock"
            />
            <div className="description">
              <p>Let's take this to your inbox...</p>
            </div>

            <a href="mailto:info@fabiomiguel.com">WORK WITH ME</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default CallToAction;
