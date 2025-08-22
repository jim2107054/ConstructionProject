import Home from "./components/frontend/Home";

import { Routes, Route } from "react-router-dom";
import About from "./components/frontend/About";
import Navbar from "./components/frontend/Navbar";
import Footer from "./components/frontend/Footer";
import Services from "./components/frontend/Services";
import Projects from "./components/frontend/Projects";
import ContactUs from "./components/frontend/ContactUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
