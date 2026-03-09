import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import ArtGallery from "./components/ArtGallery";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);


  // ✅ You MUST return JSX
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
        {/* Header with scroll function */}
        <Header />

        {/* Dark Mode Toggle */}
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero"><Hero /></section>
                <section id="about"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="projects"><Projects /></section>
                <section id="certificates"><Certificates /></section>
                <section id="artgallery"><ArtGallery /></section>
                <section id="contact"><Contact /></section>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;