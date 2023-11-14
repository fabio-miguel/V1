import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import shopifyImgGrey from "../images/services/greyIcons/shopifyImgGrey.png";
import LiquidImgGrey from "../images/services/greyIcons/liquidshopifyImgGrey.png";
import cssImgGrey from "../images/services/greyIcons/cssImgGrey.png";
import htmlImgGrey from "../images/services/greyIcons/htmlImgGrey.png";
import javascriptImgGrey from "../images/services/greyIcons/javascriptImgGrey.png";
import reactImgGrey from "../images/services/greyIcons/reactImgGrey.png";

import { Link } from "react-router-dom";

const FullStackService = () => {
  return (
    <>
      <section id="fullstack" className="fullstack">
        <div className="container">
          <div className="fullstack-content">
            <div className="col-left">
              <div className="header">
                <h2>Shopify Theme Development</h2>
              </div>
              <div className="pack-description">
                <h4>ABOUT THIS SERVICE</h4>

                <p>
                  I build out an entire custom Shopify Website. I will create
                  any UI/UX you want using Liquid programming (Shopify's theme
                  templating language). It's that simple!
                </p>

                <p>
                  <strong>Why a Custom Shopify Theme?</strong> It's the simplest
                  and most cost-effective solution. Considered the traditional
                  approach where everything is centralised. You will have a
                  unique website that seperates your site from the typical
                  template theme sites. This solution is appropriate for most
                  ecommerce start-ups.
                  <Link to={"/fullstack"}>
                    The alternative is a headless solution which can be found
                    here.
                  </Link>
                </p>

                <p>
                  I help startups launch their web presence with a strong brand
                  identity. As ever, dependant on your goals and requirements I
                  will steer you towards the appropriate solution.
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
                    Fixed Cost
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Regular & Relevant
                    Progress Updates
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Completion & Handover
                  </li>
                </ul>
              </div>
              {/* call to action section */}
              {/* <div className="call-to-action-content">
                <h2>Let's Collaborate</h2>
                <a href="mailto:info@fabiomiguel.com">WORK WITH ME</a>
              </div> */}
              {/* more services section */}
              <div className="more-services-content">
                <h4>MORE SERVICES</h4>
                <article className="more-service">
                  <div className="more-service-info">
                    <h3>Frontend</h3>
                    <div className="more-service-icons">
                      <img
                        className="react-img-more-services"
                        src={reactImgGrey}
                        alt="react-icon"
                      />
                      <img
                        className="javascript-img-more-services"
                        src={javascriptImgGrey}
                        alt="javascript-icon"
                      />
                      <img
                        className="html-img-more-services"
                        src={htmlImgGrey}
                        alt="html-icon"
                      />
                      <img
                        className="css-img-more-services"
                        src={cssImgGrey}
                        alt="css-icon"
                      />
                    </div>
                  </div>
                  <div className="more-service-btn-container">
                    <Link smooth to="/frontend">
                      VIEW SERVICE
                    </Link>
                  </div>
                </article>
              </div>
            </div>
            {/* right page column */}
            <div className="col-right">
              <div className="info-container">
                <div className="center-info-container">
                  <div className="center-info">
                    <p>This is a flat rate service</p>
                    <div className="contact-me-btn">
                      <a href="mailto:info@fabiomiguel.com">CONTACT ME</a>
                    </div>
                  </div>
                </div>
                <h4>Service Details</h4>
                <p>
                  <i class="fa-regular fa-clock"></i>
                  Typically 4-6 weeks
                </p>
                <h4>Skills</h4>
                <p>
                  <i class="fa-solid fa-computer-mouse"></i>Frontend Web
                  Development
                </p>
                <p>
                  <i class="fa-solid fa-computer-mouse"></i>Shopify Expert
                  Development
                </p>
                <h4>Tech</h4>
                <div className="fullstack-service-icons">
                  <div className="tech-container">
                    <img
                      className="remix-img-fullstack-service"
                      src={shopifyImgGrey}
                      alt="remix-icon"
                    />
                    <p>Shopify</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="react-img-fullstack-service"
                      src={LiquidImgGrey}
                      alt="react-icon"
                    />
                    <p>Liquid</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="javascript-img-fullstack-service"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <p>Javascript</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="html-img-fullstack-service"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="css-img-fullstack-service"
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
        <ScrollToTopButton />
        <Footer />
      </section>
    </>
  );
};
export default FullStackService;
