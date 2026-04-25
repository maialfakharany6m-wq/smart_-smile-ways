import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Executive from "./pages/Executive";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <Router>

      {/* ✅ GLOBAL (ONLY ONCE) */}
      <Cursor />
      <Navbar />

      {/* ✅ PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/executive" element={<Executive />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ✅ FOOTER ONCE */}
      <Footer />

    </Router>
  );
}