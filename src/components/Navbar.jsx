import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToggle } from "../components/ToggleContext";
import eye from "../images/navbar/eye.png";
import potara from "../images/navbar/potara_earring.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isToggled, toggle } = useToggle(); // Access the shared isToggled state
  const location = useLocation();

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Close the mobile navbar when the location changes (e.g., when clicking on a link)
    setNav(false);
  }, [location]);

  const isHomePage = location.pathname === "/"; // "/" is the home page path

  const handleColorToggle = () => {
    toggle();
    const root = document.documentElement;

    if (!isToggled) {
      // Change the variables to one set of colors with a transition
      root.style.setProperty("--background", "black");
      root.style.setProperty("--navbar", "black");
      root.style.setProperty("--border-section", "#f23895");
      root.style.setProperty("--header", "#f23895");
      root.style.setProperty("--sub-header", "#ffaed3");
      root.style.setProperty("--paragraph", "#ffaed3");
      root.style.setProperty("--button", "blue");
      root.style.setProperty("--button-text", "white");
      root.style.setProperty("--link", "yellow");
      root.style.setProperty("--card-background", "darkred");
      root.style.setProperty("--card-header", "pink");
      root.style.setProperty("--card-paragraph", "#61ff00");
      root.style.setProperty("--highlight", "green");
      root.style.setProperty("--secondary", "black");
      root.style.setProperty("--accents", "#f23895");
      root.style.setProperty("--hover-text", "cyan");
      // Add more variable updates as needed
    } else {
      // Change the variables to another set of colors with a transition
      root.style.setProperty("--background", "#f2f7f5");
      root.style.setProperty("--navbar", "#61ff00");
      root.style.setProperty("--border-section", "#61ff00");
      root.style.setProperty("--header", "black");
      root.style.setProperty("--sub-header", "black");
      root.style.setProperty("--paragraph", "black");
      root.style.setProperty("--button", "#f9bc60");
      root.style.setProperty("--button-text", "#fff");
      root.style.setProperty("--link", "#f9bc60");
      root.style.setProperty("--card-background", "#242629");
      root.style.setProperty("--card-header", "#fffffe");
      root.style.setProperty("--card-paragraph", "#61ff00");
      root.style.setProperty("--highlight", "black");
      root.style.setProperty("--secondary", "#61ff00");
      root.style.setProperty("--accents", "black");
      root.style.setProperty("--hover-text", "black");
      // Add more variable updates as needed
    }
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              {isHomePage ? (
                <Link smooth to="/#top" onClick={openNav}>
                  HOME
                </Link>
              ) : (
                <Link to="/" onClick={openNav}>
                  HOME
                </Link>
              )}
            </li>
            <li>
              <Link smooth to="/#projects" onClick={openNav}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link smooth to="/#services" onClick={openNav}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link smooth to="/#about" onClick={openNav}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link smooth to="/#contact" onClick={openNav}>
                LET'S WORK <i className="fa-regular fa-lightbulb"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className={`logo-container ${isToggled ? "pink-background" : ""}`}>
          {isHomePage ? (
            <Link smooth to="/#hero">
              <img src={eye} alt="fabio miguel eye logo" />
            </Link>
          ) : (
            <Link to="/">
              <img src={eye} alt="fabio miguel eye logo" />
            </Link>
          )}
        </div>

        <div className="color-mode-btn-container">
          <button className="color-mode-btn" onClick={handleColorToggle}>
            <img src={potara} alt="potara earring" />
            <p>SWITCH VIBE</p>
          </button>
        </div>

        <ul className="navbar-links">
          <li>
            <Link smooth to="/#projects">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link smooth to="/#services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link smooth to="/#about">
              ABOUT
            </Link>
          </li>
          <li>
            <a href="mailto:info@fabiomiguel.com">
              LET'S WORK <i className="fa-regular fa-lightbulb"></i>
            </a>
          </li>
        </ul>

        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
