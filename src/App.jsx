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

function App() {
  return (
    <>
      <Title/>
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
  );
}

export default App;
