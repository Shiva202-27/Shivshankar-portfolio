import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto space-y-40">
      <Navbar />
      <Hero />
      <Skills />

      {/* EXPLICIT SPACER */}
      <div style={{ height: "160px" }} />

      <Projects />
      <Contact />
      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shivshankar Kasapnor
      </footer>
    </div>
  );
}
