import shopifyImgGrey from "../images/services/greyIcons/shopifyImgGrey.png";
import reactImgGrey from "../images/services/greyIcons/reactImgGrey.png";
import cssImgGrey from "../images/services/greyIcons/cssImgGrey.png";
import htmlImgGrey from "../images/services/greyIcons/htmlImgGrey.png";
import javascriptImgGrey from "../images/services/greyIcons/javascriptImgGrey.png";
import remixImgGrey from "../images/services/greyIcons/remixImgGrey.png";
import sassImgGrey from "../images/services/greyIcons/sassImgGrey.png";
import sanityImgGrey from "../images/services/greyIcons/sanityImgGrey.png";
import tailwindImgGrey2 from "../images/services/greyIcons/tailwindImgGrey2.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <div className="hero-content__text__title">
                <h1>FABIO MIGUEL</h1>
                <h2>Creative Web Engineer</h2>
                <h2>
                  Specialising in Javascript, React, RemixJS, Shopify & API CMS
                  systems
                </h2>
                <h2 className="current-availability">
                  Currently accepting 1 project starting Early Q4
                </h2>
              </div>
            </div>
            <div className="hero-content__tech">
              <div className="hero-content-service-icons">
                <h4>TECH| </h4>
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
                <img className="html-img" src={htmlImgGrey} alt="html-icon" />
                <img className="css-img" src={cssImgGrey} alt="css-icon" />
                <img className="sass-img" src={sassImgGrey} alt="sass-icon" />
                <img
                  className="tailwind-img"
                  src={tailwindImgGrey2}
                  alt="tailwind-icon"
                />
                <img
                  className="shopify-img"
                  src={shopifyImgGrey}
                  alt="shopify-icon"
                />

                <img
                  className="sanity-img"
                  src={sanityImgGrey}
                  alt="sanity-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
