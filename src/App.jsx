import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Executive from "./pages/Executive";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>

      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/achievements"
          element={
            <MainLayout>
              <Achievements />
            </MainLayout>
          }
        />

        <Route
          path="/executive"
          element={
            <MainLayout>
              <Executive />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

      </Routes>

    </Router>
  );
}