import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      <section id="call-to-action" className="call-to-action">
        <div className="container">
          <div className="call-to-action__content">
            <h1>Let's Collab</h1>
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
