import "../css/Portfolio.css";
import { useRef } from "react";
import Metadata from "../components/Portfolio/MetaData";
import Header from "../components/Portfolio/0-Header";
import Name from "../components/Portfolio/1-Name";
import About from "../components/Portfolio/2-About";
import Projects from "../components/Portfolio/3-Projects";
import Contact from "../components/Portfolio/4-Contact";
import Footer from "../components/Portfolio/5-Footer";

function Portfolio() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Metadata />
      <div className="Portfolio">
        <Header
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <div className="outerblock">
          <Name />
          <div ref={aboutRef}></div>
          <About />
          <div ref={projectsRef}></div>
          <Projects />
          <div ref={contactRef}></div>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
