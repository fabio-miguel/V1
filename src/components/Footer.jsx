import React, { useEffect, useState } from "react";
import tripleHDXGreen from "../images/contact/triple_h_dx_green_cut_out.png";
import { useLocation } from "react-router-dom";

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

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            {location.pathname === homePagePath && (
              <img
                className="triple-h-footer-img"
                src={tripleHDXGreen}
                alt=""
              />
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
