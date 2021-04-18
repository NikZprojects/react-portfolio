import "./App.css";
import { useRef } from "react";
import Header from "./components/0-Header";
import Name from "./components/1-Name";
import About from "./components/2-About";
import Projects from "./components/3-Projects";
import Contact from "./components/4-Contact";
import Footer from "./components/5-Footer";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
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
  );
}

export default App;
