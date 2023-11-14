import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import FrontendService from "./Pages/FrontendService";
import FullStackService from "./Pages/FullStackService";
import ShopifyThemeDevelopment from "./Pages/ShopifyThemeDevelopment";
import ScrollToTop from "./components/ScrollToTop";
import { ToggleProvider } from "./components/ToggleContext";

function App() {
  return (
    <>
      <ToggleProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<FrontendService />} />
          <Route
            path="/shopify-theme-development"
            element={<ShopifyThemeDevelopment />}
          />
          <Route path="/fullstack" element={<FullStackService />} />
        </Routes>
      </ToggleProvider>
    </>
  );
}

export default App;
