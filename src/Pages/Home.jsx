import React, { useState, useEffect } from "react";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <About />
      <CallToAction />
      <Footer />

      {/* "Scroll To Top" button */}
      <ScrollToTopButton />
    </>
  );
};

export default Home;
