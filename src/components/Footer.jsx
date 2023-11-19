import React, { useEffect, useState } from "react";
import mm from "../images/footer/mm.png";
import gokuBlack from "../images/contact/goku_black.png";
import { useLocation } from "react-router-dom";
import { useToggle } from "../components/ToggleContext";

const Footer = () => {
  // Get the current location
  const location = useLocation();

  // Define the path of the home page
  const homePagePath = "/";

  // State to hold the current year
  const [currentYear, setCurrentYear] = useState("");
  // Function to get the current year
  const getCurrentYear = () => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  };
  // Runs effect only once after the component mounts to get the current year
  useEffect(() => {
    getCurrentYear();
  }, []);

  const { isToggled } = useToggle();

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            {location.pathname === homePagePath && (
              <>
                <img
                  className={`mm-footer-img ${
                    isToggled ? "inactive-image" : "active-image"
                  }`}
                  src={mm}
                  alt="triple h dx"
                />
                <img
                  className={`goku-black-footer-img ${
                    isToggled ? "active-image" : "inactive-image"
                  }`}
                  src={gokuBlack}
                  alt="goku black"
                />
              </>
            )}
            <p>
              &copy;{currentYear} FABIO MIGUEL<span>.</span>
            </p>
            <p>Designed and built from scratch by Yours Truly</p>
            <h4>info@fabiomiguel.com</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
