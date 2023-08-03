import React, { useEffect, useState } from "react";

const Footer = () => {
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
