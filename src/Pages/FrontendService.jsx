import Footer from "../components/Footer";
import shopifyImgGrey from "../images/services/greyIcons/shopifyImgGrey.png";
import sanityImgGrey from "../images/services/greyIcons/sanityImgGrey.png";
import reactImgGrey from "../images/services/greyIcons/reactImgGrey.png";
import cssImgGrey from "../images/services/greyIcons/cssImgGrey.png";
import htmlImgGrey from "../images/services/greyIcons/htmlImgGrey.png";
import javascriptImgGrey from "../images/services/greyIcons/javascriptImgGrey.png";
import remixImgGrey from "../images/services/greyIcons/remixImgGrey.png";
import { Link } from "react-router-dom";

const FrontendService = () => {
  return (
    <>
      <section id="frontend" className="frontend">
        <div className="container">
          <div className="frontend-content">
            <div className="frontend-col-left">
              <div className="frontend-header">
                <h2>Frontend FLEX Pack</h2>
              </div>
              <div className="frontend-pack-description">
                <h4>ABOUT THIS SERVICE</h4>
                <p>
                  The frontend only pack is a flexible service I provide. It's
                  tailored to meet your design requirements however big or
                  small. I will implement the user interface (UI) design.
                  Whether this is coding the entire design from scratch or I go
                  into the platform you are using and customise the design to
                  your needs with custom code.
                </p>

                <p>
                  I can integrate custom functionality such as handeling forms,
                  newsletters, animations etc. It all depends on your needs and
                  what you want the user experience to be. We will discuss your
                  needs, I provide a timeframe and we get to work. Of course,
                  The timeframe depends on the complexity of the task and the
                  amount of tasks. It may be only a half-day, a couple days or a
                  week or so. Again, it all depends what you want. The time and
                  fixed cost will be agreed before the project starts.
                </p>

                <p>
                  Entrepreneurs want their business to have a bespoke touch
                  rather than the typical template wesbite. A memorable website
                  is one with a unique design and user experience (UX). That's
                  were I come in to help implement that UI/UX.
                </p>

                <h4>THE PROCESS</h4>
                <ul>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>
                    1-1 Call
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>
                    Creative Direction &#91;
                    <span>
                      collaborate with a professional designer available
                    </span>
                    &#93;
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Agreed Timeframe &
                    fixed cost
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Regular & relevant
                    progress updates
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Completion & handover
                  </li>
                </ul>
              </div>

              {/* <div className="frontend-call-to-action-content">
                <h2>Let's Collaborate</h2>
                <a href="mailto:info@fabiomiguel.com">WORK WITH ME</a>
              </div> */}

              <div className="frontend-more-services-content">
                <h4>MORE SERVICES</h4>
                <article className="frontend-more-service">
                  <div className="frontend-more-service-info">
                    <h3>
                      Frontend + CMS &#91; Headless CMS{" "}
                      <span>W/ Shopify, Strapi etc</span> &#93;
                    </h3>
                    <div className="frontend-more-service-icons">
                      <img
                        className="remix-img-more-services-frontend"
                        src={remixImgGrey}
                        alt="remix-icon"
                      />
                      <img
                        className="react-img-more-services-frontend"
                        src={reactImgGrey}
                        alt="react-icon"
                      />
                      <img
                        className="javascript-img-more-services-frontend"
                        src={javascriptImgGrey}
                        alt="javascript-icon"
                      />
                      <img
                        className="html-img-more-services-frontend"
                        src={htmlImgGrey}
                        alt="html-icon"
                      />
                      <img
                        className="css-img-more-services-frontend"
                        src={cssImgGrey}
                        alt="css-icon"
                      />

                      <img
                        className="shopify-img-more-services-frontend"
                        src={shopifyImgGrey}
                        alt="shopify-icon"
                      />
                      <img
                        className="shopify-img-more-services-frontend"
                        src={sanityImgGrey}
                        alt="sanity-icon"
                      />
                    </div>
                  </div>
                  <div className="frontend-more-service-btn-container">
                    <Link smooth to="/fullstack">
                      VIEW SERVICE
                    </Link>
                  </div>
                </article>
              </div>
            </div>
            {/* right page column */}
            <div className="frontend-col-right">
              <div className="frontend-info-container">
                <div className="frontend-center-info-container">
                  <div className="frontend-center-info">
                    <p>This is a flat rate service</p>
                    <div className="frontend-contact-me-btn">
                      <a href="mailto:info@fabiomiguel.com">CONTACT ME</a>
                    </div>
                  </div>
                </div>
                <h4>Service Details</h4>
                <p>
                  <i class="fa-regular fa-clock"></i>
                  Task-dependent
                </p>
                <h4>Skills</h4>
                <p>
                  <i class="fa-solid fa-computer-mouse"></i>Frontend Web
                  Development
                </p>
                <h4>Tech</h4>
                <div className="frontend-service-icons">
                  <div className="frontend-tech-container">
                    <img
                      className="react-img-frontend-service"
                      src={reactImgGrey}
                      alt="react-icon"
                    />
                    <p>React</p>
                  </div>
                  <div className="frontend-tech-container">
                    <img
                      className="javascript-img-frontend-service"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <p>Javascript</p>
                  </div>
                  <div className="frontend-tech-container">
                    <img
                      className="html-img-frontend-service"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div className="frontend-tech-container">
                    <img
                      className="css-img-frontend-service"
                      src={cssImgGrey}
                      alt="css-icon"
                    />
                    <p>CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default FrontendService;
