import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Skills />

      <Learning />

      <Projects />

      <Experience />

      <Education />

      <Certifications />

      <Profiles />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;