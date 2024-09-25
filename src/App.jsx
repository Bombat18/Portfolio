import "./App.css";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Title from "./Title";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Title />

      <Routes>
        {/* All sections on the same page */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <AboutUs />
              <Skill />
              <Education />
              <Project />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Not Found page for unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
