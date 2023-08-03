import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import FrontendService from "./Pages/FrontendService";
import FullStackService from "./Pages/FullStackService";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<FrontendService />} />
        <Route path="/fullstack" element={<FullStackService />} />
      </Routes>
    </>
  );
}

export default App;
