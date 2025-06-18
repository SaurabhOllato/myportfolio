import { useState } from "react";
import "./index.css";
import Hero from "./Hero";
import About from "./About";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Projects from "./Projects";
import LandingShowcase from "./LandingShowcase";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <LandingShowcase />
              <Contact />
            </>
          }
        />

        {/* Portfolio/Work Page */}
        <Route path="/work" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
