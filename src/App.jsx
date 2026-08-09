import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        text-gray-900
        antialiased
        selection:bg-violet-500
        selection:text-white
        scroll-smooth
      "
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Portfolio */}
      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}