import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import shopifyImgGrey from "../images/services/greyIcons/shopifyImgGrey.png";
import strapitextImgGrey from "../images/services/greyIcons/strapitextImgGrey.png";
import reactImgGrey from "../images/services/greyIcons/reactImgGrey.png";
import cssImgGrey from "../images/services/greyIcons/cssImgGrey.png";
import htmlImgGrey from "../images/services/greyIcons/htmlImgGrey.png";
import javascriptImgGrey from "../images/services/greyIcons/javascriptImgGrey.png";
import remixImgGrey from "../images/services/greyIcons/remixImgGrey.png";
import sassImgGrey from "../images/services/greyIcons/sassImgGrey.png";
import { Link } from "react-router-dom";

const FullStackService = () => {
  return (
    <>
      <section id="fullstack" className="fullstack">
        <div className="container">
          <div className="fullstack-content">
            <div className="col-left">
              <div className="header">
                <h2>Full-Stack Pack</h2>
              </div>
              <div className="pack-description">
                <h4>ABOUT THIS SERVICE</h4>
                <p>
                  I will create a full stack application where the user
                  interface is created + connected to end-points where carts,
                  payments, inventory etc can be handled and inventory managed.
                  This service is all about creating a complete application,
                  from the ground up, that can give you full autonomy beyond
                  project completion.
                </p>

                <p>
                  At the end of the project, you will have a fully built ready
                  website with all your products and services, blogs and so on,
                  which you will be able to add/update as you wish. Whether it's
                  a storefront, gallery, portfolio, blog or something else I
                  will code it into existence.
                </p>

                <p>
                  I help startups launch their web presence with a strong brand
                  identity. The website is a beskpoke design to seperate you
                  from the typical blueprint pages that populate the web. I am
                  focused on building beautiful user interfaces and user
                  experiences with beautiful code. It's all about the details.
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
              <div className="call-to-action-content">
                <h2>Let's Collaborate</h2>
                <a href="mailto:info@fabiomiguel.com">WORK WITH ME</a>
              </div>
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
                      <img
                        className="sass-img-more-services"
                        src={sassImgGrey}
                        alt="sass-icon"
                      />
                    </div>
                  </div>
                  <div className="more-service-btn-container">
                    <Link smooth to="/frontend#frontend">
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
                  <i class="fa-solid fa-computer-mouse"></i>Backend
                  Functionality
                </p>
                <h4>Tech</h4>
                <div className="fullstack-service-icons">
                  <div className="tech-container">
                    <img
                      className="remix-img-fullstack-service"
                      src={remixImgGrey}
                      alt="remix-icon"
                    />
                    <p>Remix</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="react-img-fullstack-service"
                      src={reactImgGrey}
                      alt="react-icon"
                    />
                    <p>React</p>
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
                  <div className="tech-container">
                    <img
                      className="sass-img-fullstack-service"
                      src={sassImgGrey}
                      alt="sass-icon"
                    />
                    <p>Sass</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="shopify-img-fullstack-service"
                      src={shopifyImgGrey}
                      alt="shopify-icon"
                    />
                    <p>Shopify</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="strapi-img-fullstack-service"
                      src={strapitextImgGrey}
                      alt="strapi-icon"
                    />
                    <p>Strapi</p>
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
