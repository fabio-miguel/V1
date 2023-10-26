import shopifyImgGrey from "../images/services/greyIcons/shopifyImgGrey.png";
import reactImgGrey from "../images/services/greyIcons/reactImgGrey.png";
import cssImgGrey from "../images/services/greyIcons/cssImgGrey.png";
import htmlImgGrey from "../images/services/greyIcons/htmlImgGrey.png";
import javascriptImgGrey from "../images/services/greyIcons/javascriptImgGrey.png";
import remixImgGrey from "../images/services/greyIcons/remixImgGrey.png";
import sassImgGrey from "../images/services/greyIcons/sassImgGrey.png";
import tailwindImgGrey from "../images/services/greyIcons/tailwindImgGrey.png";
import sanityImgGrey from "../images/services/greyIcons/sanityImgGrey.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="services-content">
            <div className="services-content__title">
              <i class="fa-regular fa-keyboard"></i>
              <h2>SERVICES</h2>
            </div>
            <div className="services-content__list">
              <article className="service">
                <div className="service-info">
                  <h3>Frontend FLEX</h3>

                  <div className="service-icons">
                    <h4>Tech Used | </h4>
                    <img
                      className="react-img"
                      src={reactImgGrey}
                      alt="react-icon"
                    />
                    <img
                      className="javascript-img"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <img
                      className="html-img"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <img className="css-img" src={cssImgGrey} alt="css-icon" />
                    <img
                      className="sass-img"
                      src={sassImgGrey}
                      alt="sass-icon"
                    />
                  </div>
                </div>
                <div className="service-btn-container">
                  <Link smooth to="/frontend">
                    VIEW SERVICE
                  </Link>
                </div>
              </article>

              <article className="service">
                <div className="service-info">
                  <h3>Full-Stack Pack</h3>
                  <h4>
                    Frontend + CMS &#91; Headless CMS{" "}
                    <span>W/ Shopify, Sanity etc</span> &#93;
                  </h4>
                  <div className="service-icons">
                    <h4>Tech Used | </h4>
                    <img
                      className="remix-img"
                      src={remixImgGrey}
                      alt="remix-icon"
                    />
                    <img
                      className="react-img"
                      src={reactImgGrey}
                      alt="react-icon"
                    />
                    <img
                      className="javascript-img"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <img
                      className="html-img"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <img className="css-img" src={cssImgGrey} alt="css-icon" />
                    <img
                      className="sass-img"
                      src={tailwindImgGrey}
                      alt="tailwind-icon"
                    />
                    <h4> + </h4>
                    <img
                      className="shopify-img"
                      src={shopifyImgGrey}
                      alt="shopify-icon"
                    />
                    <img
                      className="shopify-img"
                      src={sanityImgGrey}
                      alt="sanity-icon"
                    />
                  </div>
                </div>
                <div className="service-btn-container">
                  <Link smooth to="/fullstack">
                    VIEW SERVICE
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
