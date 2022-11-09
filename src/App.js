import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState } from "react";
function App() {
  const [mobileNavOpen, setNav] = useState(false)
  const handleHamBurgClick = () => setNav(!mobileNavOpen)

  return (
    <div >
      <Navbar mobileNavOpen={mobileNavOpen} handleHamBurgClick={handleHamBurgClick} />
      <Home mobileNavOpen={mobileNavOpen} handleHamBurgClick={handleHamBurgClick} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
