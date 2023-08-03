const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-contnet__form">
              <h2>Let's take this to your inbox</h2>
              <form
                target="_blank"
                action="https://formsubmit.co/your@email.com"
                method="POST"
              ></form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
