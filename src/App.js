import "./App.css";
import Header from "./components/0-Header";
import Name from "./components/1-Name";
import About from "./components/2-About";
import Projects from "./components/3-Projects";
import Contact from "./components/4-Contact";
import Footer from "./components/5-Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
